import { Route, Switch} from 'react-router-dom';
import Main from './pages/main'
import Login from './pages/login'
import './component/style.scss';


export default function App( ) {
  return (
    // <Login/>
    <Switch>
      <Route path="/main" component={Main}></Route>
      <Route path="/" component={Login}></Route>
      {/* {data.formIsValid && <Redirect to = '/main'/>} */}
    </Switch>
  );
}

