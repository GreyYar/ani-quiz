import React from 'react';
import './App.css';
import { Label } from './components/Label'
import { StartMenu } from './components/StartMenu'
import { QuizMenu } from './components/QuizMenu'
import charBase from './data/base'

const questions_amount = 4;
const display_char_name = false;

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

  incrementQuestion() {
    this.setState({ currentQuestion: ++this.state.currentQuestion })
  }

  generateQuestionsQueue() {
    this.setState({ visibilityStart: false });
    let arr = [];
    if (questions_amount > charBase.length)
      throw new RangeError("Number of questions exceed characters amount in base");
    for (let i = 0; i < questions_amount; i++) {
      let unique = true;
      let candidate = Math.floor(Math.random() * charBase.length);
      for (let item of arr) {
        if (candidate === item){
          unique = false;
          break;
        }
      }
      if (unique)
        arr.push(candidate);
      else
        i--;
    }
    this.setState({ questionsQueue: arr, visibilityQuiz: true })
  }

  render() {
    return (
      <React.Fragment>
        <Label/>
        <StartMenu visible={this.state.visibilityStart}
                   incr={this.incrementQuestion.bind(this)}
                   queueGen={this.generateQuestionsQueue.bind(this)}
        />
        <QuizMenu visible={this.state.visibilityQuiz}
                  charBase={this.state.base}
                  charNameSetting={display_char_name}
                  currentChar={this.state.questionsQueue[0]}
        />
      </React.Fragment>
    )
  }
}

export default App;
