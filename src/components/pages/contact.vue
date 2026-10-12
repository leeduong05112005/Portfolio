<template>
  <section class="container-page py-12 sm:py-16" aria-labelledby="contact-title">
    <p class="eyebrow">Contact</p>
    <h1 id="contact-title" class="page-title mt-2">Let's work together</h1>
    <p class="lead mt-4">
      Have an internship, job opening or freelance project in mind? Send me a message or reach out directly through the channels below.
    </p>

    <div class="mt-10 grid gap-8 lg:grid-cols-5 lg:gap-12">
      <!-- Thông tin liên hệ -->
      <ul class="grid min-w-0 content-start gap-4 lg:col-span-2">
        <li v-for="item in info" :key="item.title">
          <component
            :is="item.href ? 'a' : 'div'"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="card flex items-center gap-4 p-4"
            :class="item.href ? 'card-hover' : ''"
          >
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-bg text-xl text-accent">
              <font-awesome-icon :icon="item.icon" />
            </span>
            <span class="min-w-0">
              <span class="block text-sm text-accent">{{ item.title }}</span>
              <span class="block text-base font-semibold [overflow-wrap:anywhere] sm:text-lg">{{ item.desc }}</span>
            </span>
          </component>
        </li>
      </ul>

      <!-- Form -->
      <form class="card flex min-w-0 flex-col gap-5 p-6 sm:p-8 lg:col-span-3" @submit.prevent="onSubmit">
        <div class="grid gap-5 sm:grid-cols-2">
          <div class="field">
            <label for="c-name">Name</label>
            <input id="c-name" v-model.trim="name" name="name" type="text" autocomplete="name" required />
          </div>
          <div class="field">
            <label for="c-email">Email</label>
            <input id="c-email" v-model.trim="email" name="email" type="email" autocomplete="email" required />
          </div>
        </div>

        <div class="field">
          <label for="c-subject">Subject</label>
          <input id="c-subject" v-model.trim="subject" name="subject" type="text" placeholder="Internship / Freelance / Collaboration..." />
        </div>

        <div class="field">
          <label for="c-message">Message</label>
          <textarea id="c-message" v-model.trim="message" name="message" rows="6" required></textarea>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <button type="submit" class="btn btn-primary">
            Send message <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
          <p class="text-sm text-muted">This opens your email app with the message pre-filled.</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { profile } from '../../data/profile'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

interface ContactInfo {
  icon: IconProp
  title: string
  desc: string
  href?: string
  external?: boolean
}

const info: ContactInfo[] = [
  { icon: ['fas', 'envelope'], title: 'Email', desc: profile.email, href: `mailto:${profile.email}` },
  { icon: ['fas', 'phone'], title: 'Phone', desc: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: ['fab', 'github'], title: 'GitHub', desc: 'leeduong05112005', href: profile.links.github, external: true },
  { icon: ['fas', 'location-dot'], title: 'Address', desc: profile.location }
]

// Site tĩnh không có backend: mở mail client với nội dung điền sẵn.
function onSubmit() {
  const title = subject.value || `Message from ${name.value} via portfolio`
  const body = `${message.value}\n\n—\n${name.value}\n${email.value}`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
}
</script>

<style scoped>
.field { display: flex; flex-direction: column; gap: 0.4rem; text-align: left; }
.field label { font-size: 0.9rem; font-weight: 500; color: var(--color-muted); }

.field input,
.field textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-line);
  background: var(--color-bg);
  color: var(--color-fg);
  font: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.field textarea { resize: vertical; min-height: 8rem; }
.field input::placeholder,
.field textarea::placeholder { color: rgb(163 163 178 / 0.7); }
.field input:hover,
.field textarea:hover { border-color: rgb(10 178 250 / 0.5); }
.field input:focus-visible,
.field textarea:focus-visible {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgb(10 178 250 / 0.25);
}
</style>
