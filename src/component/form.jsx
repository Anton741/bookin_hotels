import Errors from './erorrs'
const Form = ({handleSubmit, handleChange, error}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__body">
        <div className="login__input-login"></div>
        <label
          htmlFor="#email"
          className={
            error
              ? error.email
                ? 'login__lable  alert'
                : 'login__lable '
              : 'login__lable'
          }
        >
          Логин
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={
            error
              ? error.email
                ? 'login__input  login__input-alert'
                : 'login__input '
              : 'login__input'
          }
          placeholder="Username"
          onChange={handleChange}
        />
        {error ? error.email && <Errors error={error.email} /> : null}
        <label
          htmlFor="#password"
          className={
            error
              ? error.password
                ? 'login__lable  login__lable-alert'
                : 'login__lable '
              : 'login__lable'
          }
        >
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={
            error
              ? error.password
                ? 'login__input  login__input-alert'
                : 'login__input '
              : 'login__input'
          }
          placeholder="Password"
          onChange={handleChange}
        />
        {error ? error.password && <Errors error={error.password} /> : null}
        <input type="submit" className="login__btn" value="Войти" />
      </div>
    </form>
  );
}
export default Form;