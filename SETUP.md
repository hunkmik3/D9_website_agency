# Hướng Dẫn Cấu Hình D9 Media Agency Website

## Các Lỗi Đã Được Sửa

### ✅ 1. Lỗi BlogContent.jsx
- **Vấn đề:** Lỗi `.toLowerCase()` trên undefined/null
- **Đã sửa:** Ép kiểu về string trước khi gọi `.toLowerCase()`
- **File:** `app/blogs/BlogContent.jsx`

### ✅ 2. Lỗi Facebook Pixel & Google Analytics
- **Vấn đề:** Script tracking gây lỗi hydration và "Invalid PixelID: null"
- **Đã sửa:** Tạo component Analytics riêng, chỉ load phía client
- **File:** `layouts/components/Analytics.js`, `app/layout.js`

### ✅ 3. Lỗi Image 400 Bad Request
- **Vấn đề:** Next.js Image không tìm thấy domain
- **Đã sửa:** Thêm domain vào `next.config.js`
- **File:** `next.config.js`

### ✅ 4. Lỗi Image Warning
- **Vấn đề:** Warning về width/height không khớp
- **Đã sửa:** Thêm `style={{ width: 'auto', height: 'auto' }}`
- **File:** `app/blogs/BlogContent.jsx`, `layouts/partials/Header.js`, `layouts/components/Logo.js`

### ✅ 5. Lỗi Meta Tag Deprecated
- **Vấn đề:** `<meta name="apple-mobile-web-app-capable">` deprecated
- **Đã sửa:** Thêm `<meta name="mobile-web-app-capable">`
- **File:** `app/layout.js`

## Cấu Hình Tracking (Tùy Chọn)

Để sử dụng Google Analytics và Facebook Pixel, tạo file `.env.local` trong thư mục gốc:

```bash
# Google Analytics ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Facebook Pixel ID  
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX
```

**Lưu ý:** 
- Thay `G-XXXXXXXXXX` bằng Google Analytics ID thật
- Thay `XXXXXXXXXX` bằng Facebook Pixel ID thật
- Nếu không có ID, script sẽ không load và không gây lỗi

## Kiểm Tra Sau Khi Sửa

1. **Blog trang:** Không còn lỗi `.toLowerCase()`
2. **Console:** Không còn lỗi "Invalid PixelID: null"
3. **Images:** Không còn lỗi 400 Bad Request
4. **Hydration:** Không còn lỗi hydration mismatch
5. **Performance:** Website load nhanh và ổn định

## Các Tính Năng Đã Tối Ưu

- ✅ Filter và search blog hoạt động mượt mà
- ✅ Pagination cho blog posts
- ✅ Responsive design cho mobile/desktop
- ✅ SEO meta tags đầy đủ
- ✅ Performance optimization
- ✅ Error handling an toàn

## Chạy Website

```bash
npm run dev
```

Website sẽ chạy tại: http://localhost:3000 