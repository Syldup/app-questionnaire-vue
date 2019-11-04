<template>
  <carte
    sd-type="home filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <b-button slot="bFooter"
        class="px-5 rounded-pill justify-content-center"
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
      localStorage.clear()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
