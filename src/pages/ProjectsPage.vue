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

          <div class="row items-center justify-center">
            <p class="q-my-md q-mr-sm text-h6 text-weight-bold">Project 1</p>
            <q-btn
              class="q-ml-sm"
              size="sm"
              round
              color="black"
              icon="ion-information-circle-outline"
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
    </q-page>
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsPage",
});
</script>

<style scoped>
.projects-container {
  width: 100vw;
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

.border-radius-25 {
  border-radius: 25px;
}

.border-1-solid {
  border: 1px solid black;
}

.red-border {
  border: 1px solid red;
}
</style>
