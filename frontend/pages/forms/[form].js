import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Layout from "../../components/Layout";
import ParticipantForm from '../../components/forms/ParticipantForm';
import MedicalForm from '../../components/forms/MedicalForm';
import config from '../../config';

const apiUrl = config.development ? config.apiDevelopment : config.api;

const initialState = {
    participantInfo: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        class: null,
        gender: null,
        internationalStudent: null,
        firstTrip: null,
        firstActivity: null,
        howYouFoundUs: null,
        emergencyContact: {
            name: null,
            number: null,
        }
    },
    medicalInfo: {
        insuranceNum: null,
        allergies: null,
        prexisitingConditions: null,
        prexistingConditionsElaborate: null,
        epiPen: null,
        medication: null,
        medicationAllergic: null,
        medicationOther: null
    },
    certified: false,
}

const Form = ({sendForm, participantInfo, medicalInfo, activity='INSERT ACTIVITY HERE', isValid}) => {
    // const [formData, editFormData] = useState(initialState);
    // const [formDataSending, setFormDataSending] = useState(false);

    // const editParticipantInfo = (key, data) => {
    //     editFormData({
    //         ...formData,
    //         participantInfo: {
    //             [key]: data
    //         }
    //     });
    // }

    // const editMedicalInfo = (key, data) => {
    //     editFormData({
    //         ...formData,
    //         medicalInfo: {
    //             [key]: data
    //         }
    //     });
    // }

    // const sendForm = async () => {
    //     setFormDataSending(true);
    //     try {
    //         if (formData.certified) {

    //         } else {
    //             throw 'Missed a neccassary input';
    //         }
    //     } catch (err) {
    //         setFormDataSending(false);
    //     }
    // }

    const submitForm = useCallback(
        () => {
            sendForm(participantInfo, medicalInfo);
        },
        [participantInfo, medicalInfo],
    )

    return (
        <Layout showNavBar={false}>
            {isValid ?
                <div className='container'>
                    <div className='jumbotron'>
                        <h1 className="display-5 text-center">Trip Signup Form</h1>
                    </div>
                    <ParticipantForm activity={activity} />
                    <MedicalForm />
                    <button className='btn btn-primary' type='button' onClick={() => submitForm()}>Submit</button>
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
    const hashCode = query.form;
    const checkFormTokenRes = await axios.post(`${apiUrl}/forms/checkFormToken`, {
        hashCode
    });
    const { isValid } = checkFormTokenRes.data;
    return {
        isValid
    }
}

const mapStateToProps = state => ({
    participantInfo: state.tripForm.participantInfo,
    medicalInfo: state.tripForm.medicalInfo
});

const mapDispatchToProps = dispatch => ({
    sendForm: (participantInfo, medicalInfo) => dispatch(sendForm(participantInfo, medicalInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
