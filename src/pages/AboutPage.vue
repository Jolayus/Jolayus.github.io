<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="column items-center">
      <div class="q-mt-xl column flex-center justify-center items-center">
        <p class="text-h6 text-weight-light text-center">Get To Know More</p>
        <p class="text-h3 text-weight-bold text-center">About Me</p>
      </div>

      <div
        class="about-me-container row flex-center justify-center items-center"
      >
        <div>
          <q-avatar class="border-radius-25" rounded size="375px">
            <q-img
              src="../assets/default_avatar.webp"
              style="filter: grayscale(0.6)"
            >
              <!-- <div class="absolute-full text-subtitle2 flex flex-center"></div> -->
            </q-img>
          </q-avatar>
        </div>

        <div
          class="about-me-details-container column flex-center items-center justify-center"
        >
          <div class="about-me-details-section row">
            <div
              class="about-me-details border-radius-25 border-1-solid column items-center justify-center"
              @click="aboutDialog = true"
            >
              <q-icon class="q-mt-md q-mb-sm" name="work_history" size="25px" />
              <p class="q-mb-xs text-h6 text-weight-bold">Experience</p>
              <p class="q-mb-xs text-h6 text-weight-light">1 year / 1 year</p>
              <p class="q-mb-xs text-h6 text-weight-light">
                Web Development / Game Development
              </p>
            </div>
            <div
              class="about-me-details border-radius-25 border-1-solid column items-center justify-center"
              @click="aboutDialog = true"
            >
              <q-icon class="q-mt-md q-mb-sm" name="school" size="25px" />
              <p class="q-mb-xs text-h6 text-weight-bold">Education</p>
              <p class="q-mb-xs text-h6 text-weight-light">
                2023 - Present A.Y.
              </p>
              <p class="q-mb-xs text-h6 text-weight-light">
                Bachelor of Science in Computer Science
              </p>
            </div>
          </div>
          <div class="about-me-details-text text-weight-medium">
            Detail-oriented, organized and meticulous employee. Works at fast
            pace to meet tight deadlines. Enthusiastic team player ready to
            contribute to company success. Hardworking and passionate job seeker
            with strong organizational skills eager to secure entry-level Web
            Developer position. Ready to help team achieve company goals.
          </div>
        </div>
      </div>

      <!-- Temporary -->
      <q-dialog v-model="aboutDialog">
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
  name: "AboutPage",
  setup() {
    return { aboutDialog: ref(false) };
  },
};
</script>

<style lang="scss" scoped>
.about-me-container {
  margin-top: 15vh;
}

.about-me-details-container {
  width: 60vw;
  margin: 0px 0px 0px 16px;
}

.about-me-details-section {
  margin-bottom: 48px;
}

.about-me-details {
  height: 175px;
  width: 500px;
  margin: 0px 16px 0px 16px;
  position: relative; /* Required for the ::before pseudo-element */
  overflow: hidden; /* To prevent the ::before element from overflowing */
}

.about-me-details::before {
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

.about-me-details:hover::before {
  opacity: 0.3; /* Change opacity to 50% on hover */
}

.about-me-details-text {
  text-align: justify;
  width: 55vw;
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
</style>
