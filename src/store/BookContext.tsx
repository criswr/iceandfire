import { ReactNode, createContext, useEffect, useState } from 'react';
import { IBooks } from '../types/types';

type Children = {
    children: ReactNode
}

type BookContextType = {
    bookList: IBooks[],
    favBook: (id: string) => void,
    favorites: IBooks[],
    addBook: (book: IBooks) => void,
    currentBook: IBooks | undefined,
    setCurrentBookUrl: (url: string) => void,
    loading: boolean,
    setLoading: (bool: boolean) => void,
    toastOpen: boolean,
    setToastOpen: (bool: boolean) => void,
    formatDate: (date: string|Date) => string
}

const defaultContext: BookContextType = {
    bookList: [],
    favBook: () => {},
    favorites: [],
    addBook: () => {},
    setCurrentBookUrl: () => {},
    currentBook: undefined,
    loading: false,
    setLoading: () => {},
    toastOpen: false,
    setToastOpen: () => {},
    formatDate: () => ''
}

export const BookContext = createContext<BookContextType>(defaultContext)

export const formatDate = (rawDate: string|Date): string => {
    const date = new Date(rawDate)
    const formattedDate = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    return formattedDate
}


const BookContextProvider = ({children}:Children) => {

    const [bookList, setBookList] = useState<IBooks[]>([])
    const [favorites, setFavorites] = useState<IBooks[]>([])
    const [currentBookUrl, setCurrentBookUrl] = useState<string>()
    const [currentBook, setCurrentBook] = useState<IBooks>()
    const [loading, setLoading] = useState<boolean>(false)
    const [toastOpen, setToastOpen] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)

        fetch('https://anapioficeandfire.com/api/books/', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            const newData = data.map((book: IBooks) => ({...book, genere: 'Ciencia ficción', released: formatDate(book.released)}))
            setBookList(newData)
        })
        .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (currentBookUrl)
            fetch(currentBookUrl, { method: 'GET' })
            .then(res => res.json())
            .then(data => setCurrentBook(data))
            .finally(() => setLoading(false))
    }, [currentBookUrl])
    

    const favBook = (url: string): void => {
        fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            if (favorites.some(book => book.url === url)) return
            else setFavorites([...favorites, data])
        })
    }

    const addBook = (newBook: IBooks): void => {
        setBookList([...bookList, newBook])
    }

    return (
        <BookContext.Provider value={{ favBook, favorites, bookList, addBook, currentBook, setCurrentBookUrl, loading, setLoading, toastOpen, setToastOpen, formatDate }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider