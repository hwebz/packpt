<template lang="jade">
  div
    h1 {{ msg }}
    hello-component
</template>

<script>
  import HelloComponent from './components/HelloComponent.vue'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: { HelloComponent }
  }
</script>

<script lang="coffee">
  exports.default = data: -> { msg: 'Hello!awrgasergaeragasefasdf' }
</script>

<style lang="scss" scoped>
  $color-red: #ff0000;

  h1 {
    color: $color-red;
  }
</style>
