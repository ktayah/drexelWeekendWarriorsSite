import React from 'react';
import { connect } from 'react-redux';

const MedicalForm = ({medicalInfo, editMedicalInfo}) => {
    return (
        <form>
            <h1>Medical Info</h1>
            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='insuranceNum'>Insurance Policy and Number (If you do not have this information with you, type NA, and be sure to bring it to the pretrip meeting)</label>
                    <input type='text' className='form-control' id='insuranceNum'/>
                    <br/>
                    <label htmlFor='prexistingConditionsElaborate'>If you checked any of the boxes to the right elaborate here.</label>
                    <input type='text' className='form-control' id='prexistingConditionsElaborate' />
                    <br/>
                    <label htmlFor='allergies'>List any allergies you have, along with the severity and symptoms.</label>
                    <input type='text' className='form-control' id='allergies' />
                    <br/>
                    <label htmlFor='epiPen'>If you have any major allergies, do you have an Epi-Pen?</label>
                    <label htmlFor='epiPen'>If so, please bring it on the trip with you.</label>
                    <div className="form-radio form-radio-inline" id='epiPen'>
                        <input className='form-radio-input' type='radio' value='yes' id='yes' />
                        <label className='form-radio-label' htmlFor='yes'>Yes</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='epiPen'>
                        <input className='form-radio-input' type='radio' value='no' id='no' />
                        <label className='form-radio-label' htmlFor='no'>No</label>
                    </div>                   
                </div>

                <div className='col form-group'>
                    <label htmlFor='prexisitingConditions'>Have you had any of the following symptoms or conditions in the past 5 years?</label>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='asthma' id='asthma' />
                        <label className='form-radio-label ml-1' htmlFor='asthma'>Asthma</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='brokenBones' id='brokenBones' />
                        <label className='form-radio-label ml-1' htmlFor='brokenBones'>Broken Bones</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='diabetes' id='diabetes' />
                        <label className='form-radio-label ml-1' htmlFor='diabetes'>Diabetes</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='seizures' id='seizures' />
                        <label className='form-radio-label ml-1' htmlFor='seizures'>Seizures</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='heartIssues' id='heartIssues' />
                        <label className='form-radio-label ml-1' htmlFor='heartIssues'>Heart Issues</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='neckProblems' id='neckProblems' />
                        <label className='form-radio-label ml-1' htmlFor='neckProblems'>Neck Problems</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='highBloodPressure' id='highBloodPressure' />
                        <label className='form-radio-label ml-1' htmlFor='highBloodPressure'>High Blood Pressure</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='backProblems' id='backProblems' />
                        <label className='form-radio-label ml-1' htmlFor='backProblems'>Back Problems</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='kneeProblems' id='kneeProblems' />
                        <label className='form-radio-label ml-1' htmlFor='kneeProblems'>Knee Problems</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='stroke' id='stroke' />
                        <label className='form-radio-label ml-1' htmlFor='stroke'>Stroke</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                        <input className='form-radio-input' type='checkbox' value='other' id='other' />
                        <label className='form-radio-label ml-1' htmlFor='other'>Other</label>
                    </div>
                </div>
            </div>

            <div className='form-row'>
                <label htmlFor='medication'>Are you currently taking any medications? (Prescription or Over-the-Counter)</label>
                <label htmlFor='medication'>If so list the name, dosage and interval you take it.</label>
                <input type='text' className='form-control' id='medication' />
            </div>

            <div className='form-row'>
                <label htmlFor='medicationAllergic'>Are you allergic to any medication?</label>
                <label htmlFor='medicationAllergic'>If so list the medication, severity, and symptoms</label>
                <input type='text' className='form-control' id='medicationAllergic' />
            </div>

            <div className='form-row'>
                <label htmlFor='medicationOther'>Is there anything else you think we should be aware of?</label>
                <input type='text' className='form-control' id='medicationOther' />
            </div>

            <div className='form-row'>
                {/* <label htmlFor='certified'>By checking this box I certify that I have filled out this form to the best of my knowledge</label> */}
                <div className="form-radio form-radio-inline my-1" id='certified'>
                    <input className='form-radio-input' type='checkbox' value='certified' id='certified' />
                    <label className='form-radio-label ml-1' htmlFor='certified'>I have filled this form to the best of my ability</label>
                </div>
            </div>

            <div className='form-row'>
                <small id='beforeYouPayCertifyHelpBlock'>I understand this is an Alcohol/Drug free trip and this trip ticket is not transferable to another person. I understand that I have to Attend one Pre-trip or I will not be authorized to attend the Trip. I understand that the refund policy is 100% refund if notified 7 days before the trip, 50% if notified within 7 days AND a replacement is found. If a refund is issued, it must be claimed within 2 weeks of the request.</small>
                <div className="form-radio form-radio-inline my-1" id='beforeYouPayCertify'>
                    <input className='form-radio-input ml-1' type='checkbox' value='beforeYouPayCertify' id='beforeYouPayCertify' />
                    <label className='form-radio-label' htmlFor='beforeYouPayCertify'>Yes, I have read the statement above and understand what is required</label>
                </div>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    medicalInfo: state.tripForm.medicalInfo
});

const mapDispatchToProps = dispatch => ({
    editMedicalInfo: (key, data) => dispatch(editMedicalInfo(key, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicalForm);