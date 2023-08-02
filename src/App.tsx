import BookContextProvider from './store/BookContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BooksContainer from './pages/books/BooksContainer'

function App(): JSX.Element {

  return (
    <BookContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<BooksContainer />} />
        </Routes>
      </BrowserRouter>
    </BookContextProvider>
  )
}

export default App
