import React, {Component} from 'react'
import "./Box.css"

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.flipBoxesAroundMe();
  }

  render() {
    let classes = "Box" + (this.props.isLit ? " Box-lit" : "");

    return (
        <td className={classes} onClick={this.handleClick} />
    )
  }
}


export default Box;