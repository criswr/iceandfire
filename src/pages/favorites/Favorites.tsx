import { useContext } from 'react'
import MainContainer from '../../components/MainContainer'
import { BookContext } from '../../store/BookContext'

const Favorites = () => {
  const { favorites } = useContext(BookContext)
    return (
      <MainContainer title='Favoritos'>
        {
          favorites.length ?
          <ul className='list-disc pl-10 pt-5'>
            { 
              favorites.map(book => (
                <li className='text-xl mb-5'>{book.name} <span className='italic text-gray-500'>{book.authors}, {book.numberOfPages} páginas</span></li>
              ))
            }
          </ul> :
          <h2>No hay favoritos aún...</h2>
        }
      </MainContainer>
    )
}

export default Favorites