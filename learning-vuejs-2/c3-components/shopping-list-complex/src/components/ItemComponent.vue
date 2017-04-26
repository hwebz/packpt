<template lang="jade">
    li(:class="{'removed': item.checked}")
        div.checkbox
            label
                input(type="checkbox", v-model="item.checked")
                span {{ item.text }}
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style lang="scss" scoped>
    .removed {
        color: gray;
        
        span {
            text-decoration: line-through;
        }
    }

    li {
        list-style-type: none;
        
        span {
            margin-left: 5px;
        }
    }
</style>