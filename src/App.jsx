import "./reset.css";
import './fonts.css';
import React from "react";
import router from './helpers/router';
import { RouterProvider } from 'react-router-dom';


function App() {
  return <RouterProvider router = {router} />
}

export default App;

