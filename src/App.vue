<template>
  <div>
    <Header :languageSelected="languageChoosed" />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data(){
    return{
      languageChoosed: 'pt'
    }
  },
  components: {
    Header
  },
  beforeCreate(){
    this.emitter.on('LANGUAGE_CHANGED', language => this.languageChoosed = language)
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html, #app{
    background-color: var(--bg-global);
    width: 100%;
    height: 100%;
  }

  #app{
    padding: 2em;
  }
  @media (max-width: 768px){
      #app{
        padding: .8em
      }
  }

  
</style>
