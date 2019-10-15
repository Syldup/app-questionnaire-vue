<template>
  <div class="question">
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
