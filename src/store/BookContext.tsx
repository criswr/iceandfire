import { ReactNode, createContext, useEffect, useState } from 'react';
import { IBooks } from '../types/types';

type Children = {
    children: ReactNode
}

type BookContextType = {
    bookList: IBooks[],
    favBook: (id: number) => void,
    addBook: (book: IBooks) => void,
}

const defaultContext: BookContextType = {
    bookList: [],
    favBook: () => {},
    addBook: () => {}
}

export const BookContext = createContext<BookContextType>(defaultContext)

const BookContextProvider = ({children}:Children) => {

    const [bookList, setBookList] = useState<IBooks[]>([])

    useEffect(() => {
        fetch('https://anapioficeandfire.com/api/books/', { method: 'GET' })
        .then(res => res.json())
        .then(data => setBookList(data))
    }, [])

    const favBook = (id: number): void => {
        id
    }

    const addBook = (newBook: IBooks):void => {
        setBookList([...bookList, newBook])
    }

    return (
        <BookContext.Provider value={{ favBook, bookList, addBook }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider