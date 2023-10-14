import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import User from './User';
import { UserContext } from './Components/UserContext';
import Footer from './Components/Footer';
function App() {
  const {data,setData,searchValue,results,setResults} = useContext(UserContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/1cdb3f27-a842-4b01-84e8-3348cd26b6d2');
        const data = await response.json();
        setData(data);
        const names = data?.filter((e) => {
          return e.name.includes(searchValue);
        });
        setResults(names)
        console.log(results);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(results);
    fetchData();
  }, [searchValue]);

  return (
    <Router>
      <div className='container'>
        <div className='home'>
          <Navbar /> 
        </div>
      </div>
      <Routes>
        <Route path='/user' element={<User />} />
        <Route path='/' element={<Landing/>} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
