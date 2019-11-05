<template>
  <carte
    sd-type="home filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_320x209.png">
    <h1 class="text-white">Bienvenu {{ sdFirstname }}</h1>

    <b-button slot="bFooter"
      class="px-5 rounded-pill justify-content-center"
      type="button" variant="primary"
      @click="sdOnSubmit"
    > Déconnection
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
    if (localStorage.etat !== 'login') {
      this.$router.push({ name: 'login' })
    }
  },
  methods: {
    sdOnSubmit () {
      var sdOptionQ = localStorage.sdOptionQ
      localStorage.clear()
      localStorage.sdOptionQ = sdOptionQ
      this.$router.push({ name: 'login' })
    }
  },
  computed: {
    sdFirstname () {
      return localStorage.sdUser ? JSON.parse(localStorage.sdUser).sdFirstname : ' à toi'
    }
  }
}
</script>
