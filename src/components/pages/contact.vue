<template>
  <div class="min-h-screen bg-[#1c1c22] flex items-center justify-center pt-12 px-4 sm:px-6 lg:px-8 font-primary" >
    <div class="container mx-auto max-w-7xl">
      <div class="flex flex-col xl:flex-row gap-[30px]">

        <div class="xl:w-[60%] order-2 xl:order-none">
          <form class="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl text-start">
            <h3 class="text-4xl text-[#0AB2FA] font-bold">Let's work together</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nihil sapiente pariatur id totam.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 flex">
              <el-input v-model="firstname" placeholder="Firstname" class="input-dark" />
              <el-input v-model="lastname" placeholder="Lastname" class="input-dark" />
              <el-input v-model="email" placeholder="Email address" class="input-dark" />
              <el-input v-model="phone" placeholder="Phone number" class="input-dark" />
            </div>

            <el-select
                v-model="service"
                placeholder="Select a service"
                class="custom-select w-full"
                popper-class="custom-dropdown"
            >
              <el-option label="Web Development" value="web" />
              <el-option label="UI/UX Design" value="uiux" />
              <el-option label="Logo Design" value="logo" />
              <el-option label="None" value="" />
            </el-select>

            <el-input
                v-model="message"
                type="textarea"
                :rows="6"
                placeholder="Type your message here."
                class="custom-textarea"
            />

            <div class="mt-2">
              <el-button class="!bg-[#0AB2FA] !text-[#1c1c22] !border-none !rounded-full !px-10 !py-6 !font-bold hover:!bg-[#0AB2FA]/80 transition-all">
                Send message
              </el-button>
            </div>
          </form>
        </div>

        <div class="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
          <ul class="flex flex-col gap-10">
            <li v-for="(item, index) in info" :key="index" class="flex items-center gap-6">
              <div class="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#0AB2FA] rounded-md flex items-center justify-center">
                <div class="text-[28px]">
                  <font-awesome-icon :icon="item.icon" />
                </div>
              </div>
              <div class="flex-1 text-start">
                <p class="text-white/60 text-[28px] mb-1 text-[#0AB2FA]">{{ item.title }}</p>
                <h3 class="text-xl text-white font-semibold">{{ item.desc }}</h3>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const phone = ref('')
const service = ref('')
const message = ref('')

const info = [
  {
    icon: ['fas', 'phone'],
    title: 'Phone',
    desc: "(+84) 819 951 939"
  },
  {
    icon: ['fas', 'envelope'],
    title: 'Email',
    desc: "leduong05112005@gmail.com"
  },
  {
    icon: ['fas', 'location-dot'],
    title: 'Address',
    desc: "Mễ trì, Nam Từ Liêm, Hà Nội"
  },
]
</script>

<style scoped>

:deep(.input-dark) {
  height: 48px;
  border-radius: 6px;
}

:deep(.input-dark .el-input__wrapper) {
  height: 48px;
  background-color: #232329;
  border-radius: 6px;
  padding: 0 14px;

  border: 1px solid rgba(255, 255, 255, 0);
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  transition: border-color 0.2s ease;
}

/* hover */
:deep(.input-dark:hover .el-input__wrapper) {
  border-color: #0ab2fa;
}

/* focus */
:deep(.input-dark:focus .el-input__wrapper) {
  border-color: #0ab2fa;
}

/* text */
:deep(.input-dark .el-input__inner) {
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
}

/* placeholder */
:deep(.input-dark .el-input__inner::placeholder) {
  color: rgba(255, 255, 255, 0.6);
}

:deep(.custom-select) {
  height: 48px;
}

:deep(.custom-select .el-select__wrapper) {
  height: 48px;
  background: #232329;
  border-radius: 6px;
  padding: 0 14px;

  border: 1px solid rgba(255, 255, 255, 0);
  box-shadow: none;

  transition: border-color 0.2s ease;
}

/* hover */
:deep(.custom-select:hover .el-select__wrapper) {
  border-color: #0ab2fa;
}

:deep(.el-select__wrapper.is-hovering:not(.is-focus)) {
  box-shadow: 0 0 0 #000000;
}

/* focus */
:deep(.custom-select.is-focus .el-select__wrapper) {
  border-color: #0ab2fa;
}

/* text */
:deep(.custom-select .el-input__inner) {
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
}

/* dropdown */
:deep(.custom-dropdown) {
  background-color: #27272c;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.custom-dropdown .el-select-dropdown__item) {
  color: #ffffff;
}

:deep(.custom-dropdown .el-select-dropdown__item.is-selected) {
  color: #0ab2fa;
}

/* =========================
   EL-TEXTAREA
========================= */
:deep(.custom-textarea .el-textarea__inner) {
  background-color: #232329;
  border-radius: 8px;
  padding: 12px 14px;

  border: 1px solid rgba(255, 255, 255, 0);
  box-shadow: none;

  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  height: 80px;
  max-height: 200px;
  overflow: hidden;

  transition: border-color 0.2s ease;
}

/* hover */
:deep(.custom-textarea .el-textarea__inner:hover) {
  border-color: #0ab2fa;
}

/* focus */
:deep(.custom-textarea .el-textarea__inner:focus) {
  border-color: #0ab2fa;
}

/* placeholder */
:deep(.custom-textarea .el-textarea__inner::placeholder) {
  color: rgba(255, 255, 255, 0.6);
}


</style>
