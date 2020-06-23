import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import Layout from '../components/Layout';
import { Button, Jumbotron, Container, Form, FormGroup, Label, Input, Spinner, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import config from '../config';
import { Formik } from 'formik';

const initialValues = {
    password: '',
    passwordConfirmation: ''
}

const validateFunc = values => {
    const errors = {};
    if (values.password !== values.passwordConfirmation) {
        errors.password = 'Passwords do not match';
    } else if ((values.password.length < 7 && values.password.length !== 0) 
        || (values.passwordConfirmation.length < 7 && values.passwordConfirmation.length !== 0)) {
        errors.password = 'Password is not long enough';
    }
    return errors;
}

const Reset = ({ code, errorCode }) => {
    const router = useRouter();
    const [passwordSubmitted, setPasswordSubmitted] = useState(false);

    const sendHome = useCallback(() => router.push('/'), [passwordSubmitted]);
    
    const resetPassword = useCallback(async (values, { setSubmitting }) => {
        try {
            setSubmitting(true);
            const apiUrl = config.development ? config.apiDevelopment : config.api;
            await axios.post(`${apiUrl}/auth/reset-password`, {
                code,
                password: values.password,
                passwordConfirmation: values.passwordConfirmation
            });
            setSubmitting(false);
            setPasswordSubmitted(true);
        } catch (err) {
            setSubmitting(false);
            console.error(err);
        }
    });

    return errorCode 
        ? <Error statusCode={errorCode} /> 
        : <Layout showNavBar={false}>
            <Jumbotron>
                <h1 className='text-center display-5'>Password Recovery</h1>
            </Jumbotron>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validate={validateFunc}
                    onSubmit={resetPassword}
                >
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => 
                        isSubmitting ? 
                            <div className='d-flex justify-content-center py-5'>
                                <Spinner color='success' />
                            </div>
                            : 
                            <>
                                <Form className='w-75 mx-auto'>
                                    <h4 className='my-4'>Please enter your new password</h4>
                                    <FormGroup>
                                        <Label for='password'>Enter a new password</Label>
                                        <Input
                                            name='password'
                                            type='password'
                                            placeholder='Enter a password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='password'>Confirm your new password</Label>
                                        <Input
                                            name='passwordConfirmation'
                                            type='password'
                                            placeholder='Confirm password'
                                            value={values.passwordConfirmation}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </FormGroup>
                                    <p className='form-text text-danger'>
                                        {errors.password && touched.password && touched.passwordConfirmation && errors.password}
                                    </p>
                                    <Button className='my-2 w-100' type='button' color='primary' onClick={handleSubmit}>Submit</Button>
                                </Form>
                                <Modal centered isOpen={passwordSubmitted} toggle={sendHome}>
                                    <ModalHeader toggle={sendHome}>Password Changed</ModalHeader>
                                    <ModalBody>
                                        <p>Your new password was set, you will be sent back to the home page.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color='danger' onClick={sendHome}>Go Home</Button>
                                    </ModalFooter>
                                </Modal>
                            </>
                    }
                </Formik>
            </Container> 
        </Layout>
}

export async function getServerSideProps({ query }) {
    if (!Object.keys(query).includes('code')) {
        return {
            props: {
                errorCode: 404
            }
        }
    }
    return {
        props: {
            code: query.code
        }
    }
}

export default Reset;