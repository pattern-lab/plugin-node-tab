"use strict";

var fs = require('fs-extra'),
  path = require('path');

function plugin_init(patternlab) {

  //write the plugin json to public/patternlab-components
  var pluginConfig = {
    "name":"pattern-lab\/plugin-node-tab",
    "templates":[],
    "stylesheets":[],
    "javascripts":["\/js\/plugin-tab.js"],
    "onready":"PluginTab.init()",
    "callback":""
  }

  var pluginConfigPathName = path.resolve(patternlab.config.paths.public.root, 'patternlab-components', 'packages');
  fs.outputFileSync(pluginConfigPathName + '/plugin-tab.json', JSON.stringify(pluginConfig, null, 2));
}

module.exports = plugin_init;
