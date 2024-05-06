import useGameBoardState from "../utils/useGameBoardState";

import FieldCell from "../FieldCell";

export default function GameBoard(){
    const { board, setCellValue, isWon, currentIcon, resetGameBoard } = useGameBoardState();
    const onClickResetButton = (event) => {
        event.preventDefault();
        resetGameBoard();
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {
                isWon && (
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <h4 className="p-3">{currentIcon} wins the game!</h4>
                            <div className="">
                                <button className="btn btn-primary" onClick={onClickResetButton}>Reset</button>
                            </div>
                        </div>
                )
            }
            {
                board.map(
                    (row, rowIndex) => 
                        <div className="d-flex flex-row align-items-center justify-content-between"
                             key={Math.random() * 10}
                        > 
                            {
                                row.map((cellValue, cellIndex) => <FieldCell 
                                                                    intilalValue={cellValue} 
                                                                    rowIndex={rowIndex} 
                                                                    cellIndex={cellIndex} 
                                                                    key={Math.random() * 100}
                                                                    setCellValue={setCellValue}
                                                                />)
                            } 
                        </div>
                )
            }
        </div>
    );
};