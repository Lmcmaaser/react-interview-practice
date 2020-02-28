import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
//import HelloWorld from './HelloWorld.js';
import HelloUser from './HelloUser.js';
import Counter from './Counter.js'

class App extends React.Component {
    render() {
        return (
                <div className='App'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/helloworld">HelloWorld</Link>
                            </li>
                            <li>
                                <Link to="/hellouser">HelloUser</Link>
                            </li>
                            <li>
                                <Link to="/Counter">Counter</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/'/>
                        {/* <Route exact path="/helloworld/:helloWorldId" component={HelloWorld} /> */}
                        <Route path='/hellouser' component={HelloUser} />
                        <Route path='/counter' component={Counter} />
                    </Switch>
                </div>     
        )
    }
}

export default App;

/* questions:
- shows appropriate links but does not connect to page
*/