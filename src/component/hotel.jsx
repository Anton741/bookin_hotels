import { useDispatch, useSelector } from 'react-redux';
import {clickOnFavourites} from '../redux/action'
import dateFormat from 'dateformat';
import {nounDays} from '../utils/nounWithNumber'
import imgPath from '../assets/house.svg';
import HotelRate from './hotelRate';
import Bookmarks from './addBookmarkBtn';

const Hotel = ({ hotel }) => {
  const dispatch = useDispatch()
  const countDays = useSelector((state) => state.hotels.countDays);
  const checkIn = useSelector((state) => state.hotels.checkIn);
  const onBookmark = (hotel) => {
    const favourite_hotel = { hotelId: hotel.hotelId,
                                          hotelName: hotel.hotelName,
                                          location: hotel.location,
                                          priceAvg: hotel.priceAvg,
                                          stars: hotel.stars,
                                          countDays: countDays,
                                          }
    dispatch(clickOnFavourites(favourite_hotel))
  };
  return (
    <div className="hotel__card">
      <div className="hotel__column">
        <div className="hotel__image">
          <img src={imgPath} alt="hotels_picture" />
        </div>
      </div>
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
        <Bookmarks onBookmark={onBookmark} hotel={hotel} />
        <div className="hotel__price">
          <span className="price">Price: </span>
          {Math.round(Number(hotel.priceAvg))} ₽
        </div>
      </div>
    </div>
  );
};

export default Hotel;
