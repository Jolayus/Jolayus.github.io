<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="column items-center">
      <p>Browse My Recent</p>
      <h1>Projects</h1>
      <div class="flex flex-center justify-center items-center">
        <div
          class="q-ma-md column flex-center justify-center items-center"
          style="height: 600px; width: 500px; border: 1px solid black"
        >
          <q-img
            style="width: 300px; height: 300px"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          >
            <div class="absolute-full text-subtitle2 flex flex-center"></div>
          </q-img>
          <h6 class="q-ma-none">Project 1</h6>
          <div class="row flex-center" style="border: 1px solid red">
            <div class="row items-center">
              <q-avatar color="teal">Logo</q-avatar>
              <div>Email@gmail.com</div>
            </div>
            <div class="row items-center">
              <q-avatar color="teal">Logo</q-avatar>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
        <div
          class="q-ma-md column flex-center justify-center items-center"
          style="height: 600px; width: 500px; border: 1px solid black"
        >
          <q-img
            style="width: 300px; height: 300px"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          >
            <div class="absolute-full text-subtitle2 flex flex-center"></div>
          </q-img>
          <h6 class="q-ma-none">Project 2</h6>
          <div class="row flex-center" style="border: 1px solid red">
            <div class="row items-center">
              <q-avatar color="teal">Logo</q-avatar>
              <div>Email@gmail.com</div>
            </div>
            <div class="row items-center">
              <q-avatar color="teal">Logo</q-avatar>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
        <div
          class="q-ma-md column flex-center justify-center items-center"
          style="height: 600px; width: 500px; border: 1px solid black"
        >
          <q-img
            style="width: 300px; height: 300px"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          >
            <div class="absolute-full text-subtitle2 flex flex-center"></div>
          </q-img>
          <h6 class="q-ma-none">Project 3</h6>
          <div class="row flex-center" style="border: 1px solid red">
            <div class="row items-center">
              <q-avatar color="teal">Logo</q-avatar>
              <div>Email@gmail.com</div>
            </div>
            <div class="row items-center">
              <q-avatar color="teal">Logo</q-avatar>
              <div>LinkedIn</div>
            </div>
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
