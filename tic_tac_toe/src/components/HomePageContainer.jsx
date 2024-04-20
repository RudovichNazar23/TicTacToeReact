import { useState } from "react";

import HomePageHeader from "./HomePageComponents/HomePageHeader";
import HomePageIcon from "./HomePageComponents/HomePageIcon";
import HomePageButton from "./HomePageComponents/HomePageButton";
import ModalFormContainer from "./ModalFormContainer";


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
                    <ModalFormContainer onCancel={onPlayWithFriend}/>
                ) 
                : 
                (
                    <>
                        <HomePageHeader />
                        <HomePageIcon />
                        <div className="container d-flex flex-row justify-content-between p-3 m-auto ">
                            <HomePageButton buttonContent={"Play with friend"} onClick={onPlayWithFriend}/>
                            <HomePageButton buttonContent={"Play with Computer"} />
                        </div>
                    </>
                )
            }
        </>
    );
};