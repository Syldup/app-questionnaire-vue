<template>
  <div class="form-question">
    <b-form-group :label="c_enunciate" label-size="lg">
      <b-form-radio-group
        v-model="selected"
        :options="c_answers"
        size="lg" buttons
        button-variant="outline-info"
        :stacked="c_options.name == 'radio-btn-stacked'"
        :name="c_options.name">
      </b-form-radio-group>
    </b-form-group>

    <b-button
      type="button" variant="primary"
      :disabled="selected == 0"
      @click="next">Suivant</b-button>
  </div>
</template>

<script>
export default {
  name: 'form-question',
  props: ['enunciate', 'answers', 'options'],
  data () {
    return {
      selected: 0
    }
  },
  computed: {
    c_enunciate: function () {
      return this.enunciate
    },
    c_answers: function () {
      return this.answers
    },
    c_options: function () {
      return Object.assign({
        name: 'radio-btn-stacked'
      }, this.options)
    }
  },
  methods: {
    next () {
      this.$emit('next', this.selected)
      this.selected = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
