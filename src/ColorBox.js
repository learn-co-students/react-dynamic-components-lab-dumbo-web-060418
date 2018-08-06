import React, { Component } from 'react';

export default class ColorBox extends Component {
  
recursiveThingy = () => {
	if (this.props.opacity >=.2) {
		return <ColorBox opacity={this.props.opacity -.1}/>
	} else {
		return null
	}
}

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.recursiveThingy()}
      </div>
    )
  }
  
}




	// this.props.opacity >= .2 ? <ColorBox opacity={this.props.opacity -.1}/> : null 