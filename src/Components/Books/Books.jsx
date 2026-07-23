'use client'

import React from 'react';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';
import BooksCard from '../BooksCard/BooksCard';

const Books = () => {
    const { books } = useContext(allContext);

    return (

        <div>
            <div>
                <input className='border-2 border-gray-200'></input>
            </div>


            <div className="grid grid-cols-2 gap-10 mt-5 px-20 mb-15">
                {books.map((book) => (
                    <BooksCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;