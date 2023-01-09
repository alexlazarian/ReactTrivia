# Preview

![preview](https://user-images.githubusercontent.com/34932547/183357804-f95320cb-ea2d-4525-b69c-e3b956de67ad.gif)

# Trivia game

Task: build a fully functional experience that meets the requirements below.

The project examines the process of developing a game prototype given a partial, rough design. We explore the process of extending the theme in the provided designs, and potentially augmenting the design with our own features or reskinning the experience.

## Guideline for completing the exercise

- The set of questions must meet the following criteria:
  - Five questions minimum
  - At least one question should have only a single answer
  - At least one question should have multiple answers
  - Other question formats are welcome but not required
  - Focus your browser and device compatibility solely on desktop Chrome and the Chrome mobile emulator. Use the Chrome emulator to test mobile device compatibility. Physical mobile device testing is not required.
  - It should be responsive and accessible.
  - You may edit any file in the project, and add any assets you require.
  - You may look up anything you like.
  - Any of the following languages, frameworks and packages are permitted but are not required.
    - JavaScript / TypeScript
    - React
    - CSS / Sass
    - CSS in JS
      - [Emotion](https://emotion.sh/docs/introduction)
        - To use the [CSS prop](https://emotion.sh/docs/css-prop#jsx-pragma) make sure to add `/** @jsxImportSource @emotion/react */` to the top of your file.
      - [Styled Components](https://styled-components.com/)
      - [ThemeUI](https://theme-ui.com/)
    - Redux
    - React Router
  - Your finished code should be of a quality that you would submit to your peers for a code review.

## The user experience

- Questions:
  - Each question screen is presented one at a time.
    - Design: [Question.png](./Question/png) or Figma Question board.
  - When the user submits an answer, they are presented with an indication if they were correct or wrong.
    - Design: [Correct-Answer.png](./Correct-Answer.png) or Figma Correct Answer board.
- Results:
  - After the final question, the user is sent to the results screen. The screen includes the current score, high score and the date they achieved the high score. Messaging on the screen should change based on the user’s score.
    - Design: [Final-Score.png](./Final-Sorce.png) or Figma Final Score board.

## Sample Questions

- If you have 10 mangos and another person gives you 12 more, how‌ ‌many‌ ‌mangos‌ ‌will‌ ‌you‌ ‌have‌ ‌in‌ ‌total?‌
  - 1 mango
  - 2 mangos
  - 10 mangos
  - 22 mangos (correct answer)
- If‌ ‌a‌ ‌train‌ ‌is‌ ‌supposed‌ ‌to‌ ‌reach‌ ‌the‌ ‌station‌ ‌at‌ ‌4:10‌ ‌am‌. but‌ ‌it‌ ‌is ‌35‌ ‌minutes‌ late,‌ ‌at‌ ‌what‌ ‌time‌ ‌will ‌the‌ ‌train‌ ‌reach‌ ‌the‌ ‌station?‌ ‌
  - 4:45 am (correct answer)
  - 3:00 am
  - 4:45 pm
  - 6:00 pm
- Which of these animals can fly?
  - Cats
  - Bats (correct answer)
  - Birds (correct answer)
  - Worms
- Which of the following is a list of colors?
  - Dog, cat, fish
  - Earth, Mars, Venus, Saturn, Mercury, Jupiter, Neptune, Uranus
  - Guitar, drums, piano, harmonica, tambourine, trumpet
  - Red, orange, yellow, green, blue, indigo, violet (correct answer)
- If you are reading a book and are on page 374, what will the number of the next page be?
  - 375 (correct answer)
  - 373
  - 474
  - 400
