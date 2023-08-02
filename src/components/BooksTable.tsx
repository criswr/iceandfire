import { useState } from 'react';
import { getCoreRowModel, useReactTable, flexRender, ColumnDef, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { TextInput, Table } from 'flowbite-react';

interface IReactTableProps<T extends object> {
  data: T[],
  columns: ColumnDef<T>[]
}

type ColumnSort = {
  id: string
  desc: boolean
}

type SortingState = ColumnSort[]

const BooksTable = <T extends object>({ data, columns }: IReactTableProps<T>) => {

  const defaultGenere = 'Ciencia ficción'

  const [sorting, setSorting] = useState<SortingState>([])
  const [filtering, setFiltering] = useState<string>('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    state:{
      sorting: sorting,
      globalFilter: filtering
    }
  })

  return(
    <div>
      <div>
        <TextInput
          id="search"
          placeholder="Buscar..."
          type="text"
          value={filtering} 
          onChange={ e => setFiltering(e.target.value)}
          className='w-1/2 pb-5'
        />
      </div>

      <Table>
        {table.getHeaderGroups().map(headerGroup => (
          <Table.Head key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.HeadCell key={header.id} onClick={header.column.getToggleSortingHandler()} className='bg-gray-700 text-base cursor-pointer'>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </Table.HeadCell>
            ))}
          </Table.Head>
        ))}

        <Table.Body className="divide-y">
          {table.getRowModel().rows.map(row => (
            <Table.Row key={row.id} className='bg-gray-800'>
              {row.getVisibleCells().map(cell => (
                <Table.Cell className='whitespace-nowrap font-light text-base' key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {!cell.renderValue() && defaultGenere}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
} 

export default BooksTable