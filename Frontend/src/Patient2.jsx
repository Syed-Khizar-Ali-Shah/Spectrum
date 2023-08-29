import React from 'react'
import { useState } from 'react'
import "./Patient.css"
import "./Patient2.css"
import PatientFooter from './PatientFooter'
const Patient2 = ({ setpatient, bgcolor, setbgcolor }) => {
    const [PatientID, setPatientID] = useState('')
    const [Patientname, setPatientname] = useState('')
    const [Date1, setDate1] = useState('')
    const handleInputChangePatientID = (event) => {
        setPatientID(event.target.value);
    };
    const handleInputChangePatientname = (event) => {
        setPatientname(event.target.value);
    };
    const handleInputChangeDate1 = (event) => {
        setDate1(event.target.value);
    };
    const statechange = () => {
        setpatient(false)
        setbgcolor(false)
    }
    const statechange2 = () => {
        setpatient(true)
        setbgcolor(true)
    }
    return (
        <div className='patient2-big-div'>
            <div className="patient2-header-div">
                <div className="existing-patient-div">
                    <div className='existing-patient-record'>Existing Patient Record</div>
                    <div className="existing-patient-inputs">
                        <div className="existing-patient-inputs-div">
                            <div className="label-existing-patient"><label htmlFor="PatientID" > Patient ID : </label></div>
                            <input
                                type="text"
                                className="existing-patient-inner-inputs"
                                id="PatientID"
                                placeholder='Patient Id'
                                value={PatientID}
                                onChange={handleInputChangePatientID}
                            />
                        </div>
                        <div className="existing-patient-inputs-div">

                            <div className="label-existing-patient"><label htmlFor="Patientname" > Patient Name : </label></div>
                            <input
                                type="text"
                                className="existing-patient-inner-inputs"
                                id="Patientname"
                                placeholder='Patient Name'
                                value={Patientname}
                                onChange={handleInputChangePatientname}
                            />
                        </div>
                    </div>
                </div>

                <div className="inner-patient-div">
                    <div className="headings">
                        <div style={{ background: bgcolor ? "#DAE4FD" : "#4C004A" }} className="new-patient-inner">
                            <div className='n-p-t' style={{ color: bgcolor ? " #212529 " : " #FFFFFF" }} onClick={statechange}>New Patient</div>
                        </div>
                        <div style={{ background: bgcolor ? " #4C004A" : " #DAE4FD " }} className="existing-patient">
                            <div className="e-p-r" style={{ color: bgcolor ? " #FFFFFF" : " #212529 " }} onClick={statechange2}>Existing Patient Record</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slight-test-history-div">
                <div className='slight-test-history'>Slight Test History</div>

                <div className="slight-test-history-inputs-div">
                    <div className="label-slight-test-history-div"><label htmlFor="date1" > Date: </label></div>
                    <input
                        type="date"
                        className="slight-test-history-inner-inputs"
                        id="date1"
                        placeholder='19/01/2011'
                        value={Date1}
                        onChange={handleInputChangeDate1}
                    />
                </div>
            </div>
            <div className="history-record-main-div">
                <div className="history-record-main-upper-div">
                    <div className="history-record-inner-div-1">
                        <div className="history-record-inner-div-1-small-divs">Record Test</div>
                        <div className="history-record-inner-div-1-small-divs">Test Date</div>
                        <div className="history-record-inner-div-1-small-divs">Payment</div>

                    </div>
                    <div className="history-record-inner-div-2">
                        <div className="history-record-inner-div-2-small-divs">Frame Details</div>
                        <div className="history-record-inner-div-2-small-divs">Lens Type</div>
                        <div className="history-record-inner-div-2-small-divs">Action</div>
                    </div>

                </div>
                <div className="history-record-main-lower-div">
                    <div className="history-record-inner-lower-div-1">
                        <p className="history-record-inner-lower-div-1-small-divs">1234</p>
                        <p className="history-record-inner-lower-div-1-small-divs">12/1/2023</p>
                        <p className="history-record-inner-lower-div-1-small-divs">&pound;3.65</p>

                    </div>
                    <div className="history-record-inner-lower-div-2">
                        <div className="history-record-inner-lower-div-2-small-divs">
                            <p className="history-record-inner-div-2-small-divs-inner-text">Final RX</p>
                            <div className="history-record-inner-div-2-small-divs-inputs-container">
                                <div className="history-record-inner-div-2-small-divs-inputs-container1">
                                    <label htmlFor="" className="history-record-inner-div-2-small-divs-inputs-container1-label">RE:</label>
                                    <div id='' className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv">
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className="history-record-inner-div-2-small-divs-inputs-container1">
                                    <label htmlFor="" className="history-record-inner-div-2-small-divs-inputs-container1-label" style={{ margin: "1px" }}>LE:</label>
                                    <div id='' className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv">
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history-record-inner-lower-div-2-small-divs-center">
                            <p className="history-record-inner-div-2-small-divs-inner-text">Lens Name/Type</p>
                            <div className="history-record-inner-div-2-small-divs-center-div">
                                <div className="history-record-inner-div-2-small-divs-center-div1">
                                    <div className="history-record-inner-div-2-small-divs-center-div-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                    <input
                                        type="text"
                                        className="history-record-inner-div-2-small-divs-center-div-innerdiv-input-tag"
                                        id="SPH"
                                    // value={Country}
                                    // onChange={handleInputChangeCountry}
                                    />
                                    <svg width="28" height="22" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189" />
                                    </svg>

                                </div>
                                <div className="history-record-inner-div-2-small-divs-center-div1">

                                    <div className="history-record-inner-div-2-small-divs-center-div-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                    <input
                                        type="text"
                                        className="history-record-inner-div-2-small-divs-center-div-innerdiv-input-tag"
                                        id="SPH"
                                    // value={Country}
                                    // onChange={handleInputChangeCountry}
                                    />
                                    <svg width="28" height="22" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div className="history-record-inner-div-2-small-divs-last-div">
                            <div className="history-record-inner-div-2-small-divs-end-div">


                                <svg width="23" height="24" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8" />
                                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8" />
                                </svg>
                                <svg width="21" height="25" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M22.3729 11.0401C22.3729 11.1335 21.6845 20.3975 21.2913 24.2964C21.0451 26.689 19.5954 28.1402 17.4209 28.1815C15.7502 28.2213 14.1146 28.2351 12.5054 28.2351C10.7969 28.2351 9.12614 28.2213 7.50437 28.1815C5.40272 28.1279 3.9518 26.6478 3.71814 24.2964C3.31364 20.3838 2.6378 11.1335 2.62523 11.0401C2.61267 10.7584 2.69809 10.4904 2.87145 10.2732C3.0423 10.0726 3.28851 9.95166 3.54729 9.95166H21.4634C21.7209 9.95166 21.9546 10.0726 22.1393 10.2732C22.3114 10.4904 22.398 10.7584 22.3729 11.0401Z" fill="#C03221" />
                                    <path d="M24.125 6.21404C24.125 5.64921 23.7067 5.20669 23.2042 5.20669H19.4381C18.6718 5.20669 18.006 4.62675 17.8351 3.80905L17.6241 2.8072C17.3289 1.59646 16.3101 0.748535 15.1669 0.748535H9.83432C8.6786 0.748535 7.66986 1.59646 7.36334 2.87317L7.16612 3.81043C6.99402 4.62675 6.32822 5.20669 5.56319 5.20669H1.79706C1.29332 5.20669 0.875 5.64921 0.875 6.21404V6.73626C0.875 7.28735 1.29332 7.74361 1.79706 7.74361H23.2042C23.7067 7.74361 24.125 7.28735 24.125 6.73626V6.21404Z" fill="#C03221" />
                                </svg>


                            </div>
                            <div className="history-record-inner-div-2-small-divs-end-div-empty">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="slight-test-history-div">
                <div className='slight-test-history'>Cotact Lens History</div>

                <div className="slight-test-history-inputs-div">
                    <div className="label-slight-test-history-div"><label htmlFor="date1" > Date: </label></div>
                    <input
                        type="date"
                        className="slight-test-history-inner-inputs"
                        id="date1"
                        placeholder='19/01/2011'
                        value={Date1}
                        onChange={handleInputChangeDate1}
                    />
                </div>
            </div>
            <div className="history-record-main-div">
                <div className="history-record-main-upper-div">
                    <div className="history-record-inner-div-1">
                        <div className="history-record-inner-div-1-small-divs">Record Test</div>
                        <div className="history-record-inner-div-1-small-divs">Test Date</div>
                        <div className="history-record-inner-div-1-small-divs">Payment</div>

                    </div>
                    <div className="history-record-inner-div-2">
                        <div className="history-record-inner-div-2-small-divs">Frame Details</div>
                        <div className="history-record-inner-div-2-small-divs">Lens Type</div>
                        <div className="history-record-inner-div-2-small-divs">Action</div>
                    </div>

                </div>
                <div className="history-record-main-lower-div">
                    <div className="history-record-inner-lower-div-1">
                        <p className="history-record-inner-lower-div-1-small-divs">1234</p>
                        <p className="history-record-inner-lower-div-1-small-divs">12/1/2023</p>
                        <p className="history-record-inner-lower-div-1-small-divs">&pound;3.65</p>

                    </div>
                    <div className="history-record-inner-lower-div-2">
                        <div className="history-record-inner-lower-div-2-small-divs">
                            <p className="history-record-inner-div-2-small-divs-inner-text">Final RX</p>
                            <div className="history-record-inner-div-2-small-divs-inputs-container">
                                <div className="history-record-inner-div-2-small-divs-inputs-container1">
                                    <label htmlFor="" className="history-record-inner-div-2-small-divs-inputs-container1-label">RE:</label>
                                    <div id='' className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv">
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className="history-record-inner-div-2-small-divs-inputs-container1">
                                    <label htmlFor="" className="history-record-inner-div-2-small-divs-inputs-container1-label" style={{ margin: "1px" }}>LE:</label>
                                    <div id='' className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv">
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history-record-inner-lower-div-2-small-divs-center">
                            <p className="history-record-inner-div-2-small-divs-inner-text">Lens Name/Type</p>
                            <div className="history-record-inner-div-2-small-divs-center-div">
                                <div className="history-record-inner-div-2-small-divs-center-div1">
                                    <div className="history-record-inner-div-2-small-divs-center-div-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                    <input
                                        type="text"
                                        className="history-record-inner-div-2-small-divs-center-div-innerdiv-input-tag"
                                        id="SPH"
                                    // value={Country}
                                    // onChange={handleInputChangeCountry}
                                    />
                                    <svg width="28" height="22" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189" />
                                    </svg>

                                </div>
                                <div className="history-record-inner-div-2-small-divs-center-div1">

                                    <div className="history-record-inner-div-2-small-divs-center-div-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                    <input
                                        type="text"
                                        className="history-record-inner-div-2-small-divs-center-div-innerdiv-input-tag"
                                        id="SPH"
                                    // value={Country}
                                    // onChange={handleInputChangeCountry}
                                    />
                                    <svg width="28" height="22" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div className="history-record-inner-div-2-small-divs-last-div">
                            <div className="history-record-inner-div-2-small-divs-end-div">


                                <svg width="23" height="24" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8" />
                                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8" />
                                </svg>
                                <svg width="21" height="25" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M22.3729 11.0401C22.3729 11.1335 21.6845 20.3975 21.2913 24.2964C21.0451 26.689 19.5954 28.1402 17.4209 28.1815C15.7502 28.2213 14.1146 28.2351 12.5054 28.2351C10.7969 28.2351 9.12614 28.2213 7.50437 28.1815C5.40272 28.1279 3.9518 26.6478 3.71814 24.2964C3.31364 20.3838 2.6378 11.1335 2.62523 11.0401C2.61267 10.7584 2.69809 10.4904 2.87145 10.2732C3.0423 10.0726 3.28851 9.95166 3.54729 9.95166H21.4634C21.7209 9.95166 21.9546 10.0726 22.1393 10.2732C22.3114 10.4904 22.398 10.7584 22.3729 11.0401Z" fill="#C03221" />
                                    <path d="M24.125 6.21404C24.125 5.64921 23.7067 5.20669 23.2042 5.20669H19.4381C18.6718 5.20669 18.006 4.62675 17.8351 3.80905L17.6241 2.8072C17.3289 1.59646 16.3101 0.748535 15.1669 0.748535H9.83432C8.6786 0.748535 7.66986 1.59646 7.36334 2.87317L7.16612 3.81043C6.99402 4.62675 6.32822 5.20669 5.56319 5.20669H1.79706C1.29332 5.20669 0.875 5.64921 0.875 6.21404V6.73626C0.875 7.28735 1.29332 7.74361 1.79706 7.74361H23.2042C23.7067 7.74361 24.125 7.28735 24.125 6.73626V6.21404Z" fill="#C03221" />
                                </svg>


                            </div>
                            <div className="history-record-inner-div-2-small-divs-end-div-empty">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="slight-test-history-div">
                <div className='slight-test-history'>Dispensing History</div>

                <div className="slight-test-history-inputs-div">
                    <div className="label-slight-test-history-div"><label htmlFor="date1" > Date: </label></div>
                    <input
                        type="date"
                        className="slight-test-history-inner-inputs"
                        id="date1"
                        placeholder='19/01/2011'
                        value={Date1}
                        onChange={handleInputChangeDate1}
                    />
                </div>
            </div>
            <div className="history-record-main-div">
                <div className="history-record-main-upper-div">
                    <div className="history-record-inner-div-1">
                        <div className="history-record-inner-div-1-small-divs">Record Test</div>
                        <div className="history-record-inner-div-1-small-divs">Test Date</div>
                        <div className="history-record-inner-div-1-small-divs">Payment</div>

                    </div>
                    <div className="history-record-inner-div-2">
                        <div className="history-record-inner-div-2-small-divs">Frame Details</div>
                        <div className="history-record-inner-div-2-small-divs">Lens Type</div>
                        <div className="history-record-inner-div-2-small-divs">Action</div>
                    </div>

                </div>
                <div className="history-record-main-lower-div">
                    <div className="history-record-inner-lower-div-1">
                        <p className="history-record-inner-lower-div-1-small-divs">1234</p>
                        <p className="history-record-inner-lower-div-1-small-divs">12/1/2023</p>
                        <p className="history-record-inner-lower-div-1-small-divs">&pound;3.65</p>

                    </div>
                    <div className="history-record-inner-lower-div-2">
                        <div className="history-record-inner-lower-div-2-small-divs">
                            <p className="history-record-inner-div-2-small-divs-inner-text">Final RX</p>
                            <div className="history-record-inner-div-2-small-divs-inputs-container">
                                <div className="history-record-inner-div-2-small-divs-inputs-container1">
                                    <label htmlFor="" className="history-record-inner-div-2-small-divs-inputs-container1-label">RE:</label>
                                    <div id='' className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv">
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>

                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className="history-record-inner-div-2-small-divs-inputs-container1">
                                    <label htmlFor="" className="history-record-inner-div-2-small-divs-inputs-container1-label" style={{ margin: "1px" }}>LE:</label>
                                    <div id='' className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv">
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>
                                        <div className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-form-group">
                                            <input
                                                type="text"
                                                className="history-record-inner-div-2-small-divs-inputs-container1-innerdiv-input-tag"
                                                id="SPH"
                                            // value={Country}
                                            // onChange={handleInputChangeCountry}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history-record-inner-lower-div-2-small-divs-center">
                            <p className="history-record-inner-div-2-small-divs-inner-text">Lens Name/Type</p>
                            <div className="history-record-inner-div-2-small-divs-center-div">
                                <div className="history-record-inner-div-2-small-divs-center-div1">
                                    <div className="history-record-inner-div-2-small-divs-center-div-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                    <input
                                        type="text"
                                        className="history-record-inner-div-2-small-divs-center-div-innerdiv-input-tag"
                                        id="SPH"
                                    // value={Country}
                                    // onChange={handleInputChangeCountry}
                                    />
                                    <svg width="28" height="22" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189" />
                                    </svg>

                                </div>
                                <div className="history-record-inner-div-2-small-divs-center-div1">

                                    <div className="history-record-inner-div-2-small-divs-center-div-innerdiv-label"><label htmlFor="SPH" > SPH </label></div>
                                    <input
                                        type="text"
                                        className="history-record-inner-div-2-small-divs-center-div-innerdiv-input-tag"
                                        id="SPH"
                                    // value={Country}
                                    // onChange={handleInputChangeCountry}
                                    />
                                    <svg width="28" height="22" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div className="history-record-inner-div-2-small-divs-last-div">
                            <div className="history-record-inner-div-2-small-divs-end-div">


                                <svg width="23" height="24" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8" />
                                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8" />
                                </svg>
                                <svg width="21" height="25" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M22.3729 11.0401C22.3729 11.1335 21.6845 20.3975 21.2913 24.2964C21.0451 26.689 19.5954 28.1402 17.4209 28.1815C15.7502 28.2213 14.1146 28.2351 12.5054 28.2351C10.7969 28.2351 9.12614 28.2213 7.50437 28.1815C5.40272 28.1279 3.9518 26.6478 3.71814 24.2964C3.31364 20.3838 2.6378 11.1335 2.62523 11.0401C2.61267 10.7584 2.69809 10.4904 2.87145 10.2732C3.0423 10.0726 3.28851 9.95166 3.54729 9.95166H21.4634C21.7209 9.95166 21.9546 10.0726 22.1393 10.2732C22.3114 10.4904 22.398 10.7584 22.3729 11.0401Z" fill="#C03221" />
                                    <path d="M24.125 6.21404C24.125 5.64921 23.7067 5.20669 23.2042 5.20669H19.4381C18.6718 5.20669 18.006 4.62675 17.8351 3.80905L17.6241 2.8072C17.3289 1.59646 16.3101 0.748535 15.1669 0.748535H9.83432C8.6786 0.748535 7.66986 1.59646 7.36334 2.87317L7.16612 3.81043C6.99402 4.62675 6.32822 5.20669 5.56319 5.20669H1.79706C1.29332 5.20669 0.875 5.64921 0.875 6.21404V6.73626C0.875 7.28735 1.29332 7.74361 1.79706 7.74361H23.2042C23.7067 7.74361 24.125 7.28735 24.125 6.73626V6.21404Z" fill="#C03221" />
                                </svg>


                            </div>
                            <div className="history-record-inner-div-2-small-divs-end-div-empty">

                            </div>
                        </div>
                    </div>

                </div>
            <PatientFooter margin={true}></PatientFooter>

            </div>
        </div>
    )
}

export default Patient2