declare module 'terminal-kit' {
	type Args = string | number;
	type Error = any;
	type HexColor = string;
	type BuiltInPalette = 'default' | 'gnome' | 'konsole' | 'linux' | 'solarized' | 'vga' | 'xterm';
	interface RGB {
		r: number;
		g: number;
		b: number;
	}
	interface Palette extends RGB {
		names: string[];
	}
	interface GrabInputOptions {
		mouse?: 'button' | 'drag' | 'motion';
		focus: boolean;
	}
	interface YesOrNoOptions {
		yes?: string | string[],
		no?: string | string[],
		echoYes?: string,
		echoNo?: string
	}
	interface InputFieldOptions {
		echo?: boolean;
		default?: string;
		cancelable?: boolean;
		style?: Function;
		hintStyle?: Function;
		maxLength?: number;
		minLength?: number;
		history?: string[];
		autoComplete?: string[] | Function;
		autoCompleteMenu?: boolean | object;
		autoCompleteHint?: boolean;
		keyBindings?: object;
		tokenHook?: (token: string, isEndOfInput: boolean, previousTokens: string[], term: Terminal, config: DynamicSettings) => void;
		tokenResetHook?: (term: Terminal, config: object) => void;
		tokenRegExp?: RegExp;
	}
	interface DynamicSettings {
		style?: Function;
		hintStyle?: Function;
		tokenRegExp?: RegExp;
		autoComplete?: any[] | Function;
		autoCompleteMenu?: boolean | object;
		autoCompleteHint?: boolean;
	}
	interface FileInputOptions extends InputFieldOptions {
		baseDir?: string;
	}
	interface SingleLineMenuResponse {
		selectedIndex: number;
		selectedText: string;
		x: number;
		y: number;
		unexpectedKey: string;
	}
	interface SingleLineMenuOptions {
		y?: number;
		separator?: string;
		nextPageHint?: string;
		previousPageHint?: string;
		style?: Function;
		selectedStyle?: Function;
		keyBindings?: Object;
		exitOnUnexpectedKey?: boolean;
	}
	interface SingleColumnMenuOptions {
		y?: number;
		style?: Function;
		selectedStyle?: Function;
		submittedStyle?: Function;
		leftPadding?: string;
		selectedLeftPadding?: string;
		submittedLeftPadding?: string;
		extraLines?: number;
		oneLineItem?: boolean;
		itemMaxWidth?: number;
		continueOnSubmit?: boolean;
		selectedIndex?: number;
		keyBindings?: Object;
		exitOnUnexpectedKey?: boolean;
	}
	interface SingleColumnMenuResponse {
		selectedIndex: number;
		selectedText: string;
		submitted: boolean;
		x: number;
		y: number;
		unexpectedKey: string;
	}
	interface GridMenuOptions {
		y?: number;
		style?: Function;
		selectedStyle?: Function;
		leftPadding?: string;
		selectedLeftPadding?: string;
		rightPadding?: string;
		selectedRightPadding?: string;
		itemMaxWidth?: number;
		keyBindings?: object;
		exitOnUnexpectedKey?: boolean;
	}
	interface GridMenuResponse {
		selectedIndex: number;
		selectedText: string;
		x: number;
		y: number;
		unexpectedKey: string;
	}
	interface ProgressBarOptions {
		width?: number;
		percent?: boolean;
		eta?: boolean;
		items?: number;
		title?: string;
		barStyle?: Function;
		barBracketStyle?: Function;
		percentStyle?: Function;
		etaStyle?: Function;
		itemStyle?: Function;
		titleStyle?: Function;
		itemSize?: number;
		titleSize?: number;
		barChar?: string;
		barHeadChar?: string;
		maxRefreshTime?: number;
		minRefreshTime?: number;
		inline?: boolean;
		syncMode?: boolean;
	}
	interface SlowTypingOptions {
		style?: Function;
		flashStyle?: Function;
		delay?: number;
		flashDelay?: number;
	}
	interface DrawImageOptions {
		shrink?: {
			width: number;
			height: number;
		};
	}
	interface Terminal {
		(enable: boolean): this;
		(output: string): this;
		(output: string, ...args: Args[]): this;
		(...args: Args[]): this;
		on(event: string, callback: Function): this;

