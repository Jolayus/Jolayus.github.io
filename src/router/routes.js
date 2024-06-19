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
        path: "",
        name: "about-page",
        component: () => import("pages/AboutPage.vue"),
      },
      {
        path: "",
        name: "experience-page",
        component: () => import("pages/ExperiencePage.vue"),
      },
      {
        path: "",
        name: "projects-page",
        component: () => import("pages/ProjectsPage.vue"),
        // children: [
        //   {
        //     path: ":id",
        //     name: "project-page",
        //     component: () => import("pages/ProjectPage.vue"),
        //   },
        // ],
      },
      {
        path: "",
        name: "contacts-page",
        component: () => import("pages/ContactsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
