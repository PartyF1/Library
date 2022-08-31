import { useState } from "react";
import Book from "./book"
import AddBook from "./addBook";
const bookArray = [];

function Books({setChanger}) {
    const [array, setArray] = useState(bookArray)
    return (
        <div>
            <AddBook key={bookArray.length}
                bookArray={bookArray}
                setArray={setArray}
                setChanger = {()=>setChanger()}
                array={array}
            >
            </AddBook>
            {bookArray.map((element, index) => 
                <Book key={index}
                name={element.name}
                author={element.author}
                year={element.year}
                publisher={element.publisher}
                pages={element.pages}
                bookArray={bookArray}
                index={index}
                setChanger = {()=>setChanger()}
                >
                </Book>
            )}
        </div>
    )
}
export default Books;
