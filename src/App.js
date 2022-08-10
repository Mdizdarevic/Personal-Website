import './App.css';
import ReactDOM from "react-dom/client";
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { component } from 'react';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);