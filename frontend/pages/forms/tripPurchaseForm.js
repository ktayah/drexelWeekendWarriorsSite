import Layout from "../../components/Layout";
import config from '../../config';

const TripPurchaseForm = ({activity, multiSignup = false}) => {
    return (
        <Layout showNavBar={false}>
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className="display-5 text-center">Trip Purchase Form</h1>
                </div>
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
                                <label htmlFor='firstTrip'>Is this your first Weekend Warrior Trip?</label>
                            </div>
                            <div className='row mx-auto'>
                                <div className="form-radio form-radio-inline" id='firstTrip'>
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
                                <label htmlFor='firstActivity'>Have you been "INSERT ACTIVITY HERE" before?</label>
                            </div>
                            <div className='row mx-auto'>
                                <div className="form-radio form-radio-inline" id='firstActivity'>
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
                                <div className="form-radio form-radio-inline" id='class'>
                                    <input className='form-radio-input' type='radio' value='freshman' id='freshman' />
                                    <label className='form-radio-label' htmlFor='freshman'>Freshman</label>
                                </div>
                                <div className="form-radio form-radio-inline" id='class'>
                                    <input className='form-radio-input' type='radio' value='sophomore' id='sophomore' />
                                    <label className='form-radio-label' htmlFor='sophomore'>Sophomore</label>
                                </div>
                                <div className="form-radio form-radio-inline" id='class'>
                                    <input className='form-radio-input' type='radio' value='prejunior' id='prejunior' />
                                    <label className='form-radio-label' htmlFor='prejunior'>Pre-Junior</label>
                                </div>
                                <div className="form-radio form-radio-inline" id='class'>
                                    <input className='form-radio-input' type='radio' value='junior' id='junior' />
                                    <label className='form-radio-label' htmlFor='junior'>Junior</label>
                                </div>
                                <div className="form-radio form-radio-inline" id='class'>
                                    <input className='form-radio-input' type='radio' value='senior' id='senior' />
                                    <label className='form-radio-label' htmlFor='senior'>Senior</label>
                                </div>
                                <div className="form-radio form-radio-inline" id='class'>
                                    <input className='form-radio-input' type='radio' value='graduate' id='graduate' />
                                    <label className='form-radio-label' htmlFor='graduate'>Graduate Student</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='col form-group'>
                            <div className='row mx-auto'>
                                <label htmlFor='gender'>Gender</label>
                            </div>
                            <div className='row mx-auto'>
                                <div className="form-radio form-radio-inline" id='gender'>
                                    <input className='form-radio-input' type='radio' value='male' id='male' />
                                    <label className='form-radio-label' htmlFor='male'>Male</label>
                                </div>
                                <div className="form-radio form-radio-inline" id='gender'>
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
                                <div className="form-radio form-radio-inline" id='international'>
                                    <input className='form-radio-input' type='radio' value='yes' id='yesOption' />
                                    <label className='form-radio-label' htmlFor='yesOption'>Yes</label>
                                </div>
                                <div className="form-radio form-radio-inline" id='international'>
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
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='email' id='email' />
                                <label className='form-radio-label' htmlFor='email'>Email</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='facebook' id='facebook' />
                                <label className='form-radio-label' htmlFor='facebook'>Facebook</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='instagram' id='instagram' />
                                <label className='form-radio-label' htmlFor='instagram'>Instagram</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='dragonLink' id='dragonLink' />
                                <label className='form-radio-label' htmlFor='dragonLink'>DragonLink</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='infonet' id='infonet' />
                                <label className='form-radio-label' htmlFor='infonet'>Infonet (TV Screens around Campus)</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='friend' id='friend' />
                                <label className='form-radio-label' htmlFor='friend'>Friend/Word of Mouth</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='tripLeader' id='tripLeader' />
                                <label className='form-radio-label' htmlFor='tripLeader'>I'm a trip leader (Do not select any other option if this is checked)</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='howYouFoundUs'>
                                <input className='form-radio-input' type='radio' value='other' id='other' />
                                <label className='form-radio-label' htmlFor='other'>Other</label>
                            </div>
                        </div>
                    </div>
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
                                <label className='form-radio-label' htmlFor='asthma'>Asthma</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='brokenBones' id='brokenBones' />
                                <label className='form-radio-label' htmlFor='brokenBones'>Broken Bones</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='diabetes' id='diabetes' />
                                <label className='form-radio-label' htmlFor='diabetes'>Diabetes</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='seizures' id='seizures' />
                                <label className='form-radio-label' htmlFor='seizures'>seizures</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='heartIssues' id='heartIssues' />
                                <label className='form-radio-label' htmlFor='heartIssues'>Heart Issues</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='neckProblems' id='neckProblems' />
                                <label className='form-radio-label' htmlFor='neckProblems'>Neck Problems</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='highBloodPressure' id='highBloodPressure' />
                                <label className='form-radio-label' htmlFor='highBloodPressure'>High Blood Pressure</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='backProblems' id='backProblems' />
                                <label className='form-radio-label' htmlFor='backProblems'>Back Problems</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='kneeProblems' id='kneeProblems' />
                                <label className='form-radio-label' htmlFor='kneeProblems'>Knee Problems</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='stroke' id='stroke' />
                                <label className='form-radio-label' htmlFor='stroke'>Stroke</label>
                            </div>
                            <div className="form-radio form-radio-inline" id='prexisitingConditions'>
                                <input className='form-radio-input' type='checkbox' value='other' id='other' />
                                <label className='form-radio-label' htmlFor='other'>Other</label>
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
                        <label htmlFor='medicationOther'>Other</label>
                        <label htmlFor='medicationOther'>Is there anything else you think we should be aware of?</label>
                        <input type='text' className='form-control' id='medicationOther' />
                    </div>

                    <div className='form-row'>
                        <label htmlFor='certified'>Certification</label>
                        <label htmlFor='certified'>By checking this box I certify that I have filled out this form to the best of my knowledge</label>
                        <div className="form-radio form-radio-inline" id='certified'>
                            <input className='form-radio-input' type='checkbox' value='certified' id='certified' />
                            <label className='form-radio-label' htmlFor='certified'>Yes I have filled this to the best of my ability</label>
                        </div>
                    </div>

                    <div className='form-row'>
                        <label htmlFor='beforeYouPayCertify'>Before You Pay</label>
                        <p>I understand this is an Alcohol/Drug free trip and this trip ticket is not transferable to another person. I understand that I have to Attend one Pre-trip or I will not be authorized to attend the Trip. I understand that the refund policy is 100% refund if notified 7 days before the trip, 50% if notified within 7 days AND a replacement is found. If a refund is issued, it must be claimed within 2 weeks of the request.</p>
                        <div className="form-radio form-radio-inline" id='beforeYouPayCertify'>
                            <input className='form-radio-input' type='checkbox' value='beforeYouPayCertify' id='beforeYouPayCertify' />
                            <label className='form-radio-label' htmlFor='beforeYouPayCertify'>Yes, I have read the statement above and understand what is required</label>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default TripPurchaseForm;