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
      </q-toolbar>
    </q-header>

    <q-page-container>
      <IndexPage style="border: 5px solid red" />
      <AboutPage style="border: 5px solid blue" />
      <ContactsPage style="border: 5px solid green" />
      <ProjectsPage style="border: 5px solid yellow" />
      <ExperiencePage style="border: 5px solid black" />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title> Footer </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import IndexPage from "src/pages/IndexPage.vue";
import AboutPage from "src/pages/AboutPage.vue";
import ContactsPage from "src/pages/ContactsPage.vue";
import ProjectsPage from "src/pages/ProjectsPage.vue";
import ExperiencePage from "src/pages/ExperiencePage.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    IndexPage,
    AboutPage,
    ContactsPage,
    ProjectsPage,
    ExperiencePage,
  },
  setup() {
    return { IndexPage, AboutPage, ContactsPage, ProjectsPage, ExperiencePage };
  },
});
</script>
