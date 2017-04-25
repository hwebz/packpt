import Vue from 'vue/dist/vue.js';
import data from '../data/data.js';

var AddItemComponent = Vue.extend({
    data: function() {
        return data;
    },
    methods: {
        addItem: function() {
            var text;

            text = this.newItem.trim();
            if (text) {
                this.items.push({
                    text: text,
                    checked: false
                });
                this.newItem = '';
            }
        }
    },
    template: '<div class="input-group mb-3">' +
        '<input type="text" v-model="newItem" @keyup.enter="addItem" placeholder="Add shopping list item" class="js-new-item form-control">' +
        '<span class="input-group-btn">' +
        '<button v-on:click="addItem" class="js-add btn btn-default">Add!</button>' +
        '</span>' +
        '</div>'
});

export default AddItemComponent;