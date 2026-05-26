---
title: "我把一台旧电脑折腾成 Hermes Agent 工作机：从 WSL、Telegram 到智谱 API 的完整踩坑教程"
date: "2026-04-15 12:00:00"
author: "达芬七｜Seven · Stanley Team"
platform: "X Articles"
description: "这不是那种“复制三条命令秒通”的教程，而是一篇把真实报错、错误判断、重装过程、Telegram 接入、模型额度坑，全都摊开讲清楚的实战记录。你如果也想拿一台旧笔记本跑 Hermes，这篇会替你省掉很多无效折腾。"
index_img: ""
source_url: "https://x.com/SuisPasDaVinci/articles/2044266137236434944"
tweet_url: ""
x_article_id: "2044266137236434944"
x_tweet_id: ""
categories:
  - AI与工具
tags:
  - AI工具
  - AI编程
  - 效率工具
published: false
---
<p class="x-source-link"><a href="https://x.com/SuisPasDaVinci/articles/2044266137236434944" target="_blank" rel="noopener noreferrer">在 X 阅读原文</a></p>


这不是那种“复制三条命令秒通”的教程，而是一篇把真实报错、错误判断、重装过程、Telegram 接入、模型额度坑，全都摊开讲清楚的实战记录。你如果也想拿一台旧笔记本跑 Hermes，这篇会替你省掉很多无效折腾。

适合人群：第一次折腾 WSL / Hermes / Telegram bot / 智谱官方 API 的人｜副标题：旧 ThinkPad 变 Telegram Agent 机：真实踩坑 + 完整避坑版

一开始我以为，最难的是“怎么装 Hermes”。后来我发现，真正难的是：你会不停遇到那种看上去像 A 的问题，实际上根因却是 B。比如 WSL 报错看起来像 Ubuntu 坏了，实际是 BIOS 没开虚拟化；Telegram 一直空响应看起来像 Hermes 坏了，最后竟然是模型额度被我打空了。

## 先说结论

<!-- more -->

这套东西能跑，而且旧电脑也完全能折腾出来。但如果你是第一次装，最容易踩的坑不是命令本身，而是三件事：BIOS 虚拟化没开、Hermes 的 provider 配置没对、模型额度用完时看起来特别像程序坏了。

## 我这次的环境

一台格式化过的旧 ThinkPad，Windows 10，WSL2 + Ubuntu，Hermes 接智谱官方 API，再把 Telegram bot 连上去。目标很简单：把这台旧机器变成一个能后台跑、手机上随时能聊的 Agent 机。

📷旧电脑配置其实够跑 WSL + Hermes 了，关键不是新不新，而是链路要理顺。

## 第一坑：WSL 装到一半报 0x80370102

这个错看着像 Ubuntu 没装好，实际上十有八九是虚拟化没生效。Windows 里装了 WSL 组件不代表就能跑，BIOS 里的 Intel Virtualization Technology 也得开。开完以后，再回 Windows 重新启动 Ubuntu，才会进入创建 UNIX 用户那一步。

## 第二坑：看起来装上了，其实还没初始化完

第一次打开 Ubuntu 时，如果流程被打断，可能会直接掉到 root shell。别慌，这不代表坏了，只是普通用户没配完。后来把默认用户设好，WSL 就正常了。

## 第三坑：Hermes 能跑，本地能聊，但 provider 认证死活过不去

一开始我以为是 Hermes 有问题，后来才发现是 API key 和 provider 的理解错了。智谱这边最好走 OpenAI-compatible / Custom Endpoint 这条，而不是瞎选 Anthropic。Base URL 也要填对。最关键的是：你复制进去的一定得是完整 key。还有一个很坑的边缘情况是，有些工具在验证 endpoint 时会更挑剔；如果你明明填的是官方地址，却一直验证失败或者模型列表拉不出来，可以试试在 Base URL 末尾再补一层 /chat/completions 测一次。

📷Hermes 选择 provider 时，别一上来就乱选，后面会影响接智谱的方式。

📷401 认证报错阶段，看起来像 Hermes 坏了，其实是 key / provider 配置没对。

📷正确填完 custom endpoint 后，Hermes 已经能验证 endpoint 并列出可用模型。

## 第四坑：Telegram 接上了，但机器人还在报错

这里最容易误判。很多时候 Telegram 其实已经连上，日志里也能看到收到消息、生成回复、准备发送回复。可聊天窗口里还残留着旧报错，看起来像一直没修好。排查时一定要看最新日志，不要只盯着聊天记录。

📷别让 Hermes 自己替你乱改配置，先学会自己手改 ~/.hermes/.env。

📷在 .env 里补 Telegram 相关配置，是接 bot 的关键步骤。

📷确认当前命令列表和 gateway 能力，知道自己在启动什么。

## 第五坑：更新 Hermes 可能把问题叠加

