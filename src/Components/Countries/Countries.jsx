import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";
import './countries.css'
 
 
 export default function Countries() {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries] =useState([]);
    const [visitedFlag,setVisitedFlag]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
        .catch(err =>console.log(err))
    },[]);
    const handlerSetVisitedCountry =country =>{
        // console.log('I am visited of visited button country.')
        const newVisitedCountries =[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    //array add and display with handler button
    const handlerSetVisitedFlag=(flag)=>{
        const newVisitedFlag =[...visitedFlag,flag];
        setVisitedFlag(newVisitedFlag);
        
    }
    //remove item from an array in a state
    //use filter to select all the element except the one you want to remove

   return (
     <div>
       <h3>Countries:{countries.length}</h3>
       <div>
        <h5>Visited Countries:{visitedCountries.length}</h5>
        <ul>
        {
            visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
        }
        </ul>
       </div>
       <div className="flag-container">
        {
          visitedFlag.map((flag,idx) => <img key={idx} src={flag}></img>) //jodi kono full object nh takke tobhe key korar ja koronio.jehetu map korar somoi 3 ta value takke gopone first current value than index then array so unique key hisabhe akhane idx==inedex bosano hoise
        }
       </div>
       <div  className="coutries-container">

       {
        countries.map(country =><Country key={country.cca3} handlerSetVisitedFlag={handlerSetVisitedFlag} handlerSetVisitedCountry={handlerSetVisitedCountry} country ={country}></Country>)
       }
       </div>
     </div>
   )
 }
 