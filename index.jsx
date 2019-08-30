// imports for webpack
// import React from 'react';
// import ReactDOM from 'react-dom';

const questions_amount = 4;
const display_char_name = true;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Label/>
        <StartMenu/>
        <QuizMenu/>
      </React.Fragment>
    )
  }
}

class Label extends React.Component {
  render() {
    return <h1>Anime Sage</h1>
  }
}

class StartMenu extends React.Component {
  render() {
    return <div id="content" className="center">
      <button>GO</button>
      <h2>Options:</h2>
    </div>
  }
}

class QuizMenu extends React.Component {
  render() {
    return <React.Fragment>
      {/*<CharImg/>*/}
      <CharName/>
      <AnswerButtons/>
    </React.Fragment>
  }
}

class AnswerButtons extends React.Component {
  render() {
    return <div id='ans-block' className="center">
      <button id="1" className="answer-correct">TEST1</button>
      <button id="2" className="">TEST2</button>
      <button disabled="disabled" id="3" className="">TEST3</button>
      <button id="4" className="answer-wrong">TEST4</button>
    </div>
  }
}

class CharName extends React.Component {
  render() {
    return <div id='name-next-block' className="block center">
      <p className="char-name inline">Random Guy</p>
      <button id="2" className="inline">NEXT ></button>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
