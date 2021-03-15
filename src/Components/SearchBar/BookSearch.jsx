import styles from './BookSearch.module.scss';
import { useState } from "react";  
import axios from 'axios';
import BookList from './../BookList'

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [booksList, setBooksList] = useState([]);
  
  const handleInput = (event) => {
    const query = event.target.value;
    setQuery(query);
  }

  const handleSubmit = (event) => {
    console.log(query);
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=33")
      .then(data => {
        setBooksList(data.data.items);
      });
  }

  return (
  <div>
    <div className={styles.SearchBar}>
      <input className={styles.SearchBar__SearchBox} type="text" name="SearchBar" id="SearchBar" placeholder="Type your search here ..."
      onChange={handleInput} />
      <button type="submit" className={styles.SearchBar__Button}
      onClick={handleSubmit}>
        Submit
      </button>
    </div>

    <div>
        <div>
          <BookList booksList={booksList}/>
        </div>
    </div>
  </div>
  );
}


export default BookSearch;