import React from 'react';

class Character extends React.Component {
  render() {
    return (
    <div id="char-info">
      <div id="char-img" style={{backgroundImage: "url(" + this.props.charImg + ")"}}>
        {this.props.charName !== "" ? <h2 id="char-name">{this.props.charName}</h2> : null}
      </div>
    </div>
    )
  }
}

export { Character }