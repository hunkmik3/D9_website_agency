const fs = require('fs');
const path = require('path');

console.log('🔍 Kiểm tra các thay đổi MDX...\n');

// Kiểm tra package.json
const packagePath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  console.log('📦 Dependencies:');
  if (packageJson.dependencies['@next/mdx']) {
    console.log('✅ @next/mdx - Đã cài đặt');
  } else {
    console.log('❌ @next/mdx - CHƯA cài đặt');
  }
  
  if (packageJson.dependencies['@mdx-js/react']) {
    console.log('✅ @mdx-js/react - Đã cài đặt');
  } else {
    console.log('❌ @mdx-js/react - CHƯA cài đặt');
  }
  
  if (packageJson.dependencies['@mdx-js/runtime']) {
    console.log('✅ @mdx-js/runtime - Đã cài đặt');
  } else {
    console.log('❌ @mdx-js/runtime - CHƯA cài đặt');
  }
  
  if (packageJson.dependencies['next-mdx-remote']) {
    console.log('❌ next-mdx-remote - VẪN còn (cần gỡ bỏ)');
  } else {
    console.log('✅ next-mdx-remote - Đã gỡ bỏ');
  }
}

console.log('\n📁 Files:');

// Kiểm tra các file quan trọng
const files = [
  'next.config.js',
  'app/helper/MDXContent.js',
  'app/helper/MDXProvider.js',
  'app/layout.js',
  'layouts/shortcodes/all.js'
];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (file === 'next.config.js') {
      if (content.includes('@next/mdx') && content.includes('withMDX')) {
        console.log(`✅ ${file} - Đã cấu hình MDX`);
      } else {
        console.log(`❌ ${file} - CHƯA cấu hình MDX`);
      }
    } else if (file === 'app/helper/MDXContent.js') {
      if (content.includes('@mdx-js/runtime') && content.includes('MDX')) {
        console.log(`✅ ${file} - Đã sử dụng @mdx-js/runtime`);
      } else {
        console.log(`❌ ${file} - CHƯA sử dụng @mdx-js/runtime`);
      }
    } else if (file === 'app/helper/MDXProvider.js') {
      if (content.includes('@mdx-js/react') && content.includes('MDXProvider')) {
        console.log(`✅ ${file} - Đã tạo MDXProvider`);
      } else {
        console.log(`❌ ${file} - CHƯA tạo MDXProvider`);
      }
    } else if (file === 'app/layout.js') {
      if (content.includes('CustomMDXProvider')) {
        console.log(`✅ ${file} - Đã wrap MDXProvider`);
      } else {
        console.log(`❌ ${file} - CHƯA wrap MDXProvider`);
      }
    } else if (file === 'layouts/shortcodes/all.js') {
      if (content.includes('SimpleYoutubePlayer')) {
        console.log(`✅ ${file} - Đã có SimpleYoutubePlayer`);
      } else {
        console.log(`❌ ${file} - CHƯA có SimpleYoutubePlayer`);
      }
    }
  } else {
    console.log(`❌ ${file} - KHÔNG TỒN TẠI`);
  }
});

console.log('\n🎯 Kết luận:');
console.log('Nếu tất cả đều ✅, hãy chạy: npm run build');
console.log('Nếu có ❌, hãy kiểm tra lại các file tương ứng'); 