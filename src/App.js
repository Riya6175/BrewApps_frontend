import React, {useState, useEffect} from 'react';
// import { useState } from 'react-usestateref'
import Header from "./components/Header/Header" 
import Card from './components/Card/Card';
import axios from 'axios'
import './App.css';

function App() {
  const [carddata, setcarddata] = useState(null)
  const [staticcard, setstaticcard] = useState(null)
  const [filter, setfilter] = useState("none")
  const [sorteddata, setsorteddata] = useState(null) 
  useEffect(() => {
    axios.get(`https://photoapp-be.herokuapp.com/`)
      .then(res => {
        const data = res.data
        // const parseddata = JSON.parse(DataTransferItemList);
        setcarddata(data)
        setstaticcard(data)
      })
  
    return () => {
    }
  },[])

  useEffect(() => {
    var sortdata = staticcard
    if(filter == "24h Trending"){
      sortdata.exhibits.sort((a,b) => b.likes - a.likes)
      setsorteddata(sortdata)
      console.log(sortdata)
    }
    else if(filter == "Latest Shows"){
      sortdata.exhibits.sort((a,b) => b.createdAt._seconds - a.createdAt._seconds )
      setsorteddata(sortdata)
      console.log(sortdata)
    }
    else if(filter == "Most Popular"){
      sortdata.exhibits.sort((a,b) => b.number_of_visits - a.number_of_visits)
      setsorteddata(sortdata)
      console.log(sortdata)
    }
    return () => {
    }
  },[filter])

  useEffect(() => {
    setcarddata(sorteddata)
  }, [sorteddata])
  

  return (
    <div className="App">
      <Header passsetfilter={setfilter}/>
      {/* {filter ? filter : null} */}
      <div className="grid-css">
        {carddata ? carddata.exhibits.map((card)=>(
        <Card props={card}/>
        )) : null}
      </div>
    </div>
  );
}

export default App;
