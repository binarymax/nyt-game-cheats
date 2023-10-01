# NYT Game Cheats

Command line "helpers" for Crossword, Spelling Bee, and Wordle

Requires Node.js (tested on v20)

## Install

```bash
git clone https://github.com/binarymax/nyt-game-cheats
cd nyt-game-cheats
```

## Crossword

crossword.js helps find possible one-word matches to clues based on a template.

`./crossword.js <template>`

Where `<template>` is a required list of letters and blank placeholders to represent a single incomplete word.

For example:

`./crossword.js awe____` 

Produces the possible answer:

```
awesome
```

Template blanks also work with other non-alpha characters like `.`, `?`, `-`, `,`, etc.:

`./crossword.js awe..me`

The dictionary is quite extensive, but doesn't contain everything.  Pop culture names like songs and movies might not be found.  It also doesn't help find multiple words such as `outtolunch`, unless they are in the dictionary.  It also doesn't identify rebus.

Another example:

`./crossword.js _____a_____a__`

Produces: 

```
contraindicant
contraindicate
machiavellians
monocarpellary
overpassionate
polycarpellary
quadragesimals
```

*NOTE: The cheats dictionary does not exactly match the NYT Crossword dictionary.  Some words that are valid in the game might be missing.*

## Spelling Bee

This ultimate spoiler finds all the possible answers to a Spelling Bee puzzle.

`./bee.js <center> <edge>`

Where `<center>` is the letter in the middle and `<edge>` are all the letters on the outside.

For example:

`./bee.js a wesmot`

Produces:

```
...
awes
awesome
awsome
eame
ease
eases
...
```

*NOTE: The cheats dictionary includes proper nouns and does not exactly match the NYT Spelling Bee dictionary. Some words produced might not be valid in the game, and some words that are valid in the game might be missing.*

## Wordle

Finds possible words based on the existing green, yellow, and grey letters that you already know.

`./wordle.js <green> <yellow> [exclude]`

Where `<green>` is the template for the green letters to keep,  `<yellow>` is the template for the yellow letters to keep but move, and optionally `[exclude]` is the list of grey letters to exclude.  Templates work the same as Crossword templates, but must contain exactly 5 letters.

For example:

`./wordle.js gr___ __a__ omnsyvl`

Produces:

```
great
greta
```

*NOTE: The cheats dictionary includes proper nouns and does not exactly match the NYT Wordle dictionary. Some words produced might not be valid in the game, and some words that are valid in the game might be missing.*