<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="column items-center">
      <p>Explore My</p>
      <h1>Experience</h1>
      <div class="flex flex-center justify-center items-center">
        <div
          class="q-ma-md"
          style="height: 200px; width: 700px; border: 1px solid black"
        >
          <h6 class="q-ma-none">Frontend Development</h6>
          <div class="article-container"></div>
        </div>
        <div
          class="q-ma-md"
          style="height: 200px; width: 700px; border: 1px solid black"
        >
          <h6 class="q-ma-none">Backend Development</h6>
          <div class="article-container"></div>
        </div>
        <div
          class="q-ma-md"
          style="height: 200px; width: 700px; border: 1px solid black"
        >
          <h6 class="q-ma-none">Game Development</h6>
          <div class="article-container"></div>
        </div>
      </div>
    </q-page>
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperiencePage",
});
</script>
