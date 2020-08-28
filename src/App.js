import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Blog from './components/Blog/Blog'; 
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin';
import Register from './components/Admin/register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/admin" component={Admin} />
              <Route path="/account/register" component={Register} />
              

          </Switch>
          <Footer />
        </div>
    </Router>
  );
}



export default App;
