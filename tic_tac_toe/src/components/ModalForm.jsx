export default function ModalForm({ onCancel }){
    const onCancelHandler = (event) => onCancel(event);

    return (
        <div className="bg-white rounded p-5 d-flex flex-column">
            <input type="text" placeholder="Type first player name..." className="p-1 form-control"/>
            <div className="container d-flex flex-row align-items-center justify-content-between mt-3">
                <button className="btn btn-success">
                    Save
                </button>
                <button className="btn btn-danger" onClick={onCancelHandler}>
                    Cancel
                </button>
            </div>
        </div>
    );
};