import { useState } from "react";

import HomePageHeader from "./HomePageComponents/HomePageHeader";
import HomePageIcon from "./HomePageComponents/HomePageIcon";
import HomePageButton from "./HomePageComponents/HomePageButton";
import TwoPlayerForm from "./TwoPlayersForm";


export default function HomePageContainer(){
    const [isOpen, setIsOpen] = useState(false);

    const onPlayWithFriend = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <>
            {
                isOpen ? 
                (
                    <TwoPlayerForm onCancel={onPlayWithFriend} />
                ) 
                : 
                (
                    <>
                        <HomePageHeader />
                        <HomePageIcon />
                        <div className="container d-flex flex-row justify-content-center p-3 m-auto ">
                            <HomePageButton buttonContent={"Play with friend"} onClick={onPlayWithFriend}/>
                        </div>
                    </>
                )
            }
        </>
    );
};