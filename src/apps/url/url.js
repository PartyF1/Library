import { useState } from "react";
import './url.css';
let clName = "defaultBook"

function Url(props) {
    const { name, url, setChanger, urlArray, index } = props;
    const [state, setState] = useState(false)

    const delElem = () => {
        clName = "deleteBook"
        setState(!state);
        setTimeout(() => {
            delete urlArray[index];
            clName = "defaultBook"
            setState(!state);
            setChanger();
        }, 500);   
    }
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
    const setEmpty = (string, defName) => {
        return string === "" ? defName : string;
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${setEmpty(url, "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}`)
    }
    return (
        <div className={clName}>
            <button className="delete" onClick={setActivePanel}></button>
            {delPanel(state)}
            {setEmpty(name, "Без названия")} <br /> <br />
            URL - {setEmpty(url, "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
            <button className="copy" onClick={copyToClipboard}>Копировать URL</button>
        </div>
    )
}

export default Url;