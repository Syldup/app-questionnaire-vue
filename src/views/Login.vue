<!-- Réaliser le 23/10/2019 -->

<template>
  <carte
    sd-type="login filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV.png">

    <div>
      <fg-input
        addon-icon="flaticon-name"
        placeholder="Prénom ..."
        v-model="sdFirstname"
      ></fg-input>

      <fg-input
        addon-icon="flaticon-text"
        placeholder="Nom ..."
        v-model="sdLastname"
      ></fg-input>

      <fg-input
        addon-icon="flaticon-company-1"
        placeholder="Société ..."
        v-model="sdSociety"
      ></fg-input>
    </div>

    <a slot="bFooter" @click="onSubmit"
      class="submit btn btn-primary btn-round btn-lg btn-block rounded-pill"
      :class="{ 'disabled': notValide }">Commencer le test</a>
  </carte>
</template>

<script>
import FormGroupInput from '@/components/formGroupInput.vue'
import Carte from '@/components/carte.vue'

export default {
  name: 'login',
  components: {
    Carte,
    [FormGroupInput.name]: FormGroupInput
  },
  data () {
    return {
      sdFirstname: '',
      sdLastname: '',
      sdSociety: ''
    }
  },
  computed: {
    // Formulaire invalide
    notValide () {
      return (this.sdFirstname === '' || this.sdLastname === '' || this.sdSociety === '')
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({ name: 'question' })
    }
  }
}
</script>

<style lang="scss">
  .form-group {
    margin: 10px 0;
  }
  .btn.submit {
    font-size: .9em;
    padding: 12px;
    color: #fff !important;
    height: 44px;
  }
</style>
