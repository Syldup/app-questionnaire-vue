<template>
  <div class="form-register">
    <b-form @submit="onSubmit" class="">
      <b-form-group
        id="fieldset-horizontal" label-for="input-lastname"
        label-cols-sm="2" label-align-sm="right" label="Nom :" >
        <b-form-input id="input-lastname" type="text" v-model="lastname" required/>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal" label-for="input-firstname"
        label-cols-sm="2" label-align-sm="right" label="Prénom :" >
        <b-form-input id="input-firstname" type="text" v-model="firstname" required/>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal" label-for="input-society"
        label-cols-sm="2" label-align-sm="right" label="Société :" >
        <b-form-input id="input-society" type="text" v-model="society" required/>
      </b-form-group>

      <b-button type="submit" variant="primary">Commencer le test</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'form-register',
  data () {
    return {
      lastname: '',
      firstname: '',
      society: ''
    }
  },
  methods: {
    onSubmit (evt) {
      // evt.preventDefault()
      // alert(JSON.stringify(this.form))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
