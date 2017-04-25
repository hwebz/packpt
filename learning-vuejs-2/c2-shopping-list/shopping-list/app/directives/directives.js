Vue.directive('my-direcetive', {
    bind: function() {
        // do the preparation work on element binding
    },
    update: function() {
        // do something based on the updated value
    },
    unbind: function() {
        // do th e clean-up work
    }
});

Vue.directive('square', function(el, binding) {
    el.innerHTML = Math.pow(binding.value, 2);
});