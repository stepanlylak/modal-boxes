Package.describe({
  name: 'lylak:modal-boxes',
  version: '0.0.4',
  summary: 'It is a modal boxes for meteor, with custom template and styles',
  git: 'https://github.com/StepaLylak/modal-boxes',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.2.3');
    api.use(['ecmascript','blaze@2.3.0','templating@1.1.0'], 'client');
    api.mainModule('modal-boxes.js', 'client');
});
