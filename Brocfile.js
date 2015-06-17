/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

var bootstrapDir = app.bowerDirectory + '/bootstrap-sass-official/assets';

// select bootstrap JavaScript components to include
// var bootstrapComponents = ['dropdown', 'alert'];

// for (var index in bootstrapComponents) {
//   app.import(bootstrapDir + '/javascripts/bootstrap/' + bootstrapComponents[index] + '.js');
// }

// var extraAssets = new Funnel(bootstrapDir + '/fonts/bootstrap', {
//   srcDir: '/',
//   destDir: '/assets/bootstrap'
// });

var fontTree = new Funnel(app.bowerDirectory + '/fontawesome/fonts', {
  srcDir: '/',
  files: ['fontawesome-webfont.eot','fontawesome-webfont.ttf','fontawesome-webfont.svg','fontawesome-webfont.woff'],
  destDir: '/assets/fonts'
});

module.exports = mergeTrees([app.toTree(fontTree)]);
