import React from 'react';

class Buttons extends React.Component {
  state = {
    answered: false,
    correct: false,
    resetButtons: false,
  };
  renderButtons() {
    const { answered, resetButtons } = this.state;
    const handler = this.handleAnswer;
    return this.props.titles.map(function(title, i) {
      return <button key={i}
                     onClick={handler}
                     disabled={answered}
                     className={resetButtons ? null : ""}
             >{title}</button>
    })
  }
  handleAnswer = (e) => {
    this.setState({ answered: true });
    const correctAnswer = this.props.checkAnswer(e.currentTarget.firstChild.nodeValue);
    if(correctAnswer) {
      this.setState({ correct: true });
      e.target.classList.add("answer-correct");
    }
    else {
      e.target.classList.add("answer-wrong");
    }
  };
  handleNextQuestion = () => {
    this.props.nextQuestion(this.state.correct);
    this.setState({
      answered: false,
      correct: false,
      resetButtons: !this.state.resetButtons });
  };
  render() {
    return (
      <div id='buttons'>
        <button id="next-button"
                onClick={this.handleNextQuestion}
                disabled={!this.state.answered}
                className={this.state.answered ? "" : "invisible"}
        >NEXT ></button>
        <div id='ans-block'>
          {this.renderButtons()}
          </div>
      </div>
    )
  }
}

export { Buttons }