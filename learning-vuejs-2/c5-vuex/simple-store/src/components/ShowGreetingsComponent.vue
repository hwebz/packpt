<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>Counter: {{ counter }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            msg: 'getMessage',
            counter: 'getCounter'
        })
    }
</script>