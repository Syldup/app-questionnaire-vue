<!-- Réaliser le 23/10/2019 -->

<template>
  <carte
    sd-type="admin filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_320x209.png">

    <div>
      <label for="range" class="text-white">Nombre de question : {{ sdNbMaxQ }}</label>
      <b-form-input id="range" v-model="sdNbMaxQ" type="range" min="0" :max="max"></b-form-input>

      <b-form-checkbox
        id="checkbox"
        type="number"
        v-model="sdShuffleQ"
        name="checkbox"
        class="text-white"
      > Mélanger les questions
      </b-form-checkbox>
    </div>

    <a slot="bFooter" @click="sdOnSubmit"
      class="submit btn btn-primary btn-round btn-lg btn-block rounded-pill"
      >Sauvgarder</a>
  </carte>
</template>

<script>
import FormGroupInput from '@/components/formGroupInput.vue'
import Carte from '@/components/carte.vue'

export default {
  name: 'admin',
  components: {
    Carte,
    [FormGroupInput.name]: FormGroupInput
  },
  data () {
    return {
      sdNbMaxQ: -1,
      sdShuffleQ: true
    }
  },
  created () {
    // rediriger vers la page d'autentification si non admin
    if (localStorage.testDone !== 'admin') {
      this.$router.push({ name: 'login' })
    }
  },
  mounted () {
    if (localStorage.sdNbMaxQ) {
      this.sdNbMaxQ = localStorage.sdNbMaxQ
    } else this.sdNbMaxQ = this.max
    if (localStorage.sdShuffleQ) this.sdShuffleQ = localStorage.sdShuffleQ
  },
  computed: {
    max () {
      return require('../assets/questions.json').length
    }
  },
  methods: {
    sdOnSubmit () {
      localStorage.sdNbMaxQ = this.sdNbMaxQ
      localStorage.sdShuffleQ = this.sdShuffleQ
      this.$router.push({ name: 'question' })
    }
  }
}
</script>

<style lang="scss">
  .admin {
    grid-template-columns: 1fr 320px 1fr;
  }
  .admin .form-group {
    margin: 10px 0;
  }
</style>
