import {useState} from "react";
import './journal.css';
let clName = "defaultBook"


function Journal(props) {
    const { name, author, journal, date, number, journalArray, index, setChanger } = props;
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
            delete journalArray[index];
            clName = "defaultBook"
            setState(!state);
            setChanger();
        }, 500);   
    }
    const setEmpty = (string) => {
        return string === "" ? "Неизвестно" : string;
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${setEmpty(name)}/${setEmpty(author)}; Журнал - ${setEmpty(journal)} от ${setEmpty(date)} № ${setEmpty(number)}`)
    }
    return (
        <div className={clName}>
            <button className="delete" onClick={setActivePanel}></button>
            {delPanel(state)}
            {setEmpty(name)} <br /> <br />
            Автор - {setEmpty(author)} <br /> <br />
            Журнал - {setEmpty(journal)} <br /> <br />
            Дата - {setEmpty(date)} <br /> <br />
            № {setEmpty(number)}
            <button className="copy" onClick={copyToClipboard}>Цитирование</button>
        </div>
    )
}

export default Journal;