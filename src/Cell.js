import React, { Component } from 'react';

class Cell extends Component {
    state = {
        newcolor: this.props.currentcolor,
        clicked: false,
    }
    pressed(color) {
        if (this.props.row === this.props.currentrow) {
            this.setState({ newcolor: color })
            if (color !== "gray") {
                this.props.addcolor(color, this.props.cell - 1)
                if (this.state.clicked === false) {
                    this.setState({ clicked: true })
                    this.props.updatecount();
                }
            }
        }
    }
    render() {
        let currentcolor = this.props.currentcolor
        return (
            <div>
        <div className="choiceBoard"> <div className="bc" style={{ background: `radial-gradient(circle at 50px 50px, #000, ${this.state.newcolor} )`}} onClick={this.pressed.bind(this, currentcolor)}> </div></div>
        </div>
        )
    }
}
export default Cell