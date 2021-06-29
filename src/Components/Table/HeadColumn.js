import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import {useState} from "react";

function HeadColumn(props)
{
    const {
        col,
        sortedRows
    } = props;

    const [orderBy, setOrderBy] = useState(0);

    const orderOptions = ['asc', 'desc'];

    const sortRows = () => {
        if(col.sortable){
            sortedRows(col.selector, orderOptions[orderBy]);
            setOrderBy( v => Number(!v));
        }
    }

    return(
        <div className={`group flex w-full text-sm items-center space-s-2 justify-${col.align ?? (col.type === 'active' ? 'center' : 'start')}`}  onClick={sortRows}>
            <span className={col.sortable ? 'cursor-pointer hover:text-gray-500' : ''}>{col.label}</span>
            {col.sortable &&
            <span className={col.sortable ? 'cursor-pointer hover:text-gray-500' : ''}>
                {orderOptions[orderBy] === 'asc'
                    ? <FiChevronDown/>
                    : <FiChevronUp/>
                }
            </span>
            }
        </div>
    )
}

export default HeadColumn;