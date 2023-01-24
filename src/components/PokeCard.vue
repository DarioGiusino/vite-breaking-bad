<script>
export default {
    props: {
        img: String,
        name: String,
        type1: String,
        type2: String,
        weight: Number,
        height: Number,
        hp: Number,
        atk: Number,
        spAtk: Number,
        def: Number,
        spDef: Number,
        spd: Number
    }
}
</script>

<template>
    <div class="col">
        <div class="poke-card mb-3" :class="type1.toLowerCase()">
            <!-- poke image -->
            <figure>
                <img class="img-fluid" :src="img" :alt="name">
            </figure>

            <!-- poke name -->
            <h4 class="text-center mb-3">{{ name }}</h4>

            <!-- poke-types -->
            <div class="types d-flex justify-content-around">
                <p :class="type1.toLowerCase()">{{ type1 }}</p>
                <p v-if="type2" :class="type2.toLowerCase()">{{ type2 }}</p>
            </div>

            <!-- measures -->
            <div class="measures d-flex justify-content-around">
                <div class="weight text-center">
                    <p class="mb-0"><strong>{{ weight }} KG</strong></p>
                    <label>Weight</label>
                </div>
                <div class="height text-center">
                    <p class="mb-0"><strong>{{ height }} M</strong></p>
                    <label>Height</label>
                </div>
            </div>

            <!-- poke-stats -->
            <div class="stats">
                <h5 class="text-center mt-3">Base stats</h5>
                <div class="stat d-flex align-items-center">
                    <p class="me-2 mb-1">HP</p>
                    <div class="progress flex-grow-1">
                        <div class="progress-bar hp" :style="`width: calc(${hp}% / 2)`">{{ hp }}</div>
                    </div>
                </div>
                <div class="stat d-flex align-items-center">
                    <p class="me-2 mb-1">ATK</p>
                    <div class="progress flex-grow-1">
                        <div class="progress-bar atk" :style="`width: calc(${atk}% / 2)`">{{ atk }}</div>
                    </div>
                </div>
                <div class="stat d-flex align-items-center">
                    <p class="me-2 mb-1">SP.ATK</p>
                    <div class="progress flex-grow-1">
                        <div class="progress-bar sp-atk" :style="`width: calc(${spAtk}% / 2)`">{{ spAtk }}</div>
                    </div>
                </div>
                <div class="stat d-flex align-items-center">
                    <p class="me-2 mb-1">DEF</p>
                    <div class="progress flex-grow-1">
                        <div class="progress-bar def" :style="`width: calc(${def}% / 2)`">{{ def }}</div>
                    </div>
                </div>
                <div class="stat d-flex align-items-center">
                    <p class="me-2 mb-1">SP.DEF</p>
                    <div class="progress flex-grow-1">
                        <div class="progress-bar sp-def" :style="`width: calc(${spDef}% / 2)`">{{ spDef }}</div>
                    </div>
                </div>
                <div class="stat d-flex align-items-center">
                    <p class="me-2 mb-1">SPD</p>
                    <div class="progress flex-grow-1">
                        <div class="progress-bar spd" :style="`width: calc(${spd}% / 2)`">{{ spd }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/style.scss' as *;

.poke-card {
    opacity: 0.8;
    padding: 0.5rem;
    border: 8px solid #decb3e;
    border-radius: 5px;
    box-shadow: 1px 1px 5px $font-color;
    text-shadow: 1px 1px 2px $bg-dark;

    figure {
        width: 12rem;
        height: 12rem;
        border: 5px solid #decb3e;
        border-radius: 5px;
        box-shadow: 1px 1px 1px $bg-dark;
        overflow: hidden;
        margin: 0 auto;

        img {
            width: 12rem;
            height: 12rem;
            object-fit: cover;
            display: block;
        }
    }

    .types {
        p {
            padding: 3px 8px;
            border-radius: 10px;
            box-shadow: 2px 2px 5px $bg-dark;
        }
    }

    .measures {
        label {
            font-size: 12px;
        }
    }

    .stats {
        p {
            flex-basis: 25%;
        }

        .hp {
            background-color: $hp-bar;
        }

        .atk {
            background-color: $atk-bar;
        }

        .sp-atk {
            background-color: $sp-atk-bar;
        }

        .def {
            background-color: $def-bar;
        }

        .sp-def {
            background-color: $sp-def-bar;
        }

        .spd {
            background-color: $spd-bar;
        }
    }
}
</style>