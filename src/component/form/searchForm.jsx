import {  useDispatch } from 'react-redux';
import { useEffect} from "react"
import { searchHotels} from '../../redux/action';
import TextField  from './textField';

const SearchForm = ({onHandleChange, searchValue}) => {
  const dispatch = useDispatch();
  useEffect(() =>  dispatch(searchHotels(searchValue)), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchHotels(searchValue));
    
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__body">
        <div className="login__input-login"></div>
        <TextField
          classLable={'login__lable'}
          classInput={'login__input'}
          name="city"
          value={searchValue.city}
          onChange={(e) => onHandleChange(e)}
          lable=" Локация"
          type="text"
        />
        <TextField
          classLable={'login__lable'}
          classInput={'login__input'}
          name="checkIn"
          value={searchValue.checkIn}
          onChange={(e) => onHandleChange(e)}
          lable=" Дата заселения"
          type="date"
        />
        <TextField
          classLable={'login__lable'}
          classInput={'login__input'}
          name="countDays"
          value={searchValue.countDays}
          onChange={(e) => onHandleChange(e)}
          lable="Количиство дней"
          type="text"
        />
        <input type="submit" className="login__btn" value="Поиск" />
      </div>
    </form>
  );
};

export default SearchForm; 
