<!-- Réaliser le 23/10/2019 -->

<template>
  <carte
    sd-type="login filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_320x209.png">

    <div>
      <fg-input v-if="adminForm"
        type="password"
        addon-icon="flaticon-key"
        placeholder="Mot de passe ..."
        v-model="sdMDP"
      ></fg-input>

      <template v-else>
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
      </template>

      <b-form-checkbox
        id="checkbox"
        v-model="adminForm"
        name="checkbox"
        class="text-white"
      > Admin
      </b-form-checkbox>
    </div>

    <a v-if="adminForm"
      slot="bFooter" @click="sdOnAuth"
      class="submit btn btn-primary btn-round btn-lg btn-block rounded-pill"
    > Connection </a>

    <a v-else
      slot="bFooter" @click="sdOnSubmit"
      class="submit btn btn-primary btn-round btn-lg btn-block rounded-pill"
      :class="{ 'disabled': sdNotValide }"
    > Commencer le test </a>
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
      sdSociety: '',
      sdMDP: '',
      adminForm: false
    }
  },
  mounted () {
    if (localStorage.sdFirstname) this.sdFirstname = localStorage.sdFirstname
    if (localStorage.sdLastname) this.sdLastname = localStorage.sdLastname
    if (localStorage.sdSociety) this.sdSociety = localStorage.sdSociety
  },
  computed: {
    // Formulaire invalide
    sdNotValide () {
      return (this.sdFirstname === '' || this.sdLastname === '' || this.sdSociety === '')
    }
  },
  methods: {
    sdOnSubmit () {
      localStorage.sdFirstname = this.sdFirstname
      localStorage.sdLastname = this.sdLastname
      localStorage.sdSociety = this.sdSociety
      this.$router.push({ name: 'question' })
    },
    sdOnAuth () {
      if (this.encrypt(this.sdMDP) === 4023166703) {
        localStorage.testDone = 'admin'
        this.$router.push({ name: 'admin' })
      }
    },
    hash (str) {
      for (var i = 0, h = 0xdeadbeef; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 2654435761)
      }
      return (h ^ h >>> 16) >>> 0
    },
    encrypt (str) {
      return this.hash('5av:r' + this.hash('e*54f' + str + 'ùarf$') + 'é"w5')
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
