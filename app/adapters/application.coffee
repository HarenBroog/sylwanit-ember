import DS from 'ember-data'

ApplicationAdapter = DS.RESTAdapter.extend
  host: 'http://localhost:3000'
  rootUrl: '/'
  headers: (->
    'Authorization': "Bearer #{JSON.parse(localStorage['ember_simple_auth:session'])['secure']['token']}"
  ).property().volatile()

export default ApplicationAdapter
