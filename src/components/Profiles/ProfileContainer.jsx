import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto  } from './../../redux/profile_reduser';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            //userId = 13581;
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        //получение с сервера профиля пользователя
        this.props.getUserProfile(userId);
        //получение статуса пользователя
        this.props.getStatus(userId);
    }

    //the status update and the user status itself are transmitted via props:
    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
            />);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(connect(mapStateToProps, {
    getUserProfile, getStatus, updateStatus, savePhoto
}),
    withRouter)(ProfileContainer)