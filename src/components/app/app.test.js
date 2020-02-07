import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App render`, () => {
  const tree = renderer
    .create(<App errorCount={3}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
