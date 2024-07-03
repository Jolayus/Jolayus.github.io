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
            <q-img src="../assets/my_photo_3.jpg" />
          </q-avatar>
        </div>

        <div
          class="about-me-details-container column flex-center items-center justify-center"
        >
          <div class="about-me-details-section row">
            <div
              class="about-me-details border-radius-25 border-1-solid column items-center justify-center"
              @click="aboutExperienceDialog = true"
            >
              <q-icon class="info-icon" name="info" size="20px" />
              <q-icon class="q-mt-md q-mb-sm" name="work_history" size="25px" />
              <p class="q-mb-xs text-h6 text-weight-bold">Experience</p>
              <p class="q-mb-xs text-h6 text-weight-light">
                Web Development / Game Development
              </p>
            </div>
            <div
              class="about-me-details border-radius-25 border-1-solid column items-center justify-center"
              @click="aboutEducationDialog = true"
            >
              <q-icon class="info-icon" name="info" size="20px" />
              <q-icon class="q-mt-md q-mb-sm" name="school" size="25px" />
              <p class="q-mb-xs text-h6 text-weight-bold">Education</p>
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

      <!-- Experience -->
      <q-dialog v-model="aboutExperienceDialog">
        <q-card class="q-pa-sm border-radius-25">
          <q-toolbar>
            <q-toolbar-title>
              <span class="q-pl-xs text-weight-bold">Experience</span>
            </q-toolbar-title>
            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section style="text-align: justify">
            <q-list padding>
              <!-- Actual Experience -->
              <q-item-label class="text-weight-bold" header>
                Actual Experience
              </q-item-label>

              <div>
                <q-item>
                  <q-item-section>
                    <q-item-label overline>
                      FRONTEND DEVELOPER INTERN
                    </q-item-label>
                    <q-item-label class="text-weight-bold">
                      Pixel8 Web Solutions & Consultancy Inc.
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label class="text-weight-bolder" caption>
                      February 2024 - April 2024
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <q-item-label caption>
                      As a Frontend Developer Intern, I maintained and adhered
                      to company standards while developing my competency in the
                      required technology stack and tools. I collaborated with
                      my team and achieved a level of mastery that enabled me to
                      guide fellow interns, ensuring high-quality work and
                      teamwork.
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>

              <q-separator spaced="16px" />

              <!-- Self-Study Experience -->
              <q-item-label class="text-weight-bold" header>
                Self-Study Experience
              </q-item-label>

              <q-item>
                <q-item-section>
                  <q-item-label overline> BACKEND DEVELOPER </q-item-label>
                  <q-item-label class="text-weight-bold">
                    School Project
                  </q-item-label>
                  <q-item-label caption>
                    Developed a comprehensive online school forum for my senior
                    high school thesis, utilizing HTML, CSS, JavaScript, PHP,
                    and SQL. The forum features both admin and user interfaces,
                    supporting image and video uploads. I am currently
                    rebuilding this forum with the latest technology stack to
                    enhance its functionality and user experience.
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label overline> UNITY GAME DEVELOPER </q-item-label>
                  <q-item-label class="text-weight-bold">
                    School Project
                  </q-item-label>
                  <q-item-label caption>
                    Designed and developed an engaging science quiz game using
                    C# and Unity. The game dynamically imports questions from
                    CSV files and offers three difficulty levels: easy, medium,
                    and hard. This project is still a work in progress, with
                    ongoing improvements to gameplay and content.
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- Education -->
      <q-dialog v-model="aboutEducationDialog">
        <q-card class="q-pa-sm border-radius-25">
          <q-toolbar>
            <q-toolbar-title>
              <span class="q-pl-xs text-weight-bold">Education</span>
            </q-toolbar-title>

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section style="text-align: justify">
            <q-list padding>
              <q-item>
                <q-item-section>
                  <q-item-label overline>
                    UNIVERSITY OF CABUYAO <br />
                    (PAMANTASAN NG CABUYAO)
                  </q-item-label>
                  <q-item-label class="text-weight-bold">
                    Bachelor of Science in Computer Science
                  </q-item-label>
                  <q-item-label caption>
                    Pamantasan ng Cabuyao, Katapatan Homes, Brgy. Banay-banay,
                    Cabuyao City, Laguna
                  </q-item-label>
                </q-item-section>

                <q-item-section side top>
                  <q-item-label caption>2020 - Present</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item>
                <q-item-section>
                  <q-item-label overline>
                    INFORMATICS COMPUTER INSTITUTE <br />
                    FESTIVAL MALL ALABANG
                  </q-item-label>
                  <q-item-label class="text-weight-bold">
                    Technical and Vocational Education and Training - ICT
                  </q-item-label>
                  <q-item-label caption>
                    4th Floor Festival Mall, Filinvest Corporate City, Commerce
                    Ave, Alabang, Muntinlupa, Metro Manila
                  </q-item-label>
                </q-item-section>

                <q-item-section side top>
                  <q-item-label caption>2018 - 2020</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
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
    return {
      aboutExperienceDialog: ref(false),
      aboutEducationDialog: ref(false),
    };
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
  font-size: 16px;
  width: 55vw;
}

.info-icon {
  position: absolute;
  top: 15px; /* Adjust the top position if needed */
  right: 15px; /* Adjust the right position if needed */
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
