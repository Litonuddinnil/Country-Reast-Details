
export default function CountryData({country,handlerSetVisitedCountry,handlerSetVisitedFlag}) {
    console.log('Inside the log',country,handlerSetVisitedCountry,handlerSetVisitedFlag);
  return (
    <div>
          <p>
      <small>
        Country Name: {country?.name?.common ? country.name.common : 'Unknown'}
      </small>
    </p>

       
    </div>
  )
}
