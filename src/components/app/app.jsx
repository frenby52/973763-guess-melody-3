import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";


const handleWelcomeButtonClick = () => {};

const App = (props) => {
  const {errorCount, questions} = props;

  return (
  //  <WelcomeScreen errorCount={errorCount} onWelcomeButtonClick={welcomeButtonClickHandler}/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorCount={errorCount} onWelcomeButtonClick={handleWelcomeButtonClick}/>
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen question={questions[1]}/>
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen question={questions[0]} />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
