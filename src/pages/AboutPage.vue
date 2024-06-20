<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="column items-center">
      <p>Get To Know More</p>
      <h1>About Me</h1>
      <div
        class="row flex-center justify-center items-center"
        style="width: 80vw"
      >
        <div class="q-mr-lg">
          <q-img
            style="width: 300px; height: 300px"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          >
            <div class="absolute-full text-subtitle2 flex flex-center"></div>
          </q-img>
        </div>
        <div
          class="q-ml-lg column flex-center items-center justify-center"
          style="width: 50vw"
        >
          <div class="about-me-section q-mb-lg row">
            <div
              style="height: 100px; width: 300px; border: 1px solid black"
              class="q-mr-lg"
            >
              Experience
            </div>
            <div
              style="height: 100px; width: 300px; border: 1px solid black"
              class="q-ml-lg"
            >
              Education
            </div>
          </div>
          <div class="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            molestiae hic dolorum. Quam, repellat itaque! Fuga perferendis
            <br />
            beatae ipsam, laborum saepe assumenda placeat quam doloribus, rerum
            modi sequi, deserunt odio.
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
