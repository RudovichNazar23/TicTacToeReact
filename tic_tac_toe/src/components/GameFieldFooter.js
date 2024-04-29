import { useState } from "react";

export default function GameFieldFooter({ player1, player2 }){
    const intialGameScore = {};

    intialGameScore[player1] = 0;
    intialGameScore[player2] = 0;

    const [gameScore, setGameScore] = useState(intialGameScore);

    return (
        <div className="d-flex flex-row align-items-center justify-content-between p-5 m-5">
            <div className="d-flex flex-column m-5 p-5">
                <h4 className="text-center">
                    {player1}
                </h4>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    {gameScore[player1]}
                </div>
            </div>
            <div className="d-flex flex-column m-5 p-5">
                <h4 className="text-center">
                    {player2}
                </h4>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    {gameScore[player2]}
                </div>
            </div>
        </div>
    );
};