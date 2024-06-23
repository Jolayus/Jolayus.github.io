<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="column items-center">
      <div class="q-mt-xl column flex-center justify-center items-center">
        <p class="text-weight-light text-center">Browse My Recent</p>
        <p class="text-h3 text-weight-bold text-center">Projects</p>
      </div>

      <div
        class="projects-container flex flex-center justify-center items-center"
      >
        <div
          class="project-details-container q-ma-md column flex-center justify-center items-center border-1-solid border-radius-25"
        >
          <q-img
            class="project-details-image border-radius-25"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          >
            <div class="absolute-full text-subtitle2 flex flex-center"></div>
          </q-img>

          <div
            class="q-my-md row items-center justify-center border-1-solid border-radius-25"
          >
            <p class="q-my-xs q-ml-md q-mr-sm text-h6 text-weight-bold">
              Project 1
            </p>
            <q-btn
              class="q-mx-sm"
              size="sm"
              round
              color="black"
              icon="ion-information-circle-outline"
              @click="projectDialog = true"
            />
          </div>

          <div class="row items-center justify-center">
            <q-btn
              class="q-mr-sm"
              outline
              rounded
              label="Github"
              style="width: 150px"
            />
            <q-btn
              class="q-ml-sm"
              outline
              rounded
              label="Live Demo"
              style="width: 150px"
            />
          </div>
        </div>
      </div>

      <!-- Temporary -->
      <q-dialog v-model="projectDialog">
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
  name: "ProjectsPage",
  setup() {
    return {
      projectDialog: ref(false),
    };
  },
};
</script>

<style lang="scss" scoped>
.projects-container {
  margin-top: 8vh;
}

.project-details-container {
  height: 570px;
  width: 500px;
}

.project-details-image {
  height: 400px;
  width: 400px;
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
