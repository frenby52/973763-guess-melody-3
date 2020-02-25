import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});
jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});

const handlePlayButtonClick = jest.fn();

const getPlayer = (isPlaying) => {
  return mount(
      <AudioPlayer
        src={`https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`}
        isPlaying={isPlaying}
        onPlayButtonClick={handlePlayButtonClick}
      />
  );
};

describe(`AudioPlayer has pause and play state`, () => {
  it(`AudioPlayer state is true when playing`, () => {
    const player = getPlayer(false);
    const button = player.find(`.track__button`);

    player.setState({isLoading: false});
    button.simulate(`click`);
    expect(player.state().isPlaying).toBe(true);
  });

  it(`AudioPlayer state is false when pause`, () => {
    const player = getPlayer(true);
    const button = player.find(`.track__button`);

    player.setState({isLoading: false});
    button.simulate(`click`);
    expect(player.state().isPlaying).toBe(false);
  });
});
