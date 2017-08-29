import { IfcDataProviderBase } from './IfcDataProviderBase';
import { ModelDataProviderBase } from './DataProviderBase';

export interface IfcDataProvider<DataProvider extends ModelDataProviderBase<DataProvider, Model>, Model> 
					extends IfcDataProviderBase<DataProvider, Model>{
	
	all: Model[];
	next: Model,
	previous: Model,
	selectNext(): Model;
	selectPrevious(): Model;
	addData(data: Model): ModelDataProviderBase<DataProvider, Model>;
	delete(data: Model): ModelDataProviderBase<DataProvider, Model>;
	update(data: Model): ModelDataProviderBase<DataProvider, Model>;
	selected: Model;
	resetAll(): ModelDataProviderBase<DataProvider, Model>;

}