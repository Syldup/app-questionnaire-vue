<template>
  <div class="question">
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
  data () {
    return {
      index: 0,
      questions: []
    }
  },
  components: {
    formQuestion
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
      for (let i = data.length; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i)
        this.questions[i - 1] = data[randomIndex]
        data.splice(randomIndex, 1)
      }
    }
  }
}
</script>
