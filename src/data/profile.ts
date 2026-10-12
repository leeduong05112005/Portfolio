/**
 * Thông tin cá nhân dùng chung toàn site (Home, Contact, Footer, Resume).
 * Chỉ cần sửa ở đây là mọi nơi được cập nhật.
 * Để trống ('') một đường link nếu chưa có -> nút tương ứng sẽ tự ẩn.
 */
export const profile = {
  name: 'Le Nguyen Tung Duong',
  shortName: 'Le Duong',
  role: 'Internship',
  school: 'Thang Long University',

  email: 'leduong05112005@gmail.com',
  phone: '(+84) 819 951 939',
  phoneHref: '+84819951939',
  location: 'Từ Liêm, Hà Nội',

  links: {
    github: 'https://github.com/leeduong05112005',
    // TODO: điền link thật để hiện icon trên Hero và Footer
    linkedin: '',
    facebook: ''
  },

  // TODO: đặt file CV vào thư mục /public (vd: public/cv.pdf) rồi điền '/cv.pdf'.
  // Để trống thì nút "Download CV" sẽ không hiển thị.
  cvUrl: '',

  availability: 'Available for freelance',

  bio: {
    en: 'I am a person passionate about Web Development and UI/UX Design. I love creating responsive, user-friendly interfaces and exploring new technologies.',
    vi: 'Tôi có niềm đam mê mãnh liệt với Lập trình Web và Thiết kế UI/UX. Tôi yêu thích việc xây dựng các giao diện người dùng trực quan, hiển thị tối ưu trên đa nền tảng và luôn khao khát tìm tòi những công nghệ mới.'
  }
} as const
