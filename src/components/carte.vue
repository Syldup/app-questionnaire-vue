<!-- Réaliser le 24/10/2019 -->

<template>
  <div class="carte" :class="sdType">

    <slot name="background">
      <!-- Background de la page -->
      <div v-if="sdBgImage"
        class="header-image"
        :style="sdBackgroundImage"
      ></div>
    </slot>

    <!-- Header de la page -->
    <div class="carte-header" v-if="$slots.cHeader">
      <slot name="cHeader"></slot>
    </div>

    <!-- Centre de la page d'une largeur de 320px -->
    <div class="bande">
      <!-- Header de la bande -->
      <div class="bande-header" v-if="$slots.bHeader">
        <slot name="bHeader"></slot>
      </div>

      <div class="bande-main">
        <slot></slot>
      </div>

      <!-- Footer de la bande -->
      <div class="bande-footer" v-if="$slots.bFooter">
        <slot name="bFooter"></slot>
      </div>
    </div>

    <!-- Footer de la page -->
    <div class="carte-footer" v-if="$slots.cFooter">
      <slot name="cFooter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carte',
  props: {
    sdType: String,
    sdBgImage: String
  },
  computed: {
    sdBackgroundImage () {
      return 'background-image: ' + this.sdBgImage
    }
  }
}
</script>

<style lang="scss">
  .header-image {
    position: absolute;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .carte {
    display: grid;
    grid-template: auto 1fr auto / 1fr 320px 1fr;
    grid-template-areas:
      "  hd   hd    hd"
      "left bande right"
      "  ft   ft    ft";
  }
  .carte-header {
    grid-area: hd;
  }
  .carte-footer {
    grid-area: ft;
  }
  .bande {
    grid-area: bande;
    display: grid;
    grid-template-rows: .6fr auto  1fr  auto  1fr auto  2fr;
    grid-template-areas: "a" "bhd" "b" "main" "c" "bft" "d";
  }
  .bande-header {
    grid-area: bhd;
  }
  .bande-footer {
    grid-area: bft;
  }
  .bande-main {
    grid-area: main;
  }
</style>
