---
title: 移民时机窗口测试
date: 2026-06-06
draft: true
description: 现在移民？3年后？5年后？测测你的最佳移民时机
---

# 移民时机窗口测试

移民不是"要不要"的问题，而是"什么时候"的问题。太早移民可能准备不足，太晚移民可能错过最佳年龄。测测你的最佳移民时机窗口。

<div id="app"></div>

<script>
(function() {
  const questions = [
    // 年龄与家庭 (4题)
    { id: 1, text: '你的年龄', category: '年龄家庭', options: ['18-25岁', '26-30岁', '31-35岁', '36-40岁', '40岁以上'], urgency: [2, 3, 4, 5, 5], expScore: [3, 4, 5, 4, 3] },
    { id: 2, text: '你的婚姻状况', category: '年龄家庭', options: ['单身', '恋爱中', '已婚无孩', '孩子0-6岁', '孩子7岁以上'], urgency: [2, 3, 3, 5, 4], complexity: [1, 2, 3, 4, 5] },
    { id: 3, text: '你父母的年龄和健康状况', category: '年龄家庭', options: ['50岁以下健康', '50-60岁健康', '60-70岁健康', '70岁以上或有病', '需要长期照顾'], urgency: [2, 3, 4, 5, 5], complexity: [1, 2, 3, 4, 5] },
    { id: 4, text: '家人对移民的态度', category: '年龄家庭', options: ['全力支持', '支持', '中立', '不太支持', '强烈反对'], readiness: [5, 4, 3, 2, 1] },
    
    // 职业与财务 (5题)
    { id: 5, text: '你的工作年限', category: '职业财务', options: ['1年以下', '1-3年', '3-5年', '5-10年', '10年以上'], expScore: [1, 2, 4, 5, 5], urgency: [2, 3, 4, 5, 4] },
    { id: 6, text: '你的存款情况', category: '职业财务', options: ['10万以下', '10-30万', '30-50万', '50-100万', '100万以上'], readiness: [1, 2, 3, 4, 5] },
    { id: 7, text: '你的月储蓄能力', category: '职业财务', options: ['月光', '1000-3000', '3000-8000', '8000-2万', '2万以上'], prepTime: [5, 4, 3, 2, 1] },
    { id: 8, text: '你现在的职业发展轨迹', category: '职业财务', options: ['快速上升', '稳步上升', '平稳', '遇到瓶颈', '走下坡'], urgency: [1, 2, 3, 4, 5] },
    { id: 9, text: '你在国内的职业天花板', category: '职业财务', options: ['还很远', '5年能到', '3年能到', '快到了', '已经到了'], urgency: [1, 2, 3, 4, 5] },
    
    // 能力准备 (5题)
    { id: 10, text: '你的英语水平', category: '能力准备', options: ['需要从零学', '初级', '中级', '高级', '接近母语'], readiness: [1, 2, 3, 4, 5], prepTime: [5, 4, 3, 2, 1] },
    { id: 11, text: '你对移民流程的了解程度', category: '能力准备', options: ['完全不懂', '略知一二', '有所了解', '比较清楚', '非常清楚'], readiness: [1, 2, 3, 4, 5] },
    { id: 12, text: '你对目标城市的了解', category: '能力准备', options: ['完全不了解', '看过一些资料', '做过功课', '去过短期', '住过一段时间'], readiness: [1, 2, 3, 4, 5] },
    { id: 13, text: '你的技能在加拿大的适用性', category: '能力准备', options: ['完全不适用', '需要重新学', '部分适用', '比较适用', '高度适用'], readiness: [1, 2, 3, 4, 5], urgency: [5, 4, 3, 2, 1] },
    { id: 14, text: '你的心理准备程度', category: '能力准备', options: ['没准备', '有点准备', '准备不错', '准备充分', '迫不及待'], readiness: [1, 2, 3, 4, 5] },
    
    // 外部环境 (4题)
    { id: 15, text: '当前的移民政策环境', category: '外部环境', options: ['很紧', '偏紧', '正常', '偏松', '很松'], urgency: [1, 2, 3, 4, 5] },
    { id: 16, text: '你所在行业的国内前景', category: '外部环境', options: ['蓬勃发展', '稳定', '不太乐观', '在走下坡', '已经凉了'], urgency: [1, 2, 3, 4, 5] },
    { id: 17, text: '你的职业在加拿大的需求度', category: '外部环境', options: ['几乎没需求', '需求少', '需求一般', '需求大', '急缺'], urgency: [1, 2, 3, 4, 5] },
    { id: 18, text: '你对国内发展的信心', category: '外部环境', options: ['很有信心', '比较有信心', '一般', '不太有', '完全没有'], urgency: [1, 2, 3, 4, 5] },
    
    // 个人意愿 (2题)
    { id: 19, text: '你想移民的紧迫程度', category: '个人意愿', options: ['只是想想', '有点想', '比较想', '很想', '马上就想'], urgency: [1, 2, 3, 4, 5] },
    { id: 20, text: '如果现在不能移民，你的心态', category: '个人意愿', options: ['无所谓', '能接受', '有点遗憾', '很失落', '不能接受'], urgency: [1, 2, 3, 4, 5] }
  ];

  const state = {
    currentStep: 0,
    answers: {},
    result: null
  };

  function calculateResult() {
    let urgencySum = 0, urgencyCount = 0;
    let readinessSum = 0, readinessCount = 0;
    let prepTimeSum = 0, prepTimeCount = 0;
    let complexitySum = 0, complexityCount = 0;

    questions.forEach(q => {
      const answer = state.answers[q.id];
      if (answer === undefined) return;

      if (q.urgency) { urgencySum += q.urgency[answer]; urgencyCount++; }
      if (q.readiness) { readinessSum += q.readiness[answer]; readinessCount++; }
      if (q.prepTime) { prepTimeSum += q.prepTime[answer]; prepTimeCount++; }
      if (q.complexity) { complexitySum += q.complexity[answer]; complexityCount++; }
    });

    const urgency = urgencyCount > 0 ? Math.round((urgencySum / urgencyCount / 5) * 100) : 50;
    const readiness = readinessCount > 0 ? Math.round((readinessSum / readinessCount / 5) * 100) : 50;
    const prepTime = prepTimeCount > 0 ? Math.round((prepTimeSum / prepTimeCount / 5) * 100) : 50;
    const complexity = complexityCount > 0 ? Math.round((complexitySum / complexityCount / 5) * 100) : 50;

    let timing, description, timeline, actions, risk;

    // 决策矩阵：紧迫度 vs 准备度
    if (readiness >= 75 && urgency >= 75) {
      timing = '🟢 立即行动';
      description = '你的条件已经成熟，时机窗口正在打开。年龄、家庭、财务、能力都已就位，外部环境也有利，再不行动就是浪费机会。';
      timeline = '0-6个月：启动申请流程';
      actions = [
        '立即开始准备材料（学历认证、语言考试、工作证明）',
        '咨询移民顾问，确定最优路径（EE、省提名、雇主担保）',
        '同步进行资金准备和职业规划',
        '如果有孩子，尽快决定是否随行'
      ];
      risk = '风险：拖延可能错过最佳年龄窗口或政策变化';
    } else if (readiness >= 60 && urgency >= 60) {
      timing = '🟡 1-2年内行动';
      description = '你基本具备移民条件，但还有几个短板需要补齐。好在时间窗口还算充裕，用1-2年时间集中突破薄弱环节，是最稳妥的策略。';
      timeline = '1-2年准备期 + 申请周期';
      actions = [
        '针对性提升薄弱项（通常是语言或资金）',
        '继续积累工作经验和存款',
        '开始了解移民流程和目标城市',
        '如果语言不够，马上开始雅思/思培备考'
      ];
      risk = '风险：准备期太长可能导致年龄超标或家庭变化';
    } else if (readiness >= 40 || urgency >= 70) {
      timing = '🟠 2-3年后行动';
      description = '你现在的条件还不够成熟，贸然行动可能导致失败。但你的紧迫感说明确实有移民需求，建议用2-3年时间系统性准备。';
      timeline = '2-3年准备期 + 申请周期';
      actions = [
        '制定详细的3年准备计划（语言、资金、技能）',
        '如果职业不匹配，考虑转行或考证',
        '大幅提升储蓄率，目标50-100万',
        '开始学英语，每天至少1小时',
        '多看移民真实案例，做好心理建设'
      ];
      risk = '风险：准备期过长可能失去动力或遇到家庭变化';
    } else {
      timing = '🔴 暂缓，5年后重新评估';
      description = '坦白说，你现在不适合移民。准备度不够，紧迫性也不高，说明你对移民还没想清楚。建议先在国内稳定发展3-5年，等条件成熟再说。';
      timeline = '先在国内发展5年';
      actions = [
        '不要急于移民，先把国内的事业做扎实',
        '积累资金和经验是首要任务',
        '从现在开始学英语，但不用太急',
        '多了解移民真实情况，想清楚为什么要移民',
        '如果5年后还想移民，那时条件会好很多'
      ];
      risk = '风险：如果5年后年龄过大（40+），移民难度会显著增加';
    }

    const dimensions = {
      '紧迫程度': urgency,
      '准备度': readiness,
      '复杂度': complexity,
      '准备时间': 100 - prepTime
    };

    return { timing, description, timeline, actions, risk, dimensions };
  }

  function drawQuadrant(canvas, urgency, readiness) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const centerX = w / 2;
    const centerY = h / 2;

    ctx.clearRect(0, 0, w, h);

    // 绘制四象限背景
    const quadrants = [
      { x: 0, y: 0, w: centerX, h: centerY, color: '#FEE2E2', label: '准备不足\n不够紧迫' },
      { x: centerX, y: 0, w: centerX, h: centerY, color: '#FEF3C7', label: '准备不足\n但很紧迫' },
      { x: 0, y: centerY, w: centerX, h: centerY, color: '#DBEAFE', label: '准备充分\n不够紧迫' },
      { x: centerX, y: centerY, w: centerX, h: centerY, color: '#D1FAE5', label: '准备充分\n且很紧迫' }
    ];

    quadrants.forEach(q => {
      ctx.fillStyle = q.color;
      ctx.fillRect(q.x, q.y, q.w, q.h);
      
      ctx.fillStyle = '#666';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      const lines = q.label.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, q.x + q.w/2, q.y + q.h/2 - 10 + i*16);
      });
    });

    // 绘制坐标轴
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(w, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, h);
    ctx.stroke();

    // 绘制轴标签
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('← 准备度低', centerX/2, h - 10);
    ctx.fillText('准备度高 →', centerX + centerX/2, h - 10);
    ctx.save();
    ctx.translate(15, centerY);
    ctx.rotate(-Math.PI/2);
    ctx.fillText('紧迫度高 ↑', 0, 0);
    ctx.fillText('↓ 紧迫度低', 0, 0);
    ctx.restore();

    // 绘制用户位置
    const x = (readiness / 100) * w;
    const y = ((100 - urgency) / 100) * h;
    
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#8B5CF6';
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#333';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('你', x, y + 4);
  }

  function render() {
    const app = document.getElementById('app');
    
    if (state.result === null) {
      const currentQ = questions[state.currentStep];
      const progress = Math.round(((state.currentStep + 1) / questions.length) * 100);
      
      app.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #f0f0f0; height: 8px; border-radius: 4px; margin-bottom: 20px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, #F59E0B, #EF4444); height: 100%; width: ${progress}%; transition: width 0.3s;"></div>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="color: #666; font-size: 14px; margin-bottom: 8px;">${currentQ.category}</div>
            <div style="font-size: 18px; font-weight: 600; color: #333;">${currentQ.text}</div>
            <div style="color: #999; font-size: 12px; margin-top: 8px;">问题 ${state.currentStep + 1} / ${questions.length}</div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${currentQ.options.map((opt, idx) => `
              <button 
                data-answer="${idx}"
                style="
                  padding: 16px 20px;
                  border: 2px solid ${state.answers[currentQ.id] === idx ? '#F59E0B' : '#e0e0e0'};
                  background: ${state.answers[currentQ.id] === idx ? '#FEF3C7' : 'white'};
                  border-radius: 12px;
                  cursor: pointer;
                  font-size: 15px;
                  text-align: left;
                  transition: all 0.2s;
                  color: #333;
                "
                onmouseover="this.style.borderColor='#F59E0B'; this.style.background='#FEF3C7';"
                onmouseout="if(${state.answers[currentQ.id] !== idx}) { this.style.borderColor='#e0e0e0'; this.style.background='white'; }"
              >
                ${opt}
              </button>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 30px;">
            <button 
              id="prevBtn"
              ${state.currentStep === 0 ? 'disabled' : ''}
              style="
                padding: 12px 24px;
                background: ${state.currentStep === 0 ? '#f0f0f0' : 'white'};
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                cursor: ${state.currentStep === 0 ? 'not-allowed' : 'pointer'};
                font-size: 14px;
                color: ${state.currentStep === 0 ? '#999' : '#333'};
              "
            >
              ← 上一题
            </button>
            
            <button 
              id="nextBtn"
              ${state.answers[currentQ.id] === undefined ? 'disabled' : ''}
              style="
                padding: 12px 24px;
                background: ${state.answers[currentQ.id] !== undefined ? '#F59E0B' : '#f0f0f0'};
                color: ${state.answers[currentQ.id] !== undefined ? 'white' : '#999'};
                border: none;
                border-radius: 8px;
                cursor: ${state.answers[currentQ.id] !== undefined ? 'pointer' : 'not-allowed'};
                font-size: 14px;
                font-weight: 600;
              "
            >
              ${state.currentStep === questions.length - 1 ? '查看结果' : '下一题 →'}
            </button>
          </div>
        </div>
      `;

      document.querySelectorAll('[data-answer]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          state.answers[currentQ.id] = parseInt(e.target.dataset.answer);
          render();
        });
      });

      const prevBtn = document.getElementById('prevBtn');
      if (prevBtn && state.currentStep > 0) {
        prevBtn.addEventListener('click', () => {
          state.currentStep--;
          render();
        });
      }

      const nextBtn = document.getElementById('nextBtn');
      if (nextBtn && state.answers[currentQ.id] !== undefined) {
        nextBtn.addEventListener('click', () => {
          if (state.currentStep < questions.length - 1) {
            state.currentStep++;
            render();
          } else {
            state.result = calculateResult();
            render();
          }
        });
      }
    } else {
      const { timing, description, timeline, actions, risk, dimensions } = state.result;
      
      app.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="font-size: 32px; margin-bottom: 16px;">${timing}</h2>
            <div style="font-size: 16px; color: #666; line-height: 1.8; max-width: 600px; margin: 0 auto;">${description}</div>
          </div>

          <canvas id="quadrantChart" width="400" height="400" style="display: block; margin: 0 auto 40px; max-width: 100%;"></canvas>

          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">⏰ 建议时间线</h3>
            <div style="font-size: 24px; font-weight: bold; color: #F59E0B; text-align: center; padding: 20px; background: #FEF3C7; border-radius: 12px;">
              ${timeline}
            </div>
          </div>

          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">📋 行动清单</h3>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #555;">
              ${actions.map(action => `<li>${action}</li>`).join('')}
            </ul>
          </div>

          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">📊 维度分析</h3>
            ${Object.entries(dimensions).map(([dim, score]) => `
              <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 600; color: #555;">${dim}</span>
                  <span style="font-weight: bold; color: #F59E0B;">${score}分</span>
                </div>
                <div style="background: #f0f0f0; height: 8px; border-radius: 4px; overflow: hidden;">
                  <div style="background: linear-gradient(90deg, #F59E0B, #EF4444); height: 100%; width: ${score}%; transition: width 0.5s;"></div>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="background: #FEE2E2; border: 2px solid #EF4444; border-radius: 16px; padding: 24px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #DC2626;">⚠️ 风险提示</h3>
            <div style="color: #991B1B; line-height: 1.8;">${risk}</div>
          </div>

          <div style="text-align: center;">
            <button 
              id="resetBtn"
              style="
                padding: 14px 32px;
                background: white;
                border: 2px solid #F59E0B;
                color: #F59E0B;
                border-radius: 8px;
                cursor: pointer;
                font-size: 15px;
                font-weight: 600;
              "
              onmouseover="this.style.background='#FEF3C7';"
              onmouseout="this.style.background='white';"
            >
              🔄 重新测试
            </button>
          </div>
        </div>
      `;

      const canvas = document.getElementById('quadrantChart');
      drawQuadrant(canvas, dimensions['紧迫程度'], dimensions['准备度']);

      document.getElementById('resetBtn').addEventListener('click', () => {
        state.currentStep = 0;
        state.answers = {};
        state.result = null;
        render();
      });
    }
  }

  render();
})();
</script>

<style>
body {
  background: #fafafa;
}
button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
</style>

