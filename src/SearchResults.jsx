import styles from './styles/searchResults.scss';

const SearchResults = (props) => {
  return (
    <ul>
      { props.countries.map((country) => 
        <li key={country.alpha2Code}>
          <div className="countryImg">
            <img src={country.flags.svg} alt={country.name + ' flag'} />
          </div>
          <p className="countryName">{country.name}</p>
          <p className="countryDetails"><strong>Capital:</strong> {country.capital}
          <br /><strong>Languages:</strong> {country.languages.map((language) => language.name).join(', ')}
          <br /><strong>Population:</strong> {country.population}</p>
        </li>
      )}
    </ul>
  )
};

export default SearchResults;
