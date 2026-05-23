---
title: 回国幻觉浓度测试：测测你是不是想回到不存在的中国
date: 2026-05-23
type: page
description: 达芬七的回国幻觉浓度测试，测测你想回的是现实里的国内，还是脑子里那个已经不存在的平行宇宙。
keywords: 回国幻觉浓度测试,回国值不值,海外华人回流,反向重启,润后体检
banner_img:
banner_img_height: 0
---

{% raw %}
<section class="run-worth-page return-illusion-page" data-return-illusion>
  <div class="run-brand-row">
    <span>达芬七 · Stanly Team</span>
    <img src="/img/stanly-team.png" alt="Stanly Team Logo" />
  </div>

  <div class="run-hero">
    <div>
      <p class="eyebrow">润后体检系列 002</p>
      <h1>回国幻觉浓度测试</h1>
      <p>你不是想回国，你是想回到一个不存在的中国。先测测你回去以后，是主场作战，还是赛博渡劫。</p>
      <div class="run-hero-actions">
        <a class="btn primary" href="#return-illusion-test">测测我的幻觉浓度</a>
        <a class="btn quiet" href="#return-illusion-method">先看病灶</a>
      </div>
    </div>
    <aside class="run-sample-card" aria-label="示例结果卡片">
      <span>达芬七出品 · Stanly Team</span>
      <strong>61</strong>
      <b>机场循环播放型</b>
      <em>机票查了 37 次，行李一次没收</em>
    </aside>
  </div>

  <div id="return-illusion-test" class="run-tool">
    <div class="run-progress">
      <span data-step-label>第 1 / 5 步</span>
      <div><i data-step-bar></i></div>
    </div>

    <form class="run-form" data-return-form>
      <div data-question-stage></div>
      <div class="run-controls">
        <button type="button" class="btn quiet" data-prev>上一步</button>
        <button type="button" class="btn primary" data-next>下一步</button>
      </div>
    </form>

    <section class="run-result" data-result hidden>
      <div class="run-result-card" data-result-card>
        <div class="run-report-head">
          <span>我的回国精神状态报告 · 达芬七出品 · Stanly Team</span>
          <img src="/img/stanly-team.png" alt="Stanly Team Logo" data-team-logo />
        </div>
        <div class="run-result-main">
          <div class="run-score-box">
            <strong data-total-score>0</strong>
          </div>
          <div>
            <h2 data-result-title>机场循环播放型</h2>
            <p data-result-judge>海外待烦了，国内又怕了。</p>
          </div>
        </div>
        <div class="run-radar-frame">
          <div class="run-radar-wrap">
            <canvas width="760" height="360" data-radar></canvas>
          </div>
        </div>
        <div class="run-breakdown" data-breakdown></div>
        <p class="run-weak-copy" data-weak-copy></p>
        <div class="run-report-footer">
          <div>
            <strong>回国幻觉浓度测试</strong>
            <span>达芬七 @SuisPasDaVinci</span>
            <span>Stanly Team · v0.1 · 2026-05-23</span>
          </div>
          <div class="run-qr-card">
            <img src="/img/x-follow-qr.png" alt="关注达芬七 X 二维码" data-follow-qr />
            <span>扫码关注 X</span>
          </div>
        </div>
        <div class="run-result-actions">
          <button type="button" class="btn primary" data-copy>复制结果文案</button>
          <button type="button" class="btn quiet" data-save>保存结果图</button>
        </div>
      </div>
      <p class="run-note">这不是回国建议，也不是爱国测验。它只测一件事：你想回的到底是现实，还是滤镜。</p>
    </section>
  </div>

  <section id="return-illusion-method" class="run-method">
    <div>
      <p class="eyebrow">怎么算</p>
      <h2>五个病灶，逐项照妖。</h2>
    </div>
    <div class="method-grid">
      <div><strong>幻觉</strong><p>你想回的是现在的国内，还是外卖奶茶滤镜里的平行宇宙。</p></div>
      <div><strong>现实</strong><p>你能不能重新适应速度、噪音、人情和规则。</p></div>
      <div><strong>职场</strong><p>你还能不能复健国内那套快、卷、灰度沟通。</p></div>
      <div><strong>家庭</strong><p>你回去是回到支持系统，还是回到大型拉扯现场。</p></div>
      <div><strong>退路</strong><p>回去发现不行时，你还有没有能力再次出来。</p></div>
    </div>
  </section>
</section>

