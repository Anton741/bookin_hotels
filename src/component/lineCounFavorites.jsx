import {useSelector} from 'react-redux'
import {nounHotels} from "../utils/nounWithNumber"

const LineCountFavourites = () => {
  const current_session = useSelector((state) => state.user);
  const bookmarks = current_session.current_user.bookmarks;
  return bookmarks.length > 0 ? <p className = 'favorites_line'>Добавлено в Избранное: <b> {bookmarks.length} </b>{nounHotels(bookmarks.length)}</p> : <p className = 'favorites_line'>Cписок Избраное пуст</p>
}
export default LineCountFavourites;