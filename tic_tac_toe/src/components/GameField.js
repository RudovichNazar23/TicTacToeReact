import FieldCell from "./FieldCell";
import { useState } from "react";

export default function GameField(){
    const intialFieldState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    const crossIcon = <img src="/close.png" />
    const circleIcon = <img src="/dry-clean.png" />

    const [fieldState, setFieldState] = useState(intialFieldState);
    const [currentIcon, setCurrentIcon] = useState(true);

    const onSetCellValue = (rowIndex, cellIndex) => {
        if (fieldState[rowIndex][cellIndex]) return;
        if(currentIcon){
            fieldState[rowIndex][cellIndex] = crossIcon;
            setCurrentIcon(false);
            setFieldState(fieldState);
        }
        else{
            fieldState[rowIndex][cellIndex] = circleIcon;
            setCurrentIcon(true);
            setFieldState(fieldState);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {
                fieldState.map(
                    (row, rowIndex) => 
                        <div className="d-flex flex-row align-items-center justify-content-between"
                             key={Math.random() * 10}
                        > 
                            {
                                row.map((cellValue, cellIndex) => <FieldCell intilalValue={cellValue} 
                                                                  key={Math.random() * 10}
                                                                  rowIndex={rowIndex}
                                                                  cellIndex={cellIndex}
                                                                  setCellValue={onSetCellValue}
                                                                  
                                                        />
                                )
                            } 
                        </div>
                )
            }
        </div>
    );
};