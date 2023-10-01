const alpha = /^[a-z]+$/;
const fs = require("fs");
const json = JSON.parse(fs.readFileSync("../DictionaryDatabase/EDMTDictionary.json","utf8"));
const dict = json
	.map(x=>x.word.toLowerCase())
	.filter(x=>x.match(alpha))
	.join('\n')
fs.writeFileSync('./dictionary.txt',dict);