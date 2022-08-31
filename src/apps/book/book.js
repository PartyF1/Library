import { useState } from "react";
import './book.css';
let clName = "defaultBook"


function Book(props) {
    const { name, author, year, setChanger, publisher, pages, bookArray, index } = props;
    const [state, setState] = useState(false)

    

    const setActivePanel = () => {
        setState(!state);
    }

    const delPanel = (state) => {
        if (state) {
            return (
                <div className="delPanel">
                    Удалить элемент? <br />
                    <button className="addRes" onClick={delElem}>Удалить</button>
                    <button className="addRes" onClick={setActivePanel}>Отмена</button>
                </div>
            );
        }
    }
    const delElem = () => {
        clName = "deleteBook"
        setState(!state);
        setTimeout(() => {
            delete bookArray[index];
            clName = "defaultBook"
            setState(!state);
            setChanger();
        }, 500);   
    }
    const setEmpty = (string, defName) => {
        return string === "" ? defName : string;
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${setEmpty(name, "Без названия")}/${setEmpty(author, "Неизвестен")}; Издательство - ${setEmpty(publisher, "Неизвестно")}, ${setEmpty(year, "Неизвестен")}. - ${setEmpty(pages, "--")} стр.`)
    }
    return (
        <div className={clName}>
            <button className="delete" onClick={setActivePanel}></button>
            {delPanel(state)}
            {setEmpty(name, "Без названия")} <br /> <br />
            Автор - {setEmpty(author, "Неизвестен")} <br /> <br />
            Издательство - {setEmpty(publisher, "Неизвестно")} <br /> <br />
            Год выпуска - {setEmpty(year, "Неизвестен")} <br /> <br />
            {setEmpty(pages, "--")} стр.
            <button className="copy" onClick={copyToClipboard}>Цитирование</button>
        </div>
    )
}

export default Book;