import {useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from "react"
import { logIn } from '../redux/action';
import Form from './form'
import * as Yup from 'yup';

const Authentication = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });
  const [inputValue, setInputValue] = useState({password: "", email:""})
  const [error, setError] = useState(null)
  const history = useHistory();
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.user.isLogin);
  const handleChange = ({ target }) => {
    setInputValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (error === null) {
      dispatch(logIn(inputValue))
    }
  }
  useEffect(()=> {
    validationSchema
      .validate(inputValue)
      .then(() => {
        setError(null);
      })
      .catch((error) => setError({ [error.path]: error.message }));
  }, [inputValue])

  useEffect(()=>{
    if(error !== null){
      setError(error)
    }else{
      setError(null)
    }
  }, [error])
  isLogin && history.push("main")
  return (
    <div className="authentication">
      <h1 className="authentication__title">Simple Hotel Check</h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} error = {error}/>
    </div>
  );
}

export default Authentication;