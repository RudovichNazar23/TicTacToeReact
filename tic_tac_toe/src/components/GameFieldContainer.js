import GameField from "./GameField";
import GameFieldFooter from "./GameFieldFooter";

export default function GameFieldContainer(){
    const player1 = JSON.parse(sessionStorage.getItem("player1"));
    const player2 = JSON.parse(sessionStorage.getItem("player2"));

    const onEndGameSession = (event) => {
        event.preventDefault();
        sessionStorage.clear();
        window.location.reload();
    };

    return (
        <div className="">
            <button className="btn btn-primary m-4" 
                    onClick={onEndGameSession}
            >
                End game session
            </button>
            <GameField />
            <GameFieldFooter player1={player1} player2={player2} />
        </div>
    );
};

