import { ModelDataProviderBase } from './DataProviderBase';


export interface IfcDataProviderBase<DataProvider 
			extends ModelDataProviderBase<DataProvider, Model>, Model>{
	
	onLoad(): ModelDataProviderBase<DataProvider, Model>;
	onDelete(): ModelDataProviderBase<DataProvider, Model>;
	onUpdate(): ModelDataProviderBase<DataProvider, Model>;
	
}