import CountryData from "../CountryData/CountryData";

export default function CountryDetails(props) {
    // const {country,handlerSetVisitedCountry,handlerSetVisitedFlag} =props;
      return (
    <div>
      <h5>Country Details</h5>
      {/* <CountryData
      country={country}
      handlerSetVisitedCountry={handlerSetVisitedCountry}
      handlerSetVisitedFlag={handlerSetVisitedFlag}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  )
}
