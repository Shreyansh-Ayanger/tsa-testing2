const assert = require('assert');
const app= require('../app');

describe('App',function(){
	it('Test passed if same string',function(){
		assert.equal(app(),'Hello');
	})
})