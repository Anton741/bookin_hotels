import Errors from '../erorrs'
import TextField from './textField';
const LoginForm = ({handleSubmit, handleChange, error}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__body">
        <div className="login__input-login"></div>
        <TextField
          classLable={
            error
              ? error.email
                ? 'login__lable  alert'
                : 'login__lable '
              : 'login__lable'
          }
          classInput={
            error
              ? error.email
                ? 'login__input  alert'
                : 'login__input '
              : 'login__input'
          }
          name="email"
          placeholder="Username"
          onChange={handleChange}
          lable="Логин"
          type="text"
        />
        <TextField
          classLable={
            error
              ? error.password
                ? 'login__lable  alert'
                : 'login__lable '
              : 'login__lable'
          }
          classInput={
            error
              ? error.password
                ? 'login__input  alert'
                : 'login__input '
              : 'login__input'
          }
          name="password"
          placeholder="Password"
          onChange={handleChange}
          lable="Пароль"
          type="password"
        />
        {error ? error.password && <Errors error={error.password} /> : null}
        <input type="submit" className="login__btn" value="Войти" />
      </div>
    </form>
  );
}
export default LoginForm;