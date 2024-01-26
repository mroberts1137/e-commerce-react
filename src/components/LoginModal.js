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

  const handleSubmit = (values) => {
    const loginCredentials = {
      username: values.username,
      password: values.password
    };
    console.log(loginCredentials);
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
