import { IfcDataProvider } from './IfcDataProvider'
import { ModelDataProviderBase } from './DataProviderBase';


/**
 * This class is the base for the dataprovider class of the models with multiple instance
 * present in the app
 */
export class ModelDataProvider<DataProvider 
					extends ModelDataProviderBase<DataProvider, Model>, Model> 
				extends ModelDataProviderBase<DataProvider, Model>
				implements IfcDataProvider<DataProvider, Model>{
		
	private _all: Model[];

	constructor(){
		super();
		this._all = [];
	}
	/**
	 * get all data 
	 * @return {Model[]} returns all the data
	 */
	public get all(): Model[]{
		return this._all;
	}
	/**
	 * add new data to the data provider
	 * @return refrence to itself
	 */
	addData(data: Model): ModelDataProvider<DataProvider, Model>{
		const dataToAdd = data || this.newData;
		this._all.push(dataToAdd);
		return this;
	}
	/**
	 * deleted the data from the data provider
	 * @return refrence to itself
	 */
	delete(data: Model): ModelDataProvider<DataProvider, Model>{
		this.all.splice(this.all.indexOf(data), 1);
		if(this.selected === data){
			//update the reference to selected 
			this.selected = this.all[this.all.length - 1] || this.newData;
		}
		return this;
	}
	/**
	 * update the existing data
	 * @return refrence to itself
	 */
	update(data: Model): ModelDataProvider<DataProvider, Model>{
		return this;
	}
	/**
	 * @return model at index after the selected model
	 */
	get next(): Model{
		const selectedIndex = this.all.indexOf(this.selected)
		const totalIndex = this.all.length - 1
		if(selectedIndex <  totalIndex){
			return this.all[selectedIndex + 1]
		}else{
			console.warn('Cannot select next, end of data')
		}
	}
	/**
	 * @return model at index below the selected model
	 */
	get previous(): Model{
		const selectedIndex = this.all.indexOf(this.selected)
		if(selectedIndex > 0){
			return this.all[selectedIndex - 1]	
		}else{
			console.warn('Cannot select previous, end of data')
		}
	}
	/**
	 * select the previous data in the list
	 * @return model that was selected
	 */
	selectPrevious(): Model{
		if(this.previous){
			return this.selected = this.previous
		}
	}
	/**
	 * select the next data in the list
	 * @return model that was selected
	 */
	selectNext(): Model{
		if(this.next){
			return this.selected = this.next;	
		}
	}

	resetAll(): ModelDataProvider<DataProvider, Model>{
		this._all = [];
		return this;
	}
}