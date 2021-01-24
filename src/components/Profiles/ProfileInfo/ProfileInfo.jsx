import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/userPhoto.jpg';
import styles from '../../Users/Users.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0]);
        }
    }
    
    return (
        <div>
            <div className={style.description}>
                <img src={props.profile.photos.small != null
                    ? props.profile.photos.small
                    : userPhoto} className={styles.photo} />
                {props.isOwner
                    && <div>
                            <label>
                                <span>change photo </span>
                                <input type="file"
                                    onChange={onMainPhotoSelected} />
                            </label>
                        </div>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <p>Name: {props.profile.fullName}</p>
                <p>Id: {props.profile.userId}</p>
                <p>About me: {props.profile.aboutMe}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;