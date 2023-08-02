import BookContextProvider from './store/BookContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BooksContainer from './pages/books/BooksContainer'
import Favorites from './pages/favorites/Favorites'
import BookDetails from './pages/book/BookDetails'

function App(): JSX.Element {

  return (
    <BookContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<BooksContainer />} />
            <Route path={'/favoritos'} element={<Favorites />} />
            <Route path={'/libro'} element={<BookDetails />} />
          </Routes>
      </BrowserRouter>
    </BookContextProvider>
  )
}

export default App
