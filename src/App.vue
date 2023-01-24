<script>
import PokeList from './components/PokeList.vue';
export default {
  components: { PokeList }
}
</script>

<template>
  <header class="container text-center my-4">
    <h1>Pokedex</h1>
  </header>
  <poke-list></poke-list>

</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>