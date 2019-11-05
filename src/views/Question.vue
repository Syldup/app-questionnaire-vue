<!-- Réaliser le 18/10/2019 -->

<template>
  <carte
    sd-type="question"
    sd-bg-image="url('img/neon2.jpg')"
  >
    <img slot="bHeader" alt="EEV Logo" src="img/logoEEV_214x140.png"/>

    <!-- Accueil questionaire -->
    <div v-if="sdIndex < 0">
      <h3 class="text-white">Tests de sécurité</h3>
      <p class="text-white">
        Il est important que vous répondiez le plus sincèrement possible aux question.
      </p>
      <b-button
        class="px-5 rounded-pill justify-content-center"
        type="button" variant="primary"
        @click="sdInitQuestions">
        Lancer le questionnaire
      </b-button>
    </div>

    <!-- Resulat du questionnaire -->
    <result-question v-else-if="sdIndex >= max"
      :sd-questions="sdQuestions"
      :sd-answers="sdAnswers"
      @sd-restart="sdRestart"
    />

    <!-- Question n°sdIndex -->
    <form-question v-else
      :sd-enunciate="sdQuestions[sdIndex].enunciate"
      :sd-answers="sdQuestions[sdIndex].answers"
      :sd-options="sdQuestions[sdIndex].options"
      @sd-next="sdNext"
    />

    <div slot="bFooter">
      <!-- Progresse bar de l'avencement dans le questionnaire -->
      <strong v-if="sdIndex > -1 " class="text-white rounded-top bg-dark py-1 px-2">
        {{ sdIndex }} / {{ max }}
      </strong>
      <b-progress slot="bFooter" class="rounded-pill" :value="sdIndex" :max="max" animated/>
    </div>
  </carte>
</template>

<script>
import FormQuestion from '@/components/formQuestion.vue'
import ResultQuestion from '@/components/resultQuestion.vue'
import Carte from '@/components/carte.vue'

export default {
  name: 'question',
  components: {
    Carte,
    FormQuestion,
    ResultQuestion
  },
  data () {
    return {
      sdIndex: -1, // Avencemant dans le questionnaire
      sdQuestions: [],
      sdAnswers: [],
      sdOptionQ: {
        sdShuffleQ: true,
        sdNbMaxQ: -1
      }
    }
  },
  created () {
    // rediriger vers la page d'autentification si le formulaire est incomplet
    if (!localStorage.sdUser) {
      this.$router.push({ name: 'login' })
    }
    if (localStorage.sdOptionQ) {
      this.sdOptionQ = JSON.parse(localStorage.sdOptionQ)
    } else this.sdOptionQ.sdNbMaxQ = this.sdData.length
  },
  computed: {
    sdData () {
      return require('../assets/questions.json')
    },
    max () {
      return this.sdQuestions.length
    }
  },
  methods: {
    sdNext (selected) {
      // Ajouter la valeur de la reponce à la list des reponces
      this.sdAnswers.push(selected)
      // Passer à la question suivante
      this.sdIndex++
    },
    sdRestart () {
      this.sdQuestions = []
      this.sdAnswers = []
      this.sdInitQuestions()
    },
    sdInitQuestions () {
      var sdData = [...this.sdData]
      for (let i = sdData.length; i > 0 && this.max < this.sdOptionQ.sdNbMaxQ; i--) {
        let sdRandomIndex = this.sdOptionQ.sdShuffleQ ? Math.floor(Math.random() * i) : 0
        this.sdQuestions.push(sdData[sdRandomIndex])
        sdData.splice(sdRandomIndex, 1)
      }
      this.sdIndex = 0
    }
  }
}
</script>
