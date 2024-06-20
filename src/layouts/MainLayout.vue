<template>
  <q-layout
    view="lHh lpr lFf"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated>
      <q-toolbar style="width: 80vw; margin: 0 auto">
        <q-avatar>
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
      <AboutPage style="border: 5px solid blue" />
      <ExperiencePage style="border: 5px solid black" />
      <ProjectsPage style="border: 5px solid yellow" />
      <ContactsPage style="border: 5px solid green" />
    </q-page-container>

    <q-footer elevated>
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
