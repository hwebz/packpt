var App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'exermatic-data'
});

App.Walk = DS.Model.extend({
    dateWalked: DS.attr('date'),
    distanceWalked: DS.attr('number'),
    minutesTaken: DS.attr('number'),
    mood: DS.attr('string'),
    journey: DS.belongsTo('journey'),

    kmPerHour: function() {
        return 60 * this.get('distanceWalked') / this.get('minutesTaken');
    }.property('distanceWalked', 'minutesTaken'),
    moodImage: function() {
        var mood = this.get('mood');
        switch(mood) {
            case "good":
                return "img/good.jpg";
                break;
            case "bad":
                return "img/bad.jpg";
                break;
            case "ok":
                return "img/ok.jpg";
                break;
            default:
                return "img/unknown.jpg";
        }
    }.property('mood'),
    isGood: function() {
        return this.get('mood') == 'good';
    }.property('mood')
});

App.Journey = DS.Model.extend({
    walks: DS.hasMany('walk'),
    title: DS.attr('string')
});

App.Router.map(function() {
    this.resource('walks', function() {
        this.route('add', { path: 'add' });
        this.route('walk', { path: '/:id' });
        this.route('summary', {path: 'summary'});
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

Ember.Handlebars.registerBoundHelper('strikeOut', function(input) {
    var escaped = Handlebars.Utils.escapeExpression(input);
    return new Ember.Handlebars.SafeString('<del>' + escaped + '</del>');
});

Ember.Handlebars.registerBoundHelper('twoDecimalPlaces', function(input) {
    return parseFloat(input).toFixed(2);
});

App.WalksSummaryRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('walk');
    }
});

App.WalksSummaryController = Ember.ArrayController.extend({
    averageSpeed: function(data) {
        var length = data.get('length'),
            sum = 0;
        return (data.reduce(function(previous, item) {
            return previous + item.get('kmPerHour');
        }, sum) / length).toFixed(2);
    },
    averageAll: function() {
        var data = this.get('content');
        return this.averageSpeed(data);
    }.property('content.@each.kmPerHour'),
    averageGood: function() {
        var data = this.get('content').filterBy('mood', 'good');
        return this.averageSpeed(data);
    }.property('content.@each.kmPerHour'),
    proportionGood: function() {
        var content = this.get('content'),
            allCount = content.get('length'),
            goodCount = content.filterBy('mood', 'good').get('length');
        return (100 * goodCount / allCount).toFixed(0) + "%";
    }.property('content.@each.mood')
});

App.MoodPickerComponent = Ember.Component.extend({
    didInsertElement: function() {
        this.set("value", "good");
    },
    isGood: function() {
        return this.get("value") == "good";
    }.property("value"),
    isOk: function() {
        return this.get("value") == "ok";
    }.property("value"),
    isBad: function() {
        return this.get("value") == "bad";
    }.property("value"),
    setMood: function(mood) {
        this.set("value", mood);
    }
});