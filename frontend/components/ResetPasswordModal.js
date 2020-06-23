import { useState, useCallback } from 'react';
import { Button, Modal, Label, Input, InputGroup, InputGroupAddon, InputGroupText, ModalHeader, ModalBody, FormFeedback, ModalFooter, Spinner } from 'reactstrap';
import axios from 'axios';
import config from '../config';
import * as Yup from 'yup';

const ResetPasswordModal = ({modalOpen, toggleModal}) => {
    const [email, setEmail] = useState('');
    const [forgotEmail, setForgotEmail] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [resetSent, setResetSent] = useState(false);
    const [error, setError] = useState(false);

    const resetPasswordCall = useCallback(async () => {
        try {
            setLoading(true);
            const apiUrl = config.development ? config.apiDevelopment : config.api;

            if (Yup.string().email().isValid(email)) {
                await axios.post(`${apiUrl}/auth/forgot-password`, {
                    email
                });
            } else {
                throw 'Invalid email address';
            }

            setLoading(false);
            setResetSent(true);
        } catch (err) {
            setLoading(false);
            setError(err);
            console.error(err);
        }
    }, [email]);

    const closeResetSent = useCallback(() => {
        toggleModal();
        setResetSent(false);
        setEmail('');
    }, [modalOpen, resetSent]);

    const closeForgotEmail = useCallback(() => {
        toggleModal();
        setForgotEmail(false);
    }, [modalOpen, forgotEmail]);

    return (
        <Modal autoFocus={false} centered keyboard={false} isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Password Recovery</ModalHeader>
            {resetSent ? <>
                    <ModalBody>
                        <p>Recovery link was sent, email may take a few minutes to appear in your inbox, may also be in your spam. Follow the instructions found in the email once you receive it.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='danger' onClick={closeResetSent}>Close</Button>
                    </ModalFooter>
                </> : <> 
                    <ModalBody>
                        {isLoading 
                            ? <div className='d-flex justify-content-center'>
                                    <Spinner color='success' />
                                </div> 
                            : forgotEmail 
                                ? <p>Please contact the Weekend Warriors IT Officer for help at drexelweekendwarriors@gmail.com</p>
                                : <>
                                    <Label for='email'>Enter your account email</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType='prepend'>
                                            <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input 
                                            type='email'
                                            placeholder='Enter a email'
                                            invalid={error}
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        {error && <FormFeedback invalid>An error occured, make sure the email entered is corrected. Otherwise contact the IT Officer</FormFeedback>}
                                    </InputGroup>
                                </>
                        }
                    </ModalBody>
                    <ModalFooter>
                        {!forgotEmail ? <>
                            <Button color='primary' onClick={() => setForgotEmail(true)}>Forgot your email?</Button>
                            <Button color='primary' onClick={resetPasswordCall}>Send Reset Link</Button>
                        </> : <>
                            <Button color='danger' onClick={closeForgotEmail}>Close</Button>
                        </>}
                    </ModalFooter>
                </>
            }
        </Modal>
    );
}

export default ResetPasswordModal;