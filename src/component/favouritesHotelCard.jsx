import { useDispatch, useSelector } from 'react-redux';
import {clickOnFavourites} from '../redux/action'
import dateFormat from 'dateformat';
import {nounDays} from '../utils/nounWithNumber'
import HotelRate from './hotelRate';
import Bookmarks from './addBookmarkBtn';

const FavouriteHotelCard = ({hotel}) => {
  const dispatch = useDispatch()
  const countDays = useSelector((state) => state.hotels.countDays);
  const checkIn = useSelector((state) => state.hotels.checkIn);
  return (
    <div className="hotel__card hotel__card-favourites">
      <div className="hotel__column hotel__column-big">
        <div className="hotel__name">{hotel.hotelName}</div>
        <div className="hotel__date">
          {dateFormat(new Date(checkIn), 'dd mmmm, yyyy')} -{' '}
          <span className="hotel__days">
            {hotel?.countDays ? nounDays(hotel.countDays) : nounDays(countDays)}
          </span>
        </div>
        <HotelRate rate={Number(hotel.stars)} />
      </div>
      <div className="hotel__column">
        <Bookmarks
          onBookmark={() => dispatch(clickOnFavourites(hotel))}
          hotel={hotel}
        />
        <div className="hotel__price">
          <span className="price">Price: </span>
          {Math.round(Number(hotel.priceAvg))} ₽
        </div>
      </div>
    </div>
  );
}
export default FavouriteHotelCard;