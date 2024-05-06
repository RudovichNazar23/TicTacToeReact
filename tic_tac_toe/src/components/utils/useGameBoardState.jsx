import { useState } from "react";
import checkWinner from "./checkWinner";


export default function useGameBoardState(){
    const initialBoardState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    const crossIcon = "X";
    const circleIcon = "O";

    const [board, setBoard] = useState(initialBoardState);
    const [currentIcon, setCurrentIcon] = useState(crossIcon);
    const [isWon, setIsWon] = useState(false);

    const setCellValue = (rowIndex, cellIndex) => {
        if (board[rowIndex][cellIndex] || isWon) return;
        if(currentIcon === crossIcon){
            board[rowIndex][cellIndex] = crossIcon;
            setBoard(board);
            if(checkWinner(board)) setIsWon(true);
            else setCurrentIcon(circleIcon);
        }
        else{
            board[rowIndex][cellIndex] = circleIcon;
            setBoard(board);
            if(checkWinner(board)) setIsWon(true);
            else setCurrentIcon(crossIcon);
        }
    };

    const resetGameBoard = () => {
        setBoard(initialBoardState);
        setIsWon(false);
    };

    return {board, setCellValue, isWon, currentIcon, resetGameBoard};
};