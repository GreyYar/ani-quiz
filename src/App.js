import React from 'react';
import './App.css';
import Label from './components/Label'
import { StartMenu } from './components/StartMenu'
import { QuizMenu } from './components/QuizMenu'
import { ResultScreen } from './components/ResultScreen'
import charBase from './data/base'

const questions_amount = 4;
const display_char_name = true;

class App extends React.Component {
  state = {
    base: charBase,
    score: 0,
    currentQuestion: 0,
    questionsQueue: [],
    visibilityStart: true,
    visibilityQuiz: false,
    visibilityResults: false,
  };


  nextQuestion(isCorrect) {
    if (isCorrect)
      this.setState({ score: ++this.state.score });
    if (this.state.currentQuestion + 1 < questions_amount) {
      this.setState({currentQuestion: ++this.state.currentQuestion});
    } else {
      this.setState({ visibilityQuiz: false, visibilityResults: true });
    }
  }

  generateQuestionsQueue() {
    this.setState({ visibilityStart: false });
    let arr = [];
    if (questions_amount > charBase.length)
      throw new RangeError("Number of questions exceed characters amount in base");
    for (let i = 0; i < questions_amount; i++) {
      let candidate = Math.floor(Math.random() * this.state.base.length);
      if (arr.includes(candidate))
        i--;
      else
        arr.push(candidate);
    }
    this.setState({ questionsQueue: arr, visibilityQuiz: true })
  }

  calculateScore() {
    return Math.round((this.state.score / questions_amount) * 100)
  }

  render() {
    return (
      <React.Fragment>
        <Label/>
        <StartMenu visible={this.state.visibilityStart}
                   queueGen={this.generateQuestionsQueue.bind(this)}
        />
        <QuizMenu visible={this.state.visibilityQuiz}
                  charBase={this.state.base}
                  charNameSetting={display_char_name}
                  currentChar={this.state.questionsQueue[this.state.currentQuestion]}
                  nextQuestion={this.nextQuestion.bind(this)}
        />
        <ResultScreen visible={this.state.visibilityResults}
          score={this.calculateScore()}/>
      </React.Fragment>
    )
  }
}

export default App;
