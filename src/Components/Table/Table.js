import HeadTable from "./headTable";
import Row from "./Row";
import {useState} from "react";
import _ from 'lodash';
import usePaginate from "../../Uses/usePaginte";
import Loafing from "../Loadings";
import Pagination from "./pagination";

function Table(props)
{
    const {
        rowsUrl,
        columns,
        options,
    } = props;

    const [rows, setRows] = useState(props.rows);

    const [selectedRows, setSelectedRows] = useState([]);

    const sortedRows = (selector, orderBy) =>
    {
        setRows(_.orderBy(rows, selector, orderBy));
    }

    const paginate = usePaginate({data: rows, perPage: options.perPage ?? 25});

    const rowsSelected = {
        addSelectedRows: (row) =>
        {
            selectedRows.push(row);
            setSelectedRows([...selectedRows]);
        },

        removeSelectedRows: (row) =>
        {
            setSelectedRows(_.filter(selectedRows, v => v.id !== row.id));
        },

        isSelected: (row) =>
        {
            return _.find(selectedRows, {id: row.id}) !== undefined;
        },

        selectAll: () =>
        {
            selectedRows.push(...paginate.rows)
            setSelectedRows([...selectedRows])
        },

        removeAll: () => {
            //setSelectedRows(_.filter(selectedRows, v => todo:......... ));
        }
    }

    return(
        <div>
            {!options.hiddenTableHead &&
                <HeadTable
                    columns={columns}
                    options={options}
                    sortedRows={sortedRows}
                    rowsSelected={rowsSelected}
                />
            }
            {paginate.rows ?
                paginate.rows.map((row, index) => (
                    <Row
                        columns={columns}
                        row={row}
                        globalOptions={options}
                        key={index}
                        rowsSelected={rowsSelected}
                    />
                )) :
                <Loafing.Table/>
            }
            {paginate.totalPages > 1 &&
                <Pagination {...paginate}/>
            }
        </div>
    );
}

export default Table;