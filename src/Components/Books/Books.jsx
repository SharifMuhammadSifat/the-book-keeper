'use client'

import React from 'react';
import { useContext, useState } from 'react';
import { allContext } from '../../Context/Context';
import BooksCard from '../BooksCard/BooksCard';


const Books = () => {
    const { books, isLoading } = useContext(allContext);
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedBooks, setSearchedBooks] = useState(books);
    const [isSearching, setIsSearching] = useState(false);
    

    const handelSearch = () => {
        setIsSearching(true);
        setSearchTerm(inputValue);
        setSearchedBooks(books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase())));
        setIsSearching(false);
    }

    return (

        <div>
            <div className='flex justify-center items-center mt-5 p-5 rounded-md shadow-sm'>
                <input 
                    className='border-2 border-gray-200 w-full p-2 rounded-md shadow-md' 
                    placeholder='Search books by title...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>

                <button 
                    className='bg-linear-to-r from-red-500 to-amber-900 text-white p-2 rounded-md shadow-md ml-2'
                    onClick={handelSearch}>
                    Search
                </button>

                <button 
                    className='bg-linear-to-r from-red-500 to-amber-900 text-white p-2 rounded-md shadow-md ml-2'
                    onClick={() => {
                        setInputValue('');
                        setSearchTerm('');
                    }}>
                    Clear
                </button>
            </div>


            <div className="grid grid-cols-2 gap-10 mt-5 px-20 mb-15">
                {isLoading ? (
                    <div className="flex justify-center items-center col-span-2">
                        <span className="loading loading-dots loading-xl"></span>
                    </div>
                ) : searchTerm == "" ? books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase())).map((book) => (
                    <BooksCard key={book.id} book={book} />
                )) : isSearching ? (
                    <div className="flex justify-center items-center col-span-2">
                        <span className="loading loading-dots loading-xl"></span>
                    </div>
                ) : searchedBooks.map((book) => (
                    <BooksCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;