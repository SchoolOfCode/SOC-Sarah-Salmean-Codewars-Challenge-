The cure for insomnia 

You have been having trouble sleeping. A friend reccomends you try watching the experimental film "Logistics" (The Logistics Art Project: https://en.wikipedia.org/wiki/Logistics_(film) ) - the worlds longest film, with a run time of 857 hours. 

You somehow obtain a copy despite the film being considered 'lost'.

Write a funtion to calculate how many days pass before you get through the full film, with the following factors in mind:

1) You put the film on when you go to bed each night at 10pm, and watch it until you fall asleep. This is the only timeslot that you watch the film.

2) Regardless of if you slept that night, you always get up at 7am. 

3) You never wake during the night, and the film stops playing the moment you fall asleep. If you do not sleep that night, the film stops at 7am when you get up.

4) Each night, you pick up from the point in the film where you left off.

5) The first night watching the film, you manage to get 7 hours of sleep.

6) On night 2, you do not sleep at all. Every second night from then on, you do not sleep at all.

7) On the nights that you do sleep, it alternates between getting 5 hours of sleep one night, and 4 hours of sleep the following night.

8) You have ten sleeping pills that will grant you instant sleep, which you take on random no sleep nights. 

9) Display the number of nights as a whole interger, rounding upwards.

# Make your own CodeWars

You've spent the past few weeks solving katas on CodeWars, and you might think that they're written by an elite cabal of software geniuses (or not if you've run across a few less-than-stellar katas!). Not so - they're written by ordinary programmers, and you're now officially School of Code-qualified to join in and give writing your own a try.

### Step 1: Write your kata

Think of your scenario - be as creative as you like - and then focus on communicating the situation you've devised. You'll have noticed that some katas have examples or additional information where needed, so add any info your CodeWarriors will need. Strike the right balance though, as you don't want to give them too much or too little information. It needs to stay a challenge, but it shouldn't be impossible!

👉 Write your kata's scenario in a comment in [main.js](main.js), and include the start of the function that CodeWarriors will use to solve it (like you've seen on the katas you've done before).

### Step 2: Write your tests

Have a look at some of the katas you've done previously. You'll notice that under where you write your code, there's another box with a series of tests. Now that we've covered testing with `jest`, those tests should start to look familiar.

Start planning the tests you'll need to write to check your CodeWarriors' solutions. Think about the different types of data that can be handed into the function and potentially any tricky edge cases that might trip them up. Your goal is to write enough tests to cover the range of different possibilities for the function that will prove that it's fully solved the problem.

👉 Install `jest` as a dev dependency, and update the `scripts` section in [package.json](package.json) accordingly.

👉 Enable ESM for the project and Jest (if needed, see: https://jestjs.io/docs/ecmascript-modules).

👉 Write enough tests in [main.test.js](main.test.js) so that you can be reasonably assured that when your CodeWarrior tests their solution to your kata, if the tests pass, it works.

You can write out the solution code and run your tests yourself to make sure your tests are working properly (and it's always good to experiment with making errors in your code on purpose to make sure your tests fail correctly too!).

### Step 3: Choose your victims! 😈

⚠️ Remember to remove any solution code you may have written to test your tests before pushing up your final version ready to exchange! ⚠️

👉 When you're ready, you can share your repo's link on Slack with the rest of the bootcampers, who can clone it down, attempt your kata, and run your tests to see if they're on the right track.

ℹ️ Remember to change the [visibility of your repository to public](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).

Share your kata in Slack in the following format:

```
Room: {your room number}
Members: {names of people in your pair}
Link: {GitHub link to your public repo containing the kata}
Overview: {brief description of what your kata is about}
```

👉 Once they finish, ask them for feedback, and you can use that user feedback to make any tweaks or improvements to your kata and/or tests.

### Step 4: Complete katas from other teams!

👉 Keep an eye out for other groups' katas. Give them a go, and send any feedback through to the group who created them.

## Bonus: Submit to Codewars

🌟 Once you've tested it with other groups, you can then use the [Codewars docs](https://docs.codewars.com/authoring/tutorials/create-first-kata/) to figure out how to upload it to Codewars itself.

Note: You need more than 300 honor points on your Codewars account to be able to upload your own kata!
