import { useContext, useEffect } from 'react';
import MainContainer from '../../components/MainContainer';
import { BookContext } from '../../store/BookContext';
import book from '../../assets/book.svg'
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {

    const {currentBook, loading} = useContext(BookContext)
    const navigate = useNavigate()

    useEffect(() => {
        !currentBook && !loading && navigate('/')
    }, [currentBook, loading])
    

    return (
        <MainContainer title={currentBook && currentBook.name || ''}>
            <div className='flex gap-5'>
                <section className='w-1/4 p-5'>
                    <img src={book} alt='Book' />
                </section>

                <section className='w-3/4 p-5 text-xl'>
                    {currentBook &&
                    <div className=''>
                        <p className='py-4 border-b border-gray-700'>Título: {currentBook.name}</p>
                        <p className='py-4 border-b border-gray-700'>Autor: {currentBook.authors}</p>
                        <p className='py-4 border-b border-gray-700'>ISBN: {currentBook.isbn}</p>
                        <p className='py-4 border-b border-gray-700'>Número de páginas: {currentBook.numberOfPages}</p>
                        <p className='py-4 border-b border-gray-700'>País: {currentBook.country}</p>
                        <p className='py-4 border-b border-gray-700'>Acabado: {currentBook.mediaType}</p>
                        <p className='py-4'>Fecha de publicación: {currentBook.released.toString()}</p>
                    </div>
                    }
                </section>
            </div>
        </MainContainer>
    )
}

export default BookDetails