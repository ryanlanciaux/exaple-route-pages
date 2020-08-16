import React from "react";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import "./styles.css";

const Home = () => <h1>Hi from the home page!</h1>;
const About = () => <h1>Hi from about!</h1>;

export const Navigation = ({ onChangeNavigation }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
