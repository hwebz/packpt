<template lang="jade">
    div
        div.input-group
            input.input.form-control(type="text", placeholder="add shopping list item", v-model="newItem", :keyup.enter="addItem")
            span.input-group-btn
                button.btn.btn-default(type="button", @click="addItem") Add!
</template>

<script>
    export default {
        data() {
            return {
                newItem: ''
            }
        },
        methods: {
            addItem() {
                let text = this.newItem.trim();
                if (text) {
                    this.$emit('add', this.newItem)
                    this.newItem = ''
                }
            }
        }
    }
</script>