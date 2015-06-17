import Ember from 'ember'
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin'

export default Ember.Route.extend ApplicationRouteMixin,
  actions:
    login: ->
      @set 'currentUser', @modelFor('login')
      authenticator = 'simple-auth-authenticator:jwt'
      @get('session').authenticate(authenticator, @get('currentUser.credentials')).then ((data) ->
        alert 'dupa'
      ).bind(this), ->
        alert 'Login failed'


    logout: ->
      @get('session').invalidate()

