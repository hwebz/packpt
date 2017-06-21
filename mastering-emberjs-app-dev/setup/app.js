App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,

    LOG_RESOLVER: true,

    LOG_BINDINGS: true,

    LOG_VIEW_LOOKUPS: true,

    LOG_STACKTRACE_ON_DEPRECATION: true
});

App.Router.map(function() {
    this.resource("walks", { path: "list_walks" }, function() {
        this.route("view");
    });
});