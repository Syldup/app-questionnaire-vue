<template>
  <div class="home filter">
    <div
      class="header-image"
      style="background-image: url('img/bg_login.jpg')"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  bodyClass: 'home',
  created () {
    // rediriger vers la page d'autentification si non identifier
    this.$router.push({ name: 'login' })
  }
}
</script>
