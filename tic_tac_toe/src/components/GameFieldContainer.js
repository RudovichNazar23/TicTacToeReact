import GameField from "./GameField";
import GameFieldFooter from "./GameFieldFooter";

export default function GameFieldContainer(){
    const player1 = JSON.parse(sessionStorage.getItem("player1"));
    const player2 = JSON.parse(sessionStorage.getItem("player2"));

    return (
        <div className="">
            <button className="btn btn-primary m-4">
                End game session
            </button>
            <GameField />
            <GameFieldFooter player1={player1} player2={player2} />
        </div>
    );
};

