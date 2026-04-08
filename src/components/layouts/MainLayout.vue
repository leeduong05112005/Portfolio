<template>
  <div  class="w-screen h-screen bg-[#1c1b22] rounded-tl-4xl overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden  shadow-xl flex flex-col">
    <Navbar/>

    <div class="flex flex-1 gap-3" >
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../Navbar.vue";

</script>
