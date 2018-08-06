import React, {
  Component
} from 'react';

export default class ColorBox extends Component {

  render() {
    // let newValue = this.props.op
    // newValue = 2
    // console.log(newValue);
    console.log(this.props);
    if (this.props.opacity >= 0.2) {
      return (
        <div className = "color-box"
          style = {{opacity: this.props.opacity}}
          opacity = {this.props.opacity - 0.1}>
          <ColorBox className = "color-box"
            style = {{opacity: this.props.opacity}}
            opacity = {this.props.opacity - 0.1}/>
        </div>
      )
    } else {
      return null
    }
  }

}
