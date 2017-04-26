Vue.component('add-item-component', {
    template: '#add-item-template',
    data: function() {
        return {
            newItem: ''
        }
    },
    methods: {
        addItem: function() {
            var text = this.newItem.trim();

            if (text) {
                this.$emit('add', text);
                this.newItem = '';
            }
        }
    }
});

Vue.component('item-component', {
    template: '#item-template',
    props: ['item']
});

Vue.component('items-component', {
    template: '#items-template',
    props: ['items']
});

Vue.component('change-title-component', {
    template: '#change-title-template',
    props: ['value'],
    methods: {
        onInput: function(event) {
            this.$emit('input', event.target.value);
        }
    }
});

new Vue({
    el: '#app',
    data: {
        title: 'Shopping List',
        items: [
            { id: 1, text: 'First', checked: false },
            { id: 2, text: 'Second', checked: true },
            { id: 3, text: 'Third', checked: false }
        ]
    },
    methods: {
        addItem: function(text) {
            this.items.push({
                id: this.items.length + 1,
                text: text,
                checked: false
            });
        }
    }
});