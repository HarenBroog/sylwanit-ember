import Ember from 'ember'
import config from './config/environment'

Router = Ember.Router.extend
  location: 'auto'
  rootUrl:  '/'

Router.map ->
  @resource 'login',    path: '/session/login', ->
  @resource 'register', path: '/session/register', ->
  @route 'main', path: '/', ->
    @resource 'posts', path: 'posts', ->
    @resource 'post', path: 'posts/:id', ->
    @resource 'users', ->
    @resource 'user', ->

export default Router
