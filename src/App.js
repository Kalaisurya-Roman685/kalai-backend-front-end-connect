import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Create from "./components/Home/components/create/Create";
import Edit from "./components/Home/components/edit/Edit";
import Profile from "./components/profile/Profile";
import Signup from "./components/signup/Signup";



function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/create/:id" component={Create} />
                    <Route path="/profile" component={Profile}/>
                    <Route path="/signup" component={Signup}/>


                    {/* <Route path="/edit/:id" component={Edit} /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;

