<template>
    <div>
        <input :value='msg' @keyup='handleMessageInputChanges($event)'>
        <button @click="incrementCounter">Increase counter</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters({
            msg: 'getMessage'
        }),
        methods: mapActions(['handleMessageInputChanges', 'incrementCounter'])
    }
</script>