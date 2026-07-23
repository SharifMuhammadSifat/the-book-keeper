"use client";

import React from 'react';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';
import BooksCard from '../BooksCard/BooksCard';



const FeaturedBooks = () => {

    const { books } = useContext(allContext);

    return (
        <div className="grid grid-cols-2 gap-3 mt-8">
            {books.slice(0, 4).map((book, index) => (
                <BooksCard key={index} book={book} />
            ))}
        </div>
    );
};

export default FeaturedBooks;