import React, { Component } from 'react';

class Cell extends Component {
    state = {
        newcolor: this.props.currentcolor,
        clicked: false,
    }
    pressed(color) {
        // alert("color " + color + " row " + this.props.row)
        console.log(color)
        if (this.props.row === this.props.currentrow) {
            this.setState({ newcolor: color })
            if (color !== "gray" && this.state.clicked === false) {
                this.setState({ clicked: true })
                this.props.updatecount()
            }
        }
    }
    render() {
        let currentcolor = this.props.currentcolor
        return (
            <div className="bc" style={{ background: this.state.newcolor }} onClick={this.pressed.bind(this, currentcolor)}> </div>
        )
    }
}
export default Cell