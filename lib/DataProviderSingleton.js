"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataProviderBase_1 = require("./DataProviderBase");
/**
 * This class is the base for the dataprovider class of the models with single instance
 * present in the app, like logged in user, session etc
 */
var ModelDataProviderSingleton = (function (_super) {
    __extends(ModelDataProviderSingleton, _super);
    function ModelDataProviderSingleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelDataProviderSingleton.prototype.all = function () {
        return this._all;
    };
    /**
     * replace the data with new data
     * @return reference it itself
     */
    ModelDataProviderSingleton.prototype.addData = function (data) {
        this._all = data || this.newData;
        return this;
    };
    /**
     * delete the data
     * @return reference it itself
     */
    ModelDataProviderSingleton.prototype.delete = function (data) {
        return this;
    };
    /**
     * update the data
     * @return reference it itself
     */
    ModelDataProviderSingleton.prototype.update = function (data) {
        return this;
    };
    /**
     * reset the all property
     * @return dataprovider instance on which the method was called
     */
    ModelDataProviderSingleton.prototype.resetAll = function () {
        delete this._all;
        return this;
    };
    return ModelDataProviderSingleton;
}(DataProviderBase_1.ModelDataProviderBase));
exports.ModelDataProviderSingleton = ModelDataProviderSingleton;
