import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import Filter from './components/Filter';
import CountryList from './components/CountryList';

const App = () => {  
  const [countries, setCountries] = useState([])  
  const [newFilter, setNewFilter] = useState("")
  const [countriesToShow, setCountriesToShow] = useState([]);
 
  useEffect(() => {    
    axios.get("https://restcountries.com/v3.1/all").then( (response) => setCountries(response.data))  }, [])  
  
  const handleNewFilter = (event) =>  
  { setNewFilter(event.target.value)
    setCountriesToShow( countries.filter((c) => c.name.common.toLowerCase().includes(newFilter.toLowerCase())));  
  }
  
  if (countriesToShow.length <= 10 && countriesToShow.length > 0)  {
  return (
    <div>
      <Filter   searchOn={newFilter} handler={handleNewFilter}> </Filter>
      <CountryList countries={countriesToShow} setCountry={setCountriesToShow}></CountryList>
    </div> 
  )}
  else { 
  return(<>
      <Filter   searchOn={newFilter} handler={handleNewFilter}> </Filter>
      <h2>Too many countries. Specify another filter</h2></>)}
}
export default App;
