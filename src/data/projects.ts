export interface Project {
  title: string
  description: string
  role?: string
  tech: string[]
  features?: string[]
  repo?: string
  demo?: string
}

/**
 * Danh sách dự án hiển thị ở trang /projects (nội dung hiển thị viết bằng tiếng Anh cho đồng bộ giao diện).
 * TODO: thêm các dự án thật của bạn (bootcamp, Codecademy, thực tập MK Group, đồ án trường...)
 * theo đúng mẫu bên dưới. Chỉ điền những gì có thật – field nào không có thì bỏ trống/bỏ đi.
 */
export const projects: Project[] = [
  {
  title: 'IoT Smart Plant Watering System',
  description:
    'An automatic plant watering system built around an ESP32 that reads soil moisture and waters the plant when it gets dry.',
  role: 'Hardware wiring & firmware development',   
  tech: ['ESP32', 'Arduino IDE', 'C++', 'Soil moisture sensor', 'Relay module', 'Water pump'],
  features: [
    'Wired the ESP32 with soil moisture sensor, relay and pump on a breadboard',
    'Wrote firmware in C++ that reads the sensor and turns the pump on below a moisture threshold',
  ],
  repo: 'https://github.com/leeduong05112005/IoT-Smart-Farm' 
  },
  {
    title: 'Personal Portfolio',
    description:
      'My personal portfolio website, presenting my profile, skills, experience and contact information.',
    role: 'Design & development',
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vue Router'],
    features: [
      'Responsive layout for desktop, tablet and mobile',
      'Content kept in separate data files for easy updates',
      'Deployed on GitHub Pages'
    ],
    repo: 'https://github.com/leeduong05112005/Portfolio'
  },
  {
  title: 'Movie Browsing Web App',
  description:
    'A single-page app for browsing movies by genre, country and keyword, with an episode picker and embedded player. Consumes a public REST API.',
  role: 'Front-end development',   // đúng nếu bạn làm toàn bộ phần giao diện
  tech: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router', 'Element Plus', 'REST API'],
  features: [
    'Fetches and renders data from a public REST API (movies, genres, countries, search)',
    'Listing, genre, country and search pages with pagination',
    'Watch page with episode selection',
    'Migrated the data layer from one API to another by adapting the service layer and response parsing'
  ],
  repo: 'https://github.com/leeduong05112005/PhimCuaTao'
}
]
