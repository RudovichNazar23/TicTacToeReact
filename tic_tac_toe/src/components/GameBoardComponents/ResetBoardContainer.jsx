export default function ResetBoardContainer({ headerContent, onClick }){
    return (
        <div className="d-flex flex-row align-items-center justify-content-between">
                <h4 className="p-3">{headerContent}</h4>
                <div className="">
                    <button className="btn btn-primary" onClick={onClick}>Reset</button>
                </div>
            </div>
    );
};