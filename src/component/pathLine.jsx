import dateFormat from 'dateformat';

const PathLine = ({city, date}) => {
  return ( 
    <div className="path">
      <p className="path__text">Отели <span> > </span> {city} </p>
      <p className="path__date">{dateFormat(new Date(date), 'dd mmmm yyyy')} </p>
    </div>
  );
}
export default PathLine;