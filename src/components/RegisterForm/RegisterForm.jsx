import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/auth-operations';

import Button from '../../shared-components/Button';
import Container from '../Container';
import styles from './RegisterForm.module.css';

const formSchema = Yup.object().shape({
  username: Yup.string().required('* required'),
  password: Yup.string()
    .min(6, '* min 6 symbols!')
    .required('* required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [messageError, serMessageError] = useState('');

  return (
    <Container>
      <div className={styles.formContainer}>
        <h2 className={styles.titleForm}>User registration</h2>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={formSchema}
          onSubmit={values => {
            dispatch(register(values));
            serMessageError('username has already been registered');
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
            <Button type='submit'>Register</Button>
          </Form>
        </Formik>
        <p className={styles.notification}>Already have an account?</p>
        <Link to='/login' className={styles.notificationLink}>
          Sign in
        </Link>
      </div>
    </Container>
  );
};

export default RegisterForm;
