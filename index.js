import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Frineds from "./friends.js"
import Counter from "./counter"
import AllShows from "./shows/allShows"
import SelectShow from "./shows/SelectShow"
// ReactDOM.render(<h1>hello world!</h1>, document.getElementById('root'));
// ReactDOM.render(<Fun name="mk"/>, document.getElementById('root'));
// ReactDOM.render(<Frineds/>, document.getElementById('root'));
// ReactDOM.render(<Counter/>, document.getElementById('root'));
// ReactDOM.render(<AllShows />, document.getElementById('root'));
// ReactDOM.render(<SelectShow />, document.getElementById('root'));


//routing a library used to create routing in react app
const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/Friends">Friends</Link>
                </li>
                <li>
                    <Link to="/Counter">Counter (state)</Link>
                </li>

                <li>
                    <Link to="/shows/allShows">All shows (styling)</Link>
                </li>
                <li>
                    <Link to="/shows/SelectShow">select shows (hooks,event listeners)</Link>
                </li>

            </ul>
            <Route exact path="/Friends" component={Frineds} />
            <Route exact path="/Counter" component={Counter} />
            <Route path="/shows/allShows" component={AllShows} />
            <Route path="/shows/SelectShow" component={SelectShow} />

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
