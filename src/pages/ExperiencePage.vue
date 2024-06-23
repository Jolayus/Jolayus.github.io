<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="column items-center">
      <div class="q-mt-xl column flex-center justify-center items-center">
        <p class="text-weight-light text-center">Explore My</p>
        <p class="text-h3 text-weight-bold text-center">Experience</p>
      </div>

      <div
        class="experience-container flex flex-center justify-center items-center"
      >
        <div
          class="experience-details-container border-radius-25 border-1-solid column items-center justify-center"
        >
          <p
            class="experience-details-title q-ma-md text-h5 text-weight-bolder"
          >
            Frontend Development
          </p>

          <div
            class="experience-article-container flex justify-center items-center wrap"
          >
            <div
              v-for="i in 7"
              :key="i"
              class="experience-article-item flex justify-center items-center border-radius-50"
              @click="experienceDialog = true"
            >
              <q-icon
                class="q-mr-md q-pa-xs border-3-solid border-radius-25"
                name="verified"
                size="30px"
              />

              <div>
                <p class="q-ma-none text-h6 text-weight-bolder">HTML</p>
                <p class="q-ma-none text-overline text-weight-medium">
                  Experienced
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="experience-details-container border-radius-25 border-1-solid column items-center justify-center"
        >
          <p
            class="experience-details-title q-ma-md text-h5 text-weight-bolder"
          >
            Backend Development
          </p>
          <div
            class="experience-article-container flex justify-center items-center wrap"
          >
            <div
              v-for="i in 7"
              :key="i"
              class="experience-article-item flex justify-center items-center border-radius-50"
              @click="experienceDialog = true"
            >
              <q-icon
                class="q-mr-md q-pa-xs border-3-solid border-radius-25"
                name="verified"
                size="30px"
              />

              <div>
                <p class="q-ma-none text-h6 text-weight-bolder">HTML</p>

                <p class="q-ma-none text-overline text-weight-medium">
                  Experienced
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="experience-details-container border-radius-25 border-1-solid column items-center justify-center"
        >
          <p
            class="experience-details-title q-ma-md text-h5 text-weight-bolder"
          >
            Game Development
          </p>

          <div
            class="experience-article-container flex justify-center items-center wrap"
          >
            <div
              v-for="i in 7"
              :key="i"
              class="experience-article-item flex justify-center items-center border-radius-50"
              @click="experienceDialog = true"
            >
              <q-icon
                class="q-mr-md q-pa-xs border-3-solid border-radius-25"
                name="verified"
                size="30px"
              />

              <div>
                <p class="q-ma-none text-h6 text-weight-bolder">HTML</p>
                <p class="q-ma-none text-overline text-weight-medium">
                  Experienced
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Temporary -->
      <q-dialog v-model="experienceDialog">
        <q-card class="border-radius-25">
          <q-toolbar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Quasar</span>
              Framework</q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </transition>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ExperiencePage",
  setup() {
    return { experienceDialog: ref(false) };
  },
};
</script>

<style lang="scss" scoped>
.experience-container {
  margin-top: 10vh;
}

.experience-details-container {
  min-height: 250px;
  width: 700px;
  margin: 16px 16px 16px 16px;
}

.experience-details-title {
  text-decoration: double underline;
}

.experience-article-item {
  width: calc(33.3333% - 10px);
  margin-bottom: 16px;
  position: relative; /* Required for the ::before pseudo-element */
  overflow: hidden; /* To prevent the ::before element from overflowing */
}

.experience-article-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0; /* Start with opacity 0 */
  transition: opacity 0.3s; /* Smooth transition */
  z-index: -1; /* Ensure it stays behind the content */
}

.experience-article-item:hover::before {
  opacity: 0.3; /* Change opacity to 50% on hover */
}

@for $i from 1 through 50 {
  .border-radius-#{$i} {
    border-radius: #{$i}px;
  }
}

@for $i from 1 through 5 {
  .border-#{$i}-solid {
    border: #{$i}px solid black;
  }
}

.red-border {
  border: 1px solid red;
}
</style>
