import React from 'react';

class CharName extends React.Component {
  render() {
    return <div id='name-next-block' className="block center">
      { this.props.display ? <p className="char-name inline">{this.props.current}</p> : <p/> }
      <button id="2" className="inline">NEXT ></button>
    </div>
  }
}

export { CharName }