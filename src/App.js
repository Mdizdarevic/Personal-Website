import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router';
import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {

  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Navbar auth={auth1}/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/service" Component={Services} />
        <Route exact path="/contact" Component={Contact} />
        <Protectedroute exact path="/login" Component={Login} auth={auth1}/>
        <Protectedroute exact path="/register" Component={Register} auth={auth1}/>
        <Protectedroute exact path="/dashboard" Component={Dashboard} auth={auth}/>
        <Protectedroute exact path="/logout" Component={Logout} auth={auth}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
