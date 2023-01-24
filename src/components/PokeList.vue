<script>
import PokeCard from './PokeCard.vue';
import { store } from '../data/store';
export default {
    components: { PokeCard },
    data() {
        return store
    }
}
</script>

<template>
    <main class="container">
        <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
            <poke-card v-for="pokemon in pokemons" :key="pokemon._id" :img="pokemon.imageUrl" :name="pokemon.name"
                :type1="pokemon.type1" :type2="pokemon.type2" :weight="pokemon.weight" :height="pokemon.height"
                :hp="pokemon.hp" :atk="pokemon.atk" :spAtk="pokemon.sp_atk" :def="pokemon.def" :spDef="pokemon.sp_def"
                :spd="pokemon.spd"></poke-card>
        </div>
    </main>
</template>

<style>

</style>