<script>
(function () {
  const root = document.querySelector('[data-return-illusion]');
  if (!root) return;

  const dimensions = [
    {
      key: 'illusion',
      name: '幻觉',
      title: '幻觉浓度：你想回的是哪一版中国？',
      questions: [
        {
          text: '你说想回国的时候，脑子里出现的是哪一版中国？',
          options: [['我靠短视频理解中国', 0], ['外卖奶茶按摩版', 1], ['同学聚会吹牛版', 2], ['一线城市赚钱版', 3], ['现在真实生活版', 5]]
        },
        {
          text: '你有多久没在国内连续生活超过三个月了？',
          options: [['五年以上没长住', 0], ['三年没长住', 1], ['一年多没长住', 2], ['一年内待过', 4], ['刚回来过，很清醒', 5]]
        },
        {
          text: '你怀念国内，最怀念什么？',
          options: [['便宜服务和熟人捧场', 0], ['不用讲外语的松弛感', 2], ['父母朋友都在身边', 3], ['机会密度和生活效率', 4], ['优点缺点我都清楚', 5]]
        },
        {
          text: '如果回去发现不是你记忆里的样子，你会怎样？',
          options: [['当场心碎，觉得被骗', 0], ['嘴硬说还行，夜里破防', 1], ['失落，但能调整', 3], ['早有预期，慢慢校准', 4], ['我本来就是奔现实去的', 5]]
        }
      ]
    },
    {
      key: 'reality',
      name: '现实',
      title: '现实耐受：你还受得了国内的密度吗？',
      questions: [
        {
          text: '一天内经历地铁挤、饭局劝酒、甲方改需求、亲戚问收入，你会怎样？',
          options: [['直接破防', 0], ['忍一天，回家骂三小时', 1], ['嘴上没事，身体想逃', 2], ['能处理，但会累', 4], ['这不就是生活吗', 5]]
        },
        {
          text: '你现在还受得了人人都很急的节奏吗？',
          options: [['受不了，我连邮件秒回都烦', 0], ['短期兴奋，长期会崩', 1], ['看行业，看城市', 3], ['能适应', 4], ['我就是这种节奏养出来的', 5]]
        },
        {
          text: '你对规则灰度的耐受度怎么样？',
          options: [['不透明就焦虑', 0], ['可以忍，但很烦', 1], ['需要重新学习', 3], ['知道怎么打交道', 4], ['我本来就懂这套', 5]]
        },
        {
          text: '如果回国后便利很多，但边界感少很多，你怎么选？',
          options: [['不行，边界感是命', 0], ['便利会爽，但长期难受', 2], ['看代价', 3], ['可以交换', 4], ['我就喜欢生活有烟火气', 5]]
        }
      ]
    },
    {
      key: 'career',
      name: '职场',
      title: '职场复健：你还会不会说找死的话？',
      questions: [
        {
          text: '你还会不会说“这个不在我职责范围内”？',
          options: [['会，而且很自然', 0], ['会，但说完知道要出事', 1], ['心里想，嘴上不说', 3], ['已经学会绕着说', 4], ['我从来不说这种找死的话', 5]]
        },
        {
          text: '如果领导半夜发消息，你第一反应是什么？',
          options: [['报警', 0], ['已读不回', 1], ['明早再说', 2], ['先回一句收到', 4], ['秒回，并顺手写个方案', 5]]
        },
        {
          text: '国内行业还认不认你这套海外经验？',
          options: [['完全脱节，回来重开', 0], ['不太认，可能降级', 1], ['有点用，但要翻译成国内话', 3], ['比较认，能接上', 4], ['回去反而更值钱', 5]]
        },
        {
          text: '你能不能接受更快的协作、更碎的需求和更密的人情沟通？',
          options: [['不能，我会碎', 0], ['可以短期装一下', 1], ['要适应一阵', 3], ['能接受', 4], ['我甚至有点怀念', 5]]
        }
      ]
    },
    {
      key: 'family',
      name: '家庭',
      title: '家庭拉扯：你是回家，还是回战场？',
      questions: [
        {
          text: '你回国后，父母亲戚最可能对你说什么？',
          options: [['你在国外这么多年，怎么还这样', 0], ['孩子呢，房子呢，工作呢', 1], ['工作找好了吗', 2], ['回来就好，但会操心', 4], ['回来就好，别的不用管', 5]]
        },
        {
          text: '你能不能接受重新进入熟人社会？',
          options: [['不能，我已经习惯没人管', 0], ['可以，但必须保持距离', 2], ['看人', 3], ['能接受', 4], ['我就需要熟人社会续命', 5]]
        },
        {
          text: '父母养老和家庭责任会不会把你的计划拧成麻花？',
          options: [['已经拧成麻花了', 0], ['很可能会', 1], ['有压力，但能谈', 3], ['有安排', 4], ['家庭是支持系统，不是拖拽', 5]]
        },
        {
          text: '另一半或孩子对回国这件事是什么态度？',
          options: [['强烈反对', 0], ['嘴上可以，心里不稳', 1], ['还没谈清楚', 2], ['基本同频', 4], ['全家都知道自己在换什么', 5]]
        }
      ]
    },
    {
      key: 'exit',
      name: '退路',
      title: '退路完整度：回去不行，你还能再出来吗？',
      questions: [
        {
          text: '你回国以后，海外退路还在吗？',
          options: [['什么都没了，靠信念回去', 0], ['身份快没了', 1], ['身份在，但工作断了', 3], ['身份在，钱也够', 4], ['身份、工作、钱、人脉都还在', 5]]
        },
        {
          text: '如果回国一年后发现不行，你能不能再出来？',
          options: [['别问，问就是没退路', 0], ['基本不能', 1], ['技术上能，心理上难', 2], ['能，但会很伤', 4], ['能，成本可控', 5]]
        },
        {
          text: '你的钱够不够支撑一次反向试错？',
          options: [['不够，回去就是孤注一掷', 0], ['很紧，失败会很惨', 1], ['有一点缓冲', 3], ['能试一年', 4], ['试错资金很充足', 5]]
        },
        {
          text: '你回国的主要动力是什么？',
          options: [['海外太烦了，先逃再说', 0], ['主要是孤独和无聊', 1], ['有情绪，但也有现实理由', 3], ['路径清楚，代价也清楚', 4], ['我是在做主动选择，不是逃跑', 5]]
        }
      ]
    }
  ];

  const labels = [
    { min: 85, title: '回国主场作战型', judge: '你不是回国，你是回城补状态。问题不大，别装海归就行。' },
    { min: 70, title: '可回，但别开香槟', judge: '你适合回去试试，但先别把海外退路烧了。' },
    { min: 50, title: '机场循环播放型', judge: '海外待烦了，国内又怕了，机票查了一百遍，最后还是刷小红书。' },
    { min: 30, title: '叶公好龙型回国', judge: '你爱的不是国内，是你脑子里那个外卖便宜、朋友都在、爸妈健康的平行宇宙。' },
    { min: 0, title: '别回，回去也是赛博渡劫', judge: '你不是回国，你是准备把自己重新投进一个更熟悉的压力锅。' }
  ];

  let step = 0;
  const answers = {};
  const stage = root.querySelector('[data-question-stage]');
  const prevBtn = root.querySelector('[data-prev]');
  const nextBtn = root.querySelector('[data-next]');
  const labelEl = root.querySelector('[data-step-label]');
  const barEl = root.querySelector('[data-step-bar]');
  const resultEl = root.querySelector('[data-result]');
  const formEl = root.querySelector('[data-return-form]');
  const totalEl = root.querySelector('[data-total-score]');
  const titleEl = root.querySelector('[data-result-title]');
  const judgeEl = root.querySelector('[data-result-judge]');
  const breakdownEl = root.querySelector('[data-breakdown]');
  const weakCopyEl = root.querySelector('[data-weak-copy]');
  const radar = root.querySelector('[data-radar]');

  function renderStep() {
    const dim = dimensions[step];
    labelEl.textContent = '第 ' + (step + 1) + ' / ' + dimensions.length + ' 步';
    barEl.style.width = ((step + 1) / dimensions.length * 100) + '%';
    stage.innerHTML = '<div class="run-step"><p class="eyebrow">' + dim.name + '病灶</p><h2>' + dim.title + '</h2><div class="run-questions">' + dim.questions.map(function (q, qIndex) {
      const name = dim.key + '-' + qIndex;
      return '<fieldset class="run-question"><legend>' + q.text + '</legend><div>' + q.options.map(function (option, optionIndex) {
        const id = name + '-' + optionIndex;
        const checked = answers[name] === option[1] ? ' checked' : '';
        return '<label for="' + id + '"><input id="' + id + '" type="radio" name="' + name + '" value="' + option[1] + '"' + checked + '><span>' + option[0] + '</span></label>';
      }).join('') + '</div></fieldset>';
    }).join('') + '</div></div>';
    prevBtn.disabled = step === 0;
    nextBtn.textContent = step === dimensions.length - 1 ? '看精神状态' : '下一步';
  }

  function collectStep() {
    const dim = dimensions[step];
    let complete = true;
    dim.questions.forEach(function (_, qIndex) {
      const name = dim.key + '-' + qIndex;
      const checked = stage.querySelector('input[name="' + name + '"]:checked');
      if (!checked) complete = false;
      else answers[name] = Number(checked.value);
    });
    if (!complete) stage.querySelector('.run-step').classList.add('needs-answer');
    return complete;
  }

  function scoreDimension(dim) {
    return dim.questions.reduce(function (sum, _, qIndex) {
      return sum + (answers[dim.key + '-' + qIndex] || 0);
    }, 0);
  }

  function resultLabel(total) {
    return labels.find(function (item) { return total >= item.min; });
  }

  function drawRadar(scores) {
    const ctx = radar.getContext('2d');
    ctx.clearRect(0, 0, radar.width, radar.height);
    drawRadarChart(ctx, scores, 0, 0, radar.width, radar.height, {
      labelColor: '#ffcc33',
      gridColor: 'rgba(255, 204, 51, 0.55)',
      axisColor: 'rgba(255, 255, 255, 0.22)',
      fillColor: 'rgba(255, 204, 51, 0.62)',
      strokeColor: '#ffcc33',
      fontSize: 18
    });
  }

  function drawRadarChart(ctx, scores, x, y, width, height, options) {
    const count = scores.length;
    const centerX = x + width / 2;
    const centerY = y + height / 2 + 6;
    const radius = Math.min(width, height) * 0.31;
    ctx.save();
    ctx.lineWidth = 2;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '800 ' + (options.fontSize || 18) + 'px Arial, sans-serif';
    for (let ring = 1; ring <= 4; ring += 1) {
      ctx.beginPath();
      for (let i = 0; i < count; i += 1) {
        const angle = -Math.PI / 2 + i * Math.PI * 2 / count;
        const r = radius * ring / 4;
        const px = centerX + Math.cos(angle) * r;
        const py = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = options.gridColor;
      ctx.stroke();
    }
    scores.forEach(function (item, i) {
      const angle = -Math.PI / 2 + i * Math.PI * 2 / count;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
      ctx.strokeStyle = options.axisColor;
      ctx.stroke();
      ctx.fillStyle = options.labelColor;
      ctx.fillText(item.name, centerX + Math.cos(angle) * (radius + 48), centerY + Math.sin(angle) * (radius + 34));
    });
    ctx.beginPath();
    scores.forEach(function (item, i) {
      const angle = -Math.PI / 2 + i * Math.PI * 2 / count;
      const r = radius * item.score / 20;
      const px = centerX + Math.cos(angle) * r;
      const py = centerY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = options.fillColor;
    ctx.strokeStyle = options.strokeColor;
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function renderPoster(total, label, scores, weakest) {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1520;
    const ctx = canvas.getContext('2d');
    const teamLogo = root.querySelector('[data-team-logo]');
    const followQr = root.querySelector('[data-follow-qr]');
    ctx.fillStyle = '#16181c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff8e6';
    roundRect(ctx, 70, 70, 940, 1380, 26);
    ctx.fill();
    ctx.strokeStyle = '#111820';
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.fillStyle = '#111820';
    ctx.font = '900 32px Arial, sans-serif';
    ctx.fillText('我的回国精神状态报告 · 达芬七出品', 110, 135);
    ctx.fillStyle = '#ffcc33';
    roundRect(ctx, 110, 180, 250, 180, 16);
    ctx.fill();
    ctx.strokeStyle = '#111820';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.fillStyle = '#111820';
    ctx.textAlign = 'center';
    ctx.font = '900 112px Arial, sans-serif';
    ctx.fillText(String(total), 235, 305);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#111820';
    ctx.font = '900 48px Arial, sans-serif';
    const titleEndY = wrapText(ctx, label.title, 410, 225, 520, 58);
    ctx.fillStyle = '#5f5a50';
    ctx.font = '800 30px Arial, sans-serif';
    wrapText(ctx, label.judge, 410, Math.max(332, titleEndY + 18), 520, 42);
    ctx.fillStyle = '#111';
    roundRect(ctx, 110, 430, 860, 330, 18);
    ctx.fill();
    ctx.strokeStyle = '#e5d6b8';
    ctx.lineWidth = 4;
    ctx.stroke();
    drawRadarChart(ctx, scores, 150, 460, 780, 270, {
      labelColor: '#ffcc33',
      gridColor: 'rgba(255, 204, 51, 0.7)',
      axisColor: 'rgba(255, 255, 255, 0.25)',
      fillColor: 'rgba(255, 204, 51, 0.72)',
      strokeColor: '#ffcc33',
      fontSize: 22
    });
    scores.forEach(function (item, index) {
      const boxW = 154;
      const gap = 18;
      const bx = 110 + index * (boxW + gap);
      const by = 805;
      ctx.fillStyle = '#fff';
      roundRect(ctx, bx, by, boxW, 105, 12);
      ctx.fill();
      ctx.strokeStyle = '#e5d6b8';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillStyle = '#111820';
      ctx.font = '900 27px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(item.name, bx + boxW / 2, by + 38);
      ctx.font = '900 38px Arial, sans-serif';
      ctx.fillText(item.score + '/20', bx + boxW / 2, by + 82);
    });
    ctx.textAlign = 'left';
    ctx.fillStyle = '#5f5a50';
    ctx.font = '900 38px Arial, sans-serif';
    wrapText(ctx, '你的' + weakest.name + '病灶最弱。你不是不能回国，你是这块还没复健。先别拿机票当人生重启键，这一项只有 ' + weakest.score + '/20。', 110, 1000, 840, 58);
    ctx.strokeStyle = '#e0d2ba';
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 12]);
    ctx.beginPath();
    ctx.moveTo(110, 1260);
    ctx.lineTo(620, 1260);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#7b756b';
    ctx.font = '800 26px Arial, sans-serif';
    ctx.fillText('回国幻觉浓度测试', 110, 1320);
    ctx.fillText('达芬七 @SuisPasDaVinci', 110, 1360);
    ctx.fillText('v0.1 · 2026-05-23', 110, 1400);
    drawImageContain(ctx, followQr, 500, 1278, 118, 118);
    ctx.save();
    ctx.globalAlpha = 0.72;
    drawImageContain(ctx, teamLogo, 700, 1300, 250, 70);
    ctx.restore();
    return canvas;
  }

  function drawImageContain(ctx, image, x, y, width, height) {
    if (!image || !image.complete || !image.naturalWidth) return;
    const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawW = image.naturalWidth * scale;
    const drawH = image.naturalHeight * scale;
    ctx.drawImage(image, x + (width - drawW) / 2, y + (height - drawH) / 2, drawW, drawH);
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    let line = '';
    for (let i = 0; i < text.length; i += 1) {
      const test = line + text[i];
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, y);
        line = text[i];
        y += lineHeight;
      } else {
        line = test;
      }
    }
    ctx.fillText(line, x, y);
    return y;
  }

  function showResult() {
    const scores = dimensions.map(function (dim) {
      return { key: dim.key, name: dim.name, score: scoreDimension(dim) };
    });
    const total = scores.reduce(function (sum, item) { return sum + item.score; }, 0);
    const label = resultLabel(total);
    const weakest = scores.slice().sort(function (a, b) { return a.score - b.score; })[0];
    totalEl.textContent = total;
    titleEl.textContent = label.title;
    judgeEl.textContent = label.judge;
    breakdownEl.innerHTML = scores.map(function (item) {
      return '<div><strong>' + item.name + '</strong><span>' + item.score + '/20</span><i style="width:' + (item.score * 5) + '%"></i></div>';
    }).join('');
    weakCopyEl.textContent = '你的' + weakest.name + '病灶最弱。你不是不能回国，你是这块还没复健。先别拿机票当人生重启键，这一项只有 ' + weakest.score + '/20。';
    drawRadar(scores);
    resultEl.hidden = false;
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    root.querySelector('[data-copy]').onclick = function () {
      const text = '我在达芬七的回国幻觉浓度测试测了 ' + total + ' 分：' + label.title + '。' + label.judge + ' 最弱病灶：' + weakest.name + '。 https://suispasdavinci.com/tools/return-illusion/';
      navigator.clipboard.writeText(text).then(function () {
        root.querySelector('[data-copy]').textContent = '已复制';
      });
    };
    root.querySelector('[data-save]').onclick = function () {
      const poster = renderPoster(total, label, scores, weakest);
      const link = document.createElement('a');
      link.download = 'return-illusion-' + total + '.png';
      link.href = poster.toDataURL('image/png');
      link.click();
    };
  }

  prevBtn.addEventListener('click', function () {
    if (step > 0) {
      step -= 1;
      renderStep();
    }
  });
  nextBtn.addEventListener('click', function () {
    if (!collectStep()) return;
    if (step < dimensions.length - 1) {
      step += 1;
      renderStep();
    } else {
      showResult();
    }
  });
  formEl.addEventListener('change', function () {
    const stepEl = stage.querySelector('.run-step');
    if (stepEl) stepEl.classList.remove('needs-answer');
  });
  renderStep();
})();
</script>
{% endraw %}
