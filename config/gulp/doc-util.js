var pkg         = require('../../package.json');
const log = require("fancy-log");
const colors = require("ansi-colors");
var notifier    = require('node-notifier');

var shellPrefix = '$';

//Danish Flag
function drawFlag () {

  log(
    colors.red('xxxxxxxxxxxxxxxxxxxx')
  );
}

function notify (title, message, wait) {
  notifier.notify({
    title: title,
    message: message,
    icon: 'assets/img/favicons/favicon-192.png',
    wait: wait,
  });
}

module.exports = {

  pkg: {

    name: pkg.name,
    version: pkg.version,

  },

  dirName: pkg.name + '-' + pkg.version,

  logIntroduction: function (message) {

    message = message || 'Frontend Styleguide Documentation';

    log(
      colors.yellow('v' + pkg.version),
      message
    );
    drawFlag();

  },

  logCommand: function (name, message) {

    log(
      shellPrefix,
      colors.cyan(name),
      colors.magenta(message)
    );

  },

  logHelp: function (name, message) {

    log(
      shellPrefix,
      colors.cyan(name),
      colors.yellow(message)
    );

  },

  logData: function (name, message) {

    log(
      colors.cyan(name),
      colors.yellow(message)
    );

  },

  logError: function (name, message) {

    log(
      colors.red(name),
      colors.yellow(message)
    );
    notify(this.dirName + ' gulp ' + name, message, true);

  },

  logMessage: function (name, message) {

    log(
      colors.cyan(name),
      colors.green(message)
    );
    notify(this.dirName + ' gulp ' + name, message, false);

  },

};
