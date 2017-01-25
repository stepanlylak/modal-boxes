Package.describe({
  name: 'lylak:modal-boxes',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'It is a modal boxes for meteor, with custom template and styles',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/StepaLylak/modal-boxes',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.2.3');
    api.use(['ecmascript','jquery','blaze@2.3.0'], 'client');
    api.mainModule('modal-boxes.js', 'client');
});
