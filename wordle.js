#!/usr/bin/env node

if (process.argv.length < 3
	|| (process.argv[2].length !== 5)
	|| (process.argv[3] && process.argv[3].length !== 5)
   ) {
	console.error('Please format your request correctly!');
	console.error('./wordle.js <green> [yellow] [exclude]');
	console.error('Where `<green>` is the 5-letter long template for the green letters to keep,  `<yellow>` is the 5-letter long template for the yellow letters to keep but move, and optionally `[exclude]` is the list of grey letters to exclude.  Templates work the same as Crossword templates, but must contain exactly 5 letters.');
	console.error('For example: `./wordle.js gr___ __a__ omnsyvl`');
	console.error('For more information, see https://github.com/binarymax/nyt-game-cheats');
	process.exit(1);
}


const alpha = /^[a-z]+$/;
const green = process.argv[2].split('');
const yellow = (process.argv[3]||'').split('');
const ignore = (process.argv[4]||'').split('');
const dict = require("fs")
	.readFileSync("dict/wordle.txt","utf8").split("\n")
	.filter(x=>x.length==5&&x.match(alpha))
	.filter(y=>{
		const x = y.split('');
		let i;
		for(i=0;i<green.length;i++){
			if ((green[i]!=='_') && (x[i]!==green[i])) return false;
		}
		for(i=0;i<yellow.length;i++){
			if ((yellow[i]!=='_') && (x[i]===yellow[i] || x.indexOf(yellow[i])===-1)) return false;
		}
		for(i=0;i<ignore.length;i++) {
			if (x.indexOf(ignore[i])>0) return false;
		}
		return true;
	})
	.map(x=>console.log(x));