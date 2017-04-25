import Vue from 'vue/dist/vue.js';
import data from '../data/data.js';

var ItemsComponent = Vue.extend({
    data: function() {
        return data;
    },
    template: '<ul>' +
        '<li v-for="item in items" v-bind:class="{\'removed\': item.checked}">' +
        '<div class="checkbox">' +
        '<label>' +
        '<input type="checkbox" v-model="item.checked"> {{ item.text }}' +
        '</label>' +
        '</div>' +
        '</li>' +
        '</ul>'
});

export default ItemsComponent;