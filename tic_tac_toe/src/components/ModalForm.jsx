export default function ModalForm({ onCancel, onSubmit, formHeader }){
    const onCancelHandler = (event) => onCancel(event);
    const onSubmitHandler = (event) => onSubmit(event);

    return (
        <div className="bg-white rounded p-5 d-flex flex-column">
            <h4>{formHeader ? formHeader : "Type username"}</h4>
            <hr />
            <form onSubmit={onSubmitHandler}>
                <input type="text" 
                       placeholder="Type username..." 
                       className="p-1 form-control"
                       id="playerName"
                />
                <hr />
                <div className="container d-flex flex-row align-items-center justify-content-between mt-3">
                    <button className="btn btn-success">
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={onCancelHandler}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};