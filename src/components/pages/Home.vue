<template>
  <div class="w-screen h-screen bg-[#1c1b22] rounded-tl-4xl overflow-hidden shadow-xl flex flex-col">

    <div class="flex flex-1 w-full h-full items-center justify-between px-4 gap-4">

      <div class="flex flex-col justify-center items-center w-20 text-white h-full">
        <div class="flex flex-col items-center gap-8"> <span class="transform -rotate-90 text-5xl font-bold tracking-wide whitespace-nowrap">Introduce</span>
          <div class="flex flex-col gap-2 text-xl mt-19 text-white">
            <div>✦</div>
            <div class="text-[#0ab2fa]">✦</div>
            <div>✦</div>
          </div>
          <span class="transform -rotate-90 text-2xl font-bold">介紹</span>
        </div>
      </div>

      <div class="flex-1 max-w-xl flex flex-col text-start justify-center z-20 pl-10">
        <h1 class="text-3xl font-light  text-white">Hello, I'm</h1>
        <h2 class="text-5xl font-bold mb-3 text-[#0ab2fa] tracking-wide leading-tight">LE NGUYEN TUNG DUONG</h2>

        <div class="w-20 h-1 bg-[#0ab2fa] mb-6"></div>

        <p class="mb-8 text-white leading-relaxed font-light text-lg">
          I am a person passionate about <b>Web Development</b> and <b>UI/UX Design</b>.
          I love creating responsive, user-friendly interfaces and exploring new technologies.
        </p>

        <hr>

        <p class="text-white leading-relaxed font-light text-lg py-6">
          Tôi có niềm đam mê mãnh liệt với <b>Lập trình Web</b> và <b>Thiết kế UI/UX</b>. 
          Tôi yêu thích việc xây dựng các giao diện người dùng trực quan, hiển thị tối ưu trên đa nền tảng và luôn khao khát tìm tòi những công nghệ mới.
        </p>

        <div class="flex gap-5 items-center">
          <a href="#" class="group relative p-2 rounded-full border border-[#0ab2fa] hover:border-black hover:bg-black transition-all duration-300">
            <svg class="w-6 h-6 text-[#0ab2fa] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <a href="#" class="group relative p-2 rounded-full border border-[#0ab2fa] hover:border-blue-700 hover:bg-blue-700 transition-all duration-300">
            <svg class="w-6 h-6 text-[#0ab2fa] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <a href="#" class="group relative p-2 rounded-full border border-[#0ab2fa] hover:border-pink-600 hover:bg-pink-600 transition-all duration-300">
            <svg class="w-6 h-6 text-[#0ab2fa] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.065c.636-.247 1.363-.416 2.427-.465C8.901 1.553 9.256 1.553 12.315 1.553v.447zM12.315 3.553c-2.684 0-3.003.011-4.06.059-.974.045-1.503.207-1.856.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.08c0 2.597.01 2.917.058 3.96.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-4.041-.058h-.08zm0 4.902a3.545 3.545 0 110 7.09 3.545 3.545 0 010-7.09zm0 1.553a1.992 1.992 0 100 3.984 1.992 1.992 0 000-3.984zM16.5 6.5a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="flex items-start justify-center p-6">
        <div class="mt-15 relative flex justify-center items-center">

          <svg class="absolute w-[110%] h-[110%] animate-[spin_100s_linear_infinite] text-[#0ab2fa]" viewBox="0 0 100 100">
            <circle
                cx="50" cy="50" r="48"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-dasharray="25 8 5 8"
                stroke-linecap="round"
            />
          </svg>
          <div class="w-100 h-100 rounded-full overflow-hidden shadow-xl z-10 [mask-image:radial-gradient(circle,black_0%,transparent_100%)]">
            <img src="../../assets/Untitled-1.png" alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center h-full w-20 text-white">
<!--        <div class="flex flex-col items-center gap-16">-->
<!--          <h1 class="transform -rotate-90 text-6xl font-bold tracking-wide whitespace-nowrap">Tour</h1>-->
<!--          <span class="transform -rotate-90 mt-20 text-2xl font-bold whitespace-nowrap">日本を訪問</span>-->
<!--        </div>-->
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Không cần CSS thêm nếu đã dùng Tailwind đầy đủ */
</style>
