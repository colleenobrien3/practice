# New and Improved MedTrak-Farkle Coding Challenge

## Description

Hello MedTrak Team! Thank you for taking the time to look at my new and improved challenge! Last time I did the challenge, I focused more on creating all the players in the DOM and getting their individual sets of die and buttons to align with their virtual counterparts. Because of this, I did not have much time to write out the actual logic for scoring the game. Therefore, I wanted to show you all how I would go about implementing some of that logic, so that is what I did in this version of the challenge.

## Technologies

- JavaScript
- HTML
- CSS

## Getting Started

Please click [here](https://colleenobrien3.github.io/practice/) to view the deployed version.
To play, you first type the number of players you have into the input field. Hit submit, and see the scoreboard display this number of scores. Then, hit begin game before allowing the first player to roll the dice. I have not yet developed the logic for limiting the player's turn, so the player can hit bank score whenever they choose. Once they do, their score will be added correctly to their score display and it will be the next player's turn to roll.

## Next Steps

I did not have time to make the game completely bug-free, so here are a few bits of logic I still need to implement:

- Add logic to handle 'Farkles' to the dice rolling function
- Add logic for ending the game when a player reaches the correct score
- Fix a bug that messes up the scoring when more than three ones are rolled
- Add alerts that display which player's turn it is
