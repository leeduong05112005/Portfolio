import { ref } from 'vue'

export const TabPosition = {
  Experience: 'experience',
  Education: 'education',
  Skills: 'skills',
  About: 'about'
} as const

export type TabPosition = typeof TabPosition[keyof typeof TabPosition]

export interface ResumeItem {
  duration: string
  position?: string
  company?: string
  degree?: string
  institution?: string
}

export interface SkillItem {
  icon: string[]
  name: string
}

export interface AboutItem {
  fieldName: string
  fieldValue: string
}

export function useResumeData() {
  const tabPosition = ref<TabPosition>(TabPosition.Experience)

  const aboutMe = {
    title: 'About me',
    description: 'Lorem asdfasf asdfq erqw afaso ii9i jiojoij jhiuh uhioua oiuho iuagrb hakjw hasdkf qrke',
    info: [
      { fieldName: 'Name', fieldValue: 'Le Nguyen Tung Duong' },
      { fieldName: 'Phone', fieldValue: '(+84) 819 951 939' },
      { fieldName: 'GitHub', fieldValue: 'leeduong05112005' },
      { fieldName: 'Nationality', fieldValue: 'Viet Nam' },
      { fieldName: 'Freelance', fieldValue: 'Available' },
      { fieldName: 'Language', fieldValue: 'English' },
      { fieldName: 'Email', fieldValue: 'leduong05112005@gmail.com' }
    ]
  }

  const experienceList = {
    title: 'My experience',
    description: 'Lorem asdfasf asdfq erqw afaso ii9i jiojoij jhiuh uhioua oiuho iuagrb hakjw hasdkf qrke',
    info: [
      { duration: '2025 - 2026', position: 'Front-end Developer Internship', company: 'MK Group' }
    ]
  }

  const educationList = {
    title: 'My education',
    description: 'Lorem ...',
    info: [
      { duration: '2023', institution: 'Online Course Platform', degree: 'Full Stack Web Development Bootcamp' },
      { duration: '2023', institution: 'Codecademy', degree: 'Front-end Track' },
      { duration: '2023 - 2024', institution: 'Online Course', degree: 'Programming Course' }
    ]
  }

  const skill = {
    title: 'My skills',
    description: 'Lorem...',
    info: [
      { icon: ['fab', 'vuejs'], name: 'vue.js' },
      { icon: ['fab', 'html5'], name: 'html 5' },
      { icon: ['fab', 'css3'], name: 'css 3' },
      { icon: ['fab', 'js'], name: 'javascript' },
      { icon: ['fab', 'python'], name: 'python' }
    ]
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