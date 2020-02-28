import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HelloWorld from './HelloWorld.js';
import HelloUser from './HelloUser.js';
import Counter from './Counter.js'
import HomeNav from './HomeNav.js'

class App extends React.Component {
    render() {
        return (
                <div className='App'>
                    <HomeNav />
                        <Route exact path='/hello' component={HelloWorld}/>
                        {/* <Route exact path="/helloworld/:helloWorldId" component={HelloWorld} /> */}
                        <Route path='/hello/user' component={HelloUser} />
                        <Route path='/hello2/counter' component={Counter} />
                </div>     
        )
    }
}

export default App;

/* questions:
- shows appropriate links but does not connect to page
*/