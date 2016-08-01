import Ember from 'ember';

export default Ember.Component.extend({
  contentShowing: false,
  actions: {
    toggleContent: function() {
      this.toggleProperty('contentShowing');
    }
  }
});
