import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/layouts/MainLayout.vue'
import HomeView from '../components/pages/Home.vue'
import EducationView from '../components/pages/Education.vue'
import ResumeView from '../components/pages/resume.vue'
import Contact from "../components/pages/contact.vue";

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: HomeView
            },
            {
                path: 'education',
                name: 'Education',
                component: EducationView
            },
            {
                path: 'experience',
                name: 'Experience',
                component: ResumeView
            },
            {
                path: 'contact',
                name: 'Contact',
                component: Contact
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
