import {useState} from "react"
import { useSelector } from 'react-redux';
import FilterBtn from './filterBtn'
import _ from 'lodash';
import FavouriteHotelCard from "./favouritesHotelCard";

const Favourites = () => {
  const [sortBy, setSortBy] = useState({ iter: 'stars', order: 'acs' });
  const current_session = useSelector((state) => state.user);
  const bookmarks = current_session.current_user.bookmarks
  const fields = {
    stars: {
      name: 'Рейтинг',
      iter:'stars'
    },
    price: {
      name: "Цена",
      iter: 'priceAvg'
    }
  };
  const handleSort = (item) => {
    setSortBy(item);
  };
  const sortedBookmarks = _.orderBy(bookmarks, [sortBy.iter], [sortBy.order]);
  return (
    <div className="favorites">
      <h1 className="favorites__title">Избраное</h1>
      <div className="favorites__sorting">
        <FilterBtn name_btn="Рейтинг" field={fields.stars} currentSort={sortBy} onSort={handleSort}/>
        <FilterBtn name_btn="Рейтинг" field={fields.price} currentSort={sortBy} onSort={handleSort}/>
      </div>
      {sortedBookmarks &&
        sortedBookmarks.map((hotel) => {
          return <FavouriteHotelCard hotel={hotel} />;
        })}
    </div>
  );
};

export default Favourites;
