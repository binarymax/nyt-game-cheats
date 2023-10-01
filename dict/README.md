# Dictionaries for the Cheats

`words-edmt.txt` was assembled from https://github.com/eddydn/DictionaryDatabase (MIT License from Public Domain content)

`words-ubuntu.txt` is the dictionary from an old Ubuntu Linux distro, with some (but not all) naughty words filtered.

## Creating the dictionaries

### Step 1: Crossword

These are combined and filterd on alpha to make the source `words.txt` dictionary used by `../crossword.js`:

`cat words-*.txt | tr A-Z a-z | sort | uniq >words.txt`

### Step 2: Bee and Wordle

From `words.txt` the, the other dictionaries are assembled:

`node make_bee_dict.js` and `node make_wordle_dict.js`

## Adding your own words

If you want to add words to the dictionary, just make a file `words-extra.txt`, with one word on one line each, then run Steps 1 and 2 commands above.

Adding your own words is helpful for crossword, since contractions (like `dont`) and common combined words (like `isit`) are not in the included dictionaries.

Also, if you made it this far, `epee` isn't in the included dictionary either, and NYT *loves* that word for some reason.  So for fun, try adding that yourself with some contractions.