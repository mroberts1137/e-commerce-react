import { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateLogin } from '../utils/validateLogin';

const LoginModal = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (values) => {
    const loginCredentials = {
      username: values.username,
      password: values.password
    };

    try {
      const response = await fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginCredentials)
      });
      console.log(JSON.stringify(loginCredentials));
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }

    setModalOpen(false);
  };

  return (
    <>
      <Button
        outline
        style={{ color: 'white', borderColor: 'white' }}
        onClick={() => setModalOpen(true)}
      >
        Login
      </Button>

      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>Login</ModalHeader>

        <ModalBody>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={handleSubmit}
            validate={validateLogin}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='username'>Username:</Label>
                <Field
                  name='username'
                  placeholder='username'
                  className='form-control'
                />
                <ErrorMessage name='username'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>

              <FormGroup>
                <Label htmlFor='password'>Password:</Label>
                <Field
                  name='password'
                  placeholder='password'
                  className='form-control'
                />
                <ErrorMessage name='password'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>

              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default LoginModal;
