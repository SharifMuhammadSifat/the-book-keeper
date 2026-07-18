'use client'

import React from 'react';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';

const Books = () => {
    const { books } = useContext(allContext);

    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
    );
};

export default Books;