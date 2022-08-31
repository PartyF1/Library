import React from "react"

function AddJournal(props) {
    const {journalArray, setArray, setChanger} = props;
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
    const setJournal= () => {
        return input3.current.value;
    }
    const setDate= () => {
        return input4.current.value;
    }
    const setNumber= () => {
        return input5.current.value;
    }

    const setArticle = () => {
        journalArray.push({
            id: journalArray.length,
            name: input1.current.value,
            author: input2.current.value,
            journal: input3.current.value,
            date: input4.current.value,
            number: input5.current.value
        })      
        setArray(journalArray)
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
                    placeholder="Автор"
                    //defaultValue="Автор"
                    onInput={setAuthor}
                    ref = {input2}   
                >
                </input>
                <input type="text"
                    placeholder="Журнал"
                    //defaultValue="Год"
                    onInput={setJournal}
                    ref = {input3}
                >
                </input>     
                <input type="text"
                    placeholder="Дата"
                    //defaultValue="Год"
                    onInput={setDate}
                    ref = {input4}
                >
                </input>     
                <input type="text"
                    placeholder="Номер"
                    //defaultValue="Год"
                    onInput={setNumber}
                    ref = {input5}
                >
                </input>     
                <button className="addRes" onClick={setArticle}>Добавить статью</button>  
            </div>  
    )
}

export default AddJournal;