我后面手快跑了 update，结果又多出一层 import 错误。那不是最初的问题，而是更新过程中代码版本不一致带来的新问题。解决办法反而是保留 ~/.hermes 数据，只卸载代码，再干净重装。

📷看到 update 提示别手痒，刚跑通时更应该先稳定使用。

📷需要重装时，记得选 Keep data，别把 ~/.hermes 一起删了。

📷卸载完成，但配置和会话都被保留，这一步非常关键。

📷重装时 Telegram 已配置过，通常不需要重配。

📷后台服务安装这一步，决定以后是不是能开机常驻。

📷如果手滑按了 Ctrl+Z，只是挂起，不是彻底挂了。

📷WSL 里优先选 User service，更适合旧笔记本这种开发机。

📷Setup Complete 后，先本地 chat，再测 Telegram。

📷本地 chat 恢复正常，说明 Hermes 本体已经修好了。

📷确认后台只有一个 gateway 进程在跑，排除多进程打架。

## 第六坑：最像程序 bug 的，其实可能是余额归零

这次最魔幻的地方在这。白天 Telegram 一直空响应、重试、像抽风一样。折腾半天，最后发现根本原因之一是：glm-4.5-air 的资源包被我打空了。额度见底时，它表现出来的现象真的很像程序坏了。以后再遇到 Empty response、No content 这种问题，先查余额。

📷最后真凶之一：模型资源包打空，表现出来特别像程序 bug。

## 最后我怎么配通的

简单说就是：WSL2 正常跑起来 → Hermes 重装但保留 ~/.hermes → 智谱官方 API 走 custom / OpenAI-compatible → Telegram 用 gateway 后台服务跑起来 → 再换一个还有额度的模型兜底。到这一步，旧电脑就真的变成了我的 Agent 小主机。

📷本地 chat 跑通的那一刻，才算真正进入下一阶段。

## 如果你也想复刻：下面这段直接照着做

前面那些都是我真实踩过的坑。下面这段我重新整理成了“照着一步一步做就能跑通”的版本，把命令和每一步最容易翻车的恢复动作合在一起，不用你在教程里来回跳。

先记住总原则顺序一定是：WSL → Ubuntu → Hermes 本地 chat → API → Telegram → 后台服务。哪一步没通，就别急着加下一步。

## 一把过教程：从 0 到 Telegram 跑通

1. 先开 BIOS 虚拟化开机进 BIOS，确认 Intel Virtualization Technology 已启用。你如果在 Windows 里装 WSL 时遇到 0x80370102，十有八九就是这里没开。

2. Windows 管理员 PowerShell 安装 WSLwsl --install
跑完以后重启电脑。重启回来，打开 Ubuntu。第一次启动会让你创建 Linux 用户和密码。

3. 如果第一次启动 Ubuntu 掉进 root 或流程乱了，手动补普通用户adduser 你的用户名
usermod -aG sudo 你的用户名
exit
然后回到 PowerShell：ubuntu config --default-user 你的用户名
重新打开 Ubuntu，看到提示符变成 你的用户名@DESKTOP-xxx:~$，这一步才算正常。

4. 在 Ubuntu 里补基础环境sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl nano
nano 最好顺手装上，后面改 ~/.hermes/.env 很方便。

5. 安装 Hermescurl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc
装完先别急着 hermes update。刚跑通的时候，稳定比更新更重要。

6. 先验证 Hermes 本地是不是活的hermes version
hermes doctor
hermes
进去以后只发一句最简单的：hi
本地能正常回复，再做下一步。本地 chat 没通之前，别急着接 Telegram。

7. 配置智谱官方 APIProvider 走 OpenAI-compatible / Custom Endpoint，不是 Anthropic。Base URL 用智谱官方兼容地址：https://open.bigmodel.cn/api/paas/v4/
如果你明明填的是这个地址，但 endpoint 验证失败、模型列表为空，或者工具端老是说 base URL 不对，可以再试一次：https://open.bigmodel.cn/api/paas/v4/chat/completions
有些客户端对 endpoint 粒度更挑，这个补法能多覆盖一层边缘情况。模型先用你确认有额度的那个。别只看“已经买了资源包”，要看这个模型对应那一行还有没有可用余额。再提醒一句：智谱不同模型的资源包是分开的，别只看总余额，要逐行看你当前这个模型到底还有没有额度。这里我踩过一个很坑的点：智谱 key 不是随便抄表格里的半截字符串。一定要复制完整 key，别只填截断显示的那一小段。

8. 接 Telegram先去 Telegram 里找 @BotFather，创建一个 bot，拿到 bot token。再去找能查自己数字 ID 的机器人，比如 @userinfobot，拿到你自己的 Telegram 数字用户 ID。然后在 Ubuntu 终端里改配置：nano ~/.hermes/.env
在文件里加上：TELEGRAM_BOT_TOKEN=你的bot token
TELEGRAM_ALLOWED_USERS=你的Telegram数字ID
保存退出：Ctrl + O
回车
Ctrl + X

