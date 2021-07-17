import Test from "./Test";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Post from "./Post";
import reduce from "./reducers"
import {createStore} from "redux"
import './App.css';
const store = createStore(reduce)
function App() {
  return (
    <Router>
    <div className="App">
      {store.getState()}
     <Navbar />
    </div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/test" component={Test} />
    <Route path="/:id" component={Post} />
    </Router>
  );
}

export default App;
