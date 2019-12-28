import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom'
import './App.css';

function Home() {
  return <h1>Home</h1>
}

function About( {match}) {
  return <h1>About {match.params.name}</h1>
}

function Contact() {
  return <h1>Contact</h1>
}

function App() {
  return(
      <BrowserRouter>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about/Samuel">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Route exact path="/" component={Home}></Route>
        <Route path="/about/:name" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>

      </BrowserRouter>
  );  
}

export default App;
