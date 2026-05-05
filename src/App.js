import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const MyContext = React.createContext();
function App() {

  const[countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry("https://restcountries.com/v3.1/all?fields=name,flags");
  },[]);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      {/*console.log(response.data[0].name.common);*/}
      setCountryList(response.data);

    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  const values = {
    countryList,
  }

  return (
    <BrowserRouter>
   <MyContext.Provider value={values}>
    <Header/>
      <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };