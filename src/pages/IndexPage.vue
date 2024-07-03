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
      <div class="q-ml-lg column justify-center flex-center items-center">
        <p class="text-h5 text-weight-light text-center">Hello, I'm</p>
        <p class="text-h3 text-weight-bold text-center">
          Julius Odref Czar
          <br />
          Cabangon
        </p>
        <p class="text-h5 text-grey text-weight-medium text-center">
          Web Developer / Game Developer
        </p>
        <div class="q-mb-md row items-center justify-center">
          <q-btn
            class="q-mr-sm q-py-md"
            outline
            rounded
            color="black"
            label="Download CV"
            style="width: 150px"
            href="/JuliusCabangon_CV.pdf"
            download
          />
          <q-btn
            class="q-ml-sm q-py-md"
            unelevated
            rounded
            @click="scrollToSection('contactsPage')"
            color="black"
            label="Contact Me"
            style="width: 150px"
          />
        </div>
        <div class="row items-center justify-center">
          <q-btn
            class="q-mr-sm"
            round
            color="black"
            icon="ion-logo-linkedin"
            href="https://www.linkedin.com/in/julius-odref-czar-cabangon-5475002a9/"
          />
          <q-btn
            class="q-ml-sm"
            round
            color="black"
            icon="ion-logo-github"
            href="https://github.com/Jolayus"
          />
        </div>
      </div>
    </q-page>
  </transition>
</template>

<script>
export default {
  name: "IndexPage",
  setup() {
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    return {
      scrollToSection,
    };
  },
};
</script>
