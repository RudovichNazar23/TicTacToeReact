export default function GameField(){
    const player1 = JSON.parse(sessionStorage.getItem("player1"));
    const player2 = JSON.parse(sessionStorage.getItem("player2"));

    return (
        <div className="">
            {player1}
                :
            {player2}
        </div>
    );
};

