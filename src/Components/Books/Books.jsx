'use client'

import React from 'react';
import { useContext, useState } from 'react';
import { allContext } from '../../Context/Context';
import BooksCard from '../BooksCard/BooksCard';

const categories = [{
    id: 1,
    name: 'All'
}, {
    id: 2,
    name: 'Story'
}, {
    id: 3,
    name: 'Tech'
}, {
    id: 4,
    name: 'Science'
}];

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
                    onChange={(e) => setInputValue(e.target.value)} />

                <button
                    className='btn bg-linear-to-r from-red-500 to-amber-900 text-white p-2 rounded-md shadow-md ml-2'
                    onClick={handelSearch}>
                    Search
                </button>



                <button
                    className='btn bg-linear-to-r from-red-500 to-amber-900 text-white p-2 rounded-md shadow-md ml-2'
                    onClick={() => {
                        setInputValue('');
                        setSearchTerm('');
                    }}>
                    Clear
                </button>
            </div>


            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Mobile toggle */}
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden m-4">
                        Open drawer
                    </label>

                    <div className="grid grid-cols-2 gap-10 mt-5 px-10 mb-15">
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
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-64 p-4">
                        <li className="menu-title text-2xl font-bold bg-linear-to-r from-red-500 to-amber-900 bg-clip-text text-transparent">Categories</li>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <button className='font-bold text-amber-900 hover:text-white hover:bg-linear-to-r from-red-500 to-amber-900 px-3 py-2 rounded-md'>{category.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Books;