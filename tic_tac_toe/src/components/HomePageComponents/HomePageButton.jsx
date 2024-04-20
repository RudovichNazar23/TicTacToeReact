export default function HomePageButton({ buttonContent, onClick }){
    const onClickHandler = (event) => onClick(event);

    return (
        <div className="d-flex flex-column align-content-center jusitfy-content-center p-3 m-3 ">
            <button className="btn btn-success m-3" onClick={onClickHandler}>{buttonContent}</button>
        </div>
    );
};