import {  useSelector } from 'react-redux';
import Hotel from './hotel'


const Hotels = () => {
  const hotels = useSelector((state) => state.hotels.hotels);
  return (
    <>
      {hotels && hotels.map(hotel => {
      return <Hotel hotel={hotel} key={hotel.hotelId} />})}
    </>
  );
}

export default Hotels;