import styles from './styles/header.scss';

const Header = (props) => {
  return (
    <header>
      <h1>World countries data</h1>
      <p>Currently, we have {props.numberOfCountries} countries.</p>
    </header>
  )
};

export default Header;
