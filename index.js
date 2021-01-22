import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Fun from './fun'
// import Frineds from "./friends.js"
// import Counter from "./counter"
// import AllShows from "./shows/allShows"
// import SelectShow from "./shows/SelectShow"
// import Signup from "./forms/Signup"
import MainPage from './Context/MainPage'
// import CountContainer from './reduxPractice/CountCotainer'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reduxPractice/countReducer'

// import UserAuthContailer from './user authentication/UserAuthContainer'
// import userAuthReducer from './user authentication/userAuthReducer'

// ReactDOM.render(<h1>hello world!</h1>, document.getElementById('root'));
// ReactDOM.render(<Fun name="mk"/>, document.getElementById('root'));
// ReactDOM.render(<Frineds/>, document.getElementById('root'));
// ReactDOM.render(<Counter/>, document.getElementById('root'));
// ReactDOM.render(<AllShows />, document.getElementById('root'));
// ReactDOM.render(<SelectShow />, document.getElementById('root'));
ReactDOM.render(<MainPage/>, document.getElementById('root'));


//routing a library used to create routing in react app
// const routing = (
//     <Router>
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/Friends">Friends</Link>
//                 </li>
//                 <li>
//                     <Link to="/Counter">Counter (state)</Link>
//                 </li>

//                 <li>
//                     <Link to="/shows/allShows">All shows (styling)</Link>
//                 </li>
//                 <li>
//                     <Link to="/shows/SelectShow">select shows (hooks,event listeners)</Link>
//                 </li>
//                 <li>
//                     <Link to="/forms/Signup">signup (forms,event listeners)</Link>
//                 </li>
//             </ul>
//             <switch>
//                 <Route exact path="/Friends" component={Frineds} />
//                 <Route exact path="/Counter" component={Counter} />
//                 <Route path="/shows/allShows" component={AllShows} />
//                 <Route path="/shows/SelectShow" component={SelectShow} />
//                 <Route path="/forms/Signup" component={Signup} />
//             </switch>
//         </div>
//     </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'));


//=====================================REDUX=============================

//store
// const store = createStore(reducer);

// ReactDOM.render(
//     <Provider store={store}>
//         <CountContainer />
//     </Provider>
//     , document.getElementById('root'));
    
// const userAuthStore=createStore(userAuthReducer);
// ReactDOM.render(<Provider store={userAuthStore}><UserAuthContailer/></Provider>, document.getElementById('root'));