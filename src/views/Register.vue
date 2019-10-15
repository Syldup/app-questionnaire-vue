<template>
  <div class="register container">
    <img alt="Vue logo" src="../assets/logo.png">
    <form-register/>
  </div>
</template>

<script>
import formRegister from '@/components/formRegister.vue'

export default {
  name: 'register',
  components: {
    formRegister
  }
}
</script>
