#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Danh sách các file quan trọng cần kiểm tra
const importantFiles = [
  'app/blogs/[single]/page.js',
  'app/[regular]/page.js', 
  'layouts/PostSingle.js',
  'layouts/shortcodes/all.js',
  'app/helper/MDXContent.js',
  'next.config.js',
  'package.json'
];

console.log('🔍 Kiểm tra các file quan trọng...');

importantFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} - Tồn tại`);
  } else {
    console.log(`❌ ${file} - KHÔNG TỒN TẠI`);
  }
});

console.log('\n📦 Kiểm tra dependencies...');
const packagePath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  console.log('Dependencies:', Object.keys(packageJson.dependencies || {}));
  console.log('DevDependencies:', Object.keys(packageJson.devDependencies || {}));
}

console.log('\n✨ Kiểm tra hoàn tất!'); 