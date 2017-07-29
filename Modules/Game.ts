import { terminal } from "terminal-kit";

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