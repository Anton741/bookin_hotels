import {  useDispatch } from 'react-redux';
import {useState, useEffect} from "react"
import { searchHotels } from '../redux/action';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState({
    city: 'Москва',
    checkIn: new Date().toISOString().slice(0, 10),
    countDays: 1,
  });
  useEffect(() =>  dispatch(searchHotels(searchValue)), []);
  
  const handleChange = ({target}) => {
    setSearchValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchHotels(searchValue));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__body">
        <div className="login__input-login"></div>
        <label htmlFor="#city" className = 'login__lable'>Локация</label>
        <input
          type="text"
          name="city"
          id="city"
          className="login__input "
          value = {searchValue.city}
          // placeholder={parametrs.city}
          onChange={handleChange}
        />
        <label htmlFor="#date" className = 'login__lable'>Дата заселения</label>
        <input
          type="date"
          name="checkIn"
          id="id"
          className="login__input"
          value={searchValue.checkIn}
          onChange={handleChange}
        />
        <label htmlFor="#days" className = 'login__lable'>Количиство дней</label>
        <input
          type="text"
          name="countDays"
          id = "days"
          className="login__input"
          value={searchValue.countDays}
          onChange={handleChange}
        />
        <input type="submit" className="login__btn" value="Поиск" />
      </div>
    </form>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     parametrs: state.searchHotel.searchParametrs,
//   };
// };

// const mapDispatchToProps = {
//   searchHotel,
// };

export default SearchForm; 
