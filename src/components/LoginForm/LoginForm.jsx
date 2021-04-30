import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/auth-operations';

import Button from '../../shared-components/Button';
import Container from '../Container';
import styles from './LoginForm.module.css';

const signInSchema = Yup.object().shape({
  username: Yup.string().required('* required field'),
  password: Yup.string().required('* required field'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [messageError, serMessageError] = useState('');

  return (
    <Container>
      <div className={styles.formContainer}>
        <h2 className={styles.titleForm}>User login</h2>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={signInSchema}
          onSubmit={values => {
            dispatch(login(values));
            serMessageError('username or password invalid');
          }}
        >
          <Form>
            <Field
              className={styles.inputForm}
              name='username'
              type='text'
              placeholder='Enter your name'
            />
            <ErrorMessage
              className={styles.error}
              component='span'
              name='username'
            />
            <Field
              className={styles.inputForm}
              name='password'
              type='password'
              placeholder='Enter password'
            />
            <ErrorMessage
              className={styles.error}
              component='span'
              name='password'
            />
            <p className={styles.messageError}>{messageError}</p>
            <Button type='submit'>Login</Button>
          </Form>
        </Formik>

        <p className={styles.notification}>Don't have an account yet?</p>
        <Link to='/register' className={styles.notificationLink}>
          Sign up
        </Link>
      </div>
    </Container>
  );
};

export default LoginForm;
