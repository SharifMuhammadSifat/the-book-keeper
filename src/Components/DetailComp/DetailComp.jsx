'use client';

import React from 'react';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';

const DetailComp = ({ bookId }) => {
    const { books } = useContext(allContext);

    const targetedBook = books.find((book) => book.id === Number(bookId));
    console.log(targetedBook);

    return (
        <div>
            {targetedBook && (
                <div>
                    <h2>{targetedBook.title}</h2>
                    <p>{targetedBook.description}</p>
                    <p>Author: {targetedBook.author}</p>
                </div>
            )}
        </div>
    );
};

export default DetailComp;