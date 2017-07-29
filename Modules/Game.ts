// https://www.npmjs.com/package/terminal-kit
// https://github.com/cronvel/terminal-kit/blob/77af84556581c3e9f2410fa006f8afe62dbd0536/doc/global-api.md#top
// http://blog.soulserv.net/tag/terminal/

import t = require('terminal-kit');

export class Engine {
	constructor() {
		console.log('New Engine.');
		let term = t.terminal;
		//let realTerm = t.realTerminal;	//Doesn't work in Windows
		// console.log('Press Q to exit.');
		// term.on('key', (key: string, matches: string[], data: any) => {
		// 	console.log(`Key event: ${key}`);
		// 	if ( key === 'CTRL_C' ) { process.exit() ; }
		// 	if ( key.toUpperCase() === 'Q' ) { process.exit() ; }
		// });
		// term.grabInput();
		// term.bold.red;
		// term.bold.red('text');
		// term.red('test');
		term.cyan('Terminal name: %s\n', term.appName);
		term.cyan('Terminal app: %s\n', term.app);
		term.cyan('Terminal generic: %s\n', term.generic);
		term.cyan('Config file: %s\n', term.termconfigFile);
	}
}