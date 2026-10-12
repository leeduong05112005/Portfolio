import { ref } from 'vue'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { profile } from '../data/profile'

export const TabPosition = {
  Experience: 'experience',
  Education: 'education',
  Skills: 'skills',
  About: 'about'
} as const

export type TabPosition = typeof TabPosition[keyof typeof TabPosition]

export interface ResumeItem {
  duration: string
  title: string
  subtitle: string
  /** Gạch đầu dòng mô tả công việc/thành tích. TODO: bổ sung nếu có. */
  highlights?: string[]
}

export interface SkillItem {
  name: string
  icon?: IconProp
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface AboutItem {
  fieldName: string
  fieldValue: string
  href?: string
}

export function useResumeData() {
  const tabPosition = ref<TabPosition>(TabPosition.Experience)

  const aboutMe = {
    title: 'About me',
    description: `IT student at ${profile.school}, focusing on front-end development and UI/UX.`,
    info: [
      { fieldName: 'Name', fieldValue: 'Le Nguyen Tung Duong' },
      { fieldName: 'Phone', fieldValue: profile.phone, href: `tel:${profile.phoneHref}` },
      { fieldName: 'GitHub', fieldValue: 'leeduong05112005', href: profile.links.github },
      { fieldName: 'Nationality', fieldValue: 'Viet Nam' },
      { fieldName: 'Freelance', fieldValue: 'Available' },
      { fieldName: 'Language', fieldValue: 'English' },
      { fieldName: 'Email', fieldValue: profile.email, href: `mailto:${profile.email}` }
    ] as AboutItem[]
  }

  const experienceList = {
    title: 'My experience',
    description: 'Internship and hands-on experience in front-end development.',
    info: [
      {
        duration: '2025 - 2026',
        title: 'Front-end Developer Internship',
        subtitle: 'MK Group'
        // TODO: highlights: ['Việc đã làm / công nghệ / kết quả thực tế...']
      }
    ] as ResumeItem[]
  }

  const educationList = {
    title: 'My education',
    description: 'University studies and self-paced courses in IT and web development.',
    info: [
      {
        duration: '2023 - 2027 (expected)',
        title: 'Computer networks and data communications',
        subtitle: 'Thang Long University'
      },
      { duration: '2023', title: 'Full Stack Web Development Bootcamp', subtitle: 'Online Course Platform' },
      { duration: '2023', title: 'Front-end Track', subtitle: 'Codecademy' }
    ] as ResumeItem[]
  }

  const skill = {
    title: 'My skills',
    description: 'Technologies I use to build web interfaces.',
    groups: [
      {
        title: 'Front-end',
        items: [
          { name: 'Vue.js', icon: ['fab', 'vuejs'] },
          { name: 'React', icon: ['fab','react']},
          { name: 'HTML5', icon: ['fab', 'html5'] },
          { name: 'CSS3', icon: ['fab', 'css3'] },
          { name: 'Tailwind CSS' }
        ]
      },
      {
        title: 'Languages',
        items: [{ name: 'JavaScript', icon: ['fab', 'js'] }, { name: 'TypeScript' }, { name: 'Python', icon: ['fab', 'python'] }]
      },
      {
        title: 'Tools',
        items: [{ name: 'Git & GitHub', icon: ['fab', 'github'] }, { name: 'Vite' }]
      },
      {
        title: 'Embedded / IoT',
        items: [{ name: 'ESP32', icon: ['fas', 'microchip'] }, { name: 'Arduino', icon: ['fas', 'microchip'] }]
      }
    ] as SkillGroup[]
  }

  return {
    tabPosition,
    TabPosition,
    aboutMe,
    experienceList,
    educationList,
    skill
  }
}
