<template>
  <div id="app">
    <show-greetings-component :msg='msg'></show-greetings-component>
    <change-greetings-component :msg='msg'></change-greetings-component>
  </div>
</template>

<script>
  import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
  import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'
  import store from './vuex/store'
  
  export default {
    computed: {
      msg() {
        return this.$store.getters.getMessage;
      }
    },
    components: {
      ShowGreetingsComponent,
      ChangeGreetingsComponent
    },
    store
  }
</script>

<style lang="scss">

</style>
