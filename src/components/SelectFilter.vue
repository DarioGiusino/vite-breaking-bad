<script>
export default {
    name: 'Select Filter',
    data() {
        return {
            value: ''
        }
    },
    props: { list: Array },
    emits: ['selected'],
}
</script>

<template>
    <select class="form-select mb-3" v-model="value" @change="$emit('selected', value)">
        <option value="">All</option>
        <option v-for="item in list" :value="item">{{ item }}</option>
    </select>
</template>

<style>

</style>