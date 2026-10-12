import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/layouts/MainLayout.vue'
import HomeView from '../components/pages/Home.vue'
import ProjectsView from '../components/pages/Projects.vue'
import ResumeView from '../components/pages/resume.vue'
import Contact from '../components/pages/contact.vue'

const siteName = 'Le Nguyen Tung Duong'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomeView,
                meta: { title: `${siteName} – Front-end Developer` }
            },
            {
                path: 'projects',
                name: 'Projects',
                component: ProjectsView,
                meta: { title: `Projects – ${siteName}` }
            },
            {
                path: 'experience',
                name: 'Experience',
                component: ResumeView,
                meta: { title: `Resume – ${siteName}` }
            },
            // Trang timeline Education cũ đã gộp vào tab Education của /experience.
            { path: 'education', redirect: { name: 'Experience', query: { tab: 'education' } } },
            {
                path: 'contact',
                name: 'Contact',
                component: Contact,
                meta: { title: `Contact – ${siteName}` }
            },
            { path: ':pathMatch(.*)*', redirect: { name: 'Home' } }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        // Đổi tab/query trên cùng một trang thì không cuộn lên đầu
        if (to.path === from.path) return false
        return { top: 0 }
    }
})

router.afterEach((to) => {
    if (typeof to.meta.title === 'string') document.title = to.meta.title
})

export default router
