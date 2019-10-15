<template>
  <div class="register container">
    <img alt="Vue logo" src="../assets/logo.png">
    <form-register/>
    <form-question
    	:question="question"
    	:answers="answers"
    />
  </div>
</template>

<script>
import formRegister from '@/components/formRegister.vue'
import formQuestion from '@/components/formQuestion.vue'

export default {
  name: 'register',
  data () {
  	return {
	  	question:"Qui est-il ?",
	  	answers:[
		  	{ text: 'Toggle this custom radio', value: 1 },
		  	{ text: 'Toggle this custom radio', value: 2 },
		  	{ text: 'Toggle this custom radio', value: 3 }
	  	]
  	}
  },
  components: {
    formRegister,
    formQuestion
  }
}
</script>
