<!-- Réaliser le 23/10/2019 -->

<template>
  <carte
    sd-type="login filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_320x209.png">

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

    <a slot="bFooter" @click="sdOnSubmit"
      class="submit btn btn-primary btn-round btn-lg btn-block rounded-pill"
      :class="{ 'disabled': sdNotValide }">Commencer le test</a>
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
    sdNotValide () {
      return (this.sdFirstname === '' || this.sdLastname === '' || this.sdSociety === '')
    }
  },
  methods: {
    sdOnSubmit () {
      this.$router.push({ name: 'question' })
    }
  }
}
</script>

<style lang="scss">
  .login {
    grid-template-columns: 1fr 320px 1fr;
  }
  .login .form-group {
    margin: 10px 0;
  }
  .login .btn.submit {
    font-size: .9em;
    padding: 12px;
    color: #fff !important;
    height: 44px;
  }
</style>
