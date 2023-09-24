# Exercise 002 - Player

Implements a Player in a class and function way. It represents a Player in a RPG game, so will be `exp` and stats as `strength`, `dextery`, ...

## Technical Definition

### Methods

__Constructor__: 
- name
- str
- dex
- int

Example: `new Player("Josue", 4, 6, 8) OR Player("Alice", 5, 7, 1)`

__add__:
- stat, name of the stat
- value

Example: `player.add("str", 5)`

__get__:
- stat

Example: `player.get("lvl")`

## Constraints

- The player start with level __1__, and it needs __100__ points of experience to level up independent of the __lvl__
- Each time the player levels up their __str__, __dex__ and __int__ go up by one
- The methods `add` and `get` should throw a error when the stat doesn't exists
