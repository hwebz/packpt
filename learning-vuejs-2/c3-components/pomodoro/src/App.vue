<template>
    <div id="app" class="container">
      <h2>
        <span>Pomodoro</span>
        <controls-component></controls-component>
      </h2>
      <state-title-component></state-title-component>
      <countdown-component></countdown-component>
      <transition name="fade">
        <kittens-component v-if="kittens"></kittens-component>
      </transition>
    </div>
</template>

<script>
    import ControlsComponent from './components/ControlsComponent.vue'
    import CountdownComponent from './components/CountdownComponent.vue'
    import KittensComponent from './components/KittensComponent.vue'
    import StateTitleComponent from './components/StateTitleComponent.vue'

    window.data = {
      kittens: true
    }

    export default {
      data() {
        return window.data
      },
      components: {
        ControlsComponent,
        CountdownComponent,
        KittensComponent,
        StateTitleComponent
      }
    }
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
