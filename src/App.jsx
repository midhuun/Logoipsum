import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Solutions from './Components/JoinUs';
import Navbar from './Components/Navbar';
import Features from './Features';
import Footer from './Components/Footer';
import User from './User';
import { UserContext } from './Components/UserContext';
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
          <Home />
        </div>
        <Solutions />
        <Features />
        <Footer />
        <Link to="/user">Show User</Link>
      </div>
      <Routes>
        <Route path='/user' element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
