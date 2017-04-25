import Vue from 'vue/dist/vue.js';
import data from '../data/data.js';

var ChangeTitleComponent = Vue.extend({
    data: function() {
        return data;
    },
    template: '<div class="footer">' +
        '<hr>' +
        '<p>Change your title here</p>' +
        '<input type="text" v-model="title" class="js-change-title form-control d-block">' +
        '</div>'
});

export default ChangeTitleComponent;