<!-- Réaliser le 18/10/2019 -->

<template>
  <div class="question">
    <div
      class="header-image"
      style="background-image: url('img/neon2.jpg')"
    ></div>
    <!-- Suivi des question valider -->
    <b-form-radio-group
      v-model="index"
      :options="sd_nav"
      buttons
      name="radio-btn-outline">
    </b-form-radio-group>

    <!-- Form question -->
    <form-question
      :enunciate="questions[index].enunciate"
      :answers="questions[index].answers"
      :options="questions[index].options"
      @next="next"
    />
  </div>
</template>

<script>
import formQuestion from '@/components/formQuestion.vue'

export default {
  name: 'question',
  components: {
    formQuestion
  },
  data () {
    return {
      index: 0,
      questions: [],
      sd_nav: []
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    next: function (selected) {
      this.index++
    },
    fetchData: function () {
      var data = require('../assets/questions.json')
      let len = data.length
      for (let i = len; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i)
        this.questions[i - 1] = data[randomIndex]
        data.splice(randomIndex, 1)
        this.sd_nav.push({
          'text': i,
          'value': i - 1,
          'button-variant': 'success'
        })
      }
      this.sd_nav.reverse()
    }
  }
}
</script>

<style lang="scss">
  .question {
    /*display: grid;
    grid-template-columns: 1fr 320px 1fr;
    background-color: #000;*/
  }
  .carte {
    grid-column: 2;
    display: grid;
    grid-template-rows: .6fr auto 1fr repeat(3, auto) 1fr auto 2fr;
  }
  .form-group {
    margin: 10px 0;
  }
  .btn.submit {
    font-size: .9em;
    padding: 12px;
    color: #fff !important;
    height: 44px;
  }
</style>
