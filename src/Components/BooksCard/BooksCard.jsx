import React from 'react';
import Image from 'next/image';

const BooksCard = ({ book }) => {
    return (
        <div className="card card-side bg-base-100 shadow-sm w-auto">
            <figure>
                <Image
                    src="https://picsum.photos/seed/book1/400/600"
                    alt={book.title}
                    width={30}
                    height={20}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;