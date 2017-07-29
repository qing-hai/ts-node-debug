import { terminal } from "terminal-kit";

// https://www.npmjs.com/package/terminal-kit
// https://github.com/cronvel/terminal-kit/blob/77af84556581c3e9f2410fa006f8afe62dbd0536/doc/global-api.md#top
// http://blog.soulserv.net/tag/terminal/

export class Engine {
	constructor() {
		console.log('test 2');
		var term = new terminal('test');
		term.on('key', (key, matches, data) => {
			console.log(`Key event: ${key}`);
			if ( key === 'CTRL_C' ) { process.exit() ; }
			if ( key.toUpperCase() === 'Q' ) { process.exit() ; }
		});
		term.grabInput();
	}
}