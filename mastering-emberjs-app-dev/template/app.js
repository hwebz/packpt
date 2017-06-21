var App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'exermatic-data'
});

App.Walk = DS.Model.extend({
    dateWalked: DS.attr('date'),
    distanceWalked: DS.attr('number'),
    minutesTaken: DS.attr('number'),
    mood: DS.attr('string'),

    kmPerHour: function() {
        return 60 * this.get('distanceWalked') / this.get('minutesTaken');
    }.property('distanceWalked', 'minutesTaken')
});

App.Router.map(function() {
    this.resource('walks', function() {
        this.route('add');
        this.route('walk', { path: '/:id' });
    });
});

App.IndexRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo("walks");
    }
});

App.WalksRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("walk");
    }
});

App.WalksAddRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('walk');
    },
    deactivate: function() {
        var walk = this.controllerFor('walks.add').get('content');

        if (walk.get('isDirty')) {
            walk.deleteRecord();
        }
    }
});

App.WalksAddController = Ember.ObjectController.extend({
    error: "",
    actions: {
        addWalk: function() {
            var walk = this.get('content');
            if (typeof walk.get('dateWalked') === 'undefined' ||
                typeof walk.get('distanceWalked') === 'undefined' ||
                typeof walk.get('minutesTaken') === 'undefined' ||
                typeof walk.get('mood') === 'undefined') {
                    this.set('error', 'Please populate all the fields');
                    return;
                }

                // ensure the data is in the correct format
                walk.set('dateWalked', new Date(walk.get('dateWalked')));
                walk.save();

                // go look at the new walk
                this.set('error', '');
                this.transitionTo('walks.walk', walk);
        }
    }
});

Ember.Handlebars.registerBoundHelper('humanDate', function(input) {
    return moment(input).fromNow();
});

Ember.Handlebars.registerBoundHelper('strikeOut', function(inptut) {
    var escaped = Handlebars.Utils.escapeExpression(input);
    return new Ember.Handlebars.SafeString('<del>' + escaped + '</del>');
});