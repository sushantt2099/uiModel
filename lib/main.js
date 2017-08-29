"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
/**
 * This class is the base for the dataprovider class of the models with multiple instance
 * present in the app
 */
var ModelDataProvider = (function (_super) {
    __extends(ModelDataProvider, _super);
    function ModelDataProvider() {
        var _this = _super.call(this) || this;
        _this._all = [];
        return _this;
    }
    Object.defineProperty(ModelDataProvider.prototype, "all", {
        /**
         * get all data
         * @return {Model[]} returns all the data
         */
        get: function () {
            return this._all;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * add new data to the data provider
     * @return refrence to itself
     */
    ModelDataProvider.prototype.addData = function (data) {
        var dataToAdd = data || this.newData;
        this._all.push(dataToAdd);
        return this;
    };
    /**
     * deleted the data from the data provider
     * @return refrence to itself
     */
    ModelDataProvider.prototype.delete = function (data) {
        this.all.splice(this.all.indexOf(data), 1);
        if (this.selected === data) {
            //update the reference to selected 
            this.selected = this.all[this.all.length - 1] || this.newData;
        }
        return this;
    };
    /**
     * update the existing data
     * @return refrence to itself
     */
    ModelDataProvider.prototype.update = function (data) {
        return this;
    };
    Object.defineProperty(ModelDataProvider.prototype, "next", {
        /**
         * @return model at index after the selected model
         */
        get: function () {
            var selectedIndex = this.all.indexOf(this.selected);
            var totalIndex = this.all.length - 1;
            if (selectedIndex < totalIndex) {
                return this.all[selectedIndex + 1];
            }
            else {
                console.warn('Cannot select next, end of data');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelDataProvider.prototype, "previous", {
        /**
         * @return model at index below the selected model
         */
        get: function () {
            var selectedIndex = this.all.indexOf(this.selected);
            if (selectedIndex > 0) {
                return this.all[selectedIndex - 1];
            }
            else {
                console.warn('Cannot select previous, end of data');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * select the previous data in the list
     * @return model that was selected
     */
    ModelDataProvider.prototype.selectPrevious = function () {
        if (this.previous) {
            return this.selected = this.previous;
        }
    };
    /**
     * select the next data in the list
     * @return model that was selected
     */
    ModelDataProvider.prototype.selectNext = function () {
        if (this.next) {
            return this.selected = this.next;
        }
    };
    ModelDataProvider.prototype.resetAll = function () {
        this._all = [];
        return this;
    };
    return ModelDataProvider;
}(ModelDataProviderBase));
exports.ModelDataProvider = ModelDataProvider;

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
}(ModelDataProviderBase));
exports.ModelDataProviderSingleton = ModelDataProviderSingleton;
