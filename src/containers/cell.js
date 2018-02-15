import React, { Component } from 'react';

class Cell extends Component {

    render() {
        return (
            <div>
                <div className="choiceBoard"> <div className="bc" style={{ background: `radial-gradient(circle at 50px 50px, #000, gray)` }}> </div></div>
            </div>
        )
    }
}
export default Cell