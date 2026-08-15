'use client'

import React from 'react';
import { createContext, useState, useEffect } from 'react';



const getBooks = async () => {
    const books = await fetch('/books.json');
    const booksData = await books.json();
    return booksData;
};

export const allContext = createContext();
const Context = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            const booksData = await getBooks();
            setBooks(booksData);
            setIsLoading(false);
        }
        fetchBooks();
    }, []);

    return (
        <allContext.Provider value={{ books, isLoading }}>
            {children}
        </allContext.Provider>
    );
};

export default Context;