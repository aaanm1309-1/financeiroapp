// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'


function App() {
  return (
    // <div className="App">
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/">
            <Home/>
          </Route> */}

        </Switch>

      </Router>
      
      
    </div>
  );
}

export default App;
