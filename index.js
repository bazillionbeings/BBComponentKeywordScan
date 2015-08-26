'use strict';

var Component = require('./Component');
var constValues = require('./constValues.json');
var ComponentResult = require('./ComponentResult.js');

function KeywordScan(controllerCallBacks, dataStore) {
  Component.call(this, controllerCallBacks, dataStore, [constValues.componentOutputTypes.facebookLatestStatus]);
  this._controllerCallBacks = controllerCallBacks;
}
KeywordScan.prototype = Object.create(Component.prototype);

KeywordScan.prototype.execute = function() {
  //TODO change with real scan
  this._controllerCallBacks.finish(new ComponentResult(constValues.componentOutputTypes.keywords,['cat']));
};

module.exports = KeywordScan;
