import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const ERRORS_COUNT = 3;

it(`App render`, () => {
  const tree = renderer
    .create(<App errorCount={ERRORS_COUNT}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
