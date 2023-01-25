<script>
export default {
    name: 'Text Filter',
    data() {
        return {
            word: ''
        }
    },
    emits: ['change-word']
}
</script>

<template>
    <input type="text" class="form-control mb-3" v-model.trim="word" @keyup="$emit('change-word', word)">
</template>

<style>

</style>