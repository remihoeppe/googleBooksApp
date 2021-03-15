import styles from "./BookList.module.scss";
import BookCard from "../BookCard"



const BookList = ({booksList}) => {

  return (
  <div className={styles.GridContainer}>
    {booksList.map((book, index) => (
    <>
    <BookCard key={index} bookInfo={book}/>
    </>
    ))};
  </div>
  )};




export default BookList;