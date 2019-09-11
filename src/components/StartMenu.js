import React from 'react';

class StartMenu extends React.Component {
  startQuiz = () => {
    this.props.queueGen();
  };

  render() {
    return (
      this.props.visible &&
      <div id="content" className="center {}">
        <button onClick={this.startQuiz}>GO</button>
        <h2 className="hide">Options:</h2>
      </div>
    )
  }
}

export { StartMenu }