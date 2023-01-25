<script>
export default {
    name: 'Select Filter',
    props: { list: Array }
}
</script>

<template>
    <select class="form-select mb-3">
        <option value="0">Tutti</option>
        <option v-for="item in list" :value="item">{{ item }}</option>
    </select>
</template>

<style>

</style>