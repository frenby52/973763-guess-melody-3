import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const ERRORS_COUNT = 3;

it(`WelcomeScreen should render correct`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorCount={ERRORS_COUNT} onWelcomeButtonClick={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
