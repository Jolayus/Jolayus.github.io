<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page
      class="column flex-center items-center"
      style="width: 70vw; min-height: 70vh; margin: 0 auto"
    >
      <p class="text-weight-light text-center">Get In Touch</p>
      <p class="text-h3 text-weight-bold text-center">Contact Me</p>

      <div
        class="flex flex-center q-pa-lg q-mt-lg border-1-solid border-radius-25"
      >
        <div class="q-ml-sm row items-center">
          <q-item>
            <q-item-section class="items-center" avatar>
              <q-icon name="ion-phone-portrait" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="q-mt-xs">+63 947 462 6020</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="q-mr-sm row items-center">
          <q-item
            class="border-radius-25"
            clickable
            tag="a"
            target="_blank"
            href="mailto:cabangonjulius86@gmail.com"
          >
            <q-item-section class="items-center" avatar>
              <q-icon name="ion-mail" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="q-mt-xs"
                >cabangonjulius86@gmail.com</q-item-label
              >
            </q-item-section>
          </q-item>
        </div>

        <div class="q-ml-sm row items-center">
          <q-item
            class="border-radius-25"
            clickable
            tag="a"
            target="_blank"
            href="https://www.linkedin.com/in/julius-odref-czar-cabangon-5475002a9/"
          >
            <q-item-section class="items-center" avatar>
              <q-icon name="ion-logo-linkedin" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="q-mt-xs">LinkedIn</q-item-label>
            </q-item-section>
          </q-item>
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

<style lang="scss" scoped>
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
