import { Modal } from 'flowbite-react';
import { Dispatch, SetStateAction } from 'react'
import AddBook from '../pages/books/components/AddBook';

interface IModalProps {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ModalDialog = ({ isOpen, setIsOpen }: IModalProps) => {

    return (
        <Modal show={isOpen} onClose={() => setIsOpen(false)} className='bg-gray-900'>
            <Modal.Header className='bg-gray-800'>
                <span className='text-white'>Agrega un nuevo libro</span>
            </Modal.Header>

            <Modal.Body className='bg-gray-700'>
            <div className='space-y-6'>
                <AddBook setIsOpen={setIsOpen} />
            </div>
            </Modal.Body>


        </Modal>
  )
}

export default ModalDialog