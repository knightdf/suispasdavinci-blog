---
title: 润值计算器：测测你适不适合人生重启
date: 2026-05-21
type: page
description: 达芬七的润值计算器，从钱、时间、环境、关系和未来五笔账，粗暴测测你适不适合人生重启。
keywords: 润值计算器,润前体检,移民值不值,人生重启,海外生活适配度
banner_img:
banner_img_height: 0
---

{% raw %}
<section class="run-worth-page" data-run-worth>
  <div class="run-brand-row">
    <span>达芬七 · Stanly Team</span>
    <img src="/img/stanly-team.png" alt="Stanly Team Logo" />
  </div>

  <div class="run-hero">
    <div>
      <p class="eyebrow">润前体检系列 001</p>
      <h1>这逼移民移得值不值？</h1>
      <p>润不是信仰，也不是投胎。它只是一道成本题：钱、时间、环境、关系和未来，哪一笔你最扛不住。</p>
      <div class="run-hero-actions">
        <a class="btn primary" href="#run-worth-test">开始测试</a>
        <a class="btn quiet" href="#run-worth-method">看看怎么算的</a>
      </div>
    </div>
    <aside class="run-sample-card" aria-label="示例结果卡片">
      <span>达芬七出品 · Stanly Team</span>
      <strong>68</strong>
      <b>半只脚在门口</b>
      <em>另一只脚被现实拽住</em>
    </aside>
  </div>

  <div id="run-worth-test" class="run-tool">
    <div class="run-progress">
      <span data-step-label>第 1 / 5 步</span>
      <div><i data-step-bar></i></div>
    </div>

    <form class="run-form" data-run-form>
      <div data-question-stage></div>
      <div class="run-controls">
        <button type="button" class="btn quiet" data-prev>上一步</button>
        <button type="button" class="btn primary" data-next>下一步</button>
      </div>
    </form>

    <section class="run-result" data-result hidden>
      <div class="run-result-card" data-result-card>
        <div class="run-report-head">
          <span>我的润学体检报告 · 达芬七出品 · Stanly Team</span>
          <img src="/img/stanly-team.png" alt="Stanly Team Logo" data-team-logo />
        </div>
        <div class="run-result-main">
          <div class="run-score-box">
            <strong data-total-score>0</strong>
          </div>
          <div>
            <h2 data-result-title>半只脚在门口</h2>
            <p data-result-judge>另一只脚被现实拽住。</p>
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
            <strong>这逼移民移得值不值计算器</strong>
            <span>达芬七 @SuisPasDaVinci</span>
            <span>Stanly Team · v0.3 · 2026-05-22</span>
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
      <p class="run-note">这不是移民资格评估，也不是人生判决书。它只是把一件容易情绪化的事，拆成几笔更容易看清的账。</p>
    </section>
  </div>

  <section id="run-worth-method" class="run-method">
    <div>
      <p class="eyebrow">怎么算</p>
      <h2>五笔账，粗暴加总。</h2>
    </div>
    <div class="method-grid">
      <div><strong>钱</strong><p>你现在能不能存钱，换个国家后还能不能回血。</p></div>
      <div><strong>时间</strong><p>年龄、语言、职业迁移，决定你重启的摩擦成本。</p></div>
      <div><strong>环境</strong><p>你到底多在乎空气、教育、医疗、安全这些东西。</p></div>
      <div><strong>关系</strong><p>家人、社交、孤独感，往往比签证更折磨人。</p></div>
      <div><strong>未来</strong><p>你是在买选择权，还是只是在逃离眼前的不爽。</p></div>
    </div>
  </section>

  <section class="run-follow-strip">
    <div>
      <p class="eyebrow">继续看</p>
      <h2>达芬七 · Stanly Team</h2>
      <p>后面还会继续做润前体检、出海工具、海外生活决策这类小产品。</p>
    </div>
    <img src="/img/x-follow-qr.png" alt="关注达芬七 X 二维码" />
  </section>
</section>

