import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false, //режим редактирования
        status: this.props.status //статус с сервера
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            });
    }

    activateEditMode = () => {
        //для изменения локального стейта нужно использовать .setState()
        //изменения происходят !!!!асинхронно!!! после окончания работы метода
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        //отправить на сервер запрос обновления статуса
        //передав локальный статус
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        //изменить локальный статус при изменении inputs value
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            Status: {this.props.status || "---"}
                        </span>
                    </div>
                }
                {/* если value зафиксирован, то нужно использовать onChange*/}
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateEditMode.bind(this)}
                            value={this.state.status}
                            onChange={this.onStatusChange} />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;