import React from "react"

function AddBook(props) {
    const { bookArray, setArray, setChanger } = props;
    let input1 = React.createRef()
    let input2 = React.createRef()
    let input3 = React.createRef()
    let input4 = React.createRef()
    let input5 = React.createRef()

    const setName = () => {
        return input1.current.value;
    }
    const setAuthor = () => {
        return input2.current.value;
    }
    const setYear = () => {
        return input3.current.value;
    }
    const setPublisher = () => {
        return input4.current.value;
    }
    const setPages = () => {
        return input5.current.value;
    }

    const setBook = () => {
        bookArray.push({
            id: bookArray.length,
            name: input1.current.value,
            author: input2.current.value,
            year: input3.current.value,
            publisher: input4.current.value,
            pages: input5.current.value
        })
        setArray(bookArray)
        setChanger();
    }

    return (
        <div>
            <input type="text"
                placeholder="Название"
                onInput={setName}
                ref={input1}
            >
            </input>
            <input type="text"
                placeholder="Автор"
                onInput={setAuthor}
                ref={input2}
            >
            </input>
            <input type="text"
                placeholder="Издатель"
                onInput={setPublisher}
                ref={input4}
            >
            </input>
            <input type="text"
                placeholder="Год"
                onInput={setYear}
                ref={input3}
            >
            </input>
            <input type="text"
                placeholder="Кол-во страниц"
                onInput={setPages}
                ref={input5}
            >
            </input>
            <button className="addRes" onClick={setBook}>Добавить книгу</button>
        </div>
    )
}

export default AddBook;