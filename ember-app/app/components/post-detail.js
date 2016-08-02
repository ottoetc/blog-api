import Ember from 'ember';

export default Ember.Component.extend({
  contentShowing: false,
  actions: {
    toggleContent: function() {
      this.toggleProperty('contentShowing');
    },
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
