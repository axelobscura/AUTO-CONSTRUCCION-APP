import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount(){
    const urlLocal = 'https://cors-anywhere.herokuapp.com/http://www.auto-construccion.com/api/users.php';
    //const urlProd = '/api/users.php';
      const url = urlLocal;
      axios.get(url)
        .then(response => response.data)
        .then((data) => {
          this.setState({contacts: data});
          console.log(this.state.contacts);
        });
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <nav>
          <ul>
            <li>
              <Link to="/app/">Home</Link>
            </li>
            <li>
              <Link to="/app/about/">About</Link>
            </li>
            <li>
              <Link to="/app/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/app/" exact component={Index} />
        <Route path="/app/about/" component={About} />
        <Route path="/app/users/" component={Users} />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
