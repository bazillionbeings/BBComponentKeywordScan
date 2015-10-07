'use strict';

let bbComponent = require('bb-component'),
    constValues = bbComponen    .constValues,
    ComponentResult = bbComponent.ComponentResult,
    Component = bbComponent.Component;

class KeywordScan extends Component {
    constructor(controllerCallBacks) {
        super(controllerCallBacks, [constValues.componentOutputTypes.facebookLatestStatus]);
    }

    dataInput() {
    }

    execute() {
        //TODO change with real scan
        this._controllerCallBacks.result(new ComponentResult(constValues.componentOutputTypes.keywords,['cat']));
        this._controllerCallBacks.finish();
    }
}

module.exports = KeywordScan;