		// Methods
		fullscreen(options: object): this;
		processExit(code: number): this;
		grabInput(options: boolean | GrabInputOptions, safeCallback?: Function): this;
		getCursorLocation(callback: (error: Error, x: number, y: number) => void): this;
		getColor(register: number, callback: (error: Error, rgb: RGB) => void): this;
		setColor(register: number, r: number, g: number, b: number, names?: string[]): this;
		setColor(register: number, rgb: RGB, names?: string[]): this;
		getPalette(register: number, callback: (error: Error, palette: Palette) => void): this;
		setPalette(palette: Palette): this;
		setPalette(palette: BuiltInPalette): this;
		yesOrNo(options: YesOrNoOptions, callback: (error: Error, result: boolean) => void): this;
		yesOrNo(callback: (error: Error, result: boolean) => void): this;
		inputField(options: InputFieldOptions, callback: (error: Error, input: string) => void): this;
		inputField(callback: (error: Error, input: string) => void): this;
		fileInput(options: FileInputOptions, callback: (error: Error, input: string) => void): this;
		singleLineMenu(menuItems: string[], options: SingleLineMenuOptions, callback: (error: Error, response: SingleLineMenuResponse) => void): this;
		singleLineMenu(menuItems: string[], callback: (error: Error, response: SingleLineMenuResponse) => void): this;
		singleRowMenu(menuItems: string[], options: SingleLineMenuOptions, callback: (error: Error, response: SingleLineMenuResponse) => void): this;
		singleRowMenu(menuItems: string[], callback: (error: Error, response: SingleLineMenuResponse) => void): this;
		singleColumnMenu(menuItems: string[], options: SingleColumnMenuOptions, callback: (error: Error, response: SingleColumnMenuResponse) => void): this;
		singleColumnMenu(menuItems: string[], callback: (error: Error, response: SingleColumnMenuResponse) => void): this;
		gridMenu(menuItems: string[], options: GridMenuOptions, callback: (error: Error, response: GridMenuResponse) => void): this;
		gridMenu(menuItems: string[], callback: (error: Error, response: GridMenuResponse) => void): this;
		progressBar(options: ProgressBarOptions): this;
		progressBar(): this;

		slowTyping(str: string, options: SlowTypingOptions, callback: Function): this;
		slowTyping(str: string, callback: Function): this;

		drawImage(url: string, options: DrawImageOptions, callback: (error: Error) => void): this;

		// Properties
		readonly width: number;
		readonly height: number;
		readonly appName: string;
		readonly app: any;
		readonly generic: any;
		readonly termconfigFile: any;

		// Foreground color
		defaultColor: this;
		black: this;
		red: this;
		green: this;
		yellow: this;
		blue: this;
		magenta: this;
		cyan: this;
		white: this;
		brightBlack: this;
		gray: this;
		brightRed: this;
		brightGreen: this;
		brightYellow: this;
		brightBlue: this;
		brightMagenta: this;
		brightCyan: this;
		brightWhite: this;
		color(register: number): this;
		darkColor(register: number): this;
		brightColor(register: number): this;
		color256(register: number): this;
		colorRgb(r: number, g: number, b: number): this;
		colorRgbHex(rgb: HexColor): this;
		colorGrayscale(l: number): this;

