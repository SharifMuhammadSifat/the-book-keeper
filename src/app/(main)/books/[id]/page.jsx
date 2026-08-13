import React from 'react';
import DetailComp from '../../../Components/DetailComp/DetailComp';

const BookDetail = async ( {params} ) => {

    const {id} = await params;

    return (
        <div>
            <DetailComp bookId={Number(id)} />
        </div>
    );
};

export default BookDetail;