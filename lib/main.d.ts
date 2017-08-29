/**
 * This class is the base for the dataprovider class of the models with multiple instance
 * present in the app
 */
export declare class ModelDataProvider<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> extends ModelDataProviderBase<DataProvider, Model> implements IfcDataProvider<DataProvider, Model> {
    private _all;
    constructor();
    /**
     * get all data
     * @return {Model[]} returns all the data
     */
    readonly all: Model[];
    /**
     * add new data to the data provider
     * @return refrence to itself
     */
    addData(data: Model): ModelDataProvider<DataProvider, Model>;
    /**
     * deleted the data from the data provider
     * @return refrence to itself
     */
    delete(data: Model): ModelDataProvider<DataProvider, Model>;
    /**
     * update the existing data
     * @return refrence to itself
     */
    update(data: Model): ModelDataProvider<DataProvider, Model>;
    /**
     * @return model at index after the selected model
     */
    readonly next: Model;
    /**
     * @return model at index below the selected model
     */
    readonly previous: Model;
    /**
     * select the previous data in the list
     * @return model that was selected
     */
    selectPrevious(): Model;
    /**
     * select the next data in the list
     * @return model that was selected
     */
    selectNext(): Model;
    resetAll(): ModelDataProvider<DataProvider, Model>;
}

/**
 * This class has the common methods needed by the ModelDataProviders
 * @type {[type]}
 */
export declare class ModelDataProviderBase<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> implements IfcDataProviderBase<DataProvider, Model> {
    /**
     * store the new instance of the model which is not yet create/saved by the user
     * it represents an empty instance of the model, which can be used by the controller
     * or directive to store the model related data before create on the server.
     * @type {Model}
     */
    private _newData;
    private _selected;
    readonly newData: Model;
    protected setNewData(data: Model): void;
    onDelete(): ModelDataProviderBase<DataProvider, Model>;
    onLoad(): ModelDataProviderBase<DataProvider, Model>;
    onUpdate(): ModelDataProviderBase<DataProvider, Model>;
    selected: Model;
}

/**
 * This class is the base for the dataprovider class of the models with single instance
 * present in the app, like logged in user, session etc
 */
export declare class ModelDataProviderSingleton<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> extends ModelDataProviderBase<DataProvider, Model> implements IfcDataProviderSingleton<DataProvider, Model> {
    private _all;
    all(): Model;
    /**
     * replace the data with new data
     * @return reference it itself
     */
    addData(data?: Model): ModelDataProviderSingleton<DataProvider, Model>;
    /**
     * delete the data
     * @return reference it itself
     */
    delete(data: Model): ModelDataProviderSingleton<DataProvider, Model>;
    /**
     * update the data
     * @return reference it itself
     */
    update(data: Model): ModelDataProviderSingleton<DataProvider, Model>;
    /**
     * reset the all property
     * @return dataprovider instance on which the method was called
     */
    resetAll(): ModelDataProviderSingleton<DataProvider, Model>;
}

export interface IfcDataProvider<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> extends IfcDataProviderBase<DataProvider, Model> {
    all: Model[];
    next: Model;
    previous: Model;
    selectNext(): Model;
    selectPrevious(): Model;
    addData(data: Model): ModelDataProviderBase<DataProvider, Model>;
    delete(data: Model): ModelDataProviderBase<DataProvider, Model>;
    update(data: Model): ModelDataProviderBase<DataProvider, Model>;
    selected: Model;
    resetAll(): ModelDataProviderBase<DataProvider, Model>;
}

export interface IfcDataProviderBase<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> {
    onLoad(): ModelDataProviderBase<DataProvider, Model>;
    onDelete(): ModelDataProviderBase<DataProvider, Model>;
    onUpdate(): ModelDataProviderBase<DataProvider, Model>;
}

export interface IfcDataProviderSingleton<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> extends IfcDataProviderBase<DataProvider, Model> {
    all(): Model;
    addData(): ModelDataProviderBase<DataProvider, Model>;
    delete(data: Model): ModelDataProviderBase<DataProvider, Model>;
    update(data: Model): ModelDataProviderBase<DataProvider, Model>;
    resetAll(): ModelDataProviderBase<DataProvider, Model>;
}
