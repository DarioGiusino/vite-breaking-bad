import { reactive } from "vue";

export const store = reactive({
  pokemons: [],
  isLoading: false,
  prevPage: null,
  nextPage: null,
});
