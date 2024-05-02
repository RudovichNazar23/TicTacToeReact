import { useState } from "react";

export default function useGameBoardState(){
    const initialBoardState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    const crossIcon = "X";
    const circleIcon = "O";

    const [board, setBoard] = useState(initialBoardState);
    const [currentIcon, setCurrentIcon] = useState(true);

    const setCellValue = (rowIndex, cellIndex) => {
        if (board[rowIndex][cellIndex]) return;
        if(currentIcon){
            board[rowIndex][cellIndex] = crossIcon;
            setCurrentIcon(false);
            setBoard(board);
        }
        else{
            board[rowIndex][cellIndex] = circleIcon;
            setCurrentIcon(true);
            setBoard(board);
        }
    };

    return {board, setCellValue};
};