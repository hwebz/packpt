<template lang="jade">
    div
        em Change the title of your shopping list here
        input.form-control.mt-2(type="text", :value="value", @input="onInput")
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            onInput(event) {
                this.$emit('input', event.target.value)
            }
        }
    }
</script>