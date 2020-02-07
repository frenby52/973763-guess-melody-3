import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Welcome button should be clicked`, () => {
  const welcomeButtonClickHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorCount={3}
        onWelcomeButtonClick={welcomeButtonClickHandler}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  // welcomeButton.props().onClick();
  // expect(welcomeButtonClickHandler.mock.calls.length).toBe(1);
  welcomeButton.simulate(`click`);
  expect(welcomeButtonClickHandler).toHaveBeenCalledTimes(1);

});
