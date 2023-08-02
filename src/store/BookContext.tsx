import { ReactNode, createContext, useEffect, useState } from 'react';
import { IBooks } from '../types/types';

type Children = {
    children: ReactNode
}

type BookContextType = {
    bookList: IBooks[],
    favBook: (id: string) => void,
    addBook: (book: IBooks) => void,
    currentBook: IBooks | undefined,
    setCurrentBookUrl: (url: string) => void,
    loading: boolean,
    setLoading: (bool: boolean) => void,
}

const defaultContext: BookContextType = {
    bookList: [],
    favBook: () => {},
    addBook: () => {},
    setCurrentBookUrl: () => {},
    currentBook: undefined,
    loading: false,
    setLoading: () => {}
}

export const BookContext = createContext<BookContextType>(defaultContext)

const BookContextProvider = ({children}:Children) => {

    const [bookList, setBookList] = useState<IBooks[]>([])
    const [favorites, setFavorites] = useState<IBooks[]>([])
    const [currentBookUrl, setCurrentBookUrl] = useState<string>()
    const [currentBook, setCurrentBook] = useState<IBooks>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)           
            fetch('https://anapioficeandfire.com/api/books/', { method: 'GET' })
            .then(res => res.json())
            .then(data => setBookList(data))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (currentBookUrl)
            fetch(currentBookUrl, { method: 'GET' })
            .then(res => res.json())
            .then(data => setCurrentBook(data))
            .finally(() => setLoading(false))
    }, [currentBookUrl])
    

    const favBook = (id: string): void => {
        id
    }

    const addBook = (newBook: IBooks): void => {
        setBookList([...bookList, newBook])
    }

    return (
        <BookContext.Provider value={{ favBook, bookList, addBook, currentBook, setCurrentBookUrl, loading, setLoading }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider