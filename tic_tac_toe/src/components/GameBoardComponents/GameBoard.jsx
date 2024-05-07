import useGameBoardState from "../utils/useGameBoardState";

import FieldCell from "../FieldCell";
import ResetBoardContainer from "./ResetBoardContainer";

export default function GameBoard(){
    const { board, setCellValue, isWon, isDraw, currentIcon, resetGameBoard } = useGameBoardState();
    const onClickResetButton = (event) => {
        event.preventDefault();
        resetGameBoard();
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {
                isWon && (
                    <ResetBoardContainer headerContent={`${currentIcon} win the game!!!`} onClick={onClickResetButton} />
                )
            }
            {
                isDraw && (
                    <ResetBoardContainer headerContent={"Draw"} onClick={onClickResetButton}/>
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