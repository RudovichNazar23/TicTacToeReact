import HomePageHeader from "./HomePageComponents/HomePageHeader";
import HomePageIcon from "./HomePageComponents/HomePageIcon";
import HomePageButton from "./HomePageComponents/HomePageButton";


export default function HomePageContainer(){
    return (
        <>
            <HomePageHeader />
            <HomePageIcon />
            <div className="container d-flex flex-row justify-content-between p-3 m-auto ">
                <HomePageButton buttonContent={"Play with friend"} />
                <HomePageButton buttonContent={"Play with Computer"} />
            </div>
        </>
    );
};