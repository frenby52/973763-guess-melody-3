import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";


const welcomeButtonClickHandler = () => {};

const App = (props) => {
  const {errorCount} = props;

  return (
  //  <WelcomeScreen errorCount={errorCount} onWelcomeButtonClick={welcomeButtonClickHandler}/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorCount={errorCount} onWelcomeButtonClick={welcomeButtonClickHandler}/>
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
