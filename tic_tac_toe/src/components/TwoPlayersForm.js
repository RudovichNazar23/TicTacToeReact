import { useState } from "react";

import ModalFormContainer from "./ModalFormContainer";
import GameField from "./GameField";

export default function TwoPlayerForm({ onCancel }){
    const [isFormsOpen, setIsFormsOpen] = useState(true);
    const [isGameFieldOpen, setIsGameFieldOpen] = useState(false);


    const onSaveFirstPlayer = (event) => {
        event.preventDefault();
        if(!event.currentTarget.playerName.value) return;
        sessionStorage.setItem("player1", JSON.stringify(event.currentTarget.playerName.value))
        event.currentTarget.playerName.value = "";
        setIsFormsOpen(!isFormsOpen);
    };

    const onSaveSecondPlayer = (event) => {
        event.preventDefault();
        if(!event.currentTarget.playerName.value) return;
        sessionStorage.setItem("player2", JSON.stringify(event.currentTarget.playerName.value));
        setIsGameFieldOpen(true);
    };

    return (
        isGameFieldOpen 
        ? 
            <GameField/> 
        :
        isFormsOpen
        ?
            <ModalFormContainer onCancel={onCancel} 
                                formHeader={"Type the first player username"}
                                onSubmit={onSaveFirstPlayer}
            />
        :
            <ModalFormContainer onCancel={onCancel} 
                                formHeader={"Type the second player username"}
                                onSubmit={onSaveSecondPlayer}
            />
    )
};