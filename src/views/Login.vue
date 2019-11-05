<!-- Réaliser le 23/10/2019 -->

<template>
  <carte
    sd-type="login filter"
    sd-bg-image="url('img/bg_login.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_320x209.png">

    <div>
      <!-- Input du mot de passe admin si admin selected -->
      <fg-input v-if="adminForm"
        type="password"
        addon-icon="flaticon-key"
        placeholder="Mot de passe ..."
        v-model="sdMDP"
      ></fg-input>

      <!-- Sinon Input user -->
      <template v-else>
        <fg-input
          addon-icon="flaticon-name"
          placeholder="Prénom ..."
          v-model="sdUser.sdFirstname"
        ></fg-input>

        <fg-input
          addon-icon="flaticon-text"
          placeholder="Nom ..."
          v-model="sdUser.sdLastname"
        ></fg-input>

        <fg-input
          addon-icon="flaticon-company-1"
          placeholder="Société ..."
          v-model="sdUser.sdSociety"
        ></fg-input>
      </template>

      <!-- Checkbox Admin form -->
      <b-form-checkbox
        id="checkbox"
        v-model="adminForm"
        name="checkbox"
        class="text-white"
      > Admin
      </b-form-checkbox>
    </div>

    <!-- Bouttons submit -->
    <a v-if="adminForm"
      slot="bFooter" @click="sdOnAuth"
      class="submit px-5 btn btn-primary btn-lg rounded-pill"
    > Connection </a>

    <a v-else
      slot="bFooter" @click="sdOnSubmit"
      class="submit px-5 btn btn-primary btn-lg rounded-pill"
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
      sdUser: {
        sdFirstname: '',
        sdLastname: '',
        sdSociety: ''
      },
      sdMDP: '',
      adminForm: false
    }
  },
  mounted () {
    if (localStorage.sdUser) {
      this.sdUser = JSON.parse(localStorage.sdUser)
    }
  },
  computed: {
    // Formulaire invalide
    sdNotValide () {
      return (
        this.sdUser.sdFirstname === '' ||
        this.sdUser.sdLastname === '' ||
        this.sdUser.sdSociety === ''
      )
    }
  },
  methods: {
    sdOnSubmit () {
      localStorage.sdUser = JSON.stringify(this.sdUser)
      this.$router.push({ name: 'question' })
    },
    sdOnAuth () {
      if (this.encrypt(this.sdMDP) === 4023166703) {
        localStorage.etat = 'admin'
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
