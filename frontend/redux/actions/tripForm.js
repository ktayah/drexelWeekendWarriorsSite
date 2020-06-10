import { 
    TRIP_FORM_EDIT,
    TRIP_FORM_SENT, 
    TRIP_FORM_SENDING, 
    TRIP_FORM_SEND_ERROR, 
    TRIP_FORM_CHECK_FIELDS,
} from '../types/tripForm.js';
import axios from 'axios';

export const editParticipantInfo = (key, data) => dispatch => {
    return {
        type: TRIP_FORM_EDIT,
        data: {
            participantInfo: {
                key,
                data
            }
        }
    };
}

export const editMedicalInfo = (key, data) => dispatch => {
    return {
        type: TRIP_FORM_EDIT,
        data: {
            medicalInfo: {
                key,
                data
            }
        }
    };
}

export const checkFormFields = (participantInfo, medicalInfo) => {
    for (const [, value] of Object.entries({...participantInfo, ...medicalInfo})) {
        if (value === null)
            return {
                type: TRIP_FORM_CHECK_FIELDS,
                data: false
            }
        return {
            type: TRIP_FORM_CHECK_FIELDS,
            data: true
        }
    }
}

export const sendForm = (authjwt, participantInfo, medicalInfo) => async dispatch => {
    try {
        dispatch(tripFormSending());
        // Insert check
        const formData = {
            participantInfo,
            medicalInfo
        }
        const res = await axios.post(`${apiUrl}/forms`, formData);
        dispatch(tripFormSent());
    } catch (err) {
        dispatch(tripFormError(err));
    }
}

const tripFormSending = () => ({
    type: TRIP_FORM_SENDING
});

const tripFormSent = () => ({
    type: TRIP_FORM_SENT
});

const tripFormError = err => ({
    type: TRIP_FORM_SEND_ERROR,
    data: {
        err
    }
});