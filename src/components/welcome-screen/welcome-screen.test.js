import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

it(`WelcomeScreen should render correct`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorCount={3} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
