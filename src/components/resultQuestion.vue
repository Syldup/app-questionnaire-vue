<!-- Réaliser le 28/10/2019 -->

<template>
  <div class="result-question">
    <p class="text-white">
      Merci d'avoir répondu au questionnaire.<br/>
      Vous avez un taux de réussite de <strong>{{ sdPourcentage }} %</strong> !<br/>
    </p>

    <div v-if="sdPourcentage < 50">
      <p class="text-white">
        Malheureusement vous avez moins de <strong>50 %</strong>,<br/>
        Vous devez donc recommencer !
      </p>
      <b-button
        class="px-5 rounded-pill justify-content-center"
        type="button" variant="primary"
        @click="sdOnSubmit">
        Recommencer le questionnaire
      </b-button>
    </div>

    <div v-else>
      <p class="text-white">
        Vous pouvez désormais accéder à notre site web !
      </p>
      <b-button
        class="px-5 rounded-pill justify-content-center"
        type="button" variant="primary"
        @click="sdOnSubmit">
        Page d'accueil
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'result-question',
  props: {
    sdQuestions: Array,
    sdAnswers: Array
  },
  computed: {
    sdMaxScord () { // Plus grand scord possible
      if (this.sdQuestions.length === 0) {
        return 1
      }
      return this.sdQuestions.map(q =>
        Math.max(...q.answers.map(a => a.value))
      ).reduce(this.add)
    },
    sdScord () { // Somme des valeurs des réponces
      if (this.sdAnswers.length === 0) {
        return 0
      }
      return this.sdAnswers.reduce(this.add)
    },
    sdPourcentage () { // Claclcule du porsentage de bonne reponce
      return Math.round(this.sdScord * 100 / this.sdMaxScord)
    }
  },
  methods: {
    add (a, b) {
      return a + b
    },
    sdOnSubmit () {
      if (this.sdPourcentage < 50) {
        this.$emit('sd-restart')
      } else {
        localStorage.etat = 'login'
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
