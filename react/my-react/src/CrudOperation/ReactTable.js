import React, { useEffect, useState, useRef } from 'react';
import { useTable,useGlobalFilter, useSortBy,usePagination } from "react-table"
import { columns } from './columns';
import { useLocation,useNavigate } from 'react-router-dom';




const ReactTable = () => {
    const [details,setDetails] = useState([])
    const location = useLocation()
    const data = location.state;

    useEffect(()=>{
        setDetails(data)
    },[])

    const navigate = useNavigate()

    function handleEdit(row){
        navigate('/',{state:row.original})
    }
    function handleDelete(row){
       const filterdItems =  details.filter((data)=>data.id!=row.original.id)
       setDetails(filterdItems) 
       fetch(`https://reqres.in/api/users/${row.original.id}`,{
        method:'DELETE',
       })
       .then(data=>console.log(data)) 
    }
    function handleView(row){
        navigate('/viewDetails',{state:{userData:row.original,allData:details}})
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
                data: details,
                initialState:{pageIndex:0,pageSize:3} },
                useGlobalFilter,
                useSortBy,
                usePagination,
                );
const  pageCount = Math.ceil(data.length/pageSize)
  return (
     <div className='tablediv'>
        <div className=" w-100 mx-auto">
            {/* global filter */}
            <input type="text" value={state.globalFilter || ''} onChange={(e)=>{setGlobalFilter(e.target.value)}} placeholder="search here" className="bg-primary bg-opacity-50"></input>
        </div>
         <table {...getTableProps()} className='w-100' >
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
                                <th>Edit</th>
                                <th>Delete</th>

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
                                        <button className="btn bg-primary bg-opacity-50 text-light" onClick={()=>handleView(row)}>view</button>
                                    </td>
                                    <td>
                                        <button className="btn bg-primary bg-opacity-50 text-light" onClick={()=>handleEdit(row)}>edit</button>
                                    </td>
                                    <td>
                                        <button className="btn bg-primary bg-opacity-50 text-light" onClick={()=>handleDelete(row)} >delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                    </table>
                    <div className="bg-light w-50 mx-auto fs-4 text-light">
                        <button onClick={()=>previousPage()} disabled={!canPreviousPage} className="btn bg-primary bg-opacity-50 fs-4 mx-2">
                            previous
                        </button>
                        <button onClick={()=>nextPage()} disabled={!canNextPage} className="btn bg-primary bg-opacity-50 fs-4 mx-2">
                            next
                        </button>
                        <span className='badge text-primary'>
                            {pageIndex + 1} of {pageCount}
                        </span>
                    </div>
    </div>

  )
}

export default ReactTable