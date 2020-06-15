import React from 'react';
import tripSpecificQuestions from './tripSpecificQuestions';
import { capitalizeFirstLetter } from '../../utils/formUtils';
import { FieldArray } from 'formik';

const ParticipantForm = ({activity, formikProps}) => {
    const { values: { participantInfo }, errors, touched, handleChange, handleBlur } = formikProps;
    const participantErrors = errors?.participantInfo;
    const participantTouched = touched?.participantInfo;
    const activityRelatedQuestions = tripSpecificQuestions[activity].questions;

    const classes = ['freshman', 'sophomore', 'preJunior', 'junior', 'senior', 'graduate'];
    const howYouFoundUs = ['email', 'facebook', 'instagram', 'dragonLink', 'friend', 'other'];
    const yesNo = ['yes', 'no'];

    const printError = (inputKey, relatedInputKey=inputKey) => participantErrors 
        && participantTouched 
        && participantErrors[inputKey] 
        && participantTouched[inputKey]
        && participantTouched[relatedInputKey] 
        && participantErrors[inputKey];
    
    const validTextInputClassname = (inputKey, relatedInputKey=inputKey) => `form-control ${participantTouched 
        && participantErrors 
        && participantTouched[inputKey]
        && participantTouched[relatedInputKey] 
        && participantErrors[inputKey] 
        && 'is-invalid'}`;

    return (
        <form>
            <h1 className='display-4'>Participant Info</h1>

            <div className='form-row'>
                <h4>Contact Info</h4>
            </div>
            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                        type='text' 
                        name='participantInfo.firstName' 
                        className={validTextInputClassname('firstName')}
                        value={participantInfo.firstName} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    <small className='form-text text-danger'>
                        {printError('firstName')}
                    </small>
                </div>
                <div className='col form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input 
                        type='text' 
                        name='participantInfo.lastName'
                        className={validTextInputClassname('lastName')}
                        value={participantInfo.lastName} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    <small className='form-text text-danger'>
                        {printError('lastName')}
                    </small>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        className={validTextInputClassname('email', 'confirmEmail')}
                        id='email' 
                        name='participantInfo.email' 
                        value={participantInfo.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    <small className='form-text text-danger'>
                        {printError('email', 'confirmEmail')}
                    </small>
                </div>
                <div className='col form-group'>
                    <label htmlFor='confirmEmail'>Confirm Email</label>
                    <input 
                        type='email' 
                        className={validTextInputClassname('email', 'confirmEmail')} 
                        id='confirmEmail' 
                        name='participantInfo.confirmEmail' 
                        value={participantInfo.confirmEmail} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input 
                        type='text' 
                        name='participantInfo.phoneNumber' 
                        className={validTextInputClassname('phoneNumber')}
                        value={participantInfo.phoneNumber} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    <small className='form-text text-danger'>
                        {printError('phoneNumber')}
                    </small>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='emergencyName'>Emergency Contact Name</label>
                    <input 
                        type='text' 
                        name='participantInfo.emergencyName' 
                        className={validTextInputClassname('emergencyName')}  
                        value={participantInfo.emergencyName} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    <small className='form-text text-muted ml-1'>
                        Your emergency contact must be someone NOT also coming on the trip
                    </small>
                    <small className='text-danger'>
                        {printError('emergencyName')}
                    </small>
                </div>
                <div className='col form-group'>
                    <label htmlFor='emergencyNumber'>Emergency Contact Number</label>
                    <input 
                        type='text' 
                        name='participantInfo.emergencyNumber' 
                        className={validTextInputClassname('emergencyNumber')}
                        value={participantInfo.emergencyNumber} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                    <small className='form-text text-danger'>
                        {printError('emergencyNumber')}
                    </small>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='class'>What year are you?</label>
                    </div>
                    <div className='row'>
                        {classes.map(studentClass => {
                            const modifiedClass = (studentClass === 'preJunior' && 'Pre-Junior') || studentClass;
                            return (
                                <div className='form-radio form-check d-flex justify-content-center align-items-center mr-2' id='class' key={`class-${studentClass}`}>
                                    <input 
                                        className='form-control form-radio-input' 
                                        type='radio' 
                                        name='participantInfo.class'
                                        id='radioButton'
                                        value={modifiedClass} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} 
                                    />
                                    <label className='form-radio-label ml-1 pt-1' htmlFor='class'>{capitalizeFirstLetter(modifiedClass)}</label>
                                </div>
                            );
                        })}
                        <small className='form-text text-danger'>
                            {printError('class')}
                        </small>
                    </div>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='firstTrip'>Is this your first Weekend Warriors trip?</label>
                    </div>
                    <div className='row mx-auto'>
                        {yesNo.map(option => 
                            <div className='form-radio form-radio-inline mx-1 pr-4' id='firstTrip' key={`firstTrip-${option}`}>
                                <input 
                                    className='form-control form-radio-input'
                                    type='radio' 
                                    name='participantInfo.firstTrip'
                                    id='radioButton'
                                    value={option} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                />
                                <label className='form-control-label' htmlFor='firstTrip'>{capitalizeFirstLetter(option)}</label>
                            </div>
                        )}
                    </div>
                    <small className='form-text text-danger'>
                        {printError('firstTrip')}
                    </small>
                </div>
            </div>
            
            <div className='form-row'>
                <h4>Trip Related Questions</h4>
            </div>
            {activityRelatedQuestions.map((questionData, questionIndex) => {
                const { question, answers } = questionData;
                const questionId = `${activity}SpecificQuestion`;
                const questionName = `participantInfo.tripRelatedQuestions[${questionIndex}]`;
                
                return (
                    <FieldArray 
                        name='participantInfo.tripRelatedQuestions'
                        key={questionIndex}
                        render={arrayHelpers => 
                            <div className='form-row'>
                                <div className='col form-group'>
                                    <div className='row mx-auto'>
                                        <label htmlFor={questionId}>{question}</label>
                                    </div>
                                    <div className='row mx-auto'>
                                        {answers.map(answer => {
                                            const handleRelatedQuestionChange = () => arrayHelpers.push({question: questionData.question, answer});
                                            const answerId = `${questionId}-${answer}`;

                                            return (
                                                <div className='form-check d-flex justify-content-center align-items-center mr-2' id={answerId} key={answerId}>
                                                    <input 
                                                        className='form-control form-radio-input'
                                                        type='radio' 
                                                        name={questionName}
                                                        id='radioButton'
                                                        onChange={handleRelatedQuestionChange}
                                                        onBlur={handleBlur} 
                                                    />
                                                    <label className='form-control-label ml-1 pt-2' htmlFor={answerId}>{answer}</label>
                                                </div>
                                            );
                                        })}
                                        <small className='form-text text-danger'>
                                            {printError(`tripRelatedQuestions[${questionIndex}].question`)}
                                            {printError(`tripRelatedQuestions[${questionIndex}].answer`)}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                );
            })}
            
            <div className='form-row'>
                <h4>How did you hear about this ticket sale?</h4>
            </div>
            <div className='form-row'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='howYouFoundUs'>Select all that apply</label>
                    </div>
                    <div className='row mx-auto'>
                        {howYouFoundUs.map(wayOfFindUs => {
                            const friendText = wayOfFindUs === 'friend' && 'Friend/Word of Mouth';
                            const text = friendText || capitalizeFirstLetter(wayOfFindUs);
                            const name = `participantInfo.howYouFoundUs.${wayOfFindUs}`;
                            const id = `howYouFoundUs-${wayOfFindUs}`;
                            return ( 
                                <div className='form-control form-checkbox pr-4' id='howYouFoundUs' key={id}>
                                    <input 
                                        className='form-control-input' 
                                        type='checkbox'
                                        value={true}
                                        name={name}
                                        id={id}
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                    />
                                    <label className='form-checkbox-label ml-1' htmlFor={id}>{text}</label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <style jsx>{`
                #radioButton,
                #checkboxButton {
                    width: 20px;
                }
            `}</style>
        </form>
    );
}

export default ParticipantForm;