import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';

const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadCountries = async () => {
      const response = await axios.get('https://restcountries.com/v2/all')
        .then(response => response.data)
        .then(data => setCountries(data))
    }
    loadCountries().then(() => {
      const searchDetails = countries.map((country) => country.name)
      console.log(searchDetails);
    });
  }, []);
  return (
    <main>
      {countries &&
        <Header numberOfCountries={countries.length} />
      }
      <Search />
      {countries &&
        <SearchResults countries={countries} />
      }
      </main>
  )
};

export default App;
