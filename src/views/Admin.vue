<!-- Réaliser le 23/10/2019 -->

<template>
  <carte
    sd-type="admin filter"
    sd-bg-image="url('img/neon2.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_320x209.png">

    <template>
      <label for="range" class="text-white">Nombre de question : {{ sdOptionQ.sdNbMaxQ }}</label>
      <b-form-input id="range" v-model="sdOptionQ.sdNbMaxQ" type="range" min="0" :max="max"></b-form-input>

      <b-form-checkbox
        id="checkbox"
        type="number"
        v-model="sdOptionQ.sdShuffleQ"
        name="checkbox"
        class="text-white"
      > Mélanger les questions
      </b-form-checkbox>
    </template>

    <a slot="bFooter" @click="sdOnSubmit"
      class="submit px-5 text-white btn btn-primary btn-lg rounded-pill"
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
      sdOptionQ: {
        sdNbMaxQ: -1,
        sdShuffleQ: true
      }
    }
  },
  created () {
    // rediriger vers la page d'autentification si non admin
    if (localStorage.etat !== 'admin') {
      this.$router.push({ name: 'login' })
    }
    if (localStorage.sdOptionQ) {
      this.sdOptionQ = JSON.parse(localStorage.sdOptionQ)
    } else this.sdOptionQ.sdNbMaxQ = this.max
  },
  computed: {
    max () { // Nombre max de question
      return require('../assets/questions.json').length
    }
  },
  methods: {
    sdOnSubmit () {
      localStorage.sdOptionQ = JSON.stringify(this.sdOptionQ)
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
  .admin .bande-main {
    background-color: #0006;
    border-radius: 30px;
    padding: 30px;
  }
</style>
