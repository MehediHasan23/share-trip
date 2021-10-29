import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Menubar from './Shared/Menubar/Menubar';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Menubar/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
