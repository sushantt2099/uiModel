import { ModelDataProvider } from './DataProvider'
import { IfcDataProvider } from './IfcDataProvider'
import { ModelDataProviderBase } from './DataProviderBase'

describe('DataProvider', () => {

	class TestModel{

	}

	class TestDataProvider extends ModelDataProvider<TestDataProvider, TestModel> {
		public setNewDataMethod(data: TestModel){
			this.setNewData(data);
		}
	}

	let dataProvider: IfcDataProvider<TestDataProvider, TestModel>;

	let addDataToDataProvider = (): TestModel => {
		let dataToAdd = new TestModel();
		dataProvider.addData(dataToAdd);
		return dataToAdd;
	}

	let verifyEmptyDataProvider = (): void => {
		expect(dataProvider.all.length).toEqual(0);
	}

	beforeEach(() => {
		dataProvider = new TestDataProvider();
	})

	it('should set new data', () => {
		let newData = new TestModel();
		let dataProviderClassInstance: TestDataProvider = new TestDataProvider();
		dataProviderClassInstance.setNewDataMethod(newData);
		expect(dataProviderClassInstance.newData).toEqual(newData);
	})

	it('should have empty array for all method', () => {
		verifyEmptyDataProvider();
	})

	it('should add data', () => {
		let addedData = addDataToDataProvider();
		expect(dataProvider.all[0]).toEqual(addedData);
	})

	it('should delete the data', () => {
		let addedData = addDataToDataProvider();
		dataProvider.delete(addedData);
		verifyEmptyDataProvider();
	})

	it('should give the next data', () => {
		let firstIndexData = addDataToDataProvider();
		let secondIndexData = addDataToDataProvider();
		let thirdIndexData = addDataToDataProvider();

		dataProvider.selected = firstIndexData;
		expect(dataProvider.next).toEqual(secondIndexData);
		dataProvider.selected = dataProvider.next
		expect(dataProvider.next).toEqual(thirdIndexData);
	})

	it('should give the previous data', () => {
		let firstIndexData = addDataToDataProvider();
		let secondIndexData = addDataToDataProvider();
		let thirdIndexData = addDataToDataProvider();

		dataProvider.selected = thirdIndexData;
		expect(dataProvider.previous).toEqual(secondIndexData);
		dataProvider.selected = dataProvider.previous
		expect(dataProvider.previous).toEqual(firstIndexData);
	})

	it('should select next data', () => {
		let firstIndexData = addDataToDataProvider();
		let secondIndexData = addDataToDataProvider();
		let thirdIndexData = addDataToDataProvider();

		dataProvider.selected = firstIndexData;
		dataProvider.selectNext();
		expect(dataProvider.selected).toEqual(secondIndexData)
		dataProvider.selectNext();
		expect(dataProvider.selected).toEqual(thirdIndexData)
	})

	it('should select previous data', () => {
		let firstIndexData = addDataToDataProvider();
		let secondIndexData = addDataToDataProvider();
		let thirdIndexData = addDataToDataProvider();

		dataProvider.selected = thirdIndexData;
		dataProvider.selectPrevious();
		expect(dataProvider.selected).toEqual(secondIndexData)
		dataProvider.selectPrevious();
		expect(dataProvider.selected).toEqual(firstIndexData)
	})

	it('should reset all data', () => {
		addDataToDataProvider();
		addDataToDataProvider();
		addDataToDataProvider();

		dataProvider.resetAll();
		verifyEmptyDataProvider();
	})
})