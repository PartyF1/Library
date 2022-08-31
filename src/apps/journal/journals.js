import Journal from "./journal"
import AddJournal from "./addJournal";
import {useState} from "react";
const journalArray = [];

function Journals({setChanger}) {
    const [array, setArray] = useState(journalArray)
    return (
        <div >
            <AddJournal key={journalArray.length}
                journalArray={journalArray}
                setArray={setArray}
                setChanger = {()=>setChanger()}
                array={array}
            ></AddJournal>
            {journalArray.map((element, index) => 
                <Journal key={index}
                name={element.name}
                author={element.author}
                journal={element.journal}
                date={element.date}
                number={element.number}
                journalArray={journalArray}
                index={index}
                setChanger = {()=>setChanger()}
                ></Journal>
            )}
        </div>
    )
}
export default Journals;