import "../index.css";

import ModalForm from "./ModalForm";

export default function ModalFormContainer({ onCancel }){

    return (
        <div className="modal-container">
            <ModalForm onCancel={onCancel} />
        </div>
    );
};