---
title: 你适合移民加拿大吗？
date: 2026-06-06
draft: true
description: 从资金、语言、职业、心理准备四个维度评估你的加拿大移民适配度
---

# 你适合移民加拿大吗？

从资金能力、语言水平、职业匹配度、心理准备四个维度，评估你是否适合移民加拿大。

<div id="app"></div>

<script>
(function() {
  const questions = [
    // 资金能力 (5题)
    { id: 1, text: '你目前的存款（人民币）', dimension: '资金能力', options: ['10万以下', '10-30万', '30-50万', '50-100万', '100万以上'], scores: [1, 2, 3, 4, 5] },
    { id: 2, text: '你每月的被动收入（租金/理财/版税等）', dimension: '资金能力', options: ['0元', '1000-3000元', '3000-8000元', '8000-2万', '2万以上'], scores: [1, 2, 3, 4, 5] },
    { id: 3, text: '你的资金来源稳定性', dimension: '资金能力', options: ['全靠工资', '工资+少量副业', '主业副业各半', '副业为主', '完全财务自由'], scores: [1, 2, 3, 4, 5] },
    { id: 4, text: '你能接受的移民前期投入', dimension: '资金能力', options: ['不超过5万', '5-15万', '15-30万', '30-50万', '50万以上'], scores: [1, 2, 3, 4, 5] },
    { id: 5, text: '你对"前3年可能入不敷出"的承受力', dimension: '资金能力', options: ['完全无法接受', '勉强能撑1年', '能撑1-2年', '能撑2-3年', '3年以上没问题'], scores: [1, 2, 3, 4, 5] },
    
    // 语言水平 (5题)
    { id: 6, text: '你的英语真实水平', dimension: '语言水平', options: ['看菜单都费劲', '日常对话磕磕巴巴', '能聊天但不够流利', '流利沟通无障碍', '接近母语水平'], scores: [1, 2, 3, 4, 5] },
    { id: 7, text: '你能达到的雅思分数（预估）', dimension: '语言水平', options: ['5分以下', '5-6分', '6-7分', '7-8分', '8分以上'], scores: [1, 2, 3, 4, 5] },
    { id: 8, text: '你用英语工作的能力', dimension: '语言水平', options: ['从未用过', '偶尔看文档', '能写邮件报告', '能开会讨论', '能做技术演讲'], scores: [1, 2, 3, 4, 5] },
    { id: 9, text: '你学习语言的动力', dimension: '语言水平', options: ['完全不想学', '被迫学一点', '愿意但没时间', '每周能学几小时', '每天坚持学'], scores: [1, 2, 3, 4, 5] },
    { id: 10, text: '你对"口音很重但能交流"的接受度', dimension: '语言水平', options: ['不能接受', '勉强接受', '无所谓', '觉得正常', '完全不在意'], scores: [1, 3, 4, 4, 5] },
    
    // 职业匹配 (5题)
    { id: 11, text: '你的职业类型', dimension: '职业匹配', options: ['纯线下服务业', '传统制造业', '国企事业单位', 'IT/金融/医疗', '自由职业/远程'], scores: [1, 2, 2, 4, 5] },
    { id: 12, text: '你的工作经验年限', dimension: '职业匹配', options: ['1年以下', '1-3年', '3-5年', '5-10年', '10年以上'], scores: [1, 2, 3, 4, 5] },
    { id: 13, text: '你在加拿大找工作的信心', dimension: '职业匹配', options: ['完全没信心', '觉得很难', '50/50', '比较有信心', '非常有信心'], scores: [1, 2, 3, 4, 5] },
    { id: 14, text: '你对"从低端工作干起"的接受度', dimension: '职业匹配', options: ['绝对不行', '勉强接受半年', '能接受1-2年', '能接受2-3年', '无所谓多久'], scores: [1, 2, 3, 4, 5] },
    { id: 15, text: '你的职业技能可迁移性', dimension: '职业匹配', options: ['完全依赖本地关系', '需要本地执照认证', '技能通用但需适应', '技能高度通用', '全球都能找到工作'], scores: [1, 2, 3, 4, 5] },
    
    // 心理准备 (5题)
    { id: 16, text: '你对"前几年生活质量下降"的心理准备', dimension: '心理准备', options: ['完全没准备', '知道但很焦虑', '有心理准备', '做好了准备', '完全不在意'], scores: [1, 2, 3, 4, 5] },
    { id: 17, text: '你的社交需求', dimension: '心理准备', options: ['极度依赖熟人圈', '需要频繁社交', '偶尔见朋友就行', '独处也很舒适', '完全享受孤独'], scores: [1, 2, 3, 4, 5] },
    { id: 18, text: '你对"文化差异带来的不适"的承受力', dimension: '心理准备', options: ['一点都受不了', '会很难受', '能慢慢适应', '适应力强', '完全不是问题'], scores: [1, 2, 3, 4, 5] },
    { id: 19, text: '你的家人支持度', dimension: '心理准备', options: ['强烈反对', '不支持但不阻拦', '中立态度', '比较支持', '全力支持'], scores: [1, 2, 3, 4, 5] },
    { id: 20, text: '你对"可能失败回国"的接受度', dimension: '心理准备', options: ['绝不能失败', '失败会崩溃', '失败了再说', '大不了重来', '失败也是经历'], scores: [1, 2, 3, 4, 5] }
  ];

  const state = {
    currentStep: 0,
    answers: {},
    result: null
  };

  const dimensionInfo = {
    '资金能力': { 
      color: '#FF6B6B',
      low: '资金压力巨大，建议先在国内积累3-5年',
      medium: '资金勉强够用，但要做好节衣缩食的准备',
      high: '资金充裕，移民后生活压力较小'
    },
    '语言水平': { 
      color: '#4ECDC4',
      low: '语言是最大障碍，强烈建议先提升到雅思6分以上',
      medium: '语言够用但不流利，找工作会有些困难',
      high: '语言无障碍，沟通不是问题'
    },
    '职业匹配': { 
      color: '#45B7D1',
      low: '职业不适合移民，可能需要转行或从零开始',
      medium: '职业有一定可迁移性，但需要重新积累',
      high: '职业高度匹配，找工作相对容易'
    },
    '心理准备': { 
      color: '#FFA07A',
      low: '心理准备不足，移民后可能会非常痛苦',
      medium: '有一定准备但还不够，需要更多思想建设',
      high: '心理准备充分，能承受移民带来的各种挑战'
    }
  };

  function calculateResult() {
    const dimensions = {};
    questions.forEach(q => {
      if (!dimensions[q.dimension]) dimensions[q.dimension] = { sum: 0, count: 0 };
      const answer = state.answers[q.id];
      if (answer !== undefined) {
        dimensions[q.dimension].sum += q.scores[answer];
        dimensions[q.dimension].count++;
      }
    });

    const result = {};
    Object.keys(dimensions).forEach(dim => {
      result[dim] = Math.round((dimensions[dim].sum / dimensions[dim].count / 5) * 100);
    });

    const avgScore = Math.round(Object.values(result).reduce((a, b) => a + b, 0) / 4);
    
    let recommendation, tags;
    if (avgScore >= 80) {
      recommendation = '🟢 <strong>高度适合</strong><br>你各方面条件都很好，现在就可以开始准备移民材料。建议走Express Entry快速通道，同时准备省提名作为备选。';
      tags = ['条件优秀', '可立即行动', '成功率高'];
    } else if (avgScore >= 65) {
      recommendation = '🟡 <strong>适合但需补短板</strong><br>你有移民的基础条件，但某些维度还需要提升。建议用1-2年时间针对性提升薄弱项，再开始申请流程。';
      tags = ['基础良好', '需要准备', '1-2年后行动'];
    } else if (avgScore >= 50) {
      recommendation = '🟠 <strong>勉强够格，风险较大</strong><br>你的条件刚刚达到移民门槛，但移民后可能会面临很大压力。建议先在国内用2-3年时间充分准备，积累资金和提升技能。';
      tags = ['条件欠缺', '需认真准备', '2-3年后再考虑'];
    } else {
      recommendation = '🔴 <strong>暂不建议移民</strong><br>你当前的条件不适合移民加拿大，贸然行动可能会导致失败。建议先在国内发展3-5年，等条件成熟再重新评估。';
      tags = ['条件不足', '暂缓行动', '先提升自己'];
    }

    return { dimensions: result, avgScore, recommendation, tags };
  }

  function drawRadarChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 60;
    const dimensions = Object.keys(data);
    const angleStep = (Math.PI * 2) / dimensions.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制背景网格
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      const r = (radius / 5) * i;
      dimensions.forEach((_, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.stroke();
    }

    // 绘制轴线和标签
    ctx.strokeStyle = '#999';
    ctx.fillStyle = '#333';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    dimensions.forEach((dim, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      const labelX = centerX + (radius + 30) * Math.cos(angle);
      const labelY = centerY + (radius + 30) * Math.sin(angle);
      ctx.fillText(dim, labelX, labelY);
    });

    // 绘制数据区域
    ctx.beginPath();
    dimensions.forEach((dim, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const value = data[dim] / 100;
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(79, 70, 229, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#4F46E5';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 绘制数据点
    dimensions.forEach((dim, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const value = data[dim] / 100;
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = dimensionInfo[dim].color;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 显示分数
      ctx.fillStyle = '#333';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(data[dim], x, y - 10);
    });
  }

  function render() {
    const app = document.getElementById('app');
    
    if (state.result === null) {
      const currentQ = questions[state.currentStep];
      const progress = Math.round(((state.currentStep + 1) / questions.length) * 100);
      
      app.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #f0f0f0; height: 8px; border-radius: 4px; margin-bottom: 20px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, #4F46E5, #7C3AED); height: 100%; width: ${progress}%; transition: width 0.3s;"></div>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="color: #666; font-size: 14px; margin-bottom: 8px;">${currentQ.dimension}</div>
            <div style="font-size: 18px; font-weight: 600; color: #333;">${currentQ.text}</div>
            <div style="color: #999; font-size: 12px; margin-top: 8px;">问题 ${state.currentStep + 1} / ${questions.length}</div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${currentQ.options.map((opt, idx) => `
              <button 
                data-answer="${idx}"
                style="
                  padding: 16px 20px;
                  border: 2px solid ${state.answers[currentQ.id] === idx ? '#4F46E5' : '#e0e0e0'};
                  background: ${state.answers[currentQ.id] === idx ? '#F5F3FF' : 'white'};
                  border-radius: 12px;
                  cursor: pointer;
                  font-size: 15px;
                  text-align: left;
                  transition: all 0.2s;
                  color: #333;
                "
                onmouseover="this.style.borderColor='#4F46E5'; this.style.background='#F5F3FF';"
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
                background: ${state.answers[currentQ.id] !== undefined ? '#4F46E5' : '#f0f0f0'};
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
      const { dimensions, avgScore, recommendation, tags } = state.result;
      
      app.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="font-size: 28px; margin-bottom: 16px;">你的加拿大移民适配度</h2>
            <div style="font-size: 48px; font-weight: bold; color: #4F46E5; margin: 20px 0;">${avgScore}</div>
            <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
              ${tags.map(tag => `<span style="background: #F5F3FF; color: #4F46E5; padding: 6px 14px; border-radius: 20px; font-size: 13px;">${tag}</span>`).join('')}
            </div>
          </div>

          <canvas id="radarChart" width="500" height="500" style="display: block; margin: 0 auto 40px;"></canvas>

          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">💡 综合建议</h3>
            <div style="line-height: 1.8; color: #555;">${recommendation}</div>
          </div>

          <div style="background: white; border: 2px solid #e0e0e0; border-radius: 16px; padding: 30px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">📊 维度分析</h3>
            ${Object.keys(dimensions).map(dim => {
              const score = dimensions[dim];
              let level, feedback;
              if (score >= 75) {
                level = 'high';
                feedback = dimensionInfo[dim].high;
              } else if (score >= 50) {
                level = 'medium';
                feedback = dimensionInfo[dim].medium;
              } else {
                level = 'low';
                feedback = dimensionInfo[dim].low;
              }
              
              return `
                <div style="margin-bottom: 20px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="font-weight: 600; color: ${dimensionInfo[dim].color};">${dim}</span>
                    <span style="font-weight: bold; color: ${dimensionInfo[dim].color};">${score}分</span>
                  </div>
                  <div style="background: #f0f0f0; height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 8px;">
                    <div style="background: ${dimensionInfo[dim].color}; height: 100%; width: ${score}%; transition: width 0.5s;"></div>
                  </div>
                  <div style="font-size: 13px; color: #666; line-height: 1.6;">${feedback}</div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="background: #FFF9E6; border: 2px solid #FFD700; border-radius: 16px; padding: 24px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #D97706;">⚠️ 下一步行动建议</h3>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #92400E;">
              ${avgScore >= 80 ? `
                <li>开始准备Express Entry申请材料（学历认证、语言成绩、工作证明）</li>
                <li>研究各省提名项目，找到最适合你的通道</li>
                <li>准备资金证明（至少CAD $13,000/人）</li>
                <li>开始学习加拿大职场文化和求职技巧</li>
              ` : avgScore >= 65 ? `
                <li>针对性提升薄弱维度（查看上面的维度分析）</li>
                <li>如果语言不够，马上开始雅思备考，目标7分以上</li>
                <li>如果资金不够，制定1-2年的储蓄计划</li>
                <li>研究目标职业的加拿大就业市场</li>
              ` : avgScore >= 50 ? `
                <li>暂缓移民申请，用2-3年时间认真准备</li>
                <li>优先提升资金和语言这两个硬指标</li>
                <li>考虑是否需要转行到更适合移民的职业</li>
                <li>多了解移民真实生活，做好心理建设</li>
              ` : `
                <li>先在国内稳定发展3-5年，积累资金和经验</li>
                <li>从现在开始学英语，每天至少1小时</li>
                <li>研究你的职业是否适合移民，必要时考虑转行</li>
                <li>多看移民真实案例，了解困难和挑战</li>
              `}
            </ul>
          </div>

          <div style="text-align: center;">
            <button 
              id="resetBtn"
              style="
                padding: 14px 32px;
                background: white;
                border: 2px solid #4F46E5;
                color: #4F46E5;
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

      const canvas = document.getElementById('radarChart');
      drawRadarChart(canvas, dimensions);

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

