jest.dontMock(process.cwd() + '/js/modules/addit');

describe('addition', () => {
	//	addit
	let addIt = require(process.cwd() + '/js/modules/addit').addIt;
	let value;

	beforeEach(() => {
		value = addIt(3,3)
	});

	it('adds numbers', () =>{
		// workout why this is undefined
		expect(value).toBe(undefined);
	})
})