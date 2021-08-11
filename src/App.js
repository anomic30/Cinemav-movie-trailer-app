import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
import Footer from "./Footer";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="app">
      <Header setSearchItem={setSearchItem}/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption} searchItem={searchItem} />
      <Footer/>
    </div>
  );
}

export default App;
