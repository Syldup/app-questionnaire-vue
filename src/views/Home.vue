<template>
  <carte
    sd-type="home filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <h1 class="text-white">Bienvenu {{ sdFirstname }}</h1>
    <b-button slot="bFooter"
        class="px-5 rounded-pill justify-content-center"
        style="margin-bottom: 100px"
        type="button" variant="primary"
        @click="sdOnSubmit">
        Déconnection
      </b-button>
  </carte>
</template>

<script>
import Carte from '@/components/carte.vue'

export default {
  name: 'home',
  bodyClass: 'home',
  components: {
    Carte
  },
  created () {
    // rediriger vers la page d'autentification si non identifier
    if (localStorage.testDone !== 'true') {
      this.$router.push({ name: 'login' })
    }
  },
  methods: {
    sdOnSubmit () {
      var sdNbMaxQ = localStorage.sdNbMaxQ
      var sdShuffleQ = localStorage.sdShuffleQ
      localStorage.clear()
      localStorage.sdNbMaxQ = sdNbMaxQ
      localStorage.sdShuffleQ = sdShuffleQ
      this.$router.push({ name: 'login' })
    }
  },
  computed: {
    sdFirstname () {
      return localStorage.sdFirstname
    }
  }
}
</script>
