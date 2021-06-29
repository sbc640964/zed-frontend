import _ from 'lodash';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';
import PaginateItem from "./PaginateItem";

function Pagination (props)
{
    const {
        currentPage,
        totalPages,
        last,
        first,
        nextPage,
        prevPage,
        reset,
        goToPage,
        goEnd,
        setPerPage,
        perPage,
        total,
        format = '4,2,2,4',
    } = props;

    return(
        <div className="flex justify-between mt-8">
            <div className="flex space-s-1 p-3 items-center justify-center">
                <span>Showing {perPage * (currentPage - 1) + 1} - {perPage * currentPage <= total ? perPage * currentPage : total} of {total}</span>
            </div>
            <div className="flex space-s-1 p-3">
                <div className="pe-4 flex space-s-2 justify-center items-center">
                    <span className="text-sm">View on page:</span>
                    <input type="number" className="rounded border-gray-300 p-1 py-0.75 text-sm text-center w-20 focus:border-blue-500" defaultValue={perPage} onBlur={ e => setPerPage(e.target.value)}/>
                </div>
                <PaginateItem cal={prevPage} disabled={first}>
                    <FiChevronLeft/>
                </PaginateItem>
                {Array(totalPages).fill(null).map((v, i) =>(
                    <PaginateItem cal={() => goToPage(i+1)} current={currentPage === i+1}>
                        {i+1}
                    </PaginateItem>
                ))}
                <PaginateItem cal={nextPage} disabled={last}>
                    <FiChevronRight/>
                </PaginateItem>
            </div>
        </div>

    )
}

export default Pagination;