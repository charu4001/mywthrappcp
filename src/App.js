
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Info from './Info';
import Home from './Home';
import Tictactoe from './Tictactoe'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/Info" component={Info}/>
            <Route path ="/Tictactoe" component={Tictactoe}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
