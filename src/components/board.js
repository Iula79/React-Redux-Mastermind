import React from 'react';
import Row from '../containers/row';

export default function Board() {
    let boardArray = []
    for (var i = 0; i < 10; i++) {
        boardArray.push(<Row row={i} key={i} />)
    }

    return (
        <div className="container">
            {boardArray}
        </div>
    );
}