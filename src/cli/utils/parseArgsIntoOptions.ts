import arg from 'arg';

import { IOptions } from '../../typings';

export const parseArgsIntoOptions = (rawArgs: string[]): IOptions => {
	const args = arg(
		{
			'--git': Boolean,
			'--yes': Boolean,
			'--install': Boolean,
			'-g': '--git',
			'-y': '--yes',
			'-i': '--install'
		},
		{
			argv: rawArgs.slice(2)
		}
	);

	return {
		skipPrompts: args['--yes'] || false,
		runInstall: args['--install'] || false,
		git: args['--git'] || false,
		template: args._[0]
	};
};
