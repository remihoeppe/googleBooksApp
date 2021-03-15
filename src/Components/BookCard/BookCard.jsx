import styles from "./BookCard.module.scss";

const BookCard = ({bookInfo}) => {
  const book = bookInfo;

  return (
    
     <div className={styles.Card}>
        <img className={styles.Card__BookCover} src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ""} alt={'No cover picture availble'}/>
        <div className={styles.Card__Content}>
          <div className={styles.Card__Content_info}>
          <h2>{book.volumeInfo.title}</h2>
          <h3>{book.volumeInfo.authors}</h3>
          </div>
          <p className={styles.Card__Content_desc}>{book.volumeInfo.description}</p>
        </div>
    </div>

  )};

  export default BookCard;