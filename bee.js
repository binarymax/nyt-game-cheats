#!/usr/bin/env node
const alpha = /^[a-z]+$/;
if (process.argv.length !== 4 
	|| process.argv[2].length!==1 
	|| process.argv[3].length!==6
	|| !alpha.test(process.argv[2] + process.argv[3])
    ) {
	console.error('Please format your request correctly!');
	console.error('./bee.js <center> <edge>');
	console.error('Where <center> is a single letter and <edge> is 6 letters');
	console.error('For more information, see https://github.com/binarymax/nyt-game-cheats');
	process.exit(1);
}
const center = process.argv[2].toLowerCase();
const edges = process.argv[3].toLowerCase();
const letters = center+edges;
const dict = require("fs")
	.readFileSync("dict/bee.txt","utf8").split("\n")
	.filter(y=>{
		if (y.indexOf(center)<0) return false;
		for(let i=0,x=y.split('');i<x.length;i++) {
			if (letters.indexOf(x[i])==-1) return false;
		}
		return true;
	})
	.map(x=>console.log(x));