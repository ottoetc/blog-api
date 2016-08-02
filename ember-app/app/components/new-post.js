import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    
    save1() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
      };
      // Clear form values
      this.set('title', '');
      this.set('content', '');
      // Hide form
      this.set('addNewPost', false);
      // Send save action up to the parent component
      this.sendAction('save2', params);
    }
  }
});