9. 先前台测试 Telegram 网关hermes gateway
然后去 Telegram 私聊你的 bot，只发一句：hi
先别发中文长句，先别发图片，先别发语音。先看最简单的文字消息能不能来回。

10. 如果 Telegram 不回，直接这样排查hermes gateway stop
hermes gateway start
hermes status
hermes logs | tail -n 80
日志里重点看四类东西：Connected to Telegram：说明 Telegram 接上了
inbound message：说明它收到了你的消息
response ready 和 Sending response：说明它已经生成并准备发回去
Empty response from model / No content：说明模型这边没给出有效内容

11. 最容易被误判的大坑：不是程序坏了，是模型额度没了我这次白天就遇到了 Telegram 空响应、模型不回、看起来像 Hermes 坏了。最后查出来，根本原因不是程序，是 glm-4.5-air 的额度被我自己用光了。所以以后你看到下面这种现象时：本地有时能回，Telegram 有时不回
Empty response from model
No fallback providers configured
日志不像彻底挂掉，但就是时好时坏
先去看资源包余额。别第一时间拆程序。

12. 确认一切正常后，再装成后台服务当你已经确认本地 chat 正常、Telegram 也能正常收发以后，再装后台服务：hermes gateway install
hermes gateway start
hermes status
如果安装过程里问你选哪种后台方式，WSL 这种环境优先选：User service
因为它最适合你这种旧笔记本 + WSL + 自己折腾的场景。

13. 如果你一手贱 update 后把 Hermes 搞炸了，最稳恢复法是重装但保留数据先备份：cp -r ~/.hermes ~/.hermes_backup
正式动手前，建议顺手先跑一下：hermes version
hermes doctor
因为 Hermes 迭代很快，半年后你再看这篇，界面和命令很可能已经变了。到时候如果你眼前的提示和文里差异很大，以官方文档和 hermes doctor 的结果为主。如果想再打一个压缩包，记得在家目录里打，不要在 /mnt/c/WINDOWS/system32 里打：cd ~
tar -czf hermes-backup.tar.gz .hermes
然后卸载：hermes uninstall
出现选项时，选：1) Keep data
这样会删代码，但保留 ~/.hermes 里的配置、会话、日志、memory。卸完以后重新安装：curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc
重装完先验证本地，再开 Telegram。不要一重装好就马上 update。

一句话复盘真正省时间的办法不是背更多命令，而是每走一步都只验证一个变量。先 WSL，后 Hermes 本地；先本地，后 Telegram；Telegram 报空响应时，先看模型余额。再补一句：开搞前先跑 hermes version 和 hermes doctor，本文基于我当时装到的版本写成，后面如果官方界面变了，以官方文档为主。

## 最后再给你一份最短命令清单

# 1. Windows 管理员 PowerShell
wsl --install

# 2. Ubuntu 里补环境
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl nano

# 3. 安装 Hermes
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc

# 4. 本地验证
hermes version
hermes doctor
hermes

# 5. 改 Telegram 配置
nano ~/.hermes/.env

# 6. 前台测试 Telegram
hermes gateway

# 7. 看状态和日志
hermes status
hermes logs | tail -n 80

# 8. 只有本地 chat + Telegram 前台都稳定后，再装后台
hermes gateway install
hermes gateway start

# 9. 如果 update 搞炸了，保留数据重装
cp -r ~/.hermes ~/.hermes_backup
hermes version
hermes doctor
hermes uninstall   # 选 1 Keep data
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc

## 踩坑清单：下次我会先检查什么

- WSL 报错先查 BIOS，不要先怀疑 Ubuntu 坏了。

- Hermes 本地 chat 没通之前，别急着接 Telegram。

- 更新能解决问题，也能制造新问题；刚跑通时先别更新。

- Telegram 旧报错不会自己消失，判断状态要看最新日志。

- 模型空响应不一定是程序 bug，可能只是资源包已经见底。

- 保留 ~/.hermes 很重要，里面有配置、会话、日志和记忆。

## 最后的建议

如果你也想搞一台“家里放着、手机随时能聊”的 Agent 机，旧电脑真的够用。你不需要先追最强配置，先把系统链路跑通、把日志看懂、把 provider 配对、把 Telegram 接上，这台机器就已经能帮你干很多活了。

我这次最大的体感是：搭 Agent 最浪费时间的，不是不会装，是一报错就猜错方向。所以我把这篇整理出来，就是想让后来的人少在同一个坑里转圈。

本文基于一次真实折腾过程整理。文中截图均来自作者自己的安装与排错过程，可作为复盘和避坑参考。
