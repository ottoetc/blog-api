import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        // id: this.get('id'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
