<template>
  <div class="contact-wrapper">
    <div class="contact-container">
      
      <div class="contact-content">
        
        <div class="contact-form-section">
          <form class="form-card">
            <h3 class="form-title">Let's work together</h3>
            <p class="form-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nihil sapiente pariatur id totam.
            </p>

            <div class="input-grid">
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

            <div class="submit-wrapper">
              <el-button class="submit-btn">
                Send message
              </el-button>
            </div>
          </form>
        </div>

        <div class="contact-info-section">
          <ul class="info-list">
            <li v-for="(item, index) in info" :key="index" class="info-item">
              <div class="icon-box">
                <font-awesome-icon :icon="item.icon" class="info-icon" />
              </div>
              <div class="info-text">
                <p class="info-label">{{ item.title }}</p>
                <h3 class="info-value">{{ item.desc }}</h3>
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
    desc: "Từ Liêm, Hà Nội"
  },
]
</script>

<style scoped>

.contact-wrapper {
  min-height: 100vh;
  background-color: #1c1c22;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .contact-wrapper { padding: 48px 24px; }
}

@media (min-width: 1024px) {
  .contact-wrapper { padding: 48px 32px; }
}

.contact-container {
  width: 100%;
  max-width: 1280px; 
  margin: 0 auto;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (min-width: 1280px) {
  .contact-content {
    flex-direction: row;
  }
}

.contact-form-section {
  order: 2; 
}

@media (min-width: 1280px) {
  .contact-form-section {
    width: 60%;
    order: 1; 
  }
}

.form-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background-color: #27272c;
  border-radius: 12px;
  text-align: left;
}

.form-title {
  font-size: 36px; 
  color: #0ab2fa;
  font-weight: bold;
  margin: 0;
}

.form-desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.625;
  margin: 0;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .input-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.submit-wrapper {
  margin-top: 8px;
}

:deep(.submit-btn) {
  background-color: #0ab2fa !important;
  color: #1c1c22 !important;
  border: none !important;
  border-radius: 9999px !important;
  padding: 24px 40px !important;
  font-weight: bold !important;
  font-size: 16px !important;
  transition: background-color 0.3s ease !important;
}

:deep(.submit-btn:hover) {
  background-color: rgba(10, 178, 250, 0.8) !important;
}

.contact-info-section {
  flex: 1;
  display: flex;
  align-items: center;
  order: 1; /* Trên mobile nằm trên */
  margin-bottom: 32px;
}

@media (min-width: 1280px) {
  .contact-info-section {
    justify-content: center;
    order: 2; /* Trên desktop nằm phải */
    margin-bottom: 0;
  }
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 24px;
}

.icon-box {
  width: 52px;
  height: 52px;
  background-color: #27272c;
  color: #0ab2fa;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon {
  font-size: 28px;
}

@media (min-width: 1280px) {
  .icon-box {
    width: 72px;
    height: 72px;
  }
}

.info-text {
  flex: 1;
  text-align: left;
}

.info-label {
  color: #0ab2fa;
  font-size: 16px;
  margin-bottom: 4px;
  margin-top: 0;
}

.info-value {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.w-full {
  width: 100%;
}

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

:deep(.input-dark:hover .el-input__wrapper),
:deep(.input-dark:focus .el-input__wrapper),
:deep(.input-dark.is-focus .el-input__wrapper) {
  border-color: #0ab2fa;
}

:deep(.input-dark .el-input__inner) {
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
}

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

:deep(.custom-select:hover .el-select__wrapper),
:deep(.custom-select.is-focus .el-select__wrapper) {
  border-color: #0ab2fa;
}

:deep(.el-select__wrapper.is-hovering:not(.is-focus)) {
  box-shadow: 0 0 0 transparent;
}

:deep(.custom-select .el-input__inner) {
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
}

:deep(.custom-dropdown) {
  background-color: #27272c;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.custom-dropdown .el-select-dropdown__item) {
  color: #ffffff;
}

:deep(.custom-dropdown .el-select-dropdown__item.hover),
:deep(.custom-dropdown .el-select-dropdown__item:hover) {
  background-color: #232329;
}

:deep(.custom-dropdown .el-select-dropdown__item.is-selected) {
  color: #0ab2fa;
  font-weight: bold;
}


:deep(.custom-textarea .el-textarea__inner) {
  background-color: #232329;
  border-radius: 8px;
  padding: 12px 14px;
  border: 1px solid rgba(255, 255, 255, 0);
  box-shadow: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  min-height: 120px !important;
  max-height: 250px;
  overflow-y: auto;
  transition: border-color 0.2s ease;
}

:deep(.custom-textarea .el-textarea__inner:hover),
:deep(.custom-textarea .el-textarea__inner:focus) {
  border-color: #0ab2fa;
}

:deep(.custom-textarea .el-textarea__inner::placeholder) {
  color: rgba(255, 255, 255, 0.6);
}
</style>