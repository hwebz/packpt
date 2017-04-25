import Vue from 'vue/dist/vue.js';
import data from './data/data.js';

import ItemsComponent from './components/items.component.js';
import AddItemComponent from './components/addItem.component.js';
import ChangeTitleComponent from './components/changeTitle.component.js';
import VueMathPlugin from './plugins/plugins.js';

import './directives/directives.js';

Vue.use(VueMathPlugin);

/*
    Registering components
    Globally
*/
Vue.component('items-component', ItemsComponent);
Vue.component('change-title-component', ChangeTitleComponent);
Vue.component('add-item-component', AddItemComponent);
/*
    Instantiating a Vue instance
*/
var vm = new Vue({
    el: '#app',
    data: data,
    // Registering components
    // Locally
    // components: {
    //     'items-component': ItemsComponent,
    //     "change-title-component": ChangeTitleComponent,
    //     'add-item-component': AddItemComponent
    // }
});