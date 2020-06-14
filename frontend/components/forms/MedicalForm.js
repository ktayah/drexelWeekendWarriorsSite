import React from 'react';
import { capitalizeFirstLetter, formalizeCamelCaseString } from '../../utils/formUtils';

const MedicalForm = ({formikProps}) => {
    const { values: { medicalInfo }, errors, touched, handleChange, handleBlur } = formikProps;
    const conditions = ['asthma', 'brokenBones', 'diabetes', 'seizures', 'heartIssues', 'highBloodPressure', 'stroke', 'neckProblems', 'backProblems', 'kneeProblems', 'otherCondition'];
    const yesNo = ['yes', 'no'];
    const sexes = ['male', 'female', 'intersex', 'preferNotToDisclose'];

    const validTextInputClassname = inputKey => `form-control ${touched[inputKey] && errors[inputKey] && 'is-invalid'}`;

    return (
        <form>
            <h1 className='display-4'>Medical Info</h1>
            <div className='form-row my-2'>
                <div className='col form-group'>
                    <label htmlFor='insuranceNum'>Insurance Policy and Number (If you do not have this information with you, type NA, and be sure to bring it to the pretrip meeting)</label>
                    <input 
                        type='text'
                        name='medicalInfo.insuranceNum'
                        className={validTextInputClassname('insuranceNum')} 
                        value={medicalInfo.insuranceNum} 
                        onChange={handleChange}
                        onBlur={handleBlur}                         
                    />
                </div>
            </div>

            <div className='form-row my-2'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='sex'>What is your sex?</label>
                    </div>
                    <div className='row'>
                        {sexes.map(sex =>
                            <div className='form-radio form-check d-flex justify-content-center align-items-center mr-3' id='sex' key={`sex-${sex}`}>
                                <input 
                                    type='radio'
                                    name='medicalInfo.sex'
                                    id='radioButton'
                                    className='form-control form-radio-input' 
                                    value={sex}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label className='form-radio-label ml-1 pt-1' htmlFor='sex'>{formalizeCamelCaseString(sex)}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='sexElaborate'>If you would like, please disclose your gender here.</label>
                    </div>
                    <input 
                        type='text' 
                        name='medicalInfo.sexElaborate' 
                        className={validTextInputClassname('sexElaborate')}
                        value={medicalInfo.sexElaborate}
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                    />
                </div>
            </div>

            <div className='row my-2'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='preexistingConditions'>Have you had any of the following symptoms or conditions in the past 5 years?</label>
                    </div>
                    <div className='row mx-auto'>
                        {conditions.map(condition => 
                            <div className='form-control form-radio form-check' id='preexistingConditions' key={`preexistingConditions-${condition}`}>
                                <input 
                                    className='form-radio-input'
                                    type='checkbox' 
                                    id='checkboxButton'
                                    name={`medicalInfo.preexistingConditions.${condition}`}
                                    value={true} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                                <label className='form-radio-label ml-1' htmlFor={condition}>{formalizeCamelCaseString(condition)}</label>
                            </div>
                        )}
                    </div>
                </div>

                <div className='col mt-3'>
                    <div className='row form-group'>
                        <label htmlFor='allergies'>List any allergies you have, along with the severity and symptoms.</label>
                        <textarea 
                            name='medicalInfo.allergies'
                            rows="2"
                            className={validTextInputClassname('allergies')} 
                            value={medicalInfo.allergies} 
                            onChange={handleChange}
                            onBlur={handleBlur}            
                        />
                    </div>

                    <div className='row form-group'>
                        <label htmlFor='medicationAllergic' className='mr-1'>Are you allergic to any medication?</label>
                        <small className='form-text text-muted'>If so list the medication, severity, and symptoms</small>
                        <textarea 
                            name='medicalInfo.medicationAllergic'
                            rows="3"
                            className={validTextInputClassname('medicationAllergic')}
                            value={medicalInfo.medicationAllergic}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className='row form-group'>
                        <label htmlFor='medication'>Are you currently taking any medications? (Prescription or Over-the-Counter)
                            <small className='form-text text-muted'>If so list the name, dosage and interval you take it.</small>
                        </label>
                        <textarea 
                            name='medicalInfo.medication'
                            rows="2"
                            className={validTextInputClassname('medication')}
                            value={medicalInfo.medication}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className='row form-group my-4'>
                        <div className='row mx-auto'>
                            <label htmlFor='epiPen'>If you have any major allergies, do you have an Epi-Pen?</label>
                            <small htmlFor='epiPen'>If so, please bring it on the trip with you.</small>
                        </div>
                        <div className='row ml-2'>
                            {yesNo.map(option => 
                                <div className='form-radio form-radio-inline mx-1 pr-4' id='epiPen' key={`epiPen-${option}`}>
                                    <input 
                                        className='form-control form-radio-input' 
                                        type='radio' 
                                        id='radioButton'
                                        name='medicalInfo.epiPen'
                                        value={option}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <label className='form-control-label' htmlFor='radioButton'>{capitalizeFirstLetter(option)}</label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='preexistingConditionsElaborate'>If you checked any of the boxes above, please elaborate here.</label>
                    <textarea 
                        className={`${validTextInputClassname('preexistingConditionsElaborate')}`}
                        rows="4"
                        name='medicalInfo.preexistingConditionsElaborate'
                        value={medicalInfo.preexistingConditionsElaborate}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <div className='form-row'>
               <div className='col form-group'>
                    <label htmlFor='medicationOther'>Is there anything else you think we should be aware of?</label>
                    <input 
                        type='text' 
                        name='medicalInfo.medicationOther' 
                        className={validTextInputClassname('medicationOther')}
                        value={medicalInfo.medicationOther}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <div className='form-radio form-radio-inline' id='certified'>
                        <input 
                            className='form-radio-input' 
                            type='checkbox' 
                            value='certified'
                            id='checkboxButton'
                        />
                        <label className='form-radio-label ml-1' htmlFor='certified'>I have filled out this form to the best of my ability</label>
                    </div>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <small id='beforeYouPayCertifyHelpBlock' htmlFor='beforeYouPayCertify' className='form-text mx-1 mb-1'>I understand this is an Alcohol/Drug free trip and this trip ticket is not transferable to another person. I understand that I have to Attend one Pre-trip or I will not be authorized to attend the Trip. I understand that the refund policy is 100% refund if notified 7 days before the trip, 50% if notified within 7 days AND a replacement is found. If a refund is issued, it must be claimed within 2 weeks of the request.</small>
                    <div className='form-radio form-radio-inline my-1' id='beforeYouPayCertify'>
                        <input 
                            className='form-radio-input mr-1' 
                            type='checkbox' 
                            value='beforeYouPayCertify' 
                            id='checkboxButton' 
                        />
                        <label className='form-radio-label' htmlFor='beforeYouPayCertify'>Yes, I have read the statement above and understand what is required</label>
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

export default MedicalForm;