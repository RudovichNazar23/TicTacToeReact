export default function FieldCell({ intilalValue, rowIndex, cellIndex, setCellValue }){
    const onClick = () => {
        setCellValue(rowIndex, cellIndex);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-5 border border-dark"
             style={{width: "150px", height: "150px", fontSize: "28px"}}
             onClick={onClick}
        >
            {intilalValue}
        </div>
    );
};