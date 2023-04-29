import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";



function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route  path="/home" component={Home} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;

