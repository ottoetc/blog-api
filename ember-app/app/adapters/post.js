import DS from 'ember-data';

// Extends the adaptor so the app knows where to direct API calls
export default DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
  namespace: 'api/v1'
});
