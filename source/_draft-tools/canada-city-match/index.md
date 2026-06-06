---
title: 加拿大城市匹配度测试
date: 2026-06-06
draft: true
description: 找到最适合你的加拿大城市：多伦多、温哥华、卡尔加里、蒙特利尔还是其他？
---

# 加拿大城市匹配度测试

加拿大每个城市都有独特的性格。多伦多机会多但竞争激烈，温哥华宜居但房价吓人，卡尔加里工资高但冬天冷，蒙特利尔生活成本低但要会法语……测测你最适合哪座城市。

<div id="app"></div>

<script>
(function() {
  const questions = [
    // 气候偏好 (4题)
    { id: 1, text: '你能接受的冬季最低温度', category: '气候', options: ['零下30度也OK', '零下20度左右', '零下10度以内', '不要低于零度', '最好四季如春'], weights: { YVR: 5, YYC: 1, YYZ: 3, YUL: 2, other: 3 } },
    { id: 2, text: '你对雨天的态度', category: '气候', options: ['讨厌下雨', '偶尔下雨可以', '无所谓', '喜欢雨天', '最爱阴雨绵绵'], weights: { YVR: [1,2,3,4,5], YYC: [5,4,3,2,1], YYZ: [3,3,3,3,3], YUL: [3,3,3,3,3], other: [3,3,3,3,3] } },
    { id: 3, text: '你喜欢的季节特征', category: '气候', options: ['四季分明', '夏天凉爽', '冬天不冷', '阳光充足', '气候稳定'], weights: { YVR: 3, YYC: 5, YYZ: 4, YUL: 4, other: 3 } },
    { id: 4, text: '你对"一年200天阴天"的承受力', category: '气候', options: ['完全不行', '会很难受', '能忍', '没感觉', '反而喜欢'], weights: { YVR: [1,2,3,4,5], YYC: [5,4,3,2,1], YYZ: [3,3,3,3,3], YUL: [3,3,3,3,3], other: [3,3,3,3,3] } },
    
    // 生活成本 (4题)
    { id: 5, text: '你能接受的月租金（1卧公寓）', category: '生活成本', options: ['1000以下', '1000-1500', '1500-2000', '2000-2500', '2500以上'], weights: { YVR: [1,2,3,4,5], YYC: [5,4,3,2,1], YYZ: [1,2,3,4,5], YUL: [5,4,3,2,1], other: [5,4,3,2,1] } },
    { id: 6, text: '你的月收入预期（税后）', category: '生活成本', options: ['3000以下', '3000-4000', '4000-5000', '5000-6000', '6000以上'], weights: { YVR: [1,2,3,4,5], YYC: [3,3,4,4,5], YYZ: [2,3,4,4,5], YUL: [3,4,4,5,5], other: [3,3,4,4,5] } },
    { id: 7, text: '你对"买房"的执念', category: '生活成本', options: ['必须买房', '最好能买', '租房也行', '不考虑买房', '永远租房'], weights: { YVR: [1,2,3,4,5], YYC: [5,5,4,3,2], YYZ: [1,2,3,4,5], YUL: [5,4,4,3,2], other: [5,4,3,3,2] } },
    { id: 8, text: '你的消费习惯', category: '生活成本', options: ['精打细算', '该省省该花花', '追求生活质量', '不太在意钱', '能省就省'], weights: { YVR: 3, YYC: 4, YYZ: 3, YUL: 5, other: 4 } },
    
    // 职业机会 (4题)
    { id: 9, text: '你的职业领域', category: '职业', options: ['IT/科技', '金融/会计', '工程/制造', '医疗/教育', '服务业/零售'], weights: { YVR: [5,3,3,4,3], YYC: [3,3,5,4,3], YYZ: [5,5,4,5,4], YUL: [4,3,4,4,3], other: [3,3,4,4,4] } },
    { id: 10, text: '你对"职业机会多样性"的需求', category: '职业', options: ['不重要', '一般', '比较重要', '很重要', '最重要的因素'], weights: { YVR: [2,3,4,4,5], YYC: [5,4,3,2,1], YYZ: [2,3,4,5,5], YUL: [3,3,3,4,4], other: [4,4,3,2,2] } },
    { id: 11, text: '你的工作类型', category: '职业', options: ['远程工作', '混合办公', '必须坐班', '自由职业', '创业'], weights: { YVR: 4, YYC: 3, YYZ: 4, YUL: 4, other: 5 } },
    { id: 12, text: '你对"初期从事低端工作"的接受度', category: '职业', options: ['完全不接受', '勉强半年', '能接受1年', '能接受2年', '无所谓多久'], weights: { YVR: [1,2,3,4,5], YYC: [2,3,4,5,5], YYZ: [1,2,3,4,5], YUL: [3,4,4,5,5], other: [4,4,5,5,5] } },
    
    // 文化语言 (4题)
    { id: 13, text: '你的语言能力', category: '文化', options: ['只会英语', '英语流利', '会点法语', '英法双语', '多语言'], weights: { YVR: 4, YYC: 4, YYZ: 5, YUL: [2,3,4,5,5], other: 4 } },
    { id: 14, text: '你对"多元文化"的态度', category: '文化', options: ['不太适应', '能接受', '喜欢', '很喜欢', '最爱多元'], weights: { YVR: [2,3,4,4,5], YYC: [3,3,3,4,4], YYZ: [1,2,3,4,5], YUL: [3,3,4,4,4], other: [3,3,3,4,4] } },
    { id: 15, text: '你希望的华人比例', category: '文化', options: ['越多越好', '有一定规模', '不多不少', '少一点好', '越少越好'], weights: { YVR: [5,4,3,2,1], YYC: [3,3,3,4,4], YYZ: [5,4,3,2,1], YUL: [2,3,3,4,5], other: [2,3,3,4,5] } },
    { id: 16, text: '你对欧式文化的兴趣', category: '文化', options: ['没兴趣', '一般', '有点兴趣', '很有兴趣', '非常向往'], weights: { YVR: 2, YYC: 2, YYZ: 3, YUL: [1,2,3,4,5], other: 3 } },
    
    // 生活方式 (4题)
    { id: 17, text: '你的通勤方式偏好', category: '生活', options: ['必须开车', '开车为主', '公交可接受', '喜欢公交地铁', '骑车走路最好'], weights: { YVR: [3,4,4,5,4], YYC: [5,5,3,2,2], YYZ: [3,4,5,5,4], YUL: [3,4,4,5,4], other: [5,5,3,2,2] } },
    { id: 18, text: '你对城市节奏的期待', category: '生活', options: ['快节奏拼搏', '适度快节奏', '不紧不慢', '悠闲舒适', '躺平养老'], weights: { YVR: [2,3,4,5,4], YYC: [4,4,3,3,2], YYZ: [5,5,3,2,1], YUL: [3,3,4,5,5], other: [2,3,4,5,5] } },
    { id: 19, text: '你的社交需求', category: '生活', options: ['不需要社交', '偶尔见朋友', '需要社交圈', '社交很重要', '社交动物'], weights: { YVR: 4, YYC: 3, YYZ: 5, YUL: 4, other: 3 } },
    { id: 20, text: '你最看重的生活要素', category: '生活', options: ['自然环境', '便利设施', '文化活动', '工作机会', '生活成本'], weights: { YVR: [5,3,3,3,2], YYC: [4,3,2,4,5], YYZ: [2,4,4,5,3], YUL: [3,3,5,3,5], other: [5,3,3,2,4] } }
  ];

  const cities = {
    YVR: {
      name: '温哥华 Vancouver',
      emoji: '🌲',
      pros: ['气候温和，冬天不冷', '自然风光绝美', '华人社区完善', '宜居城市榜首'],
      cons: ['房价全加最高', '阴雨天多', '工作机会相对少', '收入偏低'],
      fit: ['追求生活质量的人', '不在意房价的人', '喜欢自然的人', '不追求职业发展的人'],
      color: '#10B981'
    },
    YYZ: {
      name: '多伦多 Toronto',
      emoji: '🏙️',
      pros: ['工作机会最多', '行业多样性强', '文化活动丰富', '交通便利'],
      cons: ['生活成本高', '节奏快压力大', '交通拥堵', '冬天较冷'],
      fit: ['追求职业发展的人', '喜欢大城市的人', '需要工作机会的人', '适应力强的人'],
      color: '#3B82F6'
    },
    YYC: {
      name: '卡尔加里 Calgary',
      emoji: '⛰️',
      pros: ['收入高税低', '房价合理', '就业率高', '落基山近'],
      cons: ['冬天很冷很长', '文化活动少', '华人少', '必须开车'],
      fit: ['追求高收入的人', '想买房的人', '不怕冷的人', '工程类职业'],
      color: '#EF4444'
    },
    YUL: {
      name: '蒙特利尔 Montreal',
      emoji: '🎭',
      pros: ['生活成本低', '欧式文化浓厚', '艺术氛围好', '美食之城'],
      cons: ['需要会法语', '工资偏低', '冬天冷', '就业机会少'],
      fit: ['预算有限的人', '喜欢欧洲文化的人', '会法语的人', '追求生活情调的人'],
      color: '#8B5CF6'
    },
    other: {
      name: '其他城市',
      emoji: '🏘️',
      pros: ['生活节奏慢', '社区友好', '房价便宜', '压力小'],
      cons: ['工作机会少', '文化活动少', '交通不便', '华人少'],
      fit: ['追求平静生活的人', '有远程工作的人', '预算有限的人', '喜欢小城镇的人'],
      color: '#F59E0B'
    }
  };

  const state = {
    currentStep: 0,
    answers: {},
    result: null
  };

  function calculateResult() {
    const scores = { YVR: 0, YYZ: 0, YYC: 0, YUL: 0, other: 0 };
    
    questions.forEach(q => {
      const answer = state.answers[q.id];
      if (answer === undefined) return;
      
      Object.keys(scores).forEach(city => {
        const weight = q.weights[city];
        if (Array.isArray(weight)) {
          scores[city] += weight[answer];
        } else {
          scores[city] += weight;
        }
      });
    });

    // 归一化到100分
    const maxScore = Math.max(...Object.values(scores));
    Object.keys(scores).forEach(city => {
      scores[city] = Math.round((scores[city] / maxScore) * 100);
    });

    // 排序
    const ranked = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([city, score]) => ({ city, score, ...cities[city] }));

    return ranked;
  }

  function render() {
    const app = document.getElementById('app');
    
    if (state.result === null) {
      const currentQ = questions[state.currentStep];
      const progress = Math.round(((state.currentStep + 1) / questions.length) * 100);
      
      app.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #f0f0f0; height: 8px; border-radius: 4px; margin-bottom: 20px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, #10B981, #3B82F6); height: 100%; width: ${progress}%; transition: width 0.3s;"></div>
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
                  border: 2px solid ${state.answers[currentQ.id] === idx ? '#10B981' : '#e0e0e0'};
                  background: ${state.answers[currentQ.id] === idx ? '#ECFDF5' : 'white'};
                  border-radius: 12px;
                  cursor: pointer;
                  font-size: 15px;
                  text-align: left;
                  transition: all 0.2s;
                  color: #333;
                "
                onmouseover="this.style.borderColor='#10B981'; this.style.background='#ECFDF5';"
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
                background: ${state.answers[currentQ.id] !== undefined ? '#10B981' : '#f0f0f0'};
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
      const [top1, top2, ...rest] = state.result;
      
      app.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="font-size: 28px; margin-bottom: 16px;">你最适合的加拿大城市</h2>
          </div>

          <!-- 🥇 最匹配城市 -->
          <div style="background: linear-gradient(135deg, ${top1.color}15, ${top1.color}05); border: 3px solid ${top1.color}; border-radius: 20px; padding: 40px; margin-bottom: 30px; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 20px; right: 20px; font-size: 60px; opacity: 0.1;">${top1.emoji}</div>
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
              <div style="font-size: 48px;">${top1.emoji}</div>
              <div>
                <div style="font-size: 12px; color: ${top1.color}; font-weight: 600; margin-bottom: 4px;">🥇 最佳匹配</div>
                <div style="font-size: 28px; font-weight: bold; color: #333;">${top1.name}</div>
                <div style="font-size: 36px; font-weight: bold; color: ${top1.color}; margin-top: 8px;">${top1.score}分</div>
              </div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <div style="font-weight: 600; color: #333; margin-bottom: 8px;">✅ 优势</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                ${top1.pros.map(pro => `<div style="background: white; padding: 8px 12px; border-radius: 8px; font-size: 14px; color: #555;">• ${pro}</div>`).join('')}
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <div style="font-weight: 600; color: #333; margin-bottom: 8px;">⚠️ 劣势</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                ${top1.cons.map(con => `<div style="background: white; padding: 8px 12px; border-radius: 8px; font-size: 14px; color: #555;">• ${con}</div>`).join('')}
              </div>
            </div>

            <div>
              <div style="font-weight: 600; color: #333; margin-bottom: 8px;">🎯 适合人群</div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${top1.fit.map(f => `<span style="background: ${top1.color}; color: white; padding: 6px 14px; border-radius: 20px; font-size: 13px;">${f}</span>`).join('')}
              </div>
            </div>
          </div>

          <!-- 🥈 次选城市 -->
          <div style="background: white; border: 2px solid ${top2.color}; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
              <div style="font-size: 36px;">${top2.emoji}</div>
              <div>
                <div style="font-size: 11px; color: ${top2.color}; font-weight: 600; margin-bottom: 2px;">🥈 次选方案</div>
                <div style="font-size: 22px; font-weight: bold; color: #333;">${top2.name}</div>
                <div style="font-size: 28px; font-weight: bold; color: ${top2.color}; margin-top: 4px;">${top2.score}分</div>
              </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 13px;">
              <div>
                <div style="font-weight: 600; color: #059669; margin-bottom: 6px;">✅ 优势</div>
                ${top2.pros.map(pro => `<div style="color: #555; margin-bottom: 4px;">• ${pro}</div>`).join('')}
              </div>
              <div>
                <div style="font-weight: 600; color: #DC2626; margin-bottom: 6px;">⚠️ 劣势</div>
                ${top2.cons.map(con => `<div style="color: #555; margin-bottom: 4px;">• ${con}</div>`).join('')}
              </div>
            </div>
          </div>

          <!-- 其他城市排名 -->
          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333; margin-bottom: 20px;">📊 完整排名</h3>
            ${rest.map((city, idx) => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #999; font-weight: 600; font-size: 14px;">#${idx + 3}</span>
                  <span style="font-size: 24px;">${city.emoji}</span>
                  <span style="font-weight: 600; color: #333;">${city.name}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="background: #f0f0f0; height: 8px; width: 120px; border-radius: 4px; overflow: hidden;">
                    <div style="background: ${city.color}; height: 100%; width: ${city.score}%;"></div>
                  </div>
                  <span style="font-weight: bold; color: ${city.color}; min-width: 40px; text-align: right;">${city.score}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 决策建议 -->
          <div style="background: #FFF9E6; border: 2px solid #FFD700; border-radius: 16px; padding: 24px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #D97706;">💡 决策建议</h3>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #92400E;">
              ${top1.score - top2.score < 10 ? `
                <li>你的前两名分数很接近（${top1.score} vs ${top2.score}），两个城市都很适合你</li>
                <li>建议都去实地考察一下，感受一下城市氛围</li>
                <li>重点考虑工作机会和生活成本这两个硬指标</li>
              ` : `
                <li>${top1.name}明显更适合你（领先${top1.score - top2.score}分）</li>
                <li>除非有特殊原因，建议优先选择${top1.name}</li>
                <li>如果担心${top1.cons[0]}，可以考虑${top2.name}作为备选</li>
              `}
              <li>加入当地华人群，多问问真实生活体验</li>
              <li>提前了解目标城市的租房、工作、社区情况</li>
            </ul>
          </div>

          <div style="text-align: center;">
            <button 
              id="resetBtn"
              style="
                padding: 14px 32px;
                background: white;
                border: 2px solid #10B981;
                color: #10B981;
                border-radius: 8px;
                cursor: pointer;
                font-size: 15px;
                font-weight: 600;
              "
              onmouseover="this.style.background='#ECFDF5';"
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

