    import { useEffect, useState } from "react"
    import { useTable,useGlobalFilter, useSortBy,usePagination } from "react-table"
    import { columns } from "./columns"
    import { Link, useNavigate } from "react-router-dom";

    export default function AdminTable() {
        const [localData, setLocalData] = useState(() => {
            const localDetails = JSON.parse(localStorage.getItem('allData'));
            return localDetails || [];
        });
        const navigate = useNavigate()
        useEffect(() => {
            const localDetails = JSON.parse(localStorage.getItem('allData'));
            // Update localData only if the data from localStorage is different
            if (localDetails && JSON.stringify(localDetails) !== JSON.stringify(localData)) {
            setLocalData(localDetails);
            }
        }, [localData]);

        function handleView(row) {
            const rowData = localData.find(data => data.firstname === row.values.firstname);
            if (rowData) {
              navigate('/details', { state: rowData });
            }
          }
        const { getTableProps,
                getTableBodyProps,
                headerGroups,
                page,
                prepareRow,
                state,
                setGlobalFilter,
                state: {
                    pageIndex,
                    pageSize,
                    
                  },
                nextPage,
                previousPage,
                canPreviousPage,
                canNextPage,
                pageOptions,
               
            } = useTable(
                    { columns: columns,
                        data: localData,
                        initialState:{pageIndex:0,pageSize:3} },
                        useGlobalFilter,
                        useSortBy,
                        usePagination,
                        );
   const  pageCount = Math.ceil(localData.length/pageSize)
 
    

return (
    <div className="d-flex maindiv">
        <div className="p-3 admin subdiv">
            <div className="w-25 panel">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </div>
            <div className="w-100 bg-light">
                <div className=" w-50 mx-auto">
                    {/* global filter */}
                    <input type="text" value={state.globalFilter || ''} onChange={(e)=>{setGlobalFilter(e.target.value)}} placeholder="search here" className="bg-primary bg-opacity-50"></input>

                </div>
                <div className="tablediv d-block">
                    <table {...getTableProps()} >
                        <thead>     
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                         <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                        </th>
                                    ))
                                }
                                <th>View Details</th>

                            </tr>
                        ))
                    }

                        </thead>
                        <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>{
                                    row.cells.map((cell) => {
                                        return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                                    })
                                }
                                    <td>
                                        <button className="btn btn-secondary" onClick={()=>handleView(row)}>view</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                    </table>
                    <div className="bg-light w-50 mx-auto fs-4">
                        <button onClick={()=>previousPage()} disabled={!canPreviousPage} className="btn bg-primary bg-opacity-50 fs-4 mx-2">
                            previous
                        </button>
                        <button onClick={()=>nextPage()} disabled={!canNextPage} className="btn bg-primary bg-opacity-50 fs-4 mx-2">
                            next
                        </button>
                        <span>
                            {pageIndex + 1} of {pageCount}
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
)
    }