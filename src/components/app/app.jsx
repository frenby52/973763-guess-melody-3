import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import {GameType} from "../../const.js";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleWelcomeButtonClick = this._handleWelcomeButtonClick.bind(this);

    this.state = {
      step: -1
    };
  }

  _renderGameScreen() {
    const {errorCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeButtonClick={this._handleWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <ArtistQuestionScreen
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreen
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
      }
    }

    return null;
  }

  _handleWelcomeButtonClick() {
    this.setState({
      step: 0
    });
  }

  render() {
    const {questions} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}

          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen question={questions[1]} onAnswer={() => {}}/>
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen question={questions[0]} onAnswer={() => {}}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};


