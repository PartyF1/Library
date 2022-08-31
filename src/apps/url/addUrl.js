import React from "react"

function AddUrl(props) {
    const {urlArray, setArray, setChanger} = props;
    let input1 = React.createRef()
    let input2 = React.createRef()
    
    const setName = () => {
        return input1.current.value;
    }
    const setUrlAdres = () => {
        return input2.current.value;
    }


    const setUrl = () => {
        urlArray.push({
            id: urlArray.length,
            name: input1.current.value,
            url: input2.current.value,
        })      
        setArray(urlArray)
        setChanger();
    }

    return (
            <div>
                <input type="text"
                    placeholder="Название"
                    //defaultValue="Название"
                    onInput={setName}
                    ref = {input1}
                >
                </input>
                <input type="text"
                    placeholder="URL"
                    //defaultValue="Автор"
                    onInput={setUrlAdres}
                    ref = {input2}   
                >
                </input>     
                <button className="addRes" onClick={setUrl}>Добавить Интернет-ссылку</button>  
            </div>  
    )
}

export default AddUrl;