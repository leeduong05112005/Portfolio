# Portfolio – Le Nguyen Tung Duong

Vue 3 + TypeScript + Vite + Tailwind CSS 4. Deploy lên GitHub Pages.

## Chạy dự án

```bash
npm install        # cài dependency (cần chạy lại vì đã gỡ element-plus)
npm run dev        # chạy local, mở http://localhost:5173/Portfolio/
npm run build      # kiểm tra type (vue-tsc) + build production vào /dist
npm run preview    # xem thử bản build
npm run deploy     # build + tạo 404.html (để refresh/deep-link không bị 404) + đẩy lên gh-pages
```

## Cập nhật nội dung (không cần sửa component)

| Muốn đổi | Sửa file |
| --- | --- |
| Tên, vai trò, bio, email, SĐT, địa chỉ, link GitHub/LinkedIn/Facebook, đường dẫn CV | `src/data/profile.ts` |
| Dự án (trang Projects) | `src/data/projects.ts` |
| Kinh nghiệm, học vấn, kỹ năng, thông tin About me (trang Resume) | `src/composables/useResumeData.ts` |
| Màu sắc, font, bo góc, button/chip/card dùng chung | `src/style.css` (khối `@theme` và `@layer components`) |

- Link nào để trống (`''`) trong `profile.ts` thì icon/nút tương ứng sẽ tự ẩn.
- Muốn có nút **Download CV**: đặt file vào `public/cv.pdf` rồi đặt `cvUrl: '/cv.pdf'`.
- Đổi ảnh đại diện: thay `src/assets/profile.webp` (nên dùng ảnh nền trong suốt, tỉ lệ dọc, < 100 KB).

## Cấu trúc

```
src/
├─ data/            profile.ts, projects.ts, socials.ts
├─ composables/     useResumeData.ts
├─ router/          index.ts (Home, Projects, Experience/Resume, Contact)
└─ components/
   ├─ layouts/MainLayout.vue   khung trang: header, main, footer
   ├─ Navbar.vue, AppFooter.vue
   ├─ pages/                   Home, Projects, resume, contact
   └─ resume/                  InfoCard, SkillCard, AboutGrid
```
