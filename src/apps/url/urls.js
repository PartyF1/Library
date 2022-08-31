import Url from "./url"
import AddUrl from "./addUrl"
import { useState } from "react";
const urlArray = [];

function Urls({ setChanger }) {
    const [array, setArray] = useState(urlArray)
    return (
        <div >
            <AddUrl key={urlArray.length}
                urlArray={urlArray}
                setArray={setArray}
                setChanger={() => setChanger()}
                array={array}
            >
            </AddUrl>
            {urlArray.map((element, index) => 
                <Url key={index}
                    name={element.name}
                    url={element.url}
                    setChanger = {()=>setChanger()}
                    urlArray={urlArray}
                    index={index}
                ></Url>
            )}
        </div>
    )
}
export default Urls;