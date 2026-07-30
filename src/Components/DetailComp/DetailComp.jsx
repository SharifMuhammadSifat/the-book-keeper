'use client';

import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';
import { toast } from 'react-toastify';

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
        <div className="flex flex-col items-center justify-center">
            {targetedBook && (
                <div className="flex justify-center gap-8 my-10 mx-20 p-5 rounded-md shadow-sm bg-amber-50 w-fit">
                    <Image className='flex items-center' src={targetedBook.image_url} alt={targetedBook.title} width={400} height={200} />
                    <div className="flex flex-col gap-4 mt-4">
                        <h2 className="text-2xl font-bold mb-2">{targetedBook.title}</h2>
                        <p className="text-gray-700 mb-2 font-semibold max-w-md">{targetedBook.description}</p>
                        <p className="text-gray-600 mb-2 font-semibold">Author: {targetedBook.author}</p>
                        <p className="text-amber-600 font-semibold">Available Quantity: {targetedBook.available_quantity}</p>
                        <button className=" btn bg-linear-to-r from-red-500 to-amber-900 text-white p-2 rounded-md shadow-md mt-4" onClick={() => toast.info("Book borrowed successfully!")}>
                            Borrow This Book
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailComp;