
import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetails';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="Content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Create">
            <Create></Create>
          </Route>
          <Route path="/Blogs/:id">
            <Blogdetails></Blogdetails>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
