import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profile_reduser';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        //getting user profile from server
        this.props.getUserProfile(userId);
        //getting user status
        this.props.getStatus(userId);
    }
    //the status update and the user status itself are transmitted via props:
    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

//HOC for redirect
//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//HOC for routing 
//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

export default compose(connect(mapStateToProps, {
    getUserProfile,
    getStatus, updateStatus
}),
    withRouter)(ProfileContainer)