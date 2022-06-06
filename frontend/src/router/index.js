import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import PageNotFound from "@/views/Error";
import News from "@/views/News";
import Gallery from "@/views/Gallery";
import Contacts from "@/views/Contacts";
import Feedback from "@/views/Feedback";
import GalleryTemplate from "@/views/GalleryTemplate";
import Jobs from "@/views/Jobs";
import Price from "@/views/Price";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback,
  },
  {
    path: "/gallery/:galleryID",
    name: "GalleryTemplate",
    component: GalleryTemplate,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/price",
    name: "Price",
    component: Price,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
