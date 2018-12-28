'use strict';

var Logger = function(logger) {
};

Logger.prototype = {
  init: function(logger) {
    this.logger = logger;
  },
  log: function(text) {
    this.logger.pushLog({
      key: generateKey(),
      date: Date(),
      type: 'log',
      text: '' + text
    });
  },
  info: function(text) {
    this.logger.pushLog({
      key: generateKey(),
      date: Date(),
      type: 'info',
      text: '' + text
    });
  },
  warn: function(text) {
    this.logger.pushLog({
      key: generateKey(),
      date: Date(),
      type: 'warn',
      text: '' + text
    });
  },
  error: function(text) {
    this.logger.pushLog({
      key: generateKey(),
      date: Date(),
      type: 'error',
      text: '' + text
    });
  }
};

function generateKey() {
  return Date.now() + Math.random();
}

module.exports = Logger;
