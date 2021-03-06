Package.describe({
  name: 'lylak:modal-boxes',
  version: '1.1.0',
  summary: 'These are the reactive modal boxes for meteor, with custom template and styles',
  git: 'https://github.com/stepanlylak/modal-boxes',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.2.3');
    api.use(['ecmascript','blaze@2.3.0','templating@1.1.0'], 'client');
    api.mainModule('modal-boxes.js', 'client');
});
