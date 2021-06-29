import Checkbox from "../Forms/Checkbox";
import HeadColumn from "./HeadColumn";

function HeadTable(props)
{
    const {
        options,
        columns,
        sortedRows,
        rowsSelected
    } = props;

    const handleChange = (e) => {
        if(e.target.checked){
            return rowsSelected.selectAll();
        }
        rowsSelected.removeAll()
    }

    return (
        <div className="flex space-s-4 font-medium py-2 border-b-2 px-7">
            {options.selectedRows && !options.disableSelectAllRows &&
                <div className="pe-3 flex justify-center items-center">
                    <Checkbox onChange={handleChange}/>
                </div>
            }
            {columns.map( (col, index) => (
                <HeadColumn col={col} key={index} sortedRows={sortedRows}/>
            ))}
        </div>
    )
}

export default HeadTable;