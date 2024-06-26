const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "index-page",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "aboutPage",
        name: "about-page",
        component: () => import("pages/AboutPage.vue"),
      },
      {
        path: "experiencePage",
        name: "experience-page",
        component: () => import("pages/ExperiencePage.vue"),
      },
      {
        path: "projectsPage",
        name: "projects-page",
        component: () => import("pages/ProjectsPage.vue"),
      },
      {
        path: "contactsPage",
        name: "contacts-page",
        component: () => import("pages/ContactsPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
