<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container-page hero-grid">
      <div class="side-label" aria-hidden="true">
        <span class="side-label__big">Introduce</span>
        <span class="side-label__stars"><span>✦</span><span class="text-accent">✦</span><span>✦</span></span>
        <span class="side-label__small">介紹</span>
      </div>

      <div class="hero-text">
        <p class="eyebrow">Hello, I'm</p>
        <h1 id="hero-title" class="hero-name">{{ profile.name }}</h1>

        <p class="hero-role">
          <span class="hero-role__bar" aria-hidden="true"></span>
          <span>{{ profile.role }}</span>
          <span class="hero-school">{{ profile.school }}</span>
        </p>

        <p class="hero-bio">{{ profile.bio.en }}</p>
        <p class="hero-bio hero-bio--vi" lang="vi">{{ profile.bio.vi }}</p>

        <div class="hero-actions">
          <router-link to="/projects" class="btn btn-primary">
            View projects <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </router-link>
          <router-link to="/contact" class="btn btn-ghost">Contact me</router-link>
          <a v-if="profile.cvUrl" :href="profile.cvUrl" class="btn btn-ghost" download>
            <font-awesome-icon :icon="['fas', 'download']" /> Download CV
          </a>
        </div>

        <ul class="hero-social" aria-label="Social links">
          <li v-for="s in socials" :key="s.label">
            <a
              :href="s.href"
              class="icon-btn"
              :aria-label="s.label"
              :target="s.external ? '_blank' : undefined"
              :rel="s.external ? 'noopener noreferrer' : undefined"
            >
              <font-awesome-icon :icon="s.icon" />
            </a>
          </li>
        </ul>
      </div>

      <div class="hero-photo">
        <div class="photo-ring">
          <svg class="photo-ring__dash" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="25 8 5 8" stroke-linecap="round" />
          </svg>
          <div class="photo-mask">
            <img :src="profileImg" alt="Portrait of Le Nguyen Tung Duong" width="856" height="1100" fetchpriority="high" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import profileImg from '../../assets/profile.webp'
import { profile } from '../../data/profile'
import { buildSocials } from '../../data/socials'

const socials = buildSocials()
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: calc(100svh - 5rem);
  padding-block: 2.5rem 4rem;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2.5rem;
}

/* ---------- Text ---------- */
.hero-text { order: 2; text-align: left; min-width: 0; margin-right: 10px;}

.hero-name {
  margin-top: 0.25rem;
  font-size: clamp(2.1rem, 8vw, 3.75rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-accent);
  text-wrap: balance;
}

.hero-role {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  font-size: 1.15rem;
  font-weight: 500;
}
.hero-role__bar { width: 2.5rem; height: 2px; background: var(--color-accent); }
.hero-school { flex-basis: 100%; font-size: 1rem; font-weight: 400; color: var(--color-muted); }
@media (min-width: 640px) {
  .hero-school { flex-basis: auto; font-size: inherit; }
  .hero-school::before { content: '·'; margin-right: 0.75rem; }
}

.hero-bio { margin-top: 1.5rem; max-width: 36rem; font-size: 1.1rem; font-weight: 300; line-height: 1.7; }
.hero-bio--vi {
  margin-top: 1rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-accent);
  font-size: 1rem;
  color: var(--color-muted);
}

.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
.hero-social { display: flex; gap: 0.75rem; margin-top: 1.75rem; padding: 0; list-style: none; }

/* ---------- Photo ---------- */
.hero-photo { order: 1; display: flex; justify-content: center; }

.photo-ring {
  position: relative;
  width: min(68vw, 22rem);
  aspect-ratio: 1;
}
.photo-ring__dash {
  position: absolute;
  inset: -5%;
  width: 110%;
  height: 110%;
  color: var(--color-accent);
  animation: spinSlow 100s linear infinite;
  pointer-events: none;
}
.photo-mask {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 35%, rgb(10 178 250 / 0.22), transparent 62%),
    linear-gradient(180deg, var(--color-surface-2), var(--color-surface));
}
.photo-mask img {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 100%;
  width: auto;
  max-width: none;
  transform: translateX(-50%);
}

/* ---------- Decorative vertical label ---------- */
.side-label { display: none; }

@media (min-width: 1024px) {
  .hero-grid { grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr); gap: 4rem; }
  .hero-text { order: 1; margin-left: 7rem;}
  .hero-photo { order: 2; }
  .photo-ring { width: min(34vw, 25rem); }
}

@media (min-width: 1280px) {
  .hero-grid { padding-left: 6rem; }
  .side-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-weight: 700;
  }
  .side-label__big {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 2.75rem;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
  .side-label__stars { display: flex; flex-direction: column; gap: 0.5rem; font-size: 1.1rem; }
  .side-label__small { font-size: 1.5rem; white-space: nowrap; transform: rotate(270deg); }
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
