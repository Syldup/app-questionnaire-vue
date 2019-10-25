<!-- Réaliser le 18/10/2019 -->

<template>
  <div class="form-question">
    <h3 class="text-white">{{ sdEnunciate }}</h3>
    <b-form-radio-group
      class="my-5 rounded bg-dark"
      v-model="sdSelected"
      :options="sdAnswers"
      size="lg" buttons
      :button-variant="csdOptions.buttonVariant"
      :stacked="csdOptions.stacked"
      :name="csdOptions.name">
    </b-form-radio-group>
    <br/>
    <b-button
      class="px-5 rounded-pill justify-content-center"
      type="button" variant="primary"
      :disabled="sdSelected == 0"
      @click="sdNext">Suivant</b-button>
  </div>
</template>

<script>
export default {
  name: 'form-question',
  props: ['sdEnunciate', 'sdAnswers', 'sdOptions'],
  data () {
    return {
      sdSelected: 0
    }
  },
  computed: {
    csdOptions: function () {
      return Object.assign({
        name: 'radio-btn-stacked',
        stacked: true,
        buttonVariant: 'outline-light'
      }, this.sdOptions)
    }
  },
  methods: {
    sdNext () {
      this.$emit('sd-next', this.sdSelected)
      this.sdSelected = 0
    }
  }
}
</script>
