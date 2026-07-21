# Nguyễn Xuân Văn Portfolio

Portfolio cá nhân của **Nguyễn Xuân Văn**, tập trung vào định hướng **E-commerce**, **SEO** và **Digital Marketing**.

Website được xây dựng như một hồ sơ trực tuyến gọn gàng, hiện đại và dễ mở rộng, dùng để giới thiệu thông tin cá nhân, kinh nghiệm SEO, dự án E-commerce, kỹ năng, học vấn và thông tin liên hệ.

## Website

Production:

[https://nxvan-ecom-portfolio.vercel.app](https://nxvan-ecom-portfolio.vercel.app)

## Điểm nổi bật

- Giao diện một trang, tối ưu cho portfolio cá nhân.
- Nội dung tiếng Việt, phù hợp với hồ sơ E-commerce và Digital Marketing.
- Thiết kế tối giản, nền trắng, typography lớn và bố cục editorial.
- Responsive trên desktop, tablet và mobile.
- Dữ liệu portfolio được quản lý tập trung trong một file.
- Hỗ trợ hình ảnh dự án, gallery, lightbox và các trang chi tiết riêng tư.
- Tối ưu metadata, Open Graph, favicon và SEO cơ bản.

## Công nghệ

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel
- npm

## Cấu trúc chính

```text
src/
  app/
    page.tsx
    projects/[slug]/page.tsx
    experience/[slug]/page.tsx
  components/
  data/
    portfolio.ts

public/
  images/
    profile/
    experience/
    projects/
    certificates/
  cv/
```

## Chạy local

Cài dependency:

```bash
npm install
```

Chạy development server:

```bash
npm run dev
```

Mở:

```text
http://localhost:3000
```

## Kiểm tra trước khi deploy

```bash
npm run lint
npm run typecheck
npm run build
```

## Chỉnh nội dung portfolio

Toàn bộ nội dung có thể chỉnh trong:

```text
src/data/portfolio.ts
```

File này quản lý:

- Thông tin cá nhân
- Hero section
- Giới thiệu
- Kinh nghiệm
- Dự án
- Kỹ năng
- Học vấn
- Liên hệ
- Đường dẫn hình ảnh
- Đường dẫn CV

## Thay ảnh

Ảnh được lưu trong:

```text
public/images/
```

Một số thư mục quan trọng:

```text
public/images/profile/
public/images/experience/duong-gia-phat/
public/images/projects/tetratoys/
public/images/projects/resip/
public/images/certificates/
```

Khi thêm hoặc thay ảnh, cập nhật đường dẫn tương ứng trong:

```text
src/data/portfolio.ts
```

Ưu tiên dùng ảnh đã tối ưu với định dạng `.webp`, `.avif`, `.png` hoặc `.svg` tùy trường hợp.

## Thay CV

File CV hiện tại nằm tại:

```text
public/cv/nguyen-xuan-van-cv.pdf
```

Để thay CV mới, ghi đè file PDF cùng tên để các nút **Tải CV** tiếp tục hoạt động.

## Trang chi tiết riêng tư

Website có các trang chi tiết dự án và kinh nghiệm dùng cho CV hoặc chia sẻ trực tiếp.

Các trang này:

- Không hiển thị trên navbar.
- Không hiển thị trên homepage.
- Không nằm trong sitemap.
- Được đặt `noindex,nofollow`.

## Deploy

Website đang được deploy trên Vercel. Khi push lên nhánh `main`, Vercel sẽ tự build và publish bản mới.

Deploy thủ công bằng Vercel CLI:

```bash
npx vercel --prod
```

## Repository

Repository này được dùng để quản lý source code, nội dung và tài sản hình ảnh cho portfolio cá nhân của Nguyễn Xuân Văn.
