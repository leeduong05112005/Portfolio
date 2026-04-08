<template>
  <nav class="absolute top-0 left-0 w-full flex items-center justify-between px-32 py-10 z-50">
    <div class="flex items-center gap-2 font-bold cursor-pointer">
      <span class="text-white ml-20 tracking-widest text-3xl color-[#0ab2fa]"><router-link to="/">TUNGDUONG</router-link></span>
    </div>

    <ul class="flex gap-12 text-xl font-light text-white">
      <li><router-link to="/" class="nav-link">About</router-link></li>
<!--      <li><router-link to="/education" class="nav-link">Education</router-link></li>-->
      <li><router-link to="/experience" class="nav-link">Excursions</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
  color: #e5e7eb;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #fff;
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

nav a.router-link-exact-active {
  color: #0ab2fa;
  text-decoration: none;
}
</style>
