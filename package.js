Package.describe({
  name: 'mjr:blockchain-websockets',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for Blockchain.info websocket data stream',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.export('Blockchain');
  api.addFiles('blockchain-websockets.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mjr:blockchain-websockets');
  api.addFiles('blockchain-websockets-tests.js');
});
Npm.depends({websocket: "1.0.19"});