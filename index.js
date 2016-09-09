"use strict";

var fs = require('fs-extra'),
  glob = require('glob'),
  path = require('path');

function plugin_init(patternlab) {

  if(!patternlab) {
    console.error('patternlab object not provided to plugin-init');
    process.exit(1);
  }

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
  try {
    fs.outputFileSync(pluginConfigPathName + '/plugin-tab.json', JSON.stringify(pluginConfig, null, 2));
  } catch (ex) {
    console.trace('Error occurred while writing pluginFile configuration');
    console.log(ex);
  }

  //write the plugin dist folder to public/pattern-lab
  var pluginFiles = glob.sync(__dirname +'/dist/**/*');

  if (pluginFiles && pluginFiles.length > 0) {
    for (let i = 0; i < pluginFiles.length; i++) {
      try {
        var fileStat = fs.statSync(pluginFiles[i]);
        if (fileStat.isFile()) {
          var relativePath = path.relative(__dirname, pluginFiles[i]).replace('dist', ''); //dist is dropped
          var writePath = path.join(patternlab.config.paths.public.root,'patternlab-components', 'pattern-lab', 'plugin-node-tab', relativePath);
          fs.copySync(pluginFiles[i], writePath);
        }
      } catch (ex) {
        console.trace('Error occurred while copying pluginFile', pluginFiles[i]);
        console.log(ex);
      }
    }
  }

}

module.exports = plugin_init;
