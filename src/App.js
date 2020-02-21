import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
            
              <Link to="/">Home!!!</Link> |
          
              <Link to="/about">About</Link> |
           
              <Link to="/users">Users</Link> |
        
              <Link to="/contact">Contact</Link> |
       
        </nav>
   
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/thank-you">
            <ThankYou />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function ThankYou() {
  return <h2>thanks so much!!!</h2>;
}

export default App;
