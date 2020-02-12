const AVATAR_URL = `https://api.adorable.io/avatars/128`;

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
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `artist1`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `artist2`
      }
    ]
  }
];

export default questions;
