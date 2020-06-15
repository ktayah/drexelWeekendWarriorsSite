import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import LoadingOverlay from 'react-loading-overlay';
import Layout from "../../components/Layout";
import ParticipantForm from '../../components/forms/ParticipantForm';
import MedicalForm from '../../components/forms/MedicalForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import config from '../../config';
import Link from 'next/link';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const initialFormValues = {
    participantInfo: {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        emergencyName: '',
        emergencyNumber: '',
        class: '',
        firstTrip: '',
        tripRelatedQuestions: [],
        howYouFoundUs: {
            email: false, 
            facebook: false, 
            instagram: false, 
            dragonLink: false, 
            friend: false, 
            other: false
        }
    },
    medicalInfo: {
        insuranceNumber: '',
        allergies: '',
        sex: '',
        sexElaborate: '',
        preexistingConditions: {
            asthma: false,
            brokenBones: false,
            diabetes: false,
            seizures: false,
            heartIssues: false,
            neckProblems: false,
            highBloodPressure: false,
            backProblems: false,
            kneeProblems: false,
            stroke: false,
            other: false
        },
        preexistingConditionsElaborate: '',
        epiPen: '',
        medication: '',
        medicationAllergic: '',
        other: '',
        certified: false,
        beforeYouPayCertify: false
    },
}

const validateFunc = values => {
    const errors = {};
    if (values.participantInfo.email !== values.participantInfo.confirmEmail) {
        errors.participantInfo.email = 'Email\'s do not match';
    } else if (!certified) {
        errors.certified = 'You must check this before submitting';
    } else if (!beforeYouPayCertify) {
        errors.beforeYouPayCertify = 'You must check this before submitting';
    }
    return errors;
}

const validationSchema = Yup.object({
    participantInfo: Yup.object().shape({    
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        confirmEmail: Yup.string().email('Invalid email address').required('Required'),
        phoneNumber: Yup.number().min(10, 'Not a long enough for a phone number').required('Required'),
        emergencyName: Yup.string().required('Required'),
        emergencyNumber: Yup.number().min(10, 'Not a long enough for a phone number').required('Required'),
        class: Yup.string().required('Required'),
        firstTrip: Yup.string().required('Required'),
        tripRelatedQuestions: Yup.array().required('Required').of(Yup.object().shape({
            question: Yup.string().required('Required'),
            answer: Yup.string().required('Required')
        })),
        howYouFoundUs: Yup.object().required('Required').shape({
            email: Yup.boolean(), 
            facebook: Yup.boolean(), 
            instagram: Yup.boolean(), 
            dragonLink: Yup.boolean(), 
            infonet: Yup.boolean(), 
            friend: Yup.boolean(), 
            tripLeader: Yup.boolean(), 
            other: Yup.boolean()
        })
    }),
    medicalInfo: Yup.object().shape({
        insuranceNumber: Yup.string().required('Required'),
        allergies: Yup.string(),
        sex: Yup.string().required('Required'),
        sexElaborate: Yup.string(),
        preexistingConditions: Yup.object().shape({
            asthma: Yup.boolean().default(false),
            brokenBones: Yup.boolean().default(false),
            diabetes: Yup.boolean().default(false),
            seizures: Yup.boolean().default(false),
            heartIssues: Yup.boolean().default(false),
            neckProblems: Yup.boolean().default(false),
            highBloodPressure: Yup.boolean().default(false),
            backProblems: Yup.boolean().default(false),
            kneeProblems: Yup.boolean().default(false),
            stroke: Yup.boolean().default(false),
            otherCondition: Yup.boolean().default(false)
        }),
        preexistingConditionsElaborate: Yup.string(),
        epiPen: Yup.string(),
        medication: Yup.string(),
        medicationAllergic: Yup.string(),
        other: Yup.string(),
        certified: Yup.boolean().required('Required'),
        beforeYouPayCertify: Yup.boolean().required('Required')
    }),
});

const Form = ({formToken, event, isValid}) => {
    const activity = event.tripType;
    const router = useRouter();
    const submitForm = async (values, { setSubmitting, resetForm }) => {
        try {
            setSubmitting(true);
            const apiUrl = config.development ? config.apiDevelopment : config.api;
            const { certified, beforeYouPayCertify, ...modifiedMedicalInfo } = values.medicalInfo; 
            const { confirmEmail, ...modifiedParticipantInfo } = values.participantInfo;
            const formData = {
                formToken,
                trip: event,
                participantInfo: modifiedParticipantInfo,
                medicalInfo: modifiedMedicalInfo
            }
            console.log(formData);
            await axios.post(`${apiUrl}/forms`, formData);
            setSubmitting(false);

            resetForm();
            router.push('/forms/[form]', `/forms/${formToken}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Layout showNavBar={false}>
            {isValid ?
                <div className='container'>
                    <div className='jumbotron py-4'>
                        <h1 className="display-4 text-center h-25">{event.tripName} Signup Form</h1>
                    </div>
                        <Formik
                            initialValues={initialFormValues}
                            validate={validateFunc}
                            validationSchema={validationSchema}
                            onSubmit={submitForm}
                        >
                            {formikProps =>
                                <LoadingOverlay
                                    active={formikProps.isSubmitting}
                                    spinner
                                    text='Submitting form'
                                >
                                    <div>
                                        <ParticipantForm activity={activity} formikProps={formikProps} />
                                        <hr />
                                        <MedicalForm formikProps={formikProps} />
                                        <div className='row mb-4'>
                                            <button className='btn btn-primary w-50 mx-auto ' type='button' disabled={formikProps.isSubmitting} onClick={formikProps.submitForm}>Submit</button>
                                        </div>
                                    </div>
                                </LoadingOverlay>
                            }
                        </Formik>
                </div>
                :
                <div className='container'>
                    <div className='jumotron py-4 my-5'>
                        <h1 className='display-4 text-center'>This form link has been submitted</h1>
                        <p className='lead text-center'>If you think this is an error, please contact Weekend Warriors by email or our website. See <Link href='/'><a>drexelww.com</a></Link> for more information</p>
                    </div>
                </div>    
            }
        </Layout>
    );
}

Form.getInitialProps = async ({query}) => {
    const formToken = query.form;
    const checkFormTokenRes = await axios.post(`${apiUrl}/forms/checkFormToken`, {
        formToken
    });
    const { isValid, event } = checkFormTokenRes.data;

    return {
        formToken,
        event,
        isValid
    }
}

export default Form;
