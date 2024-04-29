export default function FieldCell({ intilalValue, rowIndex, cellIndex, setCellValue}){
    const onClick = (event) => {
        setCellValue(rowIndex, cellIndex);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-5 border"
             style={{width: "150px", height: "150px"}}
             onClick={onClick}
        >
            {intilalValue}
        </div>
    );
};