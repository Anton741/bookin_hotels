// import dateFormat from 'dateformat';
import { translateDate } from '../utils/transformDate';
import { useSelector } from 'react-redux';

const PathLine = () => {
  const city =  useSelector((state) => state.hotels.city);
  const checkIn = useSelector((state) => state.hotels.checkIn);
  return ( 
    <div className="path">
      <p className="path__text">Отели <span> > </span> {city} </p>
      <p className="path__date">{translateDate(checkIn)}</p>
    </div>
  );
}
export default PathLine;