import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login, logout } from '../../redux/auth_reduser'
import { Redirect } from 'react-router-dom';
import style from './../../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
   return (
      //HOK reduxForm передает в props много данных из созданного
      //контейнерного компонента LoginReduxForm, 
      //в т.ч. f() handleSubmit - обработчик события submit, которая 
      //1 - отменяет дефолтное обновление страницы при отправке данных, 
      //2 - собирает данные и упаковывает их в object (напр. formData)?
      //3 - вызывает onSubmit() из Login, передав в него объект с данными.
      <form onSubmit={props.handleSubmit}>
         <div>
            {/* Field instead input */}
            <Field placeholder='email' component={Input}
               name='email' validate={[required]} />
         </div>
         <div>
            <Field placeholder='password' component={Input} type='password'
               name='password' validate={[required]} />
         </div>
         <div>
            <Field type='checkbox' component={Input} name='rememberMe' />Remember me
         </div>
         {props.error && <div className={style.formSummaryError}>
            {props.error}
         </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

//form: 'login' - unique form name
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
   //send data to server
   const onSubmit = (formData) => {
      //email & password & rememberMe - 'name' from <Fields /> component LoginForms
      props.login(formData.email, formData.password, formData.rememberMe);
   }

   if (props.isAuth) {
      return <Redirect to={'/profile'} />
   }

   return (
      <div>
         <h3>Login</h3>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login)