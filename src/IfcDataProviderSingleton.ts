import { IfcDataProviderBase } from './IfcDataProviderBase';
import { ModelDataProviderBase } from './DataProviderBase';

export interface IfcDataProviderSingleton<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> 
		extends IfcDataProviderBase<DataProvider, Model>{
	
	all(): Model;
	addData(): ModelDataProviderBase<DataProvider, Model>;
	delete(data: Model): ModelDataProviderBase<DataProvider, Model>;
	update(data: Model): ModelDataProviderBase<DataProvider, Model>;
	resetAll(): ModelDataProviderBase<DataProvider, Model>;

}