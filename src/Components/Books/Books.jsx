'use client'

import React from 'react';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';
import BooksCard from '../BooksCard/BooksCard';

const Books = () => {
    const { books } = useContext(allContext);

    return (
        <div>
            {books.map((book) => (
                <BooksCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default Books;