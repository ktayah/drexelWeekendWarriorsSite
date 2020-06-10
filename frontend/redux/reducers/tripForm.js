import {
    TRIP_FORM_EDIT,
    TRIP_FORM_SENT, 
    TRIP_FORM_SENDING, 
    TRIP_FORM_SEND_ERROR,
    TRIP_FORM_CHECK_FIELDS
} from '../types/tripForm.js';

const initialFormState = {
    formCertified: false,
    formDataSending: false,
    formDataSendError: null,
    formData: {
        hashCode: null,
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
    },
}

const tripForm = (state = initialFormState, action) => {
    switch(action.type) {
        case TRIP_FORM_EDIT:
            return {
                ...state,
                formData: {
                    [action.key]: action.data,
                }
            }
        case TRIP_FORM_SENT:
            return initialFormState;
        case TRIP_FORM_SENDING: 
            return {
                ...state,
                formDataSending: action.data
            }
        case TRIP_FORM_SEND_ERROR:
            return {
                ...state,
                formDataSendError: action.data
            }
        case TRIP_FORM_CHECK_FIELDS:
            return {
                ...state,
                formCertified: action.data
            }
        default:
            return state;
    }
}

export default tripForm;