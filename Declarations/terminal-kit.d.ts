declare module 'terminal-kit' {
	export class terminal {
		constructor(input: string);
		grabInput(): void;
		on(event: string, callback: (name: string, matches: string[], data: any) => void): any;
	}
}