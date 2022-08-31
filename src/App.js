import { useState } from "react";
import Header from './apps/Header'
import './App.css';
import Urls from './apps/url/urls';
import Journals from './apps/journal/journals';
import Books from './apps/book/books';
//import Button from './apps/button';


function App() {
  const [activeButton, setActiveButton] = useState("books");
  var [changer, setChanger] = useState(false)
  return (
    <div className='App'>
      <Header
        key={activeButton}
        activeButton={activeButton}
        setActiveButton={(name) => setActiveButton(name)}
      >
      </Header>
      {activeButton === "books" ?
      <Books setChanger = {() => {setChanger(!changer)}}></Books> :
      activeButton === "journals" ?
      <Journals setChanger = {() => {setChanger(!changer)}}></Journals> :
      activeButton === "urls" ?
      <Urls setChanger = {() => {setChanger(!changer)}}></Urls> : {}
      }
    </div>
  )
}

export default App;
