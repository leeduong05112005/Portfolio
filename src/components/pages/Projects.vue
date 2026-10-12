<template>
  <section class="container-page py-12 sm:py-16" aria-labelledby="projects-title">
    <p class="eyebrow">Projects</p>
    <h1 id="projects-title" class="page-title mt-2">Things I've built</h1>
    <p class="lead mt-4">
      A selection of projects I have worked on. Full source code is available on GitHub.
    </p>

    <ul class="mt-10 grid gap-6">
      <li v-for="project in projects" :key="project.title">
        <article class="card card-hover grid gap-8 p-6 sm:p-8 lg:grid-cols-5 lg:gap-10">
          <div class="flex flex-col lg:col-span-3">
            <h2 class="text-2xl font-semibold">{{ project.title }}</h2>
            <p v-if="project.role" class="mt-1 font-medium text-accent">{{ project.role }}</p>
            <p class="mt-4 text-muted">{{ project.description }}</p>

            <div v-if="project.repo || project.demo" class="mt-auto flex flex-wrap gap-3 pt-6">
              <a v-if="project.repo" :href="project.repo" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'github']" /> Source code
              </a>
              <a v-if="project.demo" :href="project.demo" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live demo <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
              </a>
            </div>
          </div>

          <div class="lg:col-span-2 lg:border-l lg:border-line lg:pl-10">
            <ul v-if="project.features?.length" class="space-y-2 text-[0.95rem]">
              <li v-for="f in project.features" :key="f" class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
                <span>{{ f }}</span>
              </li>
            </ul>

            <ul class="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              <li v-for="t in project.tech" :key="t" class="chip">{{ t }}</li>
            </ul>
          </div>
        </article>
      </li>
    </ul>

    <!-- <p class="mt-10 text-muted">
      More repositories are available on
      <a
        :href="`${profile.links.github}?tab=repositories`"
        class="font-medium text-accent underline-offset-4 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub</a>.
    </p> -->
  </section>
</template>

<script setup lang="ts">
import { projects } from '../../data/projects'
</script>
