import { useState } from "react";

export default function FieldCell({ value }){
    const [fieldValue, setFieldValue] = useState(value);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-5 border">
            {fieldValue}
        </div>
    );
};