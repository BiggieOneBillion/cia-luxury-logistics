import React from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const TablePagination = (props) => {
    const {table} = props
  return (
    <div className="space-y-3 flex justify-between items-center">
      <div className="paginationBtns space-x-2 flex justify-start">
        <button disabled={!table.getCanPreviousPage()} onClick={()=> table.setPageIndex(0)} className="disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200 py-2 px-3 border border-gray-500 rounded-md text-sm text-subText capitalize">
          first
        </button>
        <button disabled={!table.getCanPreviousPage()} onClick={()=> table.previousPage() } className="disabled:bg-gray-100 disabled:text-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed py-2 px-3 border border-gray-500 rounded-md text-lg text-subText capitalize">
          <GrFormPrevious />
        </button>
        <button disabled={!table.getCanNextPage()} onClick={()=> table.nextPage()} className="disabled:bg-gray-100 disabled:text-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed py-2 px-3 border  border-gray-500 rounded-md text-lg text-subText capitalize">
          <GrFormNext />
        </button>
        <button disabled={!table.getCanNextPage()} onClick={()=> table.setPageIndex(table.getPageCount() - 1)} className="disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200 py-2 px-3 border border-gray-500 rounded-md text-sm text-subText capitalize">
          Last
        </button>
      </div>
      <div className="noOfPages">
        <p className="text-sm"> You are on page: {table.options.state.pagination.pageIndex + 1}</p>
        <p className="text-sm text-slate-400">Total pages : {table.getPageCount()} page(s)</p>
      </div>
    </div>
  )
}

export default TablePagination
