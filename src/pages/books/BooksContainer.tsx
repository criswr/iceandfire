import { useContext, useMemo, useState } from 'react'
import MainContainer from '../../components/MainContainer'
import { IBooks } from '../../types/types'
import { ColumnDef} from '@tanstack/react-table';
import BooksTable from '../../components/BooksTable';
import { BookContext } from '../../store/BookContext';
import Modal from '../../components/Modal';
import { Button } from 'flowbite-react';

const BooksContainer = () => {
    const { bookList } = useContext(BookContext)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    
    const data = useMemo<IBooks[]>(() => bookList, [bookList])

    const columns = useMemo<ColumnDef<IBooks>[]>(() => [
        {
            header: 'Nombre',
            accessorKey: 'name'
        },
        {
            header: 'Autor',
            accessorKey: 'authors'
        },
        {
            header: 'Fecha',
            accessorKey: 'released'
        },
        {
            header: 'Género',
            accessorKey: 'genere'
        }
    ], [])

    return (
        <MainContainer title='Libros'>
            {
                bookList.length &&
                <div className='flex flex-col gap-5'>
                    <BooksTable data={data} columns={columns} />
                    <Button onClick={() => setModalOpen(true)}>Agregar nuevo libro</Button>
                    <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
                </div>
            }
        </MainContainer>
    )
}

export default BooksContainer