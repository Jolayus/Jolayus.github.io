<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="column items-center">
      <div class="q-mt-xl column flex-center justify-center items-center">
        <p class="text-weight-light text-center">Get To Know More</p>
        <p class="text-h3 text-weight-bold text-center">About Me</p>
      </div>

      <div
        class="about-me-container row flex-center justify-center items-center"
      >
        <div>
          <q-avatar class="border-radius-25" rounded size="375px">
            <q-img src="../assets/my_photo_2.jpg">
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
    </q-page>
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
});
</script>

<style scoped>
.about-me-container {
  width: 100vw;
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
}

.about-me-details-text {
  text-align: justify;
  width: 55vw;
}

.border-radius-25 {
  border-radius: 25px;
}

.border-1-solid {
  border: 1px solid black;
}
</style>
