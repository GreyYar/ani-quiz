import React from 'react';
import { CharImg } from './CharImg'
import { CharName } from './CharName'
import { AnswerButtons } from './AnswerButtons'


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
    return answer === this.props.charBase[this.props.currentChar].animeTitle;
  }

  render() {
    return (
      this.props.visible &&
      <div className='quiz-menu'>
        <CharImg current={this.props.charBase[this.props.currentChar].imageLink}/>
        <CharName current={this.props.charBase[this.props.currentChar].name}
                  display={this.props.charNameSetting}/>
        <AnswerButtons titles={this.getUniqueTitlesList()} checker={this.checkAnswer.bind(this)}/>
      </div>
    )
  }
}

export { QuizMenu }