		// Background color
		bgDefaultColor: this;
		bgBlack: this;
		bgRed: this;
		bgGreen: this;
		bgYellow: this;
		bgBlue: this;
		bgMagenta: this;
		bgCyan: this;
		bgWhite: this;
		bgBrightBlack: this;
		bgGray: this;
		bgBrightRed: this;
		bgBrightGreen: this;
		bgBrightYellow: this;
		bgBrightBlue: this;
		bgBrightMagenta: this;
		bgBrightCyan: this;
		bgBrightWhite: this;
		bgColor(register: number): this;
		bgDarkColor(register: number): this;
		bgBrightColor(register: number): this;
		bgColor256(register: number): this;
		bgColorRgb(r: number, g: number, b: number): this;
		bgColorRgbHex(rgb: HexColor): this;
		bgColorGrayscale(l: number): this;

		// Styles
		bold: this;
		underline: this;
		dim: this;
		styleReset: this;
		italic: this;
		blink: this;
		inverse: this;
		hidden: this;
		strike: this;

		// Moving the cursor
		saveCursor: this;
		restoreCursor: this;
		up(n?: number): this;
		down(n?: number): this;
		right(n?: number): this;
		left(n?: number): this;
		nextLine(n?: number): this;
		previousLine(n?: number): this;
		column(x: number): this;
		scrollUp(n?: number): this;
		scrollDown(n?: number): this;
		scrollingRegion(top: number, bottom: number): this;
		resetScrollingRegion: this;
		moveTo(x: number, y: number): this;
		moveTo(x: number, y: number, args: Args[]): this;
		move(x: number, y: number): this;
		hideCursor: this;

		// Editing the screen
		clear: this;
		eraseDisplayBelow: this;
		eraseDisplayAbove: this;
		eraseDisplay: this;
		eraseLineAfter: this;
		eraseLineBefore: this;
		eraseLine: this;
		insertLine(n: number): this;
		deleteLine(n: number): this;
		insert(n: number): this;
		delete(n: number): this;
		backDelete: this;
		scrollUp(n: number): this;
		scrollDown(n: number): this;
		alternateScreenBuffer: this;

		// Input/Output
		requestCursorLocation: this;
		requestScreenSize: this;
		requestColor(n: number): this;
		applicationKeypad: this;

		//Internal input/output
		mouseButton: this;
		mouseDrag: this;
		mouseMotion: this;
		mouseSGR: this;
		focusEvent: this;

		//Misc
		reset: this;
		error: this;
		str: this;
		bell: this;
		noFormat(str: string): this;
		markupOnly(str: string): this;
		cwd(uri: string): this;
		windowTitle(str: string): this;
		iconName(str: string): this;
		setCursorColor(register: number): this;
		setCursorColorRgb(r: number, g: number, b: number): this;
		resetCursorColorRgb: this;
		setDefaultColorRgb(r: number, g: number, b: number): this;
		resetDefaultColorRgb: this;
		setDefaultBgColorRgb(r: number, g: number, b: number): this;
		resetDefaultBgColorRgb: this;
		setHighlightBgColorRgb(r: number, g: number, b: number): this;
		resetHighlightBgColorRgb: this;
		notify(title: string, text: string): this;
	}
	var terminal: Terminal;
	var realTerminal: Terminal;

	export function getParentTerminalInfo(
		callback: (
			error: Error,
			codename: string,
			name: string,
			pid: number
		) => void
	): void;
	export function getDetectedTerminal(
		callback: (
			error: Error,
			term: Terminal
		) => void
	): void;
	export function autoComplete(
		array: string[],
		startString: string,
		returnAlternatives?: boolean,
		prefix?: string,
		postfix?: string
	): Terminal;

	var tty: any;
	var image: any;
	var Rect: any;
	var ScreenBuffer: any;
	var ScreenBufferHD: any;
	var TextBuffer: any;
	var spChars: any;
	var Terminal: any;
	var createTerminal: any;
	var Element: any;
	var Document: any;
	var Container: any;
	var Text: any;
	var Button: any;
	var TextInput: any;
	var Form: any;
	var RowMenu: any;
	var ColumnMenu: any;
	var DropDownMenu: any;
	var Layout: any;
}