import React from 'react';

export default function Endgame(props) {
    let content = {
        true: {
            description: "CONGRATULATIOS, YOU WON!"
        },
        false: {
            description: "SORRY YOU LOST"
        }
    }
    
    return (
        <div className="modal endgame">
            <h2>{content[props.win].description}</h2>
            <p>   HERE IS THE SECRET CODE</p>
            <div className="outer"><div className="answer"> {props.answer.map((color, i) => {
               return <div className="bc" key={color + i} style={{ background: `radial-gradient(circle at 50px 50px, #000,${color}` }}></div>
            })}</div></div>
            <button className="reset">RESET GAME</button>
        </div>

    )
}