<template lang="jade">
  div#app.container
    h2 {{ title }}
    add-item-component(v-on:add="addItem")
    items-component(:items="items")
    footer
        hr
        change-title-component(v-model="title")
</template>

<script>
    import AddItemComponent from './components/AddItemComponent.vue'
    import ItemsComponent from './components/ItemsComponent.vue'
    import ChangeTitleComponent from './components/ChangeTitleComponent.vue'

    export default {
        data() {
            return {
                title: "Shopping List",
                items: [
                    {id: 1, text: "Bananas", checked: true},
                    {id: 2, text: "Apples", checked: false}
                ]
            }
        },
        methods: {
            addItem(text) {
                this.items.push({
                    id: this.items.length + 1,
                    text: text,
                    checked: false
                })
            }
        },
        components: {
            AddItemComponent,
            ItemsComponent,
            ChangeTitleComponent
        }
    }
</script>
