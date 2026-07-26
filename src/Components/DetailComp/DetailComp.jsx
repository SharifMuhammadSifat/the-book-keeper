'use client';

import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';

// {
//     "id": 1,
//     "title": "The Lost Kingdom",
//     "author": "Emma Carter",
//     "description": "An adventurous tale of a young explorer uncovering the secrets of a forgotten kingdom.",
//     "category": "Story",
//     "available_quantity": 12,
//     "image_url": "https://picsum.photos/seed/book1/400/600"
//   },

// Visuals: Large Book Cover on the left, text/details on the right.
// Info: Title, Author, Description, and Available Quantity (e.g., "5 copies left").
// The Action Button:
// "Borrow This Book" Button:
// If Logged Out: Redirects to the Login page.
// Show a confirmation toast.


const DetailComp = ({ bookId }) => {
    const { books } = useContext(allContext);

    const targetedBook = books.find((book) => book.id === Number(bookId));
    console.log(targetedBook);

    return (
        <div>
            {targetedBook && (
                <div className="flex items-center justify-between my-10 mx-20 p-5 rounded-md shadow-sm bg-amber-50">
                    <div>
                        <Image src={targetedBook.image_url} alt={targetedBook.title} width={400} height={600} />
                    </div>
                        <div>
                            <h2>{targetedBook.title}</h2>
                            <p>{targetedBook.description}</p>
                            <p>Author: {targetedBook.author}</p>
                            <p>Available Quantity: {targetedBook.available_quantity}</p>
                        </div>
                    </div>
            )}
                </div>
            );
};

            export default DetailComp;