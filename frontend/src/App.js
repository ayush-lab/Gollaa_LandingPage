import './App.scss';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import TodayForTomorrow from './Pages/TodayForTomorrow/TodayForTomorrow';
import TheChange from "./Pages/TheChange/TheChange";
import Blog from "./Pages/Blog/main";
import Terroir from "./Pages/Blog/Terroir/Terroir";
import City from "./Pages/Blog/City/City";


function App() {
  return (
    <Router>
        <Switch>
          <Route path='/today' exact component={TodayForTomorrow} />
          <Route path='/change' exact component={TheChange} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blog/terroir'  component={Terroir} />
          <Route path='/blog/city'  component={City} />
          <Route path='/home' exact component={LandingPage} />
          <Redirect to='/home' component={LandingPage}/>
        </Switch>
    </Router>
  );
}

export default App;