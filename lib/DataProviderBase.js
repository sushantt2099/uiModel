"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class has the common methods needed by the ModelDataProviders
 * @type {[type]}
 */
var ModelDataProviderBase = (function () {
    function ModelDataProviderBase() {
    }
    Object.defineProperty(ModelDataProviderBase.prototype, "newData", {
        get: function () {
            return this._newData;
        },
        enumerable: true,
        configurable: true
    });
    ModelDataProviderBase.prototype.setNewData = function (data) {
        this._newData = data;
    };
    ModelDataProviderBase.prototype.onDelete = function () {
        return this;
    };
    ModelDataProviderBase.prototype.onLoad = function () {
        return this;
    };
    ModelDataProviderBase.prototype.onUpdate = function () {
        return this;
    };
    Object.defineProperty(ModelDataProviderBase.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (model) {
            this._selected = model;
        },
        enumerable: true,
        configurable: true
    });
    return ModelDataProviderBase;
}());
exports.ModelDataProviderBase = ModelDataProviderBase;
