// import React from 'react';
import './App.css';
import React, {Component} from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import HelloWorld from './HelloWorld.js';
import HelloUser from './HelloUser.js';
import Counter from './Counter.js'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
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
                    <Route path="/helloworld/:helloWorldId" component={HelloWorld} />
                    <Route path='/hellouser/:helloUserId' component={HelloUser} />
                    <Route path='/counter/:counterId' component={Counter} />
                </div>
            </BrowserRouter>
               
        )
    }
}

export default App;
