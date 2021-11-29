import axios from "axios";

export async function loadCity({city, checkIn, countDays}){
    let checkOut = new Date(checkIn)
    checkOut.setDate(checkOut.getDate() + Number(countDays));
    checkOut = checkOut.toISOString().slice(0,10)
    const { data } = await axios.get(`http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=100`);
    return data;
}

