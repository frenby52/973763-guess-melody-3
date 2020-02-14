import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const ERRORS_COUNT = 3;

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `pop`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `artist`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `https://api.adorable.io/avatars/128/0`,
        artist: `artist`,
      }, {
        picture: `https://api.adorable.io/avatars/128/1`,
        artist: `artist1`,
      }, {
        picture: `https://api.adorable.io/avatars/128/2`,
        artist: `artist2`
      }
    ]
  }
];

it(`App render`, () => {
  const tree = renderer
    .create(<App errorCount={ERRORS_COUNT} questions={questions}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
