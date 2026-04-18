#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 使用方法: node publish.js "文章标题" "文章内容" "分类" "标签1,标签2"
const [,, title, content, category = '默认', tags = ''] = process.argv;

if (!title || !content) {
  console.error('用法: node publish.js "标题" "内容" "分类" "标签1,标签2"');
  process.exit(1);
}

const date = new Date();
const fileName = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${title.replace(/\s+/g, '-').toLowerCase()}.md`;
const filePath = path.join(__dirname, 'source', '_posts', fileName);

const tagList = tags ? tags.split(',').map(t => `  - ${t.trim()}`).join('\n') : '';

const frontMatter = `---
title: ${title}
date: ${date.toISOString()}
categories: ${category}
${tagList ? `tags:\n${tagList}` : ''}
---

${content}
`;

fs.writeFileSync(filePath, frontMatter, 'utf8');
console.log(`✅ 文章已创建: ${fileName}`);

// 生成静态文件
console.log('📦 生成静态文件...');
execSync('hexo generate', { stdio: 'inherit' });

// Git 提交
console.log('🚀 提交到 Git...');
execSync('git add .', { stdio: 'inherit' });
execSync(`git commit -m "发布文章: ${title}"`, { stdio: 'inherit' });

console.log('✨ 完成！运行 git push 部署到线上');
