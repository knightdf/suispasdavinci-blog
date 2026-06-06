---
title: 移民后消费升降级测试
date: 2025-06-06
draft: true
description: 测测你移民后的生活质量会升级还是降级
---

# 移民后消费升降级测试

很多人移民前以为"发达国家生活质量肯定更好"，移民后才发现：工资是涨了，但生活质量反而下降了。测测你移民后会消费升级还是降级。

<div id="app"></div>

<script>
(function() {
  const questions = [
    // 国内生活水平 (5题)
    { id: 1, text: '你现在的月收入（人民币）', category: '国内水平', options: ['5000以下', '5000-1万', '1-2万', '2-3万', '3万以上'], baseline: [1, 2, 3, 4, 5] },
    { id: 2, text: '你现在的居住情况', category: '国内水平', options: ['合租', '整租一居', '整租两居', '自有住房', '独栋别墅'], baseline: [1, 2, 3, 4, 5] },
    { id: 3, text: '你的日常饮食水平', category: '国内水平', options: ['食堂/快餐', '自己做饭', '偶尔下馆子', '经常下馆子', '高档餐厅常客'], baseline: [1, 2, 3, 4, 5] },
    { id: 4, text: '你的出行方式', category: '国内水平', options: ['公交地铁', '共享单车+地铁', '偶尔打车', '经常打车', '有车代步'], baseline: [1, 2, 3, 4, 5] },
    { id: 5, text: '你的购物消费习惯', category: '国内水平', options: ['拼多多为主', '淘宝京东', '偶尔买大牌', '海淘轻奢', '奢侈品常客'], baseline: [1, 2, 3, 4, 5] },
    
    // 移民后收入预期 (5题)
    { id: 6, text: '你的职业在加拿大的年薪预期（税前CAD）', category: '移民预期', options: ['3万以下', '3-5万', '5-7万', '7-10万', '10万以上'], income: [1, 2, 3, 4, 5] },
    { id: 7, text: '你找到对口工作的可能性', category: '移民预期', options: ['几乎不可能', '比较困难', '50/50', '比较容易', '非常容易'], income: [0.5, 0.7, 1, 1.2, 1.5] },
    { id: 8, text: '你的家庭收入结构', category: '移民预期', options: ['只有我一人', '配偶打零工', '双职工', '双高收入', '加被动收入'], income: [1, 1.3, 1.8, 2.5, 3] },
    { id: 9, text: '你移民前的准备资金', category: '移民预期', options: ['10万以下', '10-30万', '30-50万', '50-100万', '100万以上'], buffer: [1, 2, 3, 4, 5] },
    { id: 10, text: '你对"前3年入不敷出"的准备', category: '移民预期', options: ['没有准备', '能撑1年', '能撑2年', '能撑3年', '财务自由'], buffer: [1, 2, 3, 4, 5] },
    
    // 消费习惯与预期 (5题)
    { id: 11, text: '你对外卖的依赖度', category: '消费习惯', options: ['天天点', '经常点', '偶尔点', '很少点', '从不点'], adaptation: [1, 2, 3, 4, 5] },
    { id: 12, text: '你的做饭能力', category: '消费习惯', options: ['完全不会', '会泡面', '能做家常菜', '厨艺不错', '美食博主级'], adaptation: [1, 2, 3, 4, 5] },
    { id: 13, text: '你对"自己剪草修房子"的接受度', category: '消费习惯', options: ['不能接受', '勉强接受', '可以尝试', '挺有意思', '享受DIY'], adaptation: [1, 2, 3, 4, 5] },
    { id: 14, text: '你对"二手市场淘货"的态度', category: '消费习惯', options: ['接受不了', '能接受大件', '无所谓', '喜欢淘宝', '热爱二手'], adaptation: [1, 2, 3, 4, 5] },
    { id: 15, text: '你对生活便利性的要求', category: '消费习惯', options: ['必须便利', '越方便越好', '还行', '能接受不便', '享受简单'], adaptation: [1, 2, 3, 4, 5] },
    
    // 心理预期 (5题)
    { id: 16, text: '你觉得移民后生活质量会', category: '心理预期', options: ['大幅提升', '小幅提升', '差不多', '可能下降', '肯定下降'], expectation: [5, 4, 3, 2, 1] },
    { id: 17, text: '你最看重的生活品质要素', category: '心理预期', options: ['美食娱乐', '购物便利', '居住空间', '自然环境', '时间自由'], priority: [1, 2, 3, 4, 5] },
    { id: 18, text: '你对"住大房子但外卖少"的权衡', category: '心理预期', options: ['要外卖', '难以选择', '看情况', '要大房子', '必须大房子'], priority: [1, 2, 3, 4, 5] },
    { id: 19, text: '你对"从服务享受者变成服务提供者"的准备', category: '心理预期', options: ['不能接受', '很难接受', '能接受', '没问题', '早就准备好'], mental: [1, 2, 3, 4, 5] },
    { id: 20, text: '你对"消费降级"的心理承受力', category: '心理预期', options: ['完全不行', '很难受', '能忍', '无所谓', '本来就想降'], mental: [1, 2, 3, 4, 5] }
  ];

  const state = {
    currentStep: 0,
    answers: {},
    result: null
  };

  function calculateResult() {
    let baselineScore = 0; // 国内生活水平
    let incomeMultiplier = 1; // 移民后收入能力
    let bufferScore = 0; // 缓冲资金
    let adaptationScore = 0; // 适应能力
    let mentalScore = 0; // 心理准备

    questions.forEach(q => {
      const answer = state.answers[q.id];
      if (answer === undefined) return;

      if (q.baseline) baselineScore += q.baseline[answer];
      if (q.income) incomeMultiplier *= q.income[answer];
      if (q.buffer) bufferScore += q.buffer[answer];
      if (q.adaptation) adaptationScore += q.adaptation[answer];
      if (q.mental) mentalScore += q.mental[answer];
    });

    // 国内基准 (5-25分)
    const domesticLevel = baselineScore;
    
    // 移民后实际购买力 (考虑收入和物价)
    // 加拿大物价大约是国内2-3倍，但工资也高
    const canadaPurchasingPower = Math.round(incomeMultiplier * 15); // 基准15分
    
    // 综合得分
    const changeScore = canadaPurchasingPower - domesticLevel;
    const adaptScore = (adaptationScore / 25) * 100;
    const prepScore = (mentalScore / 10) * 100;
    const bufferLevel = (bufferScore / 10) * 100;

    let level, description, advice, emoticon;
    
    if (changeScore >= 5) {
      level = '🟢 消费大幅升级';
      description = '恭喜！你移民后的生活质量会明显提升。你在国内的生活水平相对一般，但移民后有较强的赚钱能力，加上良好的适应能力，生活会越来越好。';
      advice = [
        '前3-6个月可能会有适应期，但整体向上',
        '建议保持储蓄习惯，别因为赚得多就大手大脚',
        '享受更大的居住空间和更好的自然环境',
        '多利用二手市场和costco，性价比极高'
      ];
      emoticon = '🎉';
    } else if (changeScore >= 0) {
      level = '🟡 消费小幅升级或持平';
      description = '你移民后的生活质量会略有提升或基本持平。虽然收入增加，但物价也高了，扣掉税和房租后，实际购买力变化不大。好在你适应能力不错，能够接受生活方式的改变。';
      advice = [
        '学会做饭是最重要的省钱技能，外卖太贵',
        '善用Costco、Walmart、二手市场',
        '居住空间会变大，这是最直观的升级',
        '接受"少而精"的消费模式，质量优先'
      ];
      emoticon = '😐';
    } else if (changeScore >= -5) {
      level = '🟠 消费小幅降级';
      description = '说实话，你移民后的生活质量会有所下降。你在国内的生活水平已经不错，但移民初期的收入可能达不到国内水平，加上物价更贵、服务更少，会明显感觉"没有国内方便"。';
      advice = [
        '心理准备很重要，这是暂时的',
        '前2-3年是最难的，熬过去就好了',
        '必须学会自己做饭、修东西、剪草',
        '二手市场是你的好朋友，能省很多钱',
        '重新定义"生活质量"：空间>便利，时间>物质'
      ];
      emoticon = '😰';
    } else {
      level = '🔴 消费大幅降级';
      description = '坦白说，你移民后会经历明显的消费降级。你在国内已经习惯了较高的生活水平，但移民后可能要从低端工作做起，收入大幅下降，加上物价翻倍，生活质量会明显倒退。更糟的是，你的适应能力和心理准备都不够。';
      advice = [
        '强烈建议重新评估是否要移民',
        '如果一定要移民，至少准备100万人民币作为缓冲',
        '提前学会做饭、修东西、过简单生活',
        '降低预期：前5年可能都不如国内',
        '想清楚为什么移民，如果只是为了生活质量，别来'
      ];
      emoticon = '😱';
    }

    const dimensions = {
      '国内基准': Math.round((domesticLevel / 25) * 100),
      '加国购买力': Math.round((canadaPurchasingPower / 25) * 100),
      '适应能力': adaptScore,
      '心理准备': prepScore,
      '资金缓冲': bufferLevel
    };

    return {
      level,
      description,
      advice,
      emoticon,
      dimensions,
      domesticLevel,
      canadaPurchasingPower,
      change: changeScore
    };
  }

  function render() {
    const app = document.getElementById('app');
    
    if (state.result === null) {
      const currentQ = questions[state.currentStep];
      const progress = Math.round(((state.currentStep + 1) / questions.length) * 100);
      
      app.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #f0f0f0; height: 8px; border-radius: 4px; margin-bottom: 20px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, #8B5CF6, #EC4899); height: 100%; width: ${progress}%; transition: width 0.3s;"></div>
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
                  border: 2px solid ${state.answers[currentQ.id] === idx ? '#8B5CF6' : '#e0e0e0'};
                  background: ${state.answers[currentQ.id] === idx ? '#F5F3FF' : 'white'};
                  border-radius: 12px;
                  cursor: pointer;
                  font-size: 15px;
                  text-align: left;
                  transition: all 0.2s;
                  color: #333;
                "
                onmouseover="this.style.borderColor='#8B5CF6'; this.style.background='#F5F3FF';"
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
                background: ${state.answers[currentQ.id] !== undefined ? '#8B5CF6' : '#f0f0f0'};
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
      const { level, description, advice, emoticon, dimensions, domesticLevel, canadaPurchasingPower, change } = state.result;
      
      app.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="font-size: 80px; margin-bottom: 16px;">${emoticon}</div>
            <h2 style="font-size: 28px; margin-bottom: 16px;">${level}</h2>
            <div style="font-size: 16px; color: #666; line-height: 1.8; max-width: 600px; margin: 0 auto;">${description}</div>
          </div>

          <!-- 对比图 -->
          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">📊 生活水平对比</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 30px 0;">
              <div style="text-align: center;">
                <div style="color: #666; font-size: 14px; margin-bottom: 12px;">🇨🇳 国内水平</div>
                <div style="font-size: 48px; font-weight: bold; color: #3B82F6;">${domesticLevel}</div>
                <div style="color: #999; font-size: 12px; margin-top: 8px;">基准分数</div>
              </div>
              <div style="text-align: center;">
                <div style="color: #666; font-size: 14px; margin-bottom: 12px;">🇨🇦 加拿大水平</div>
                <div style="font-size: 48px; font-weight: bold; color: #10B981;">${canadaPurchasingPower}</div>
                <div style="color: #999; font-size: 12px; margin-top: 8px;">预期分数</div>
              </div>
            </div>
            <div style="text-align: center; padding: 20px; background: ${change >= 0 ? '#ECFDF5' : '#FEE2E2'}; border-radius: 12px;">
              <div style="font-size: 14px; color: ${change >= 0 ? '#059669' : '#DC2626'}; margin-bottom: 8px;">
                ${change >= 0 ? '↗ 生活质量提升' : '↘ 生活质量下降'}
              </div>
              <div style="font-size: 32px; font-weight: bold; color: ${change >= 0 ? '#059669' : '#DC2626'};">
                ${change >= 0 ? '+' : ''}${change}分
              </div>
            </div>
          </div>

          <!-- 维度分析 -->
          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">🎯 能力维度</h3>
            ${Object.entries(dimensions).map(([dim, score]) => `
              <div style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 600; color: #555;">${dim}</span>
                  <span style="font-weight: bold; color: #8B5CF6;">${score}分</span>
                </div>
                <div style="background: #f0f0f0; height: 8px; border-radius: 4px; overflow: hidden;">
                  <div style="background: linear-gradient(90deg, #8B5CF6, #EC4899); height: 100%; width: ${score}%; transition: width 0.5s;"></div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 建议 -->
          <div style="background: #FFF9E6; border: 2px solid #FFD700; border-radius: 16px; padding: 24px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #D97706;">💡 给你的建议</h3>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #92400E;">
              ${advice.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div style="text-align: center;">
            <button 
              id="resetBtn"
              style="
                padding: 14px 32px;
                background: white;
                border: 2px solid #8B5CF6;
                color: #8B5CF6;
                border-radius: 8px;
                cursor: pointer;
                font-size: 15px;
                font-weight: 600;
              "
              onmouseover="this.style.background='#F5F3FF';"
              onmouseout="this.style.background='white';"
            >
              🔄 重新测试
            </button>
          </div>
        </div>
      `;

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
