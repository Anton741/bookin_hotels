import {useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from "react"
import { logIn } from '../redux/action';
import LoginForm from './form/loginForm';
import Errors from './erorrs'
import * as Yup from 'yup';

const Login = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Обязательно для заполнения')
      .min(6, 'Пароль должен содержать не менее 8 символов'),
      // .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одно число.')
      // .matches(/(?=.*[!@#$%^&*])/, 'Пароль должен содержать хотя бы один спецсимвол .'),
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
      {isLogin === false && <Errors error={"Неправильный логин или пароль"} />}
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} error = {error}/>
    </div>
  );
}

export default Login;