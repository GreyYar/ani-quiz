import React from 'react';

class AnswerButtons extends React.Component {
  state = {
    answered: false,
    correct: false,
    wrong: false,
  };
  renderButtons() {
    const { answered, correct, wrong } = this.state;
    const handler = this.handleAnswer;
    return this.props.titles.map(function(title, i) {
      return <button key={i} onClick={handler} disabled={answered} className={(correct ? "answer-correct " : " ") + (wrong ? "answer-wrong " : " ")}>{title}</button>
    })
  }
  handleAnswer = (e) => {
    this.setState({ answered: true });
    const correctAnswer = this.props.checker(e.currentTarget.firstChild.nodeValue);
    if(correctAnswer)
      this.setState({ correct: true });
    else
      this.setState({ wrong: true });
  };
  render() {
    return <div id='ans-block'>
      {this.renderButtons()}
    </div>
  }
}

export { AnswerButtons }