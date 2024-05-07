export default function checkDraw(board){
    for(let row of board){
        if(!row.every((item) => item)){
            return false;
        };
    }
    return true;
};