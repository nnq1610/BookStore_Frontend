import React from "react";
import BookProps from "./components/BookProps";
import Book from "../../models/Book";

const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: "Book 1",
            description: 'sách này đọc rất hay',
            originalPrice:24000,
            price: 4000,
            imageUrl: './../../images/books/1.png'
        },
        {
            id: 1,
            title: "Book 1",
            description: 'sách này đọc rất hay',
            originalPrice:24000,
            price: 4000,
            imageUrl: './../../images/books/1.png'
        },
        {
            id: 1,
            title: "Book 1",
            description: 'sách này đọc rất hay',
            originalPrice:24000,
            price: 4000,
            imageUrl: './../../images/books/1.png'
        }               
    ]

    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map((book) => (
                        <BookProps key={book.id} book={book} />

                    )

                    )
                }

            </div>

        </div>

    );

}
export default List;