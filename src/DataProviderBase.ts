import { IfcDataProviderBase } from './IfcDataProviderBase'


/**
 * This class has the common methods needed by the ModelDataProviders
 * @type {[type]}
 */
export class ModelDataProviderBase<DataProvider 
				extends ModelDataProviderBase<DataProvider, Model>, Model> 
				implements IfcDataProviderBase<DataProvider, Model>{
		
	/**
	 * store the new instance of the model which is not yet create/saved by the user
	 * it represents an empty instance of the model, which can be used by the controller
	 * or directive to store the model related data before create on the server.
	 * @type {Model}
	 */
	private _newData: Model;

	private _selected: Model;
	
	public get newData(): Model{
		return this._newData;
	}

	protected setNewData(data: Model){
		this._newData = data;
	}

	public onDelete(): ModelDataProviderBase<DataProvider, Model>{
		return this;
	}

	public onLoad(): ModelDataProviderBase<DataProvider, Model>{
		return this;
	}

	public onUpdate(): ModelDataProviderBase<DataProvider, Model>{
		return this;
	}

	public get selected(): Model{
		return this._selected;
	}

	public set selected(model: Model){
		this._selected = model;
	}

}