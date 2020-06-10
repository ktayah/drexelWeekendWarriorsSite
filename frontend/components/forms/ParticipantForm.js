import React from 'react';
import { connect } from 'react-redux';

const ParticipantForm = ({participantInfo, editParticipantInfo, activity}) => {
    const years = ['freshman', 'sophomore', 'pre-junior', 'junior', 'senior', 'graduate'];
    return (
        <form>
            <h1>Trip Participant Info</h1>
            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' className='form-control' id='firstName' />
                </div>
                <div className='col form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' className='form-control' id='lastName' />
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='firstName'>Email</label>
                    <input type='email' className='form-control' id='Email' />
                </div>
                <div className='col form-group'>
                    <label htmlFor='confirmEmail'>Confirm Email</label>
                    <input type='email' className='form-control' id='confirmEmail' />
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='phoneNum'>Phone Number</label>
                    <input type='text' className='form-control' id='phoneNum' />
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='emergencyName'>Emergency Contact Name</label>
                    <input type='text' className='form-control' id='emergencyName' />
                </div>
                <div className='col form-group'>
                    <label htmlFor='emergencyNum'>Emergency Contact Number</label>
                    <input type='text' className='form-control' id='emergencyNum' />
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='firstTrip'>Is this your first Weekend Warrior's Trip?</label>
                    </div>
                    <div className='row mx-auto'>
                        <div className="form-radio form-radio-inline pr-5" id='firstTrip'>
                            <input className='form-radio-input' type='radio' value='yes' id='yesOption' />
                            <label className='form-radio-label' htmlFor='yesOption'>Yes</label>
                        </div>
                        <div className="form-radio form-radio-inline" id='firstTrip'>
                            <input className='form-radio-input' type='radio' value='no' id='noOption' />
                            <label className='form-radio-label' htmlFor='noOption'>No</label>
                        </div>
                    </div>
                </div>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='firstActivity'>Have you been {activity} before?</label>
                    </div>
                    <div className='row mx-auto'>
                        <div className="form-radio form-radio-inline pr-5" id='firstActivity'>
                            <input className='form-radio-input' type='radio' value='yes' id='yesOption' />
                            <label className='form-radio-label' htmlFor='yesOption'>Yes</label>
                        </div>
                        <div className="form-radio form-radio-inline" id='firstActivity'>
                            <input className='form-radio-input' type='radio' value='no' id='noOption' />
                            <label className='form-radio-label' htmlFor='noOption'>No</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='class'>What class are you?</label>
                    </div>
                    <div className='row mx-auto'>
                        {years.map(year => 
                            <div className="form-radio form-radio-inline pr-5" id='class'>
                                <input className='form-radio-input' type='radio' value={year} id={year} />
                                <label className='form-radio-label' htmlFor={year}>{year.substring(0, 1).toUpperCase() + year.substring(1)}</label>
                            </div>
                        )}
                        {/* <div className="form-radio form-radio-inline pr-5" id='class'>
                            <input className='form-radio-input' type='radio' value='freshman' id='freshman' />
                            <label className='form-radio-label' htmlFor='freshman'>Freshman</label>
                        </div>
                        <div className="form-radio form-radio-inline pr-5" id='class'>
                            <input className='form-radio-input' type='radio' value='sophomore' id='sophomore' />
                            <label className='form-radio-label' htmlFor='sophomore'>Sophomore</label>
                        </div>
                        <div className="form-radio form-radio-inline pr-5" id='class'>
                            <input className='form-radio-input' type='radio' value='prejunior' id='prejunior' />
                            <label className='form-radio-label' htmlFor='prejunior'>Pre-Junior</label>
                        </div>
                        <div className="form-radio form-radio-inline pr-5" id='class'>
                            <input className='form-radio-input' type='radio' value='junior' id='junior' />
                            <label className='form-radio-label' htmlFor='junior'>Junior</label>
                        </div>
                        <div className="form-radio form-radio-inline pr-5" id='class'>
                            <input className='form-radio-input' type='radio' value='senior' id='senior' />
                            <label className='form-radio-label' htmlFor='senior'>Senior</label>
                        </div>
                        <div className="form-radio form-radio-inline" id='class'>
                            <input className='form-radio-input' type='radio' value='graduate' id='graduate' />
                            <label className='form-radio-label' htmlFor='graduate'>Graduate Student</label>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='gender'>Gender</label>
                    </div>
                    <div className='row mx-auto'>
                        <div className="form-radio form-radio-inline pr-5" id='gender'>
                            <input className='form-radio-input' type='radio' value='male' id='male' />
                            <label className='form-radio-label' htmlFor='male'>Male</label>
                        </div>
                        <div className="form-radio form-radio-inline pr-5" id='gender'>
                            <input className='form-radio-input' type='radio' value='female' id='female' />
                            <label className='form-radio-label' htmlFor='female'>Female</label>
                        </div>
                        <div className="form-radio form-radio-inline" id='gender'>
                            <input className='form-radio-input' type='radio' value='other' id='other' />
                            <label className='form-radio-label' htmlFor='other'>Other/Prefer not to answer</label>
                        </div>
                    </div>
                </div>
                <div className='col form-group'>
                    <div className='row mx-auto'>
                        <label htmlFor='international'>Are you an international student</label>
                    </div>
                    <div className='row mx-auto'>
                        <div className="form-radio form-radio-inline pr-5" id='international'>
                            <input className='form-radio-input' type='radio' value='yes' id='yesOption' />
                            <label className='form-radio-label' htmlFor='yesOption'>Yes</label>
                        </div>
                        <div className="form-radio form-radio-inline pr-5" id='international'>
                            <input className='form-radio-input' type='radio' value='no' id='noOption' />
                            <label className='form-radio-label' htmlFor='noOption'>No</label>
                        </div>
                        <div className="form-radio form-radio-inline" id='international'>
                            <input className='form-radio-input' type='radio' value='other' id='other' />
                            <label className='form-radio-label' htmlFor='other'>Prefer not to answer</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='form-row'>
                <div className='col form-group'>
                    <label htmlFor='howYouFoundUs'>Where did you hear about this ticket sale? (Select all that apply)</label>
                </div>
                <div className='row mx-auto'>
                    <div className="form-radio form-radio-inline pr-5" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='email' id='email' />
                        <label className='form-radio-label' htmlFor='email'>Email</label>
                    </div>
                    <div className="form-radio form-radio-inline pr-5" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='facebook' id='facebook' />
                        <label className='form-radio-label' htmlFor='facebook'>Facebook</label>
                    </div>
                    <div className="form-radio form-radio-inline pr-5" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='instagram' id='instagram' />
                        <label className='form-radio-label' htmlFor='instagram'>Instagram</label>
                    </div>
                    <div className="form-radio form-radio-inline pr-5" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='dragonLink' id='dragonLink' />
                        <label className='form-radio-label' htmlFor='dragonLink'>DragonLink</label>
                    </div>
                    <div className="form-radio form-radio-inline pr-5" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='infonet' id='infonet' />
                        <label className='form-radio-label' htmlFor='infonet'>Infonet (TV Screens around Campus)</label>
                    </div>
                    <div className="form-radio form-radio-inline pr-5" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='friend' id='friend' />
                        <label className='form-radio-label' htmlFor='friend'>Friend/Word of Mouth</label>
                    </div>
                    <div className="form-radio form-radio-inline pr-5" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='tripLeader' id='tripLeader' />
                        <label className='form-radio-label' htmlFor='tripLeader'>I'm a trip leader (Do not select any other option if this is checked)</label>
                    </div>
                    <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                        <input className='form-radio-input' type='radio' value='other' id='other' />
                        <label className='form-radio-label' htmlFor='other'>Other</label>
                    </div>
                </div>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    participantInfo: state.tripForm.participantInfo,
});

const mapDispatchToProps = dispatch => ({
    editParticipantInfo: (key, data) => dispatch(editParticipantInfo(key, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantForm);