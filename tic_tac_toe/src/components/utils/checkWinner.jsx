export default function checkWinner(board){
    const checkRows = () => {
        if(checkEvery(board[0])) return board[0];
        if(checkEvery(board[1])) return board[1];
        if(checkEvery(board[2])) return board[2];
    };

    const checkColumns = () => {
        const firstColumn = [board[0][0], board[1][0], board[2][0]];
        const secondColumn = [board[0][1], board[1][1], board[2][1]];
        const thirdColumn = [board[0][2], board[1][2], board[2][2]];

        if(checkEvery(firstColumn)) return firstColumn;
        if(checkEvery(secondColumn)) return secondColumn;
        if(checkEvery(thirdColumn)) return thirdColumn;
    };

    const checkCross = () => {
        const firstCross = [board[0][0], board[1][1], board[2][2]];
        const secondCross = [board[0][2], board[1][1], board[2][0]];

        if(checkEvery(firstCross)) return firstCross;
        if(checkEvery(secondCross)) return secondCross;
    };

    return checkRows() || checkColumns() || checkCross();
};


const checkEvery = (array) => array.every((item) => item && item === array[0]);
