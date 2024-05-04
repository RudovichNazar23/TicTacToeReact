import useGameBoardState from "../utils/useGameBoardState";

import FieldCell from "../FieldCell";

export default function GameBoard(){
    const { board, setCellValue, isWon, currentIcon } = useGameBoardState();

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {
                isWon && (<h4 className="p-3">{currentIcon} wins the game!</h4>)
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