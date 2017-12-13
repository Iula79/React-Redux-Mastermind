import React from 'react';
import Row from './Row';
import Endgame from './Endgame';

export default function Board(props) {

    let firstChoiceArray = []
    for (var k = 0; k < 2; k++) {
        firstChoiceArray.push(<div className="empty" key={"a" + k}></div>)
        for (var j = 0; j < 4; j++) {
            firstChoiceArray.push(
                <div className="choiceBoard top" key={props.colors[j + k * 4]}>
                    <div className="bc choice" style={{ background: `radial-gradient(circle at 50px 50px, #000,${props.colors[j + k * 4]})` }} onClick={props.changeColor.bind(this, props.colors[j + k * 4])}>
                    </div>
                </div>
            )
        }
        firstChoiceArray.push(<div id={"mycell" + k} key={"b" + k} className="choiceBoard top"></div>)
        firstChoiceArray.push(<div key={"c" + k} className="empty"></div>)
    }

    let boardArray = []
    for (var i = 1; i <= 10; i++) {
        boardArray.push(<Row row={i} key={i} renderEnd={props.renderEnd} currentrow={props.currentRow} answer={props.answer} currentcolor={props.currentColor} changeRow={props.changeRow} guessCount={props.guessCount} />)
    }

    return (
        <div className="container">
            <div className="grid"> {firstChoiceArray}</div>
            {boardArray}
        </div>
    );

}
