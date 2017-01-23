var greet = require('./index');
var assert = require('assert');
describe('Greet the', function() {
	it('nice person', function() {
		assert.equal('Hello Siva!', greet('Siva'));
	});
	it('emoji', function() {
		assert.equal('Hello 🚀!', greet('🚀'));
	});
});
