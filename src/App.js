import styles from './App.module.scss';
import BookSearch from './Components/SearchBar';


const App = () => {

  return (
    <div className={styles.App}>
      <div>
      <BookSearch />
      </div>
    </div>
  );
}

export default App;
