import React from 'react'
import "./Patient.css"
import { useState } from 'react';
import PatientFooter from './PatientFooter';
export const Patient1 = ({ setpatient,bgcolor,setbgcolor }) => {
    const [selectedOption, setSelectedOption] = React.useState('');
    const [Forename, setForename] = React.useState('');
    const [Surname, setSurname] = React.useState("")
    const [DOB, setDOB] = useState('')
    const [Address1, setAddress1] = useState('')
    const [Address2, setAddress2] = useState('')
    const [City, setCity] = useState('')
    const [Country, setCountry] = useState('')
    const [Postalcode, setPostalcode] = useState('')
    const [Email, setEmail] = useState('')
    const [Landline, setLandline] = useState('')
    const [Mobile, setMobile] = useState('')
    const [Gender, setGender] = useState('')
    const [Doctor, setDoctor] = useState('')
    const [PatientType, setPatientType] = useState('')
    const [HC2number, setHC2number] = useState('')
    const [HC3PC, setHC3PC] = useState('')
    const [checkboxes, setCheckboxes] = useState({
        sms: false,
        phone: false,
        email: false,
        post: false
    });
    const [promotional, setpromotional] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleInputChangeForename = (event) => {
        setForename(event.target.value);
    };
    const handleInputChangeSurname = (event) => {
        setSurname(event.target.value);
    };
    const handleInputChangeDOB = (event) => {
        setDOB(event.target.value);
    };
    const handleInputChangeAddress1 = (event) => {
        setAddress1(event.target.value);
    };
    const handleInputChangeAddress2 = (event) => {
        setAddress2(event.target.value);
    };
    const handleInputChangeCity = (event) => {
        setCity(event.target.value);
    };
    const handleInputChangeCountry = (event) => {
        setCountry(event.target.value);
    };
    const handleInputChangePostalcode = (event) => {
        setPostalcode(event.target.value);
    };
    const handleInputChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleInputChangeLandline = (event) => {
        setLandline(event.target.value);
    };
    const handleInputChangeMobile = (event) => {
        setMobile(event.target.value);
    };
    const handleInputChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleInputChangeDoctor = (event) => {
        setDoctor(event.target.value);
    };
    const handleInputChangePatientType = (event) => {
        setPatientType(event.target.value);
    };
    const handleInputChangeHC2number = (event) => {
        setHC2number(event.target.value);
    };
    const handleInputChangeHC3PC = (event) => {
        setHC3PC(event.target.value);
    };
    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const handleCheckboxChange = (event) => {
        const option = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedOptions1((prevSelectedOptions) => [...prevSelectedOptions, option]);
        } else {
            setSelectedOptions1((prevSelectedOptions) =>
                prevSelectedOptions.filter((selectedOption) => selectedOption !== option)
            );
        }
    };
    const handleCheckboxChangehappy = (event) => {
        const { name, checked } = event.target;
        setCheckboxes(prevCheckboxes => ({
            ...prevCheckboxes,
            [name]: checked
        }));
    }
    const handleOptionChangepromotional = (e) => {
        setpromotional(e.target.value);
    };
    const statechange=()=>{
        setpatient(false)
        setbgcolor(false)
    }
    const statechange2=()=>{
        setpatient(true)
        setbgcolor(true)
    }
    return (
        <>
            <div className='patient-div' >
                <div className='page_title' style={{marginBottom:'1rem'}} >New Patient</div>
                <div className="inner-patient-div">
                    <div className="headings">
                        <div  className="new-patient-inner" style={{background: bgcolor ? "#DAE4FD" : "#4C004A"}}>
                            <div className='n-p-t' onClick={statechange}>New Patient</div>
                        </div>
                        <div style={{background: bgcolor ? "#4C004A" : "#DAE4FD"}} className="existing-patient">
                            <div className="e-p-r" onClick={statechange2}>Existing Patient Record</div>
                        </div>
                    </div>
                </div>
                <div className="create-new-patient-div">
                    <div className="c-n-p">Create New Patient</div>
                    <div className="input-big-box">
                        <div className="input-small-box">
                            <div class="form-group">
                                <div className="label"><label htmlFor="selectOption" > Title </label></div>
                                <select className="input-tag" id="selectOption" value={selectedOption} onChange={handleOptionChange}>
                                    <option value=""> Select </option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                    <option value="Dr">Dr</option>
                                    <option value="Professor">Professor</option>
                                    <option value="Sir">Sir</option>
                                    <option value="Madam">Madam</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Forename" > Forename </label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Forename"
                                    placeholder='Joe'
                                    value={Forename}
                                    onChange={handleInputChangeForename}
                                />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Surname" > Surname </label></div>

                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Surname"
                                    placeholder='Joe'
                                    value={Surname}
                                    onChange={handleInputChangeSurname}
                                />
                            </div>
                        </div>
                        <div className="input-small-box">
                            <div class="form-group">
                                <div className="label"><label htmlFor="DOB" > DOB </label></div>
                                <input type='date' className="input-tag" id="DOB" value={DOB} onChange={handleInputChangeDOB} />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Address1" > Address 1</label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Address1"
                                    placeholder='Type Here'
                                    value={Address1}
                                    onChange={handleInputChangeAddress1}
                                />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Address2" > Address 2 </label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Address2"
                                    placeholder='Type Here'
                                    value={Address2}
                                    onChange={handleInputChangeAddress2}
                                />
                            </div>
                        </div>
                        <div className="input-small-box">
                            <div class="form-group">
                                <div className="label"><label htmlFor="City" > Town/City </label></div>
                                <input type='text' placeholder='Type Here' className="input-tag" id="City" value={City} onChange={handleInputChangeCity} />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Country" > Country </label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Country"
                                    placeholder='Type Here'
                                    value={Country}
                                    onChange={handleInputChangeCountry}
                                />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Postalcode" > Postal Code </label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Postalcode"
                                    placeholder='Type Here'
                                    value={Postalcode}
                                    onChange={handleInputChangePostalcode}
                                />
                            </div>
                        </div>
                        <div className="input-small-box">
                            <div class="form-group">
                                <div className="label"><label htmlFor="Email" > Email </label></div>
                                <input type='email' placeholder='Type Here' className="input-tag" id="Email" value={Email} onChange={handleInputChangeEmail} />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Landline" > Landline </label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Landline"
                                    placeholder='Type Here'
                                    value={Landline}
                                    onChange={handleInputChangeLandline}
                                />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Mobile" > Mobile </label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Mobile"
                                    placeholder='Type Here'
                                    value={Mobile}
                                    onChange={handleInputChangeMobile}
                                />
                            </div>
                        </div>
                        <div className="input-small-box">
                            <div class="form-group">
                                <div className="label"><label htmlFor="selectOptionGender" > Gender </label></div>
                                <select className="input-tag" id="selectOptionGender" value={Gender} onChange={handleInputChangeGender}>
                                    <option value=""> Select </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="Forename" > Doctor </label></div>
                                <input
                                    type="text"
                                    className="input-tag"
                                    id="Doctor"
                                    placeholder='Type Here'
                                    value={Doctor}
                                    onChange={handleInputChangeDoctor}
                                />
                            </div>
                            <div class="form-group">
                                <div className="label"><label htmlFor="selectOptionPatientType" > Patient Type </label></div>
                                <select className="input-tag" id="selectOptionPatientType" value={PatientType} onChange={handleInputChangePatientType}>
                                    <option value=""> Select </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>

                        </div>
                        <div className="input-small-box">
                            <div class="form-group">
                                <div className="label"><label htmlFor="HC2number" > HC2/HC3 Number </label></div>
                                <input type='number' placeholder='Type Here' className="input-tag" id="HC2number" value={HC2number} onChange={handleInputChangeHC2number} />
                            </div>
                            <div className="form-group">
                                <div className="label"><label htmlFor="HC3PC" > HC3 Patient Contribution (&pound;) </label></div>
                                <input
                                    type="number"
                                    className="input-tag"
                                    id="HC3PC"
                                    placeholder='Type Here'
                                    value={HC3PC}
                                    onChange={handleInputChangeHC3PC}
                                />
                            </div>
                            <div className="form-group-checkbox">
                                <label className='label-checkbox'>
                                    <input
                                        type="checkbox"
                                        value="Option 1"
                                        className='input-checkbox'
                                        checked={selectedOptions1.includes('Option 1')}
                                        onChange={handleCheckboxChange}
                                    />
                                    Patient Has Glaucoma
                                </label>
                                <label className='label-checkbox'>
                                    <input
                                        type="checkbox"
                                        value="Option 2"
                                        checked={selectedOptions1.includes('Option 2')}
                                        onChange={handleCheckboxChange}
                                    />
                                    Diabetic
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="checkbox-happy">
                        <p className="happy-contact ">Happy to be contacted by : </p>
                        <div className="checkbox-happy-all-labels">
                            <label className='checkbox-happy-label'>
                                <input
                                    type="checkbox"
                                    name="sms"
                                    checked={checkboxes.sms}
                                    onChange={handleCheckboxChangehappy}
                                />
                                SMS
                            </label>

                            <label className='checkbox-happy-label'>
                                <input
                                    type="checkbox"
                                    name="phone"
                                    checked={checkboxes.phone}
                                    onChange={handleCheckboxChangehappy}
                                />
                                Phone
                            </label>

                            <label className='checkbox-happy-label'>
                                <input
                                    type="checkbox"
                                    name="email"
                                    checked={checkboxes.email}
                                    onChange={handleCheckboxChangehappy}
                                />
                                Email
                            </label>

                            <label className='checkbox-happy-label'>
                                <input
                                    type="checkbox"
                                    name="post"
                                    checked={checkboxes.post}
                                    onChange={handleCheckboxChangehappy}
                                />
                                Post
                            </label>

                        </div>
                    </div>
                    <div className="promo-communication">
                        <p className="happy-contact">Are you happy to recieve promotional communication? </p>
                        <div className="promo-communication-all-labels">
                            <label className='promo-communication-label'>
                                <input
                                    type="radio"
                                    value="yes"
                                    checked={promotional === 'yes'}
                                    onChange={handleOptionChangepromotional}
                                />
                                Yes
                            </label>

                            <label className='promo-communication-label'>
                                <input
                                    type="radio"
                                    value="no"
                                    checked={promotional === 'no'}
                                    onChange={handleOptionChangepromotional}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="promo-communication">
                        <p className="happy-contact"> Notes </p>
                        <div className="promo-communication-all-labels text-area-div">
                            <textarea name="" id="" cols="100" rows="5" className='text-area'>Lorem ipsum dolor sit amet</textarea>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className='btn'>Save</button>
                    </div>
                </div>
            </div>
            <PatientFooter></PatientFooter>
        </>
    )
}
export default Patient1;