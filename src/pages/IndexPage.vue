<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="flex flex-center justify-center items-center">
      <div class="q-mr-lg"><q-avatar size="400px" color="teal" /></div>
      <div class="q-ml-l column items-center flex-center">
        <p>Hello, I'm</p>
        <h6>Julius Odref Czar S Cabangon</h6>
        <p>Frontend Developer / Game Developer</p>
        <div>
          <q-btn color="primary" icon="check" label="OK" @click="onClick" />
          <q-btn color="primary" icon="check" label="OK" @click="onClick" />
        </div>
        <div>
          <q-avatar
            clickable
            size="50px"
            color="teal"
            text-color="white"
            icon="directions"
          />
          <q-avatar
            clickable
            size="50px"
            color="teal"
            text-color="white"
            icon="directions"
          />
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
