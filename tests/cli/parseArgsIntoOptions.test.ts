import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

import { parseArgsIntoOptions } from '../../src/cli/utils';

describe('parseArgsIntoOptions', function() {
	it('should return valid IOptions object', function() {
		const args = ['', '', 'test', '--git', '--install', '--yes'];
		const options = parseArgsIntoOptions(args);

		assert.isString(options.template);
		assert.isBoolean(options.git);
		assert.isBoolean(options.runInstall);
		assert.isBoolean(options.skipPrompts);

		expect(options.git).equals(true);
		expect(options.runInstall).equals(true);
		expect(options.skipPrompts).equals(true);
		expect(options.template).equals('test');
	});
});
