import React from 'react';
import axios from 'axios';
import Layout from "../../components/Layout";
import ParticipantForm from '../../components/forms/ParticipantForm';
import MedicalForm from '../../components/forms/MedicalForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import config from '../../config';

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
        internationalStudent: false,
        firstTrip: false,
        firstActivity: false,
        howYouFoundUs: {
            email: false, 
            facebook: false, 
            instagram: false, 
            dragonLink: false, 
            infonet: false, 
            friend: false, 
            tripLeader: false, 
            other: false
        }
    },
    medicalInfo: {
        insuranceNum: '',
        allergies: '',
        sex: '',
        sexElaborate: '',
        prexisitingConditions: {
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
        prexistingConditionsElaborate: '',
        epiPen: false,
        medication: '',
        medicationAllergic: '',
        other: ''
    },
}

const validateFunc = values => {
    const errors = {};
    if (values.participantInfo.email !== values.participantInfo.confirmEmail) {
        errors.email = 'Email\'s do not match';
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
        insuranceNum: Yup.string().required('Required'),
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
        epiPen: Yup.boolean().default(false),
        medication: Yup.string(),
        medicationAllergic: Yup.string(),
        other: Yup.string()
    })
});

const Form = ({formToken, event, isValid, activity = 'INSERT ACTIVITY HERE'}) => {
    const submitForm = async (values, { setSubmitting }) => {
        try {
            setSubmitting(true);
            const apiUrl = config.development ? config.apiDevelopment : config.api;
            const formData = {
                formToken,
                trip: event,
                ...values
            }
            await axios.post(`${apiUrl}/forms`, formData);
            setSubmitting(false);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Layout showNavBar={false}>
            {isValid ?
                <div className='container'>
                    <div className='jumbotron'>
                        <h1 className="display-4 text-center">Trip Signup Form</h1>
                    </div>
                        <Formik
                            initialValues={initialFormValues}
                            validate={validateFunc}
                            validationSchema={validationSchema}
                            onSubmit={submitForm}
                        >
                            {formikProps => formikProps.isSubmitting ? 
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> : <div>
                                    {console.log(formikProps.values)}
                                    <ParticipantForm activity={activity} formikProps={formikProps} />
                                    <hr />
                                    <MedicalForm formikProps={formikProps} />
                                    <div className='row mb-4'>
                                        <button className='btn btn-primary w-50 mx-auto ' type='button'>Submit</button>
                                    </div>
                                </div>
                            }
                        </Formik>
                </div>
                :
                <div>
                    Not valid
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
