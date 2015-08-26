'use strict';

var bbComponent = require('bb-component');
var constValues = bbComponent.constValues;
var ComponentResult = bbComponent.ComponentResult;
var Component = bbComponent.Component;

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
