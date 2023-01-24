<script>
export default {}
</script>

<template>
    <main class="container">
        <div class="row row-cols-5 g-3">
            <div class="col">
                <div class="poke-card">
                    <!-- poke image -->
                    <img class="img-fluid" src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" alt="">

                    <!-- poke name -->
                    <h3 class="text-center">bulba</h3>

                    <!-- poke-types -->
                    <div class="types d-flex justify-content-around">
                        <p>grass</p>
                        <p>poison</p>
                    </div>

                    <!-- measures -->
                    <div class="measures d-flex justify-content-around">
                        <div class="weight text-center">
                            <p class="mb-0"><strong>90 KG</strong></p>
                            <label>weight</label>
                        </div>
                        <div class="height text-center">
                            <p class="mb-0"><strong>1.7 M</strong></p>
                            <label>height</label>
                        </div>
                    </div>

                    <!-- poke-stats -->
                    <div class="stats">
                        <h5 class="text-center mt-3">base stats</h5>
                        <div class="stat d-flex align-items-center">
                            <p class="me-2 mb-1">HP</p>
                            <div class="progress flex-grow-1">
                                <div class="progress-bar" style="width: 25%">25%</div>
                            </div>
                        </div>
                        <div class="stat d-flex align-items-center">
                            <p class="me-2 mb-1">ATK</p>
                            <div class="progress flex-grow-1">
                                <div class="progress-bar" style="width: 25%">25%</div>
                            </div>
                        </div>
                        <div class="stat d-flex align-items-center">
                            <p class="me-2 mb-1">SP.ATK</p>
                            <div class="progress flex-grow-1">
                                <div class="progress-bar" style="width: 25%">25%</div>
                            </div>
                        </div>
                        <div class="stat d-flex align-items-center">
                            <p class="me-2 mb-1">DEF</p>
                            <div class="progress flex-grow-1">
                                <div class="progress-bar" style="width: 25%">25%</div>
                            </div>
                        </div>
                        <div class="stat d-flex align-items-center">
                            <p class="me-2 mb-1">SP.DEF</p>
                            <div class="progress flex-grow-1">
                                <div class="progress-bar" style="width: 25%">25%</div>
                            </div>
                        </div>
                        <div class="stat d-flex align-items-center">
                            <p class="me-2 mb-1">SPD</p>
                            <div class="progress flex-grow-1">
                                <div class="progress-bar" style="width: 25%">25%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.poke-card {
    background-color: green;
    padding: 0.5rem;
    border: 6px solid yellow;
    border-radius: 5px;
    box-shadow: 1px 1px 5px $font-color;
    text-shadow: 1px 1px 2px $bg-dark;

    img {
        border-radius: 50%;
    }

    .types {
        p {
            background-color: red;
            padding: 3px 5px;
            border-radius: 10px;
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
    }
}
</style>