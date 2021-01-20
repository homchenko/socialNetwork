import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/userPhoto.jpg';
import styles from '../../Users/Users.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    //let usersContactsArray = props.profile.contacts;
    return (
        <div>
            {/* <div>
                <img src="https://selsov.ru/wp-content/uploads/sbiristel-4.jpg" alt="1" />
            </div> */}
            <div className={style.description}>
                <img src={props.profile.photos.small != null
                    ? props.profile.photos.small
                    : userPhoto} className={styles.photo} />
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <p>Name: {props.profile.fullName}</p>
                <p>Id: {props.profile.userId}</p>
                <p>About me: {props.profile.aboutMe}</p>
                {/* <p>Contacts: </p>
                    <div>{usersContactsArray.map(contact => {
                    <p>{contact}</p>
                })}</div> */}
            </div>
        </div>
    );
}

export default ProfileInfo;