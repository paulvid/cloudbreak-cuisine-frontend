'use strict';

var React     = require('react');
var assign    = require('lodash.assign');
var cloneDeep = require('lodash.clonedeep');

var div  = React.DOM.div;
var span = React.DOM.span;

var ConsoleLogger = React.createClass({
  displayName: 'ConsoleLogger',
  state: {
    logs: []
  },
  propTypes: {
    style: React.PropTypes.object,
    logger: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      logs: []
    };
  },
  render: function() {
    return (
      div({
        style: assign({}, defaultStyle.container, this.props.style)
      }, this.state.logs.map(function(log) {
        return div({
          key: log.key
        },
          span({
            style: assign(
              {},
              defaultStyle.itemLog.title,
              defaultStyle.itemLog[log.type]
            )
          }, log.type + ': ' + log.date),
          span({
            style: defaultStyle.itemLog[log.type]
          }, log.text)
        )
      }))
    );
  },
  componentDidMount: function() {
    this.props.logger.init(this)
  },
  pushLog: function(log) {
    var copiedArr = cloneDeep(this.state.logs);

    copiedArr.push(log);

    this.setState({logs: copiedArr});
  }
});

var defaultStyle = {
  container: {
    width: 320,
    height: 480,
    padding: 10,
    overflow: 'auto',
    background: '#f5f5f5'
  },
  itemLog: {
    title: {
      display: 'block',
      fontSize: '12px'
    },
    log: {
      color: '#333'
    },
    info: {
      color: '#31b0d5'
    },
    warn: {
      color: '#f0ad4e'
    },
    error: {
      color: '#c9302c'
    }
  }
};

module.exports = ConsoleLogger;
