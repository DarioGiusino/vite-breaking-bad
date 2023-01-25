<script>
import PokeList from './components/PokeList.vue';
import axios from 'axios';
import { store } from './data/store';
export default {
  components: { PokeList },
  data() {
    return {
      store,
      apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
      pokeTypes: [],
      type: '',
      searchTerm: ''
    }
  },
  methods: {
    // get pokemon list and push in store
    fetchPokemon(url) {
      store.isLoading = true;

      axios.get(url)
        .then(res => {
          store.pokemons = res.data.docs;
          store.nextPage = res.data.nextPage;
          store.prevPage = res.data.prevPage;
        }).catch(e => {
          store.pokemons = []
        }).then(() => {
          store.isLoading = false
        })
    },

    getPokemonTypes(url) {
      axios.get(url)
        .then((res) => {
          this.pokeTypes = res.data
        })
    },

    showPokemonByType(type) {
      this.type = type
      if (this.type) {
        this.fetchPokemon(`${this.apiUri}?per=10&page=1&eq[type1]=${type}`)
      } else {
        this.fetchPokemon(`${this.apiUri}?per=10&page=1`);
      }
      // console.log(`${this.apiUri}?per=10&page=1&eq[type1]=${type}`);
    },

    showPokemonByName(word) {
      this.searchTerm = word;
      this.fetchPokemon(`${this.apiUri}?per=10&page=1&q[name]=${word}`)
    },

    //change page
    changePage(numb) {
      if (!numb) return
      if (this.type) {
        this.fetchPokemon(`${this.apiUri}?per=10&page=${numb}&eq[type1]=${this.type}`)
      } else {
        this.fetchPokemon(`${this.apiUri}?per=10&page=${numb}`)
      }
    }
  },
  mounted() {
    this.fetchPokemon(`${this.apiUri}?per=10&page=1`);
    this.getPokemonTypes(`${this.apiUri}/types1`)
  }
}
</script>

<template>
  <header class="container text-center my-4">
    <h1>Pokedex</h1>
    <ul class="pagination">
      <li class="page-item" @click="changePage(this.store.prevPage)"><span class="page-link"
          role="button">Previous</span></li>
      <li class="page-item" @click="changePage(this.store.nextPage)"><span class="page-link" role="button">Next</span>
      </li>
    </ul>
  </header>
  <poke-list :poke-types="pokeTypes" @type-selected="showPokemonByType" @change-word="showPokemonByName"></poke-list>

</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>