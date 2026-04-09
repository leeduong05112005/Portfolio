<template>
  <nav class="navbar">
    <div class="logo-container">
      <router-link to="/" class="logo-text">TUNGDUONG</router-link>
    </div>

    <ul class="nav-links">
      <li><router-link to="/" class="nav-link">About</router-link></li>
      <li><router-link to="/experience" class="nav-link">Excursions</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 128px; 
  z-index: 50;
  box-sizing: border-box; 
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 8px; 
  font-weight: bold;
  cursor: pointer;
}

.logo-text {
  margin-left: 80px; 
  color: #0ab2fa;   
  font-size: 30px; 
  letter-spacing: 0.1em; 
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 48px; 
  font-size: 20px; 
  font-weight: 300; 
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;
  padding-bottom: 4px;
  color: #e5e7eb;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #0ab2fa;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-links a.router-link-exact-active {
  color: #0ab2fa;
}

.nav-links a.router-link-exact-active::after {
  width: 100%;
}
</style>