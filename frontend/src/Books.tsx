import { Book } from './App'
import BookItem from './BookItem'


type Props = {
    books: Book[]
  }

const Books = ({ books }: Props) => {
    return (
         <div className='books-container'>
            {books.map((book) => {
            return <BookItem book= {book}/>
         })}
         </div>
    )
}
   
  export default Books