import DS from 'ember-data'

export default DS.Model.extend
  credentials: (->
    identification: @get('email')
    password: @get('password')
  ).property('email', 'password')
  email:        DS.attr('string')
  password:     DS.attr('string')
