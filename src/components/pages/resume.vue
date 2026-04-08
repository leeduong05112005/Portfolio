<template>
  <div class="min-h-screen bg-[#1c1c22] flex items-center justify-center pt-12 px-4 sm:px-6 lg:px-8 font-primary" >
    <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 p-4 bg-[#1c1b22] relative">
      <div class="lg:col-span-4 flex flex-col gap-2">
        <div class="text-start justify-center">
          <h2 class="text-3xl font-bold mb-4">Why hire me?</h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-5">
            I am a fast learner with a strong work ethic and a genuine desire to contribute to the success of the company.
          </p>
        </div>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col max-w-[380px] mx-auto xl:mx-0 gap-5">
            <button @click='tabPosition = "experience"' class="w-full font-bold py-3 bg-[#28272c]">Experience</button>
            <button @click='tabPosition = "education"' class="w-full font-bold py-3 bg-[#28272c] ">Education</button>
            <button @click='tabPosition = "skills"' class="w-full font-bold py-3 bg-[#28272c] ">Skills</button>
            <button @click='tabPosition = "about"' class="w-full font-bold py-3 bg-[#28272c] ">About me</button>
          </div>
        </div>
      </div>

      <div class="lg:col-span-8 flex flex-col text-start h-[550px]">
        <div v-if="tabPosition === 'experience'" class="w-full h-full">
          <div class="min-h-[120px] text-start justify-center">
            <h2 class="text-3xl font-bold mb-4">{{ experienceList.title }}</h2>
            <p class="text-gray-400 text-sm mb-8 leading-relaxed">{{ experienceList.description }}</p>
          </div>

          <div class="h-[440px] overflow-y-auto pr-4 custom-scrollbar">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                  v-for="(item, index) in experienceList.info"
                  :key="index"
                  class="bg-[#232329] p-6 rounded-xl flex flex-col justify-center gap-2 h-[180px] hover:bg-[#2a2a32] transition-colors cursor-pointer"
              >
                <span class="text-[#0AB2FA] font-semibold text-lg">{{ item.duration }}</span>
                <h3 class="text-xl font-bold mt-1 text-white truncate" :title="item.position">{{ item.position }}</h3>
                <div class="flex items-center gap-2 mt-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#0AB2FA]"></span>
                  <span class="text-gray-400 text-sm truncate" :title="item.company">{{ item.company }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="tabPosition === 'education'" class="w-full h-full">
          <div class="min-h-[120px] text-start justify-center">
            <h2 class="text-3xl font-bold mb-4">{{ educationList.title }}</h2>
            <p class="text-gray-400 text-sm mb-8 leading-relaxed">{{ educationList.description }}</p>
          </div>

          <div class="h-[440px] overflow-y-auto pr-4 custom-scrollbar">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                  v-for="(item, index) in educationList.info"
                  :key="index"
                  class="bg-[#232329] p-6 rounded-xl flex flex-col justify-center gap-2 h-[180px] hover:bg-[#2a2a32] transition-colors cursor-pointer"
              >
                <span class="text-[#0AB2FA] font-semibold text-lg">{{ item.duration }}</span>
                <h3 class="text-xl font-bold mt-1 text-white truncate" :title="item.degree">{{ item.degree }}</h3>
                <div class="flex items-center gap-2 mt-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#0AB2FA]"></span>
                  <span class="text-gray-400 text-sm truncate" :title="item.institution">{{ item.institution }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="tabPosition === 'skills'" class="w-full h-full">
          <div class="min-h-[120px] text-start justify-center">
            <h2 class="text-3xl font-bold mb-4">{{ skill.title }}</h2>
            <p class="text-gray-400 text-sm mb-8 leading-relaxed">{{ skill.description }}</p>
          </div>

          <div class="h-[480px] overflow-y-auto pr-4 custom-scrollbar">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div
                  v-for="(item, index) in skill.info"
                  :key="index"
                  class="bg-[#232329] h-[150px] rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-[#2a2a32] transition-colors group"
              >
                <div class="text-5xl text-white group-hover:text-[#0AB2FA] transition-colors">
                  <font-awesome-icon
                      :icon="item.icon"
                      class="text-5xl group-hover:text-[#0AB2FA] transition-colors"
                  />
                </div>
                <span class="font-semibold tracking-wider">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="tabPosition === 'about'" class="w-full h-full">
          <div class="min-h-[120px] text-start justify-center">
            <h2 class="text-3xl font-bold mb-4">{{ aboutMe.title }}</h2>
            <p class="text-gray-400 text-sm mb-8 leading-relaxed">{{ aboutMe.description }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
            <div v-for="(item, index) in aboutMe.info" :key="index" class="flex items-center gap-5">
              <span class="text-gray-400 text-sm font-medium w-fit">{{ item.fieldName }}</span>
              <span class="text-xl font-bold text-white">{{ item.fieldValue }}</span>
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
    {
      fieldName: "Name",
      fieldValue: "Duong",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 819 951 939",
    },
    {
      fieldName: "GitHub",
      fieldValue: "leeduong05112005",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Viet Nam",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
    fieldName: "Language",
    fieldValue: "English",
    },
    {
      fieldName: "Email",
      fieldValue: "leduong05112005@gmail.com",
    },
  ]
}

const experienceList = {
  title: 'My experience',
  description: 'Lorem asdfasf asdfq erqw afaso ii9i jiojoij jhiuh uhioua oiuho iuagrb hakjw hasdkf qrke',
  info: [
    {
      company: 'MK Group',
      position: 'Front-end Developer',
      duration: '2025 - 2026'
    },
  ]
}

const educationList = {
  title: 'My education',
  description: 'Lorem ...',
  info: [
    {
      institution : "Online Course Platform",
      degree: "Full Stak Web Development Bootcamp",
      duration: "2023"
    },
    {
      institution : "Codecademy",
      degree: "Front-end Track",
      duration: '2023'
    },
    {
      institution : "Online Course",
      degree: "Programming Course",
      duration: '2023 - 2024'
    },
  ]
}

const skill =  {
  title: 'My skills',
  description: "Lorem...",
  info: [
    {
      icon: ['fab', 'vuejs'],
      name: 'vue.js',
    },
    {
      icon: ['fab', 'html5'],
      name: 'html 5',
    },
    {
      icon: ['fab', 'css3'],
      name: 'css 3',
    },
    {
      icon: ['fab', 'js'],
      name: 'javascript',
    }
  ]
}
</script>

<style scoped>
/* Scrollbar Styling */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #1c1b22;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #0AB2FA;
  border-radius: 20px;
}


</style>
