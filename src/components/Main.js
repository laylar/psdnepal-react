import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
// import Footer from './FooterComponent';
// import Contact from './ContactComponent';
// import About from './AboutComponent';

class Main extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <Header />
                <Switch>
                    <Route path='/' component={Home} />
                    {/* <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />*/}
                    <Redirect to='/home' /> 
                </Switch>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Main;