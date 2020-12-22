
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Info from './Info';
import Home from './Home';
import Tictactoe from './Tictactoe'
import ErrorPage from './ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/Info" component={Info}/>
            <Route path ="/Tictactoe" component={Tictactoe}/>
            <Route path ="/ErrorPage" component={ErrorPage}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
