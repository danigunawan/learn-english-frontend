import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import {Switch, Route, withRouter} from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'
import LogInForm from '../components/LogInForm'
import Profile from '../components/Profile'
import Home from '../components/Home'
import Footer from '../components/Footer'

class WholePageContainer extends Component {

  render() {

    return (
      <div>
      <div  className="app gray-background">
        <Navbar browserProps={this.props}/>
      </div>
        <div>
        <Switch>
         <Route path="/signup" render={()=><SignUpForm browserProps={this.props}/>}/>
         <Route path="/login" render={()=><LogInForm browserProps={this.props}/>}/>
         <Route path="/profile" render={()=><Profile/>}/>
         <Route  path="/" render={()=><Home/>}/>
        </Switch>
        <Footer/>
        </div>
      </div>
    );
  }

}


export default withRouter(WholePageContainer);