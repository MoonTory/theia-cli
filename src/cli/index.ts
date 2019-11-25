import { parseArgsIntoOptions } from './utils';

export const cli = (args: string[]) => {
	const options = parseArgsIntoOptions(args);
	console.log('options', options);
};
