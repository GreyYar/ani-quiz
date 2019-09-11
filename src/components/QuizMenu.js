import React from 'react';
import { Buttons } from './Buttons'
import { Character } from "./Character";


class QuizMenu extends React.Component {
  getUniqueTitlesList() {
    const { charBase } = this.props;
    const optionsAmount = 4;
    let correctTitleAdded = false;
    let arr = [];

    if (optionsAmount > this.props.charBase.length)
      throw new RangeError("Number of possible options exceed characters amount in base");
    for (let i = 0; i < optionsAmount; i++) {
      let unique = true;
      let candidate = charBase[Math.floor(Math.random() * charBase.length)].animeTitle;
      for (let item of arr) {
        if (candidate === item) {
          unique = false;
          break;
        }
      }
      if (unique) {
        arr.push(candidate);
        if (candidate === charBase[this.props.currentChar].animeTitle)
          correctTitleAdded = true;
      }
      else
        i--;
    }
    if(!correctTitleAdded){
      const correctId = Math.floor(Math.random() * optionsAmount);
      arr[correctId] = charBase[this.props.currentChar].animeTitle;
    }
    return arr;
  }

  checkAnswer(answer) {
    return (answer === this.props.charBase[this.props.currentChar].animeTitle);
  }

  render() {
    return (
      this.props.visible &&
      <div className='quiz-menu'>
        <Character charImg={this.props.charBase[this.props.currentChar].imageLink}
                   charName={this.props.charNameSetting ? this.props.charBase[this.props.currentChar].name : ""}
        />
        <Buttons titles={this.getUniqueTitlesList()}
                 checkAnswer={this.checkAnswer.bind(this)}
                 nextQuestion={this.props.nextQuestion}
        />
      </div>
    )
  }
}

export { QuizMenu }