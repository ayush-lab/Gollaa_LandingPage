import './App.scss';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/home' component={LandingPage} />
          <Redirect to='/home' component={LandingPage}/>
        </Switch>
    </Router>
  );
}

export default App;