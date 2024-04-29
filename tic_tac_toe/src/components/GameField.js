import FieldCell from "./FieldCell";
import { useState } from "react";


export default function GameField(){
    const intialFieldState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const [fieldState, setFieldState] = useState(intialFieldState);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {
                fieldState.map(
                    (row) => 
                        <div className="d-flex flex-row align-items-center justify-content-between"
                             key={Math.random() * 10}
                        > 
                            {
                                row.map((cellValue) => <FieldCell value={cellValue} key={Math.random() * 10}/>)
                            } 
                        </div>
                )
            }
        </div>
    );
};