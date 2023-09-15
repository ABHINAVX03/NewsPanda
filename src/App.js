import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const apiKey="6d8d33025e8448ae854c33e52ec90c90"
  const [progress,setProgress]=useState(0)
  const [mode,setmode]=useState('light')
  const [color,setcolor]=useState('dark')
  const [logo,setlogo]=useState('sun')
  const  togglemode = ()=>{
    if(mode==='dark'){
      setmode('light');
      setcolor('dark')
      setlogo('sun');
      document.body.style.backgroundColor="white"
    }
    else{
      setmode('dark');
      setcolor('light')
      setlogo('moon');
      document.body.style.backgroundColor="black"
    }
  }
  return (
      <>
      <div>
      <BrowserRouter>
        <NavBar togglemode={togglemode} logo={logo} mode={mode} color={color}/>
        <LoadingBar color='#f11946' progress={progress}/>
          <Routes>
            <Route exact path="/" element={<News color={color} bgdrill={mode} togglemode={togglemode} setProgress={setProgress} pageSize={6} apiKey={apiKey} country="in" category="general"/>}></Route>
            <Route exact path="business" element={<News color={color} bgdrill={mode} togglemode={togglemode} setProgress={setProgress} pageSize={6} apiKey={apiKey} key="business" country="in" category="business" />}></Route>
            <Route exact path="entertainment" element={<News color={color} bgdrill={mode} togglemode={togglemode} setProgress={setProgress} pageSize={6} apiKey={apiKey} key="entertainment" country="in" category="entertainment"/>}></Route>
            <Route exact path="health" element={<News color={color} bgdrill={mode} togglemode={togglemode} setProgress={setProgress} pageSize={6} apiKey={apiKey} key="health" country="in" category="health"/>}></Route>
            <Route exact path="science" element={<News color={color} bgdrill={mode} togglemode={togglemode} setProgress={setProgress} pageSize={6} apiKey={apiKey} key="science" country="in" category="science"/>}></Route>
            <Route exact path="sports" element={<News color={color} bgdrill={mode} togglemode={togglemode} setProgress={setProgress} pageSize={6} apiKey={apiKey} key="sports" country="in" category="sports"/>}></Route>
            <Route exact path="technology" element={<News color={color} bgdrill={mode} togglemode={togglemode} setProgress={setProgress} pageSize={6} apiKey={apiKey} key="technology" country="in" category="technology"/>}></Route>
          </Routes>
      </BrowserRouter>
      </div>
      </>
    )
}

export default App