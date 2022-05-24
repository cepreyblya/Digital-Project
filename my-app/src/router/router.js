import MainPage from "@/pages/MainPage";
import GalleryPage from "@/pages/GalleryPage";
import ProjectsPage from "@/pages/ProjectsPage";
import SertificatesPage from "@/pages/SertificatesPage";
import ContactsPage from "@/pages/ContactsPage";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/gallery',
    component: GalleryPage,
  },
  {
    path: '/projects',
    component: ProjectsPage,
  },
  {
    path: '/sertificates',
    component: SertificatesPage,
  },
  {
    path: '/contacts',
    component: ContactsPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URl)
})

export default router;