<template>
  <div class="hero-wrapper">
    <div class="hero-container">

      <div class="left-sidebar">
        <div class="vertical-group">
          <span class="vertical-text large">Introduce</span>
          <div class="stars-group">
            <span>✦</span>
            <span class="star-accent">✦</span>
            <span>✦</span>
          </div>
          <span class="vertical-text2 small">介紹</span>
        </div>
      </div>

      <div class="main-content">
        <h1 class="greeting">Hello, I'm</h1>
        <h2 class="name">LE NGUYEN TUNG DUONG</h2>
        <div class="accent-line"></div>

        <p class="description">
          I am a person passionate about <b>Web Development</b> and <b>UI/UX Design</b>.
          I love creating responsive, user-friendly interfaces and exploring new technologies.
        </p>

        <div class="accent-line2"></div>

        <p class="description">
          Tôi có niềm đam mê mãnh liệt với <b>Lập trình Web</b> và <b>Thiết kế UI/UX</b>. 
          Tôi yêu thích việc xây dựng các giao diện người dùng trực quan, hiển thị tối ưu trên đa nền tảng và luôn khao khát tìm tòi những công nghệ mới.
        </p>

        <div class="social-links">
          <a href="#" class="social-btn hover-black">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <a href="#" class="social-btn hover-blue">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <a href="#" class="social-btn hover-pink">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.065c.636-.247 1.363-.416 2.427-.465C8.901 1.553 9.256 1.553 12.315 1.553v.447zM12.315 3.553c-2.684 0-3.003.011-4.06.059-.974.045-1.503.207-1.856.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.08c0 2.597.01 2.917.058 3.96.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-4.041-.058h-.08zm0 4.902a3.545 3.545 0 110 7.09 3.545 3.545 0 010-7.09zm0 1.553a1.992 1.992 0 100 3.984 1.992 1.992 0 000-3.984zM16.5 6.5a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="image-section">
        <div class="image-wrapper">
          <svg class="spinning-border" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="48"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-dasharray="25 8 5 8"
              stroke-linecap="round"
            />
          </svg>
          <div class="profile-mask">
            <img src="../../assets/Untitled-1.png" alt="Profile Picture" class="profile-img" />
          </div>
        </div>
      </div>

      <div class="right-sidebar"></div>

    </div>
  </div>
</template>

<style scoped>
/* --- Layout Tổng --- */
.hero-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #1c1b22;
  border-top-left-radius: 36px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
}

.hero-container {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 16px;
  box-sizing: border-box;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
  color: #ffffff;
}

.vertical-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-weight: bold;
  white-space: nowrap;
  letter-spacing: 0.05em;
}

.vertical-text2 {
  transform: rotate(270deg);
  font-weight: bold;
  white-space: nowrap;
  letter-spacing: 0.05em;
}

.vertical-text.large {
  font-size: 48px;
}

.vertical-text2.small {
  font-size: 24px;
}

.stars-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 20px;
  margin-top: 76px;
}

.star-accent {
  color: #0ab2fa;
}

.main-content {
  flex: 1;
  max-width: 576px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  z-index: 20;
  padding-left: 40px;
}

.greeting {
  font-size: 30px;
  font-weight: 300;
  color: #ffffff;
  margin: 0;
}

.name {
  font-size: 48px;
  font-weight: bold;
  color: #0ab2fa;
  letter-spacing: 0.05em;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 12px;
}

.accent-line {
  width: 80px;
  height: 2px;
  background-color: #0ab2fa;
  margin-bottom: 24px;
}

.accent-line2  {
  width: 420px;
  height: 2px;
  background-color: #0ab2fa;
  margin-bottom: 24px;
}

.description {
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.625;
  margin-bottom: 32px;
  margin-top: 0;
}

.description:last-of-type {
  padding-top: 24px;
  margin-bottom: 0;
}

.social-links {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 24px;
}

.social-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid #0ab2fa;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: transparent;
}

.social-icon {
  width: 24px;
  height: 24px;
  color: #0ab2fa;
  transition: color 0.3s ease;
}

.social-btn:hover .social-icon {
  color: #ffffff;
}

.hover-black:hover {
  border-color: #000000;
  background-color: #000000;
}

.hover-blue:hover {
  border-color: #1d4ed8;
  background-color: #1d4ed8;
}

.hover-pink:hover {
  border-color: #db2777;
  background-color: #db2777;
}

.image-section {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
}

.image-wrapper {
  margin-top: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px; 
  height: 400px;
}

.spinning-border {
  position: absolute;
  width: 110%;
  height: 110%;
  color: #0ab2fa;
  animation: spinSlow 100s linear infinite;
  pointer-events: none;
}

.profile-mask {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  -webkit-mask-image: radial-gradient(circle, black 0%, transparent 100%);
  mask-image: radial-gradient(circle, black 0%, transparent 100%);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-sidebar {
  width: 80px;
  height: 100%;
}

@keyframes spinSlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>