var PluginTab = {

  init: function() {
      console.log('Attempting to add SCSS panel');
      Panels.add({
        'id': 'sg-panel-scss',
        'name': 'SCSS',
        'default': false,
        'templateID': 'pl-panel-template-code',
        'httpRequest': true,
        'httpRequestReplace': '.scss',
        'httpRequestCompleted': false,
        'prismHighlight': true,
        'language': 'markup',
        'keyCombo': 'ctrl+shift+z'
      });

    }
  }
};
