---
layout: post
title:  "Django sudoku solver and word finder on Google App Engine"
categories: code
---

I hadn't played with [Django](https://www.djangoproject.com/){:target="_blank"} before, so tried it out by building 2 simple but fun tools on Google App Engine.

## [Sudoku Solver](http://rikusv-sandpit.appspot.com/sudoku){:target="_blank"}

The Python code for the sudoku solver is not (at all) sophisticated. It just implements a procedure that a human might follow, so that the steps can be logged. If one didn't want to replicate a human process of solving a sudoku, one could of course use boolean satisfiability, a genetic algorithm, or a probabilistic graphical model.

The procedure is to look at each cell in turn, determining the constraints for each, and then acting accordingly:

- If there are no options, give up.
- If there is only one option, fill it in.
- If there are multiple options, skip the cell for now, or if no cells remain with only one option, try each option in turn and hope for success.

## [Word Finder](http://rikusv-sandpit.appspot.com/words){:target="_blank"}

Here is the very simple Python code for the word finder:

```python
def words_with_all(word, str):
    """using all these letters"""
    return uses_only(str, word)

def words_with_only(word, str):
    """using only these letters"""
    return uses_only(word, str)

def words_with_exact(word, str):
    """using exactly these letters"""
    return len(word) == len(str) and sorted(str) == sorted(word)

def words_with_sequence(word, str):
    """containing this sequence"""
    return str in word

def words_with_pattern(word, str):
    """matching this pattern"""
    regex = re.compile(str.replace('-', '[a-z]') + '$')
    return regex.match(word)

def uses_only(str1, str2):
    """checks whether str1 uses only letters in str2"""
    for letter in str1:
        if letter not in str2:
            return False
    return True
```
