import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberTrainingENV.locationType
});

Router.map(function() {
  this.route('cats');
  this.route('cat', { path: '/cats/:cat_id' });
});

export default Router;
