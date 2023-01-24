<script>
import PokeList from './components/PokeList.vue';
import axios from 'axios';
import { store } from './data/store';
export default {
  components: { PokeList },
  data() {
    return { store }
  },
  created() {
    axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1').then(res => {
      console.log(res.data);
    })

  }
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