<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html{
    background-color: red;
    width: 100%;
    height: 100%;
  }

  #app{
    width: 100%;
    height: 100vh;
    background-color: var(--bg-global);
    padding: 2rem 2rem;
  }
</style>
