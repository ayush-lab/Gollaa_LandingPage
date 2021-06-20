import './App.scss';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import TodayForTomorrow from './Pages/TodayForTomorrow/TodayForTomorrow';
import TheChange from "./Pages/TheChange/TheChange";

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/home/today' exact component={TodayForTomorrow} />
          <Route path='/home/change' exact component={TheChange} />
          <Route path='/home' component={LandingPage} />
          <Redirect to='/home' component={LandingPage}/>
        </Switch>
    </Router>
  );
}

export default App;