import { Modal, Toast } from 'flowbite-react';
import { useContext } from 'react';
import { BookContext } from '../store/BookContext';

interface IToastModal {
    label: string
}

const ToastModal = ({ label }: IToastModal) => {
    const { toastOpen, setToastOpen } = useContext(BookContext)

    return (
        <Modal
            show={toastOpen}
            position='bottom-right'
            onClose={() => setToastOpen(false)}
            size='sm'
            dismissible
            className='bg-transparent'
        ><Modal.Body className='bg-gray-600 rounded-lg p-0 shadow-md'>
            <Toast className='bg-gray-600 w-full pr-0'>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ">
                    ✔️
                </div>
                <div className="ml-3 text-sm font-normal w-full">
                    {label}
                </div>
                <Toast.Toggle className='bg-gray-800' />
            </Toast>
            </Modal.Body>
        </Modal>
    )
}

export default ToastModal