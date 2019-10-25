<!-- Réaliser le 18/10/2019 -->

<template>
  <carte
    sd-type="question"
    sd-bg-image="url('img/neon2.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_214x140.png">

    <form-question v-if="sdIndex >= 0 && sdIndex < max"
      :sd-enunciate="sdQuestions[sdIndex].enunciate"
      :sd-answers="sdQuestions[sdIndex].answers"
      :sd-options="sdQuestions[sdIndex].options"
      @sd-next="sdNext"
    />
    <div v-if="sdIndex < 0">
    <h3 class="text-white">Tests de sécurité</h3>
      <p class="text-white">
        Il est important que vous répondiez le plus sincèrement possible aux question.
      </p>
      <b-button
      class="px-5 rounded-pill justify-content-center"
      type="button" variant="primary"
      @click="sdInitQuestions">Lancer le questionnaire</b-button>
    </div>

    <div slot="bFooter">
      <strong v-if="sdIndex > -1 " class="text-white rounded-top bg-dark py-1 px-2">{{ sdIndex }} / {{ max }}</strong>
      <b-progress slot="bFooter" class="rounded-pill" :value="sdIndex" :max="max" animated>
      </b-progress>
    </div>
  </carte>
</template>

<script>
import formQuestion from '@/components/formQuestion.vue'
import Carte from '@/components/carte.vue'

export default {
  name: 'question',
  components: {
    Carte,
    formQuestion
  },
  data () {
    return {
      sdIndex: -1,
      sdQuestions: []
    }
  },
  computed: {
    max () {
      return this.sdQuestions.length
    }
  },
  methods: {
    sdNext: function (selected) {
      this.sdIndex++
    },
    sdInitQuestions: function () {
      var sdData = require('../assets/questions.json')
      let sdLen = sdData.length
      for (let i = sdLen; i > 0; i--) {
        let sdRandomIndex = Math.floor(Math.random() * i)
        this.sdQuestions.push(sdData[sdRandomIndex])
        sdData.splice(sdRandomIndex, 1)
      }
      this.sdIndex = 0
    }
  }
}
</script>
