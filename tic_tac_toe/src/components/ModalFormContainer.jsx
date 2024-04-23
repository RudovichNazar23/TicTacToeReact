import "../index.css";

import ModalForm from "./ModalForm";

export default function ModalFormContainer({ onCancel, onSubmit, formHeader }){

    return (
        <div className="modal-container">
            <ModalForm onCancel={onCancel} onSubmit={onSubmit} formHeader={formHeader}/>
        </div>
    );
};