import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/gallery",
    name: "Gallery-List-View",
    component: () =>
      import(
        /* webpackChunkName: "gallery-list-view" */ "../views/GalleryList/GalleryListView.vue"
      ),
  },
  {
    path: "/gallery/:gallerytype",
    name: "Gallery-View",
    component: () =>
      import(
        /* webpackChunkName: "sports-view" */ "../views/Gallery/GalleryView.vue"
      ),
  },
  {
    path: "/about",
    name: "About-View",
    component: () =>
      import(
        /* webpackChunkName: "about-view" */ "../views/About/AboutView.vue"
      ),
  },
  {
    path: "/edit-gallery-list",
    name: "Edit-Gallery-List-View",
    component: () =>
      import(
        /* webpackChunkName: "edit-gallery-list-view" */ "../views/EditGalleryList/EditGalleryListView.vue"
      ),
  },
  {
    path: "/:catchAll(.*)",
    name: "Page-Error",
    component: () =>
      import(
        /* webpackChunkName: "edit-gallery-list-view" */ "../views/404/404View.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
