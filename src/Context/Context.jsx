'use client'

import React, { Children } from 'react';
import {createContext, useState, useEffect} from 'react';

const getBooks = async() => {
    const books = await fetch('/books.json');
    const booksData = await books.json();
    return booksData;
};

export const allContext = createContext();
const Context = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const booksData = await getBooks();
            setBooks(booksData);
        }
        fetchBooks();
    }, []);

    return (
        <allContext.Provider value={{books}}>
            {children}
        </allContext.Provider>
    );
};

export default Context;