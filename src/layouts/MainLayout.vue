<template>
  <q-layout
    view="lHh lpr lFf"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header
      elevated
      class="flex flex-center items-center justify-center hidden"
      style="height: 10vh; background-color: transparent"
    >
      <q-toolbar style="width: 80vw; margin: 0 auto; color: black">
        <q-avatar color="black">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Quasar Framework</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
        <q-btn flat round dense icon="whatshot" />
        <q-btn flat round dense icon="whatshot" />
        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <IndexPage />
      <AboutPage />
      <ExperiencePage style="border: 5px solid black" />
      <ProjectsPage style="border: 5px solid yellow" />
      <ContactsPage />
    </q-page-container>

    <q-footer
      elevated
      class="text-center hidden"
      style="background-color: transparent; color: black"
    >
      <q-toolbar>
        <q-toolbar-title>
          Copyright © 2024 JSC. All Rights Reserved.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import IndexPage from "src/pages/IndexPage.vue";
import AboutPage from "src/pages/AboutPage.vue";
import ExperiencePage from "src/pages/ExperiencePage.vue";
import ProjectsPage from "src/pages/ProjectsPage.vue";
import ContactsPage from "src/pages/ContactsPage.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    IndexPage,
    AboutPage,
    ExperiencePage,
    ProjectsPage,
    ContactsPage,
  },
  setup() {
    return { IndexPage, AboutPage, ExperiencePage, ProjectsPage, ContactsPage };
  },
});
</script>
