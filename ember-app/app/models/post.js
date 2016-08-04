import DS from 'ember-data';

// Maps the data from the API to the local model
export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr()
});
