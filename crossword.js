#!/usr/bin/env node

if (process.argv.length !== 3 || process.argv[2].length<2) {
	console.error('Please format your request correctly!');
	console.error('./crossword.js <template>');
	console.error('Where `<template>` is a required list of letters and blank placeholders to represent a single incomplete word.');
	console.error('For example: `./crossword.js awe....`')
	console.error('For more information, see https://github.com/binarymax/nyt-game-cheats');
	process.exit(1);
}

const alpha = /^[a-z]+$/;
const known = process.argv[2].split('');
const dict = require("fs")
	.readFileSync("dict/words.txt","utf8").split("\n")
	.filter(x=>x.match(alpha))
	.filter(y=>{
		const x = y.split('');
		if (known.length!==x.length) return false;
		for(let i=0;i<known.length;i++){
			if ((x[i]!==known[i]) && (known[i].match(alpha))) return false;
		}
		return true;
	})
	.map(x=>console.log(x));