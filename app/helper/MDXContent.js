"use client";

import shortcodes from '../../layouts/shortcodes/all.js';

const MDXContent = ({ source }) => {
  try {
    if (!source) {
      return <div className="text-gray-500">Nội dung không khả dụng</div>;
    }
    
    // Render MDX content trực tiếp bằng dangerouslySetInnerHTML
    // Đây là cách đơn giản nhất để tránh lỗi fs module
    return (
      <div 
        className="mdx-content"
        dangerouslySetInnerHTML={{ __html: source }}
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

export default MDXContent;