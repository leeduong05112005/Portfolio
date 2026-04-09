<template>
  <div class="resume-wrapper">
    <div class="resume-container">
      
      <div class="resume-sidebar">
        <div class="sidebar-header">
          <h2 class="sidebar-title">Why hire me?</h2>
          <p class="sidebar-desc">
            I am a fast learner with a strong work ethic and a genuine desire to contribute to the success of the company.
          </p>
        </div>

        <div class="tab-list">
          <button 
            @click='tabPosition = "experience"' 
            class="tab-btn" 
            :class="{ active: tabPosition === 'experience' }"
          >Experience</button>
          <button 
            @click='tabPosition = "education"' 
            class="tab-btn" 
            :class="{ active: tabPosition === 'education' }"
          >Education</button>
          <button 
            @click='tabPosition = "skills"' 
            class="tab-btn" 
            :class="{ active: tabPosition === 'skills' }"
          >Skills</button>
          <button 
            @click='tabPosition = "about"' 
            class="tab-btn" 
            :class="{ active: tabPosition === 'about' }"
          >About me</button>
        </div>
      </div>

      <div class="resume-content">
        
        <div v-if="tabPosition === 'experience'" class="tab-pane">
          <div class="content-header">
            <h2 class="content-title">{{ experienceList.title }}</h2>
            <p class="content-desc">{{ experienceList.description }}</p>
          </div>
          <div class="scroll-container">
            <div class="grid-2-cols">
              <div
                v-for="(item, index) in experienceList.info"
                :key="index"
                class="info-card"
              >
                <span class="info-duration">{{ item.duration }}</span>
                <h3 class="info-title" :title="item.position">{{ item.position }}</h3>
                <div class="info-subtitle-wrapper">
                  <span class="info-dot"></span>
                  <span class="info-subtitle" :title="item.company">{{ item.company }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="tabPosition === 'education'" class="tab-pane">
          <div class="content-header">
            <h2 class="content-title">{{ educationList.title }}</h2>
            <p class="content-desc">{{ educationList.description }}</p>
          </div>
          <div class="scroll-container">
            <div class="grid-2-cols">
              <div
                v-for="(item, index) in educationList.info"
                :key="index"
                class="info-card"
              >
                <span class="info-duration">{{ item.duration }}</span>
                <h3 class="info-title" :title="item.degree">{{ item.degree }}</h3>
                <div class="info-subtitle-wrapper">
                  <span class="info-dot"></span>
                  <span class="info-subtitle" :title="item.institution">{{ item.institution }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="tabPosition === 'skills'" class="tab-pane">
          <div class="content-header">
            <h2 class="content-title">{{ skill.title }}</h2>
            <p class="content-desc">{{ skill.description }}</p>
          </div>
          <div class="scroll-container skills-scroll">
            <div class="grid-4-cols">
              <div
                v-for="(item, index) in skill.info"
                :key="index"
                class="skill-card"
              >
                <font-awesome-icon
                  :icon="item.icon"
                  class="skill-icon"
                />
                <span class="skill-name">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="tabPosition === 'about'" class="tab-pane">
          <div class="content-header">
            <h2 class="content-title">{{ aboutMe.title }}</h2>
            <p class="content-desc">{{ aboutMe.description }}</p>
          </div>
          <div class="about-grid">
            <div v-for="(item, index) in aboutMe.info" :key="index" class="about-item">
              <span class="about-label">{{ item.fieldName }}</span>
              <span class="about-value">{{ item.fieldValue }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tabPosition = ref('experience');

const aboutMe = {
  title: 'About me',
  description: 'Lorem asdfasf asdfq erqw afaso ii9i jiojoij jhiuh uhioua oiuho iuagrb hakjw hasdkf qrke',
  info: [
    { fieldName: "Name", fieldValue: "Duong" },
    { fieldName: "Phone", fieldValue: "(+84) 819 951 939" },
    { fieldName: "GitHub", fieldValue: "leeduong05112005" },
    { fieldName: "Nationality", fieldValue: "Viet Nam" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English" },
    { fieldName: "Email", fieldValue: "leduong05112005@gmail.com" }
  ]
}

const experienceList = {
  title: 'My experience',
  description: 'Lorem asdfasf asdfq erqw afaso ii9i jiojoij jhiuh uhioua oiuho iuagrb hakjw hasdkf qrke',
  info: [
    { company: 'MK Group', position: 'Front-end Developer', duration: '2025 - 2026' }
  ]
}

const educationList = {
  title: 'My education',
  description: 'Lorem ...',
  info: [
    { institution : "Online Course Platform", degree: "Full Stack Web Development Bootcamp", duration: "2023" },
    { institution : "Codecademy", degree: "Front-end Track", duration: '2023' },
    { institution : "Online Course", degree: "Programming Course", duration: '2023 - 2024' }
  ]
}

const skill = {
  title: 'My skills',
  description: "Lorem...",
  info: [
    { icon: ['fab', 'vuejs'], name: 'vue.js' },
    { icon: ['fab', 'html5'], name: 'html 5' },
    { icon: ['fab', 'css3'], name: 'css 3' },
    { icon: ['fab', 'js'], name: 'javascript' }
  ]
}
</script>

<style scoped>
.resume-wrapper {
  min-height: 100vh;
  background-color: #1c1c22;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  color: #ffffff;
  box-sizing: border-box;
}

.resume-container {
  width: 100%;
  max-width: 1152px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  padding: 16px;
  background-color: #1c1b22;
  position: relative;
}

@media (min-width: 1024px) {
  .resume-container {
    grid-template-columns: repeat(12, 1fr);
  }
  .resume-sidebar {
    grid-column: span 4;
  }
  .resume-content {
    grid-column: span 8;
  }
}

.resume-sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-header {
  text-align: left;
  margin-bottom: 20px;
}

.sidebar-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
}

.sidebar-desc {
  color: #9ca3af;
  font-size: 14px;
  line-height: 1.625;
}

.tab-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

@media (min-width: 1280px) {
  .tab-list {
    margin: 0;
  }
}

.tab-btn {
  width: 100%;
  font-weight: bold;
  padding: 12px 0;
  background-color: #28272c;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  background-color: #2f2e33;
}

.tab-btn.active {
  background-color: #0ab2fa;
  color: #ffffff;
}

.resume-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 550px;
}

.tab-pane {
  width: 100%;
  height: 100%;
}

.content-header {
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
}

.content-desc {
  color: #9ca3af;
  font-size: 14px;
  line-height: 1.625;
  margin-bottom: 32px;
}

.scroll-container {
  height: 440px;
  overflow-y: auto;
  padding-right: 16px;
}

.skills-scroll {
  height: 480px;
}

.scroll-container::-webkit-scrollbar {
  width: 6px;
}
.scroll-container::-webkit-scrollbar-track {
  background: #1c1b22;
}
.scroll-container::-webkit-scrollbar-thumb {
  background-color: #0ab2fa;
  border-radius: 20px;
}

.grid-2-cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .grid-2-cols {
    grid-template-columns: repeat(2, 1fr);
  }
}

.info-card {
  background-color: #232329;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 180px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.info-card:hover {
  background-color: #2a2a32;
}

.info-duration {
  color: #0ab2fa;
  font-weight: 600;
  font-size: 18px;
}

.info-title {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
}

.info-subtitle-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.info-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #0ab2fa;
}

.info-subtitle {
  color: #9ca3af;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid-4-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (min-width: 768px) {
  .grid-4-cols {
    grid-template-columns: repeat(4, 1fr);
  }
}

.skill-card {
  background-color: #232329;
  height: 150px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: background-color 0.3s;
}

.skill-card:hover {
  background-color: #2a2a32;
}

.skill-icon {
  font-size: 48px;
  color: #ffffff;
  transition: color 0.3s;
}

.skill-card:hover .skill-icon {
  color: #0ab2fa;
}

.skill-name {
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: capitalize;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  column-gap: 40px;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.about-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.about-label {
  color: #9ca3af;
  font-size: 14px;
  font-weight: 500;
  width: max-content;
}

.about-value {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}
</style>