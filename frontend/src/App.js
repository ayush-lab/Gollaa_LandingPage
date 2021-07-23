import './App.scss';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import TodayForTomorrow from './Pages/TodayForTomorrow/TodayForTomorrow';
import TheChange from "./Pages/TheChange/TheChange";
import Blog from "./Pages/Blog/main";
import Terroir from "./Pages/Blog/Terroir/Terroir";
import City from "./Pages/Blog/City/City";
import Currency from "./Pages/Blog/Currency/Currency";
import Stories from "./Pages/Stories/Story";
import AboutUs from './Pages/AbousUs/AboutUs';
import  ScrollToTop from './Utility/Scroll';

function App() {
  return (
    <Router>
     <ScrollToTop />
        <Switch>
          <Route path='/today' exact component={TodayForTomorrow} />
          <Route path='/change' exact component={TheChange} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blog/terroir'  component={Terroir} />
          <Route path='/blog/city'  component={City} />
          <Route path='/blog/currency'  component={Currency} />

          <Route path='/stories' exact component={Stories} />
          <Route path='/aboutus' exact component={AboutUs} />

          <Route path='/home' exact component={LandingPage} />
          <Redirect to='/home' component={LandingPage}/>
        </Switch>
    </Router>
  );
}

export default App;