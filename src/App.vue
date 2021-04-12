<template>
  <div>
    <Header :languageSelected="language" />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data(){
    return{
      language: 'en'
    }
  },
  components: {
    Header
  },
  created(){
    this.emitter.on('changeLanguage', (optionChoosed) => {
      this.language = optionChoosed
    })
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
