import { useState, useCallback } from 'react';
import { Button, Modal, Label, Input, InputGroup, InputGroupAddon, InputGroupText, ModalHeader, ModalBody, FormFeedback, ModalFooter, Spinner } from 'reactstrap';
import axios from 'axios';
import config from '../config';
import * as Yup from 'yup';

const ResetPasswordModal = ({modalOpen, toggleModal}) => {
    const [email, setEmail] = useState('');
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

    return (
        <Modal autoFocus={false} centered keyboard={false} isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Password Recovery</ModalHeader>
            {resetSent ? <>
                    <ModalBody>
                        <p>Recovery link was sent, email may take a few minutes to appear in your inbox, may also be in your spam. Follow the instructions found in the email once you receive it.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='danger' onClick={toggleModal}>Close</Button>
                    </ModalFooter>
                </> : <> 
                    <ModalBody>
                        {isLoading 
                            ? <Spinner color='success' /> 
                            : <>
                                <Label for='email'>Enter the email you have your account set up with. If you also forget this, please contact the Weekend Warriors IT Officer for help.</Label>
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
                        <Button color='primary' onClick={resetPasswordCall}>Send Reset Link</Button>
                    </ModalFooter>
                </>
            }
        </Modal>
    );
}

export default ResetPasswordModal;