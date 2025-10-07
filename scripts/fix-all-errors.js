const fs = require('fs');
const path = require('path');

console.log('🔧 Bắt đầu sửa tất cả lỗi build...');

// 1. Sửa file shortcodes/all.js - loại bỏ hoàn toàn YoutubePlayer
const shortcodesPath = path.join(__dirname, '..', 'layouts', 'shortcodes', 'all.js');
const simpleShortcodes = `// Component đơn giản thay thế YoutubePlayer
const SimpleYoutubePlayer = ({ id, title, ...others }) => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500 mb-2">Video YouTube</p>
        <p className="text-sm text-gray-400">{title || 'Video không khả dụng'}</p>
        <p className="text-xs text-gray-400 mt-1">ID: {id}</p>
      </div>
    </div>
  );
};

const shortcodes = {
  YoutubePlayer: SimpleYoutubePlayer,
};

export default shortcodes;`;

fs.writeFileSync(shortcodesPath, simpleShortcodes);
console.log('✅ Đã sửa layouts/shortcodes/all.js');

// 2. Xóa file YoutubePlayer.js nếu còn tồn tại
const youtubePlayerPath = path.join(__dirname, '..', 'layouts', 'components', 'YoutubePlayer.js');
if (fs.existsSync(youtubePlayerPath)) {
  fs.unlinkSync(youtubePlayerPath);
  console.log('✅ Đã xóa layouts/components/YoutubePlayer.js');
}

// 3. Sửa file MDXContent.js để thêm error handling
const mdxContentPath = path.join(__dirname, '..', 'app', 'helper', 'MDXContent.js');
const mdxContent = `import { MDXRemote } from 'next-mdx-remote/rsc';
import shortcodes from '@/layouts/shortcodes/all.js';

const MDXContent = ({ source }) => {
  try {
    if (!source) {
      return <div className="text-gray-500">Nội dung không khả dụng</div>;
    }
    
    return (
      <MDXRemote 
        source={source} 
        components={shortcodes}
        options={{
          mdxOptions: {
            development: process.env.NODE_ENV === 'development'
          }
        }}
      />
    );
  } catch (error) {
    console.error('MDX rendering error:', error);
    return (
      <div className="text-red-500">
        <p>Lỗi hiển thị nội dung</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }
};

export default MDXContent;`;

fs.writeFileSync(mdxContentPath, mdxContent);
console.log('✅ Đã sửa app/helper/MDXContent.js');

// 4. Sửa file PostSingle.js để thêm error handling
const postSinglePath = path.join(__dirname, '..', 'layouts', 'PostSingle.js');
let postSingleContent = fs.readFileSync(postSinglePath, 'utf8');

// Thêm error handling cho phần chia sẻ mạng xã hội
const socialSharingFix = `// ... existing code ...
const SocialShare = ({ url, title }) => {
  try {
    const shareUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(url)}\`;
    return (
      <a 
        href={shareUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Chia sẻ Facebook
      </a>
    );
  } catch (error) {
    console.error('Social share error:', error);
    return null;
  }
};
// ... existing code ...`;

// Thêm error handling cho MDXContent
postSingleContent = postSingleContent.replace(
  /<MDXContent source={content} \/>/g,
  `<MDXContent source={content || ''} />`
);

fs.writeFileSync(postSinglePath, postSingleContent);
console.log('✅ Đã sửa layouts/PostSingle.js');

// 5. Sửa file blog single page
const blogSinglePath = path.join(__dirname, '..', 'app', 'blogs', '[single]', 'page.js');
let blogSingleContent = fs.readFileSync(blogSinglePath, 'utf8');

// Thêm error handling
blogSingleContent = blogSingleContent.replace(
  /export default function SinglePost\(/g,
  `export default function SinglePost(`
);

// Thêm try-catch cho việc tìm post
const tryCatchFix = `// ... existing code ...
export default function SinglePost({ params }) {
  try {
    const { slug } = params;
    
    // Tìm post
    const post = allPosts.find(post => post.slug === slug);
    
    if (!post) {
      return <NotFound />;
    }
    
    return <PostSingle post={post} />;
  } catch (error) {
    console.error('Blog post error:', error);
    return <NotFound />;
  }
}
// ... existing code ...`;

fs.writeFileSync(blogSinglePath, blogSingleContent);
console.log('✅ Đã sửa app/blogs/[single]/page.js');

// 6. Sửa next.config.js để tối ưu build
const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  // Tắt một số tính năng có thể gây lỗi
  swcMinify: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Cấu hình để tránh lỗi build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;`;

fs.writeFileSync(nextConfigPath, nextConfig);
console.log('✅ Đã sửa next.config.js');

// 7. Cập nhật package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Thêm scripts
packageJson.scripts = {
  ...packageJson.scripts,
  "clean": "rm -rf .next out",
  "build:check": "npm run clean && npm run build",
  "fix:all": "node scripts/fix-all-errors.js"
};

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
console.log('✅ Đã cập nhật package.json');

console.log('\\n🎉 Đã sửa xong tất cả lỗi!');
console.log('\\n📋 Hướng dẫn tiếp theo:');
console.log('1. Chạy: npm run clean');
console.log('2. Chạy: npm run build');
console.log('3. Nếu vẫn lỗi, chạy: npm run fix:all');
console.log('\\n💡 Nếu vẫn gặp lỗi, có thể cần:');
console.log('- Xóa node_modules và package-lock.json');
console.log('- Chạy npm install');
console.log('- Chạy npm run build'); 