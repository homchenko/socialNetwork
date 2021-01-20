import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profiles/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
//import { getAuthUserData } from './redux/auth_reduser';
import { initializeApp } from './redux/app_reduser';
import Preloader from './common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) { return <Preloader /> }
    
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
         <Route path='/dialogs'
            render={() => <DialogsContainer store={this.props.store} />} />
          {/* указываем, что в URL могут быть параметры (userUId) 
        "?" означает, что параметр необязательный*/}
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer store={this.props.store} />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
