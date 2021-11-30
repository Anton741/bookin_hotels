const TextField = ({classLable, classInput, name,value, placeholder, onChange, lable, type}) => {
  return ( 
    <>
      <label htmlFor={`#${name}`} className={classLable}> {lable}</label>
      <input type={type} name={name} id= {name} className= {classInput} placeholder={placeholder} onChange={onChange} />
    </>
  );
}
export default TextField;
