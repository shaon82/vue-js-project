

<template>
  <router-view></router-view>
</template>

<script >

import LoginPage from './components/LoginPage.vue'

export default{
  components:{
    LoginPage
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9;
}

h1 {
  font-weight: 800;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

</style>


