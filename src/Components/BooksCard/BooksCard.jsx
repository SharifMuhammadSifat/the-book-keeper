import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BooksCard = ({ book }) => {
    return (
        <div className="card card-side bg-base-100 shadow-sm w-auto">
            <figure>
                <Image
                    src="https://picsum.photos/seed/book1/400/600"
                    alt={book.title}
                    width={150}
                    height={20}
                    priority
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/books/${book.id}`} className="text-black text-xl font-semibold bg-amber-100 hover:bg-linear-to-r from-red-500 to-amber-900 hover:text-white p-1.5 rounded-sm">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;