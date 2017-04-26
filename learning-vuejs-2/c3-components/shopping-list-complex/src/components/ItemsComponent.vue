<template lang="jade">
    ul.mt-4
        item-component(v-for="item in items", :item="item")
</template>

<script>
    import ItemComponent from './ItemComponent.vue'

    export default {
        props: ['items'],
        components: {
            ItemComponent
        }
    }
</script>