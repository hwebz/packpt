import Vue from 'vue'
import App from './App.vue'

Vue.filter('lowercase', (key) => {
    return key.toLowerCase();
});

Vue.filter('leftpad', (value) => {
    if (value >= 10) return value;
    return '0' + value;
});

Vue.filter('uppercase', (key) => {
    return key.toUpperCase();
})

Vue.filter('addspace', (key) => {
    return key + " ";
    l
});

new Vue({
    el: '#app',
    render: h => h(App)
})