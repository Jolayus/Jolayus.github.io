<template>
  <q-layout
    view="lHh lpr lFf"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header
      elevated
      class="flex flex-center items-center justify-center"
      style="height: 10vh; background-color: transparent"
    >
      <q-toolbar style="width: 80vw; margin: 0 auto; color: black">
        <q-avatar color="black">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>JSC</q-toolbar-title>

        <q-btn flat label="About" />
        <q-btn flat label="Experience" />
        <q-btn flat label="Projects" />
        <q-btn flat label="Contacts" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-scroll-area class="main-layout-scroll-area" :thumb-style="thumbStyle">
        <IndexPage />
        <AboutPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactsPage
      /></q-scroll-area>
    </q-page-container>

    <q-footer
      elevated=""
      class="text-center"
      style="background-color: transparent; color: black"
    >
      <q-toolbar>
        <q-toolbar-title>
          <p class="q-ma-none text-h6 text-weight-light">
            Copyright © 2024 JSC. All Rights Reserved.
          </p>
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
    return {
      IndexPage,
      AboutPage,
      ExperiencePage,
      ProjectsPage,
      ContactsPage,
      thumbStyle: {
        backgroundColor: "transparent",
      },
    };
  },
});
</script>

<style>
.main-layout-scroll-area {
  height: 84.555vh;
  max-width: 100vw;
}
</style>
