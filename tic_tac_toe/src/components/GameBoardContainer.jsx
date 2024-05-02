import GameBoard from "./GameBoardComponents/GameBoard";
import GameBoardFooter from "./GameBoardComponents/GameBoardFooter";

export default function GameBoardContainer(){
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
            <GameBoard />
            <GameBoardFooter player1={player1} player2={player2} />
        </div>
    );
};

