<template>
  <q-layout
    view="lHh lpr lFf"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header
      reveal
      elevated
      class="flex flex-center items-center justify-center text-black transparent"
    >
      <q-toolbar style="width: 80vw">
        <q-avatar color="black">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>JSC</q-toolbar-title>

        <q-btn
          class="q-mx-sm header-button"
          flat
          rounded
          label="About"
          @click="scrollToSection('aboutPage')"
        />
        <q-btn
          class="q-mx-sm header-button"
          flat
          rounded
          label="Experience"
          @click="scrollToSection('experiencePage')"
        />
        <q-btn
          class="q-mx-sm header-button"
          flat
          rounded
          label="Projects"
          @click="scrollToSection('projectsPage')"
        />
        <q-btn
          class="q-mx-sm header-button"
          flat
          rounded
          label="Contacts"
          @click="scrollToSection('contactsPage')"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-scroll-area class="main-layout-scroll-area" :thumb-style="thumbStyle">
        <section id="indexPage"><IndexPage /></section>
        <section id="aboutPage"><AboutPage /></section>
        <section id="experiencePage"><ExperiencePage /></section>
        <section id="projectsPage"><ProjectsPage /></section>
        <section id="contactsPage"><ContactsPage /></section>
      </q-scroll-area>
    </q-page-container>

    <q-footer reveal elevated class="text-center text-black transparent">
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
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      IndexPage,
      AboutPage,
      ExperiencePage,
      ProjectsPage,
      ContactsPage,
      scrollToSection,
      thumbStyle: {
        backgroundColor: "transparent",
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.main-layout-scroll-area {
  height: 89.5vh;
  max-width: 100vw;
}

.header-button {
  width: 125px;
}

.header-button:hover {
  text-decoration: double underline;
}

.red-border {
  border: 1px solid red;
}
</style>
