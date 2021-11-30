import {useState} from "react"
import SearchForm from '../component/form/searchForm';
import Favourites from '../component/favouritesBlock';
import LineCountFavourites from '../component/lineCounFavorites';
import PathLine from '../component/pathLine';
import Exit from '../component/exit';
import Hotels from '../component/hotels';
import Carousel from '../component/carousel';


const Main = () => {
  const [searchValue, setSearchValue] = useState({
    city: 'Москва',
    checkIn: new Date().toISOString().slice(0, 10),
    countDays: 1,
  });
  
  const handleChange = ({ target }) => {
    setSearchValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <div className="main__page">
      <div className="main__body">
        <div className="main__row">
          <Exit />
        </div>
        <div className="main__row">
          <div className="main__content">
            <div className="main__column-small">
              <div className="small-column__raw column">
                <SearchForm onHandleChange = {handleChange} searchValue={searchValue}/>
              </div>
              <div className="small-column__raw column">
                <Favourites />
              </div>
            </div>
            <div className="main__column-big column">
              <div className="big-column__row">
                <PathLine city = {searchValue.city} date = {searchValue.checkIn} />
              </div>
              <div className="big-column__row">
                <Carousel />
              </div>
              <div className="big-column__row">
                <LineCountFavourites />
              </div>
              <div className="big-column__row">
                <div className="hotels__list">
                  <Hotels />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Main;
