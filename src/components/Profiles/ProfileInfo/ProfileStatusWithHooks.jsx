import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    //hook useState()
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status); //*передать статус на сервер
    }

    let[status, setStatus] = useState(props.status);
    const onStatusChange = (e) => {
        //изменить статус при изменении inputs value
        setStatus(e.currentTarget.value)
    }

    //hook useEffect() - для синхронизации
    useEffect ( () => {
        setStatus(props.status);
    }, [props.status]); //f() запускается при изменении props.status

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        Status: {props.status || "---"}
                    </span>
                </div>
            }
            {/* если value зафиксирован, то нужно использовать onChange*/}
            {editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                        value={status}/>
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;