<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="flex flex-center justify-center items-center">
      <div class="q-mr-lg">
        <q-avatar size="400px">
          <img src="../assets/my_photo.jpg" style="border: 3px solid black" />
        </q-avatar>
      </div>
      <div class="q-ml-l column justify-center flex-center items-center">
        <p class="text-h5 text-weight-light text-center">Hello, I'm</p>
        <p class="text-h3 text-weight-bold text-center">
          Julius Odref Czar
          <br />
          Cabangon
        </p>
        <p class="text-h5 text-grey text-weight-medium text-center">
          Frontend Developer / Game Developer
        </p>
        <div class="q-mb-md row items-center justify-center">
          <q-btn
            class="q-mr-sm"
            outline
            rounded
            color="black"
            label="Download CV"
            style="width: 150px"
          />
          <q-btn
            class="q-ml-sm"
            unelevated
            rounded
            color="black"
            label="Contact Me"
            style="width: 150px"
          />
        </div>
        <div class="row items-center justify-center">
          <q-btn class="q-mr-sm" round color="black" icon="ion-logo-linkedin" />
          <q-btn class="q-ml-sm" round color="black" icon="ion-logo-github" />
        </div>
      </div>
    </q-page>
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