<script>
(function () {
  const root = document.querySelector('[data-run-worth]');
  if (!root) return;

  const dimensions = [
    {
      key: 'money',
      name: '经济',
      title: '先算钱：你有没有回血能力？',
      questions: [
        {
          text: '你现在一年大概能存下多少钱？',
          options: [['基本月光，别问了', 0], ['0-5 万，能喘气', 1], ['5-15 万，有点缓冲', 3], ['15-30 万，回血不错', 4], ['30 万以上，弹药充足', 5]]
        },
        {
          text: '去目标国家后，你预期收入会怎么变？',
          options: [['基本重开，先从低收入来', 0], ['收入大砍，但能活', 1], ['短期下降，长期有机会', 3], ['大概能接上', 4], ['国外反而更吃香', 5]]
        },
        {
          text: '移民成本对你现在存款的杀伤力多大？',
          options: [['一把清空，还可能借钱', 0], ['会伤筋动骨', 1], ['痛，但不致命', 3], ['可控，留得下安全垫', 4], ['基本不影响生活', 5]]
        },
        {
          text: '你对生活质量下降的耐受度如何？',
          options: [['一点也不行，我要体面', 0], ['能忍几个月，不能太久', 2], ['愿意换两三年轻装上阵', 3], ['能吃苦，知道自己在换什么', 4], ['越重启越兴奋', 5]]
        }
      ]
    },
    {
      key: 'time',
      name: '时间',
      title: '再算时间：你这门手艺还能不能用？',
      questions: [
        {
          text: '你现在这门手艺，换个国家还能不能吃饭？',
          options: [['完全不能，过去基本重开', 0], ['能吃一点，但收入要砍半', 1], ['能接上，但要重新找入口', 3], ['基本无缝，换地方继续干', 4], ['国外反而更吃香', 5]]
        },
        {
          text: '你的语言能力够不够你处理真实生活？',
          options: [['点咖啡都紧张', 0], ['能活，但很累', 1], ['日常可以，工作吃力', 3], ['工作生活基本够用', 4], ['语言不是问题', 5]]
        },
        {
          text: '你现在的人生阶段，适合重启吗？',
          options: [['拖家带口，牵一发动全身', 0], ['负担不少，窗口很窄', 1], ['有压力，但还能动', 3], ['窗口不错，可以试', 4], ['轻装上阵，现在不动更亏', 5]]
        },
        {
          text: '你愿意接受多久的身份/职业不确定期？',
          options: [['三个月都不行', 0], ['半年已经很焦虑', 1], ['一年内可以忍', 3], ['两三年也能规划', 4], ['我本来就擅长打长期仗', 5]]
        }
      ]
    },
    {
      key: 'environment',
      name: '环境',
      title: '环境账：你真的愿意为它付代价吗？',
      questions: [
        {
          text: '空气、食品、安全这些东西，对你有多重要？',
          options: [['嘴上在乎，其实没那么在乎', 0], ['有点在乎，但不想多花钱', 1], ['会影响幸福感', 3], ['非常重要，愿意付代价', 4], ['这是核心原因', 5]]
        },
        {
          text: '如果目标国家效率慢、服务差、东西贵，你能不能忍？',
          options: [['不能，我会天天骂', 0], ['能忍一点，很容易破防', 1], ['知道有代价，可以接受', 3], ['能接受系统不一样', 4], ['我本来就不追求方便', 5]]
        },
        {
          text: '子女教育/下一代环境对你有多重要？',
          options: [['跟我关系不大', 0], ['重要，但不是刚需', 2], ['会影响决定', 3], ['很重要，可以为此让渡收入', 4], ['这是最大权重', 5]]
        },
        {
          text: '你更怕什么？',
          options: [['怕出去生活质量掉太多', 0], ['怕孤独和麻烦', 1], ['两边都怕，所以想算清楚', 3], ['更怕原地不动', 4], ['更怕十年后后悔没走', 5]]
        }
      ]
    },
    {
      key: 'relationship',
      name: '关系',
      title: '关系账：你能扛住孤独和拖拽吗？',
      questions: [
        {
          text: '你是社恐还是社牛？',
          options: [['重度社牛，没人陪会枯萎', 0], ['需要固定朋友圈', 1], ['有朋友更好，没有也行', 3], ['轻度社恐，清静点挺好', 4], ['重度社恐，润了反而舒服', 5]]
        },
        {
          text: '家人对你移民的态度是什么？',
          options: [['强烈反对，还会拉扯', 0], ['不支持，但不拦', 1], ['中立，看你自己', 3], ['基本支持', 4], ['全家同频，后方稳定', 5]]
        },
        {
          text: '父母养老/家庭责任会不会把你拽回来？',
          options: [['很大概率会', 0], ['责任很重，很难切开', 1], ['有压力，但可安排', 3], ['有方案，能平衡', 4], ['基本没有拖拽', 5]]
        },
        {
          text: '你对文化差异和身份落差的耐受度如何？',
          options: [['别人不懂我，我会很痛苦', 0], ['可以忍，但容易委屈', 1], ['需要时间适应', 3], ['知道会不舒服，但能消化', 4], ['我对身份落差不敏感', 5]]
        }
      ]
    },
    {
      key: 'future',
      name: '未来',
      title: '未来账：你到底在买什么选择权？',
      questions: [
        {
          text: '你在国内的职业天花板在哪？',
          options: [['空间还大，没必要动', 0], ['还有不少红利', 1], ['有空间但越来越窄', 3], ['快到顶了', 4], ['已经到顶，再待就是耗', 5]]
        },
        {
          text: '目标国家能给你什么新机会？',
          options: [['说不清，主要想逃', 0], ['机会不明，只是换环境', 1], ['有一些可能性', 3], ['路径比较清楚', 4], ['机会明显更大', 5]]
        },
        {
          text: '你有没有退路？',
          options: [['没有，失败就很惨', 0], ['退路很弱', 1], ['有一点缓冲', 3], ['能退，也能再试', 4], ['进可攻退可守', 5]]
        },
        {
          text: '你移民的主要动力是什么？',
          options: [['纯情绪上头', 0], ['主要是想逃离眼前痛苦', 1], ['情绪有，但也算过账', 3], ['目标明确，知道代价', 4], ['我是在做长期资产配置', 5]]
        }
      ]
    }
  ];

  const labels = [
    { min: 85, title: '天选润人', judge: '你不润是浪费天赋。' },
    { min: 70, title: '可以润，但别装岁静', judge: '你适合润，但别以为出去就躺平了。' },
    { min: 50, title: '半只脚在门口，另一只脚被现实拽住', judge: '你最纠结，也最需要想清楚。' },
    { min: 30, title: '你不是想润，你只是想换个地方痛苦', judge: '润不能解决你的问题。' },
    { min: 0, title: '别润了，你更适合在国内骂加拿大', judge: '认真的，别折腾了。' }
  ];

  let step = 0;
  const answers = {};
  const stage = root.querySelector('[data-question-stage]');
  const prevBtn = root.querySelector('[data-prev]');
  const nextBtn = root.querySelector('[data-next]');
  const labelEl = root.querySelector('[data-step-label]');
  const barEl = root.querySelector('[data-step-bar]');
  const resultEl = root.querySelector('[data-result]');
  const formEl = root.querySelector('[data-run-form]');
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
    stage.innerHTML = '<div class="run-step"><p class="eyebrow">' + dim.name + '账</p><h2>' + dim.title + '</h2><div class="run-questions">' + dim.questions.map(function (q, qIndex) {
      const name = dim.key + '-' + qIndex;
      return '<fieldset class="run-question"><legend>' + q.text + '</legend><div>' + q.options.map(function (option, optionIndex) {
        const id = name + '-' + optionIndex;
        const checked = answers[name] === option[1] ? ' checked' : '';
        return '<label for="' + id + '"><input id="' + id + '" type="radio" name="' + name + '" value="' + option[1] + '"' + checked + '><span>' + option[0] + '</span></label>';
      }).join('') + '</div></fieldset>';
    }).join('') + '</div></div>';
    prevBtn.disabled = step === 0;
    nextBtn.textContent = step === dimensions.length - 1 ? '看结果' : '下一步';
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
    if (!complete) {
      stage.querySelector('.run-step').classList.add('needs-answer');
    }
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
      labelColor: '#e1111d',
      gridColor: 'rgba(232, 220, 196, 0.7)',
      axisColor: 'rgba(232, 220, 196, 0.45)',
      fillColor: 'rgba(225, 17, 29, 0.72)',
      strokeColor: '#e1111d',
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
      ctx.fillText(item.name + '账', centerX + Math.cos(angle) * (radius + 48), centerY + Math.sin(angle) * (radius + 34));
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

    ctx.fillStyle = '#f8efd8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fffdf6';
    roundRect(ctx, 70, 70, 940, 1380, 26);
    ctx.fill();
    ctx.strokeStyle = '#111820';
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.fillStyle = '#e1111d';
    ctx.font = '900 32px Arial, sans-serif';
    ctx.fillText('我的润学体检报告 · 达芬七出品', 110, 135);

    ctx.fillStyle = '#e1111d';
    roundRect(ctx, 110, 180, 250, 180, 16);
    ctx.fill();
    ctx.strokeStyle = '#111820';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = '900 112px Arial, sans-serif';
    ctx.fillText(String(total), 235, 305);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#111820';
    ctx.font = '900 48px Arial, sans-serif';
    const titleEndY = wrapText(ctx, label.title, 410, 225, 520, 58);
    ctx.fillStyle = '#6b675f';
    ctx.font = '800 30px Arial, sans-serif';
    wrapText(ctx, label.judge, 410, Math.max(332, titleEndY + 18), 520, 42);

    ctx.fillStyle = '#111';
    roundRect(ctx, 110, 430, 860, 330, 18);
    ctx.fill();
    ctx.strokeStyle = '#e7dcc8';
    ctx.lineWidth = 4;
    ctx.stroke();
    drawRadarChart(ctx, scores, 150, 460, 780, 270, {
      labelColor: '#e1111d',
      gridColor: 'rgba(232, 220, 196, 0.85)',
      axisColor: 'rgba(232, 220, 196, 0.46)',
      fillColor: 'rgba(225, 17, 29, 0.86)',
      strokeColor: '#e1111d',
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
      ctx.strokeStyle = '#e7dcc8';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillStyle = '#111820';
      ctx.font = '900 27px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(item.name + '账', bx + boxW / 2, by + 38);
      ctx.font = '900 38px Arial, sans-serif';
      ctx.fillText(item.score + '/20', bx + boxW / 2, by + 82);
    });

    ctx.textAlign = 'left';
    ctx.fillStyle = '#6b675f';
    ctx.font = '900 38px Arial, sans-serif';
    wrapText(ctx, '你的' + weakest.name + '账最弱。移民不是看你赚过多少钱，是看你换环境以后还能不能持续回血。这一项只有 ' + weakest.score + '/20，是你现在最大的障碍。', 110, 1000, 840, 58);

    ctx.strokeStyle = '#e0d2ba';
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 12]);
    ctx.beginPath();
    ctx.moveTo(110, 1260);
    ctx.lineTo(720, 1260);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#7b756b';
    ctx.font = '800 28px Arial, sans-serif';
    ctx.fillText('这逼移民移得值不值计算器', 110, 1318);
    ctx.fillText('达芬七 @SuisPasDaVinci', 110, 1360);
    ctx.fillText('v0.3 · 2026-05-22', 110, 1402);

    drawImageContain(ctx, followQr, 780, 1228, 118, 118);
    ctx.save();
    ctx.globalAlpha = 0.58;
    drawImageContain(ctx, teamLogo, 735, 1362, 210, 48);
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
      return '<div><strong>' + item.name + '账</strong><span>' + item.score + '/20</span><i style="width:' + (item.score * 5) + '%"></i></div>';
    }).join('');
    weakCopyEl.textContent = '你的' + weakest.name + '账最弱。移民不是看你赚过多少钱，是看你换环境以后还能不能持续回血。这一项只有 ' + weakest.score + '/20，是你现在最大的障碍。';
    drawRadar(scores);
    resultEl.hidden = false;
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

    root.querySelector('[data-copy]').onclick = function () {
      const text = '我在达芬七的润值计算器测了 ' + total + ' 分：' + label.title + '。' + label.judge + ' 最弱维度：' + weakest.name + '账。 https://suispasdavinci.com/tools/run-worth/';
      navigator.clipboard.writeText(text).then(function () {
        root.querySelector('[data-copy]').textContent = '已复制';
      });
    };
    root.querySelector('[data-save]').onclick = function () {
      const poster = renderPoster(total, label, scores, weakest);
      const link = document.createElement('a');
      link.download = 'run-worth-' + total + '.png';
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
