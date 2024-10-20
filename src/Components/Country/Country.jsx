import { useState } from 'react';
import './country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
export default function Country({country,handlerSetVisitedCountry,handlerSetVisitedFlag}) {
    const {name,flags,population,area,cca3}=country;
    // console.log(country);
    const[visited,setVisited]=useState(false);
    const handlerClickButton =() =>{
        setVisited(!visited);
    }
    // console.log(handlerSetVisitedCountry)
  return (
    <div className={`box ${visited ?'visited':'non-visited'}`}>
        <img src={flags.png} alt="" />
      <h3>Name:{name?.common}</h3>
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>Code:{cca3}</p>
      <button onClick={()=>handlerSetVisitedCountry(country)}>Mark Visited</button>
      <br />
      <br />
      <button onClick={()=>handlerSetVisitedFlag(country.flags.png)}>Add Flag</button>
      <br />
      <br />
      <button onClick={handlerClickButton}>{visited?'Visited':'Going'}</button>
      {visited&& 
      'I am visited of this country.'}
      <hr />
      <CountryDetails
      country={country}
    handlerSetVisitedCountry={handlerSetVisitedCountry}
    handlerSetVisitedFlag ={handlerSetVisitedFlag}
      ></CountryDetails>
    </div>
  )
}
