# Memory
- Build a browser-based, feature-packed card matching game (Project 3).
- Created for the Udacity Nanodegree Front End Web Developer- (Full Google Scholarship).

## Play the Game
Play the [My Little Pony Matching Game](https://dianavile.github.io/Memory/).

## Mockup
Here you see the final result:
![StartScreen](https://github.com/dianavile/Memory/blob/master/img/StartGame_Screen.png)
![Game](https://github.com/dianavile/Memory/blob/master/img/My_Litle_Pony_Matching_Game.png)
![Modal](https://github.com/dianavile/Memory/blob/master/img/Modal.png)

## Instructions
- Students are given a `startercode`(HTML and CSS styling) of the static Memory Game project.
- __Goal__ is to convert the static project into an interative App game. 
- Modifying HTML, CSS but basically the JavaScript file.

## Game Logics
- The game randomly shuffles the 16 cards. 
- A user wins once all cards have successfully been matched (8pairs).

## Game Functionality
1. __Shuffle Cards__: Shuffle cards randomly on load or restart
The Cards need to be shuffled on load or restart.
2. __Matching Cards__: 
The Game need to know how to handle matched and unmatched cards.
3. __Moves__: The Game displays the current number of moves a user has made.
4. __Star Rating__: The game shows star rating system (1-3). It reflects player’s performance based on number of moves. 
5. __The Timer__: When a player starts a game, a displayed timer starts. When player wins the game, timer stops.
6. __Restart button__: The restart button allows player to reset the gameboard, timer and star rating system.
7. __A Congratulations Modal__: When player wins the game, a congratulations modal displays
including: time spend, star rating & play again button 

## Game Requirements
In order to let the game work properly, the following TODO list is needed:
- A grid with 16 cards
- 8 different pairs of cards
- Cards are randomly placed 
- The symbols face down
- On a click the card must turn and show the icon and stays turned
- On a click on a different card the card must turn and show the icon
- If the 2 turned cards match they stay turned
- If the cards don't match they turn back
- The game ends when all cards are flipped
- When the game ends show a modal
- Reset button
- Star rating
- Timer
- Move counter

## Code Dependencies:
This project is created based on the [Udacity starterscode]()
and with help of the following code, fonts, images, backgrounds & emojis:

__Javascript:__ [Shuffle function](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976),[DOM](https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/), [How javascript works?](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
__CSS:__ [Font style](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp), [Modal Box](https://www.w3schools.com/howto/howto_css_modals.asp),[CSS Animations](https://css-tricks.com/almanac/properties/a/animation/)- "transform"
__GIT:__[Learn Git Branching](https://learngitbranching.js.org/), [Oh Shit Git](http://ohshitgit.com/).  

#### Fonts
- "Equestria.tff" from [Fontsplace](http://www.fontsplace.com/equestria-free-font-download.html)

#### Images, Background & Emojis
- Backgroundpicture from [DevianArt by AllowedPlz ©2012-2018 MLP-Vector-Collabs*](https://orig00.deviantart.net/0ffb/f/2012/142/d/7/bg1small2_by_mlp_vector_collabs-d50sego.png)
- Pictures made by [My Little Pony Wikia page](http://mlp.wikia.com/wiki/My_Little_Pony_Friendship_is_Magic_Wiki)
- Emoji (unicode) made by [Emojipedia](https://emojipedia.org/)

## Contributing

No pull requests are accepted.

## TODO- FUTURE FEATURES

I would like to add the following attributes (not requiered for the project):

- __Sound__: add a song or pony sounds to the game.
- __Game level__: (easy- intermediate- advanced)
- __Scoreboard__: add a scoreboard so players can see how they perform.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to Udacity, fellow scholarships & coding friends. You are priceless!
* Inspiration: my daughter, who is currently a huge fan of My Little Pony and loves to play.
