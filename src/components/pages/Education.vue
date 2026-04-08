<template>
  <div class="timeline-wrapper overflow-hidden">
    <div class="timeline-line"></div>

    <div
        v-for="(item, index) in timeline"
        :key="index"
        class="timeline-item"
        :class="index % 2 === 0 ? 'left' : 'right'"
    >
      <div class="timeline-content">
        <h4 class="subtitle">{{ item.subtitle }}</h4>

        <!-- Counting animation -->
        <h2 class="year text-5xl font-bold my-3 text-black transition-all duration-500">
          <span ref="yearRefs" :data-year="item.year">{{ displayYears[index] }}</span>
        </h2>

        <p class="text">{{ item.text }}</p>
      </div>

      <div class="timeline-image">
        <img :src="item.image" :alt="item.subtitle" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const timeline = [
  { year: "2023", subtitle: "Đại Học Thăng Long", text: "Mạng máy tính và truyền thông dữ liệu", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500" },

  { year: "2025", subtitle: "Đại Học Thăng Long", text: "Khoa học máy tính", image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500" },
  { year: "2027", subtitle: "Tốt nghiệp", text: "Hoàn thành chương trình học tại Đại học Thăng Long", image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?w=500" }
];

const displayYears = ref<string[]>(timeline.map(() => "0"));
const yearRefs = ref<HTMLElement[]>([]);

onMounted(async () => {
  await nextTick();

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = yearRefs.value.indexOf(el);
            const targetYear = parseInt(el.dataset.year || "0");
            animateNumber(index, targetYear);
            observer.unobserve(el); // Animate once
          }
        });
      },
      { threshold: 0.3 }
  );

  yearRefs.value.forEach((el) => observer.observe(el));
});

function animateNumber(index: number, target: number) {
  const duration = 1200;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime: number) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * (target - start) + start);
    displayYears.value[index] = current.toString();
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
</script>

<style scoped>
/* Nền tối tổng thể */
.timeline-wrapper {
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  color: black  ;
  font-family: "Poppins", sans-serif;
}

/* Đường timeline giữa */
.timeline-line {
  position: absolute;
  left: 50%;
  width: 1.5px;
  height: 80%;
  background: black;
  transform: translateX(-50%);
}

/* Item */
.timeline-item {
  display: flex;
  align-items: center;
  margin: 100px 0;
  position: relative;
}

/* Trái phải */
.timeline-item.left {
  flex-direction: row;
  text-align: right;
  margin: 20% 0;
}

.timeline-item.right {
  flex-direction: row-reverse;
  text-align: left;
  margin: 20% 0;
}

/* Nội dung */
.timeline-content {
  width: 45%;
}

.subtitle {
  color: #00ff66;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
}

.year {
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0;
}

.text {
  font-size: 16px;
  line-height: 1.6;
  color: black;
}

/* Ảnh */
.timeline-image {
  width: 45%;
  display: flex;
  justify-content: center;
}

.timeline-image img {
  width: 50%;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 255, 102, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-image img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(0, 255, 102, 0.6);
}

/* Hiệu ứng responsive */
@media (max-width: 900px) {
  .timeline-item {
    flex-direction: column !important;
    text-align: center;
  }

  .timeline-content,
  .timeline-image {
    width: 100%;
  }

  .timeline-line {
    left: 5px;
  }
}
</style>
