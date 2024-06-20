<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page
      class="column flex-center items-center"
      style="width: 80vw; min-height: 75vh; margin: 0 auto"
    >
      <p>Get in touch</p>
      <h1>Contact Me</h1>
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
    </q-page>
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactsPage",
});
</script>
