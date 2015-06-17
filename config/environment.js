/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sylwanit-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com", // Allow scripts from https://cdn.mxpnl.com
    'font-src': "'self' http://fonts.gstatic.com https://maxcdn.bootstrapcdn.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' http://localhost:3000 http://localhost:4200", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
    'img-src': "'self' 'unsafe-inline' https://s3-eu-west-1.amazonaws.com/sylwanit/",
    'style-src': "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'media-src': "'self'"
  }

  ENV['simple-auth'] = {
    crossOriginWhitelist: ['http://localhost:3000'],
    authorizer: 'simple-auth-authorizer:token'
  };

  ENV['simple-auth-token'] = {
    crossOriginWhitelist: ['http://localhost:3000'],
    timeFactor: 1000,
    refreshLeeway: 300,
    serverTokenEndpoint: 'http://localhost:3000/auth',
    identificationField: 'email',
    refreshAccessTokens: true,
    serverTokenRefreshEndpoint: 'http://localhost:3000/auth',
  };
  return ENV;
};
