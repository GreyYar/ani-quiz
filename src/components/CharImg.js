import React from 'react';

class CharImg extends React.Component {
  render() {
    return <div className='char-img'>
      <img src={this.props.current} alt=""/>
    </div>
  }
}

export { CharImg }