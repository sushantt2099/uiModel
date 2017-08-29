import { IfcDataProviderSingleton } from './IfcDataProviderSingleton';
import { ModelDataProviderBase } from './DataProviderBase';
import { ModelDataProvider } from './DataProvider'


/**
 * This class is the base for the dataprovider class of the models with single instance
 * present in the app, like logged in user, session etc
 */
export class ModelDataProviderSingleton<DataProvider 
			extends ModelDataProviderBase<DataProvider, Model>, Model> 
		extends ModelDataProviderBase<DataProvider, Model>
		implements IfcDataProviderSingleton<DataProvider, Model>{
		
	private _all: Model;
	
	public all(): Model{
		return this._all;
	}
	/**
	 * replace the data with new data
	 * @return reference it itself
	 */
	public addData(data?: Model): ModelDataProviderSingleton<DataProvider, Model>{
		this._all = data || this.newData;
		return this;
	}
	/**
	 * delete the data
	 * @return reference it itself
	 */
	public delete(data: Model): ModelDataProviderSingleton<DataProvider, Model>{
		return this;
	}
	/**
	 * update the data
	 * @return reference it itself
	 */
	public update(data: Model): ModelDataProviderSingleton<DataProvider, Model>{
		return this;
	}

	/**
	 * reset the all property 
	 * @return dataprovider instance on which the method was called
	 */
	public resetAll(): ModelDataProviderSingleton<DataProvider, Model>{
		delete this._all;
		return this;
	}
}