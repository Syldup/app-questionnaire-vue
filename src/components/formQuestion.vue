<template>
  <div class="form-question">
    <b-form @submit="onSubmit">
      <b-form-group :label="question" label-size="lg">
        <b-form-radio-group
          v-model="selected"
          :options="answers1"
          size="lg" buttons stacked
          button-variant="outline-info"
          name="radio-btn-stacked">
        </b-form-radio-group>
        <b-form-radio-group v-if="answers2"
          v-model="selected"
          :options="answers2"
          size="lg" buttons stacked
          button-variant="outline-info"
          name="radio-btn-stacked">
        </b-form-radio-group>
      </b-form-group>

      <b-button type="Commencer le test" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'form-question',
  props: ['question', 'answers'],
  data () {
    return {
      selected: 0,
      answers1: this.answers,
      answers2: []
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
