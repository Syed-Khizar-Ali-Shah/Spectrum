import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Reporting.css";
import "./PatientNew.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseUrl } from "./utils/data";
import { useSelector } from "react-redux";

function PatientNew() {
  const [report1, setreport1] = useState(true);
  const [report2, setreport2] = useState(false);
  const [showMakeAppmnt, setshowMakeAppmnt] = useState(false);
  const [newAttach, setnewAttach] = useState(false);
  const searchPatient = useSelector((state) => state.spectrumReducer.searchPatients);

  //Create Patient
  const [title, setTitle] = useState("");
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState();
  const [email, setEmail] = useState("");
  const [landline, setLandline] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patientType, setPatientType] = useState("");
  const [HC2orHC3Number, setHC2orHC3Number] = useState("");
  const [HC3PatientContribution, setHC3PatientContribution] = useState("");
  const [patientHasGlucoma, setPatientHasGlucoma] = useState(false);
  const [patientHasDiabetic, setpatientHasDiabetic] = useState(false);
  let [contactedBy, setContactedBy] = useState([]);
  const [promotionalCommunication, setPromotionalCommunication] =
    useState(false);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [updateID, setUpdateID] = useState();

  useEffect(() => {
    if(searchPatient) {
      setTitle(searchPatient.title);
      setForename(searchPatient.forename);
      setSurname(searchPatient.surname);
      setDob(searchPatient.dob);
      setAddress1(searchPatient.address1);
      setAddress2(searchPatient.address2);
      setCity(searchPatient.city);
      setCountry(searchPatient.country);
      setPostcode(searchPatient.postcode);
      setEmail(searchPatient.email);
      setLandline(searchPatient.landline);
      setMobile(searchPatient.mobile);
      setGender(searchPatient.gender);
      setDoctor(searchPatient.doctor);
      setPatientType(searchPatient.patientType);
      setHC2orHC3Number(searchPatient.HC2orHC3Number);
      setHC3PatientContribution(searchPatient.HC3PatientContribution);
      setPatientHasGlucoma(searchPatient.patientHasGlucoma);
      setpatientHasDiabetic(searchPatient.patientHasDiabetic);
      setContactedBy(searchPatient.contactedBy);
      setPromotionalCommunication(searchPatient.promotionalCommunication);
      setNotes(searchPatient.notes);
      setUpdateID(searchPatient._id);
    }
  }, [searchPatient])

  const notify = (op) => {
    if(op === 'update') {
      toast.success("Patient Updated!");
    } else if(op === 'save') {
      toast.success("Patient Registered!");
    }
  };

  const notifyErr = () => {
    toast.error("Something went wrong!");
  };

  const handleSavePatient = () => {
    if (
      !title ||
      !forename ||
      !surname ||
      !dob ||
      !address1 ||
      !address2 ||
      !city ||
      !country ||
      !postcode ||
      !email ||
      !landline ||
      !mobile ||
      !gender ||
      !doctor ||
      !patientType ||
      !HC2orHC3Number ||
      !HC3PatientContribution ||
      !notes
    ) {
      setMsg("All fields are required!");
      return;
    }

    const patientForm = {
      title,
      forename,
      surname,
      dob,
      address1,
      address2,
      city,
      country,
      postcode,
      email,
      landline,
      mobile,
      gender,
      doctor,
      patientType,
      HC2orHC3Number,
      HC3PatientContribution,
      patientHasGlucoma,
      patientHasDiabetic,
      contactedBy,
      promotionalCommunication,
      notes,
    };
    setLoading(true);

    axios
      .post(`${baseUrl}/api/patient`, patientForm)
      .then((res) => {
        console.log(res);
        notify("save");
        setLoading(false);

        setTitle("");
        setForename("");
        setSurname("");
        setDob("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setCountry("");
        setPostcode("");
        setEmail("");
        setLandline("");
        setMobile("");
        setGender("");
        setDoctor("");
        setPatientType("");
        setHC2orHC3Number("");
        setHC3PatientContribution("");
        setPatientHasGlucoma(false);
        setpatientHasDiabetic(false);
        setContactedBy([]);
        setPromotionalCommunication(false);
        setNotes("");
      })
      .catch((err) => {
        console.log(err);
        notifyErr();
        setLoading(false);
      });
  };

  const handleUpdatePatient = () => {
    if (
      !title ||
      !forename ||
      !surname ||
      !dob ||
      !address1 ||
      !address2 ||
      !city ||
      !country ||
      !postcode ||
      !email ||
      !landline ||
      !mobile ||
      !gender ||
      !doctor ||
      !patientType ||
      !HC2orHC3Number ||
      !HC3PatientContribution ||
      !notes
    ) {
      setMsg("All fields are required!");
      return;
    }

    const patientForm = {
      title,
      forename,
      surname,
      dob,
      address1,
      address2,
      city,
      country,
      postcode,
      email,
      landline,
      mobile,
      gender,
      doctor,
      patientType,
      HC2orHC3Number,
      HC3PatientContribution,
      patientHasGlucoma,
      patientHasDiabetic,
      contactedBy,
      promotionalCommunication,
      notes,
    };
    setLoading(true);

    axios
      .put(`${baseUrl}/api/patient/${updateID}`, patientForm)
      .then((res) => {
        console.log(res);
        notify("update");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        notifyErr();
        setLoading(false);
      });
  };

  const handlePromotionsInput = (e) => {
    if (e.target.name === "yes") {
      setPromotionalCommunication(true);
    } else {
      setPromotionalCommunication(false);
    }
  };

  const handleContactBy = (e) => {
    const name = e.target.name;
    const updatedContactedBy = [...contactedBy]; // Create a new array based on the current state
  
    if (!updatedContactedBy.includes(name)) {
      updatedContactedBy.push(name);
    } else {
      const toRemoveIdx = updatedContactedBy.findIndex((item) => item === name);
      updatedContactedBy.splice(toRemoveIdx, 1);
    }
  
    // Now, update the state with the new array
    setContactedBy(updatedContactedBy);
  };
  

  console.log(contactedBy);

  function change1() {
    setreport1(true);
    setreport2(false);
  }
  function change2() {
    setreport1(false);
    setreport2(true);
  }
  const [blueCol, setblueCol] = useState("#4C004A");

  return (
    <>
      <>
        {report1 && <div className="page_title">Patient</div>}
        {report2 && (
          <>
            <div className="pn_mini_header_p2">
              <div className="page_title">Existing Patient Record</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div>
                  <div
                    className="input_label"
                    style={{ fontSize: "14px", fontWeight: "600" }}
                  >
                    Patient ID
                  </div>
                  <div className="pn_mini_lb">12345</div>
                </div>
                <div>
                  <div
                    className="input_label"
                    style={{ fontSize: "14px", fontWeight: "600" }}
                  >
                    Patient Name
                  </div>
                  <div className="pn_mini_lb">Sam Smith</div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
      <div className="pn_header11">
        <div
          className="report_child"
          onClick={change1}
          style={{
            background: report1 ? blueCol : "",
            color: report1 ? "white" : "#212529",
            cursor: "pointer",
            borderRadius: "4px 0px 0px 0px",
          }}
        >
          New Patient
        </div>
        <div
          className="report_child"
          onClick={change2}
          style={{
            background: report2 ? blueCol : "",
            color: report2 ? "white" : "#212529",
            cursor: "pointer",
          }}
        >
          Existing Patient Record
        </div>
      </div>
      {report1 ? (
        <>
          <ToastContainer />
          <div className="report_body1" style={{ height: "auto" }}>
            <div className="mini_header">Create New Patient</div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Title</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Forename</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="John"
                  onChange={(e) => setForename(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Surname</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Smith"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">DoB</div>
                <input
                  type="date"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Address 1</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Address 2</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Town/City</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Country</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Postcode</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Email</div>
                <input
                  type="email"
                  className="pn_input_form"
                  placeholder="abcd@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Landline</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="12345678"
                  onChange={(e) => setLandline(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Mobile</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="+0123456789"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Gender</div>
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="pn_input_form"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <div className="input_label">Doctor</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setDoctor(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Patient Type</div>
                <select
                  name="patientType"
                  id="patientType"
                  value={patientType}
                  onChange={(e) => setPatientType(e.target.value)}
                  className="pn_input_form"
                >
                  <option value="">Select</option>
                  <option value="general">general</option>
                  <option value="specialist">specialist</option>
                  <option value="chronic condition">chronic condition</option>
                </select>
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">HC2 / HC3 Number</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setHC2orHC3Number(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">
                  HC3 Patient Contribution ( $ )
                </div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  onChange={(e) => setHC3PatientContribution(e.target.value)}
                />
              </div>
              <div>
                <div className="pn_two_rt">
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={(e) => setPatientHasGlucoma(e.target.checked)}
                    />
                    <div className="input_label" style={{ margin: "0" }}>
                      Patient has Glaucoma
                    </div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={(e) => setpatientHasDiabetic(e.target.checked)}
                    />
                    <div className="input_label" style={{ margin: "0" }}>
                      Diabetic
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_label">Happy to be contacted by:</div>
            <div className="pn_two_rt2">
              <div>
                <input
                  type="checkbox"
                  name="sms"
                  id=""
                  onChange={handleContactBy}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  SMS
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="phone"
                  id=""
                  onChange={handleContactBy}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Phone
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="email"
                  id=""
                  onChange={handleContactBy}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Email
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="post"
                  id=""
                  onChange={handleContactBy}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Post
                </div>
              </div>
            </div>
            <div className="input_label" style={{ marginTop: "1rem" }}>
              Are you happy to receive promotional communication?
            </div>
            <div className="pn_two_rt2">
              <div>
                <input
                  type="radio"
                  name="yes"
                  id=""
                  onChange={handlePromotionsInput}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Yes
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  name="no"
                  id=""
                  onChange={handlePromotionsInput}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  No
                </div>
              </div>
            </div>
            <div className="input_label" style={{ marginTop: "1rem" }}>
              Notes
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="pn_input_form"
              style={{ width: "100%", height: "4rem", padding: "5px" }}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            {msg && <p style={{ color: "red" }}>{msg}</p>}
            <div className="cl_btn_con" style={{ marginTop: "1rem" }}>
              <div className="save_btn" onClick={handleSavePatient}>
                Save
              </div>
            </div>
          </div>

          <div
            className="report_body1"
            style={{ height: "auto", marginTop: "2rem" }}
          >
            <div className="patient_footer">
              <NavLink to="/new-sight-test" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New Sight Test</div>
              </NavLink>
              <NavLink to="/new-cl-test" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New C/L Test</div>
              </NavLink>
              <NavLink to="/new-dispense" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New Dispense</div>
              </NavLink>
              <div
                onClick={() => {
                  setnewAttach(true);
                }}
                className="patient_footer_elem"
              >
                <svg
                  width="32"
                  height="16"
                  viewBox="0 0 32 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.397 7.94069C24.478 3.41263 20.5405 0 15.75 0C11.9439 0 8.66263 2.16549 7.02201 5.31569C3.08451 5.70951 0 9.05612 0 13.125C0 17.456 3.54368 21 7.875 21H24.9375C28.5469 21 31.5 18.0469 31.5 14.4375C31.5 10.9595 28.8096 8.13743 25.397 7.94069ZM17.85 11.8125V16.8H13.65V11.8125H9.1875L15.75 5.25L22.3125 11.8125H17.85Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New Attachment</div>
              </div>
              <NavLink to="/cl-after-care" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div> C/L Aftercare</div>
              </NavLink>
              <NavLink to="/pre-screening" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>Pre-Screening</div>
              </NavLink>
              <div
                onClick={() => {
                  setshowMakeAppmnt(true);
                }}
                className="patient_footer_elem"
              >
                <svg
                  width="25"
                  height="17"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5298 25C18.0176 25 16.729 24.467 15.6639 23.4009C14.5989 22.3348 14.0664 21.0449 14.0664 19.5312C14.0664 18.0176 14.5989 16.7277 15.6639 15.6616C16.729 14.5955 18.0176 14.0625 19.5298 14.0625C21.042 14.0625 22.3306 14.5955 23.3956 15.6616C24.4607 16.7277 24.9932 18.0176 24.9932 19.5312C24.9932 21.0449 24.4607 22.3348 23.3956 23.4009C22.3306 24.467 21.042 25 19.5298 25ZM22.6517 18.75H20.3103V16.4062C20.3103 16.1947 20.233 16.0116 20.0786 15.8569C19.9241 15.7023 19.7412 15.625 19.5298 15.625C19.3184 15.625 19.1355 15.7023 18.981 15.8569C18.8265 16.0116 18.7493 16.1947 18.7493 16.4062V19.5312C18.7493 19.7266 18.8103 19.8934 18.9322 20.0317C19.0542 20.1701 19.2046 20.2555 19.3834 20.2881C19.416 20.3044 19.4647 20.3125 19.5298 20.3125H22.6517C22.8631 20.3125 23.046 20.2352 23.2005 20.0806C23.355 19.9259 23.4322 19.7428 23.4322 19.5312C23.4322 19.3197 23.355 19.1366 23.2005 18.9819C23.046 18.8273 22.8631 18.75 22.6517 18.75ZM11.7249 20.3125H7.04197C6.83059 20.3125 6.64766 20.2352 6.49319 20.0806C6.33872 19.9259 6.26148 19.7428 6.26148 19.5312C6.26148 19.3197 6.33872 19.1366 6.49319 18.9819C6.64766 18.8273 6.83059 18.75 7.04197 18.75H11.7249C11.9363 18.75 12.1192 18.8273 12.2737 18.9819C12.4281 19.1366 12.5054 19.3197 12.5054 19.5312C12.5054 19.7428 12.4281 19.9259 12.2737 20.0806C12.1192 20.2352 11.9363 20.3125 11.7249 20.3125ZM7.04197 15.625H11.7249C11.9363 15.625 12.1192 15.7023 12.2737 15.8569C12.4281 16.0116 12.5054 16.1947 12.5054 16.4062C12.5054 16.6178 12.4281 16.8009 12.2737 16.9556C12.1192 17.1102 11.9363 17.1875 11.7249 17.1875H7.04197C6.83059 17.1875 6.64766 17.1102 6.49319 16.9556C6.33872 16.8009 6.26148 16.6178 6.26148 16.4062C6.26148 16.1947 6.33872 16.0116 6.49319 15.8569C6.64766 15.7023 6.83059 15.625 7.04197 15.625ZM14.8468 14.0625H7.04197C6.83059 14.0625 6.64766 13.9852 6.49319 13.8306C6.33872 13.6759 6.26148 13.4928 6.26148 13.2812C6.26148 13.0697 6.33872 12.8866 6.49319 12.7319C6.64766 12.5773 6.83059 12.5 7.04197 12.5H14.8468C15.0582 12.5 15.2412 12.5773 15.3956 12.7319C15.5501 12.8866 15.6273 13.0697 15.6273 13.2812C15.6273 13.4928 15.5501 13.6759 15.3956 13.8306C15.2412 13.9852 15.0582 14.0625 14.8468 14.0625ZM17.9688 10.9375H7.04197C6.83059 10.9375 6.64766 10.8602 6.49319 10.7056C6.33872 10.5509 6.26148 10.3678 6.26148 10.1562C6.26148 9.94466 6.33872 9.76156 6.49319 9.60693C6.64766 9.45231 6.83059 9.375 7.04197 9.375H17.9688C18.1802 9.375 18.3631 9.45231 18.5176 9.60693C18.672 9.76156 18.7493 9.94466 18.7493 10.1562C18.7493 10.3678 18.672 10.5509 18.5176 10.7056C18.3631 10.8602 18.1802 10.9375 17.9688 10.9375ZM17.9688 4.6875H7.04197C6.83059 4.6875 6.64766 4.61019 6.49319 4.45557C6.33872 4.30094 6.26148 4.11784 6.26148 3.90625C6.26148 3.69466 6.33872 3.51156 6.49319 3.35693C6.64766 3.20231 6.83059 3.125 7.04197 3.125H17.9688C18.1802 3.125 18.3631 3.20231 18.5176 3.35693C18.672 3.51156 18.7493 3.69466 18.7493 3.90625C18.7493 4.11784 18.672 4.30094 18.5176 4.45557C18.3631 4.61019 18.1802 4.6875 17.9688 4.6875ZM17.9688 7.8125H7.04197C6.83059 7.8125 6.64766 7.73519 6.49319 7.58057C6.33872 7.42594 6.26148 7.24284 6.26148 7.03125C6.26148 6.81966 6.33872 6.63656 6.49319 6.48193C6.64766 6.32731 6.83059 6.25 7.04197 6.25H17.9688C18.1802 6.25 18.3631 6.32731 18.5176 6.48193C18.672 6.63656 18.7493 6.81966 18.7493 7.03125C18.7493 7.24284 18.672 7.42594 18.5176 7.58057C18.3631 7.73519 18.1802 7.8125 17.9688 7.8125ZM20.3103 2.34375C20.3103 2.13216 20.233 1.94906 20.0786 1.79443C19.9241 1.63981 19.7412 1.5625 19.5298 1.5625H3.92002C3.70863 1.5625 3.52571 1.63981 3.37124 1.79443C3.21676 1.94906 3.13953 2.13216 3.13953 2.34375V3.125C3.57855 3.125 3.94847 3.27555 4.24929 3.57666C4.5501 3.87777 4.7005 4.24805 4.7005 4.6875C4.7005 5.12695 4.5501 5.49723 4.24929 5.79834C3.94847 6.09945 3.57855 6.25 3.13953 6.25V7.8125C3.57855 7.8125 3.94847 7.96305 4.24929 8.26416C4.5501 8.56527 4.7005 8.93555 4.7005 9.375C4.7005 9.81445 4.5501 10.1847 4.24929 10.4858C3.94847 10.7869 3.57855 10.9375 3.13953 10.9375V12.5C3.57855 12.5 3.94847 12.6506 4.24929 12.9517C4.5501 13.2528 4.7005 13.619 4.7005 14.0503C4.7005 14.4816 4.5501 14.8519 4.24929 15.1611C3.94847 15.4704 3.57855 15.625 3.13953 15.625V17.1875C3.57855 17.1875 3.94847 17.3381 4.24929 17.6392C4.5501 17.9403 4.7005 18.3065 4.7005 18.7378C4.7005 19.1691 4.5501 19.5394 4.24929 19.8486C3.94847 20.1579 3.57855 20.3125 3.13953 20.3125V21.0938C3.13953 21.3053 3.21676 21.4884 3.37124 21.6431C3.52571 21.7977 3.70863 21.875 3.92002 21.875H14.0664V23.4375H3.13953C2.71676 23.4375 2.35091 23.2829 2.04197 22.9736C1.73303 22.6644 1.57855 22.2982 1.57855 21.875V20.3125C1.15579 20.3125 0.789936 20.1579 0.480993 19.8486C0.17205 19.5394 0.0175781 19.1691 0.0175781 18.7378C0.0175781 18.3065 0.17205 17.9403 0.480993 17.6392C0.789936 17.3381 1.15579 17.1875 1.57855 17.1875V15.625C1.15579 15.625 0.789936 15.4704 0.480993 15.1611C0.17205 14.8519 0.0175781 14.4816 0.0175781 14.0503C0.0175781 13.619 0.17205 13.2528 0.480993 12.9517C0.789936 12.6506 1.15579 12.5 1.57855 12.5V10.9375C1.15579 10.9375 0.789936 10.7869 0.480993 10.4858C0.17205 10.1847 0.0175781 9.81445 0.0175781 9.375C0.0175781 8.93555 0.17205 8.56527 0.480993 8.26416C0.789936 7.96305 1.15579 7.8125 1.57855 7.8125V6.25C1.15579 6.25 0.789936 6.09945 0.480993 5.79834C0.17205 5.49723 0.0175781 5.12695 0.0175781 4.6875C0.0175781 4.24805 0.17205 3.87777 0.480993 3.57666C0.789936 3.27555 1.15579 3.125 1.57855 3.125V1.5625C1.57855 1.12305 1.73303 0.752767 2.04197 0.45166C2.35091 0.150553 2.71676 0 3.13953 0H20.3103C20.733 0 21.0989 0.150553 21.4078 0.45166C21.7168 0.752767 21.8712 1.12305 21.8712 1.5625V12.5H20.3103V2.34375Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>Make Appointment</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {report2 ? (
        searchPatient && (
          <>
          <ToastContainer />
          <div className="report_body1" style={{ height: "auto" }}>
            <div className="mini_header">Patient Info</div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Title</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Forename</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="John"
                  value={forename}
                  onChange={(e) => setForename(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Surname</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Smith"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">DoB</div>
                <input
                  type="date"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Address 1</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Address 2</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Town/City</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Country</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Postcode</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Email</div>
                <input
                  type="email"
                  className="pn_input_form"
                  placeholder="abcd@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Landline</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="12345678"
                  value={landline}
                  onChange={(e) => setLandline(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Mobile</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="+0123456789"
                  value={mobile}

                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">Gender</div>
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="pn_input_form"
                >
                  <option value="">{gender}</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <div className="input_label">Doctor</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={doctor}

                  onChange={(e) => setDoctor(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">Patient Type</div>
                <select
                  name="patientType"
                  id="patientType"
                  value={patientType}
                  onChange={(e) => setPatientType(e.target.value)}
                  className="pn_input_form"
                >
                  <option value="">{patientType}</option>
                  <option value="general">general</option>
                  <option value="specialist">specialist</option>
                  <option value="chronic condition">chronic condition</option>
                </select>
              </div>
            </div>
            <div className="pn_flex_con1">
              <div>
                <div className="input_label">HC2 / HC3 Number</div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={HC2orHC3Number}

                  onChange={(e) => setHC2orHC3Number(e.target.value)}
                />
              </div>
              <div>
                <div className="input_label">
                  HC3 Patient Contribution ( $ )
                </div>
                <input
                  type="text"
                  className="pn_input_form"
                  placeholder="Type here"
                  value={HC3PatientContribution}

                  onChange={(e) => setHC3PatientContribution(e.target.value)}
                />
              </div>
              <div>
                <div className="pn_two_rt">
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={patientHasGlucoma}
                      onChange={(e) => setPatientHasGlucoma(e.target.checked)}
                    />
                    <div className="input_label" style={{ margin: "0" }}>
                      Patient has Glaucoma
                    </div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={patientHasDiabetic}
                      onChange={(e) => setpatientHasDiabetic(e.target.checked)}
                    />
                    <div className="input_label" style={{ margin: "0" }}>
                      Diabetic
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_label">Happy to be contacted by:</div>
            <div className="pn_two_rt2">
              <div>
                <input
                  type="checkbox"
                  name="sms"
                  id=""
                  onChange={handleContactBy}
                  checked={contactedBy.includes('sms')}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  SMS
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="phone"
                  id=""
                  checked={contactedBy.includes('phone')}
                  onChange={handleContactBy}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Phone
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="email"
                  id=""
                  onChange={handleContactBy}
                  checked={contactedBy.includes('email')}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Email
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="post"
                  id=""
                  checked={contactedBy.includes('post')}
                  onChange={handleContactBy}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Post
                </div>
              </div>
            </div>
            <div className="input_label" style={{ marginTop: "1rem" }}>
              Are you happy to receive promotional communication?
            </div>
            <div className="pn_two_rt2">
              <div>
                <input
                  type="radio"
                  name="yes"
                  id=""
                  onChange={handlePromotionsInput}
                  checked={promotionalCommunication === true}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  Yes
                </div>
              </div>
              <div>
                <input
                  type="radio"
                  name="no"
                  id=""
                  onChange={handlePromotionsInput}
                  checked={promotionalCommunication == false}
                />
                <div className="input_label" style={{ margin: "0" }}>
                  No
                </div>
              </div>
            </div>
            <div className="input_label" style={{ marginTop: "1rem" }}>
              Notes
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="pn_input_form"
              style={{ width: "100%", height: "4rem", padding: "5px" }}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            {msg && <p style={{ color: "red" }}>{msg}</p>}
            <div className="cl_btn_con" style={{ marginTop: "1rem" }}>
              <div className="save_btn" onClick={handleUpdatePatient}>
                Update
              </div>
            </div>
          </div>

          <div className="pn_h2_mini">
            <div
              className="mini_header"
              style={{ margin: "0", fontSize: "16px" }}
            >
              Sight Test History
            </div>
            <div className="pn_flex_mini2">
              <div className="input_label" style={{ margin: "0" }}>
                Date:
              </div>
              <input
                type="date"
                placeholder="12/08/2023"
                className="pn_input_form2"
              />
            </div>
          </div>
          <div
            className="pn_header1 pn_header1_modified"
            style={{ gridTemplateColumns: "8% 9% 7% 70% 6%" }}
          >
            <div className="flex">Record ID</div>
            <div className="flex">Test Date</div>
            <div className="flex">Payment</div>
            <div>Final RX</div>
            <div className="flex">Action</div>
          </div>
          <div
            className="pn_body2 pn_body2_modified"
            style={{
              height: "auto",
              padding: "35px 0",
              gridTemplateColumns: "8% 9% 7% 70% 6%",
            }}
          >
            <div className="flex">1234</div>
            <div className="flex">12/08/2023</div>
            <div className="flex">$26.6</div>
            <div>
              <div className="p6_dual_matrix">
                <div
                  className="rl_con2"
                  style={{
                    gridTemplateColumns: "7% 13% 13% 14% 16% 22% 15%",
                    width: "18rem",
                  }}
                >
                  <div className="rl_item2">
                    <div className="rl_item_r1_2"></div>
                    <div
                      className="rl_item_r1_2"
                      style={{ alignItems: "center" }}
                    >
                      R:
                    </div>
                    <div
                      className="rl_item_r1_2"
                      style={{ alignItems: "center" }}
                    >
                      L:
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      SPH
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      CYL
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Axis
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Prism
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Direction
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                  </div>
                  {/* <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>             */}
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      VA
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="rl_con3"
                  style={{
                    gridTemplateColumns: "13% 13% 11% 13% 13% 12% 12% 13% 11%",
                    width: "29rem",
                  }}
                >
                  <div className="rl_item2 no_display">
                    <div className="rl_item_r1_2"></div>
                    <div
                      className="rl_item_r1_2"
                      style={{ alignItems: "center" }}
                    >
                      R:
                    </div>
                    <div
                      className="rl_item_r1_2"
                      style={{ alignItems: "center" }}
                    >
                      L:
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Near Add
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Prism
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Direction
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Near VA
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Int Add
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Prism
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                    <div className="rl_item_r1_2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Direction
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                  </div>
                  <div className="rl_item2">
                    <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                      Int VA
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                    <div className="rl_item_r1_2">
                      <select
                        type="text"
                        name=""
                        id=""
                        className="input_5_2"
                      ></select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="matrix_below" style={{ marginBottom: "2rem" }}>
                <div className="matrix_below_elem">
                  <div className="input_label" style={{ margin: "0" }}>
                    PD Right
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input_5_2"
                    placeholder=""
                  />
                </div>
                <div className="matrix_below_elem">
                  <div className="input_label" style={{ margin: "0" }}>
                    PD Left
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input_5_2"
                    placeholder=""
                  />
                </div>
                <div className="matrix_below_elem">
                  <div className="input_label" style={{ margin: "0" }}>
                    PD Combined
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input_5_2"
                    placeholder=""
                  />
                </div>
                <div className="matrix_below_elem">
                  <div className="input_label" style={{ margin: "0" }}>
                    BVD
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input_5_2"
                    placeholder=""
                  />
                </div>
                <div className="matrix_below_elem">
                  <div className="input_label" style={{ margin: "0" }}>
                    BIN BVCA
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input_5_2"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            {/* <div className='flex' >
                <div>
                  <div className="p4_txt1 txt_8px">Lens Name/Type</div>
                    <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}} >
                      <div className="p4_txt1 txt_8px">RE:</div>
                      <input type="text" name="" id="" className='pn_input1' placeholder='' />
                      <svg width="34" height="16" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189"/>
                      </svg>
                    </div>
                    <div className="p4_mini_dual" style={{marginBottom:'2rem'}}>
                      <div className="p4_txt1 txt_8px">LE:</div>
                      <input type="text" name="" id="" className='pn_input1' placeholder='' />
                      <svg width="34" height="16" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z" fill="#405189"/>
                      </svg>
                  </div>
                </div>
              </div> */}
            <div className="flex" style={{ grid: "7px" }}>
              <svg
                width="27"
                height="16"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z"
                  fill="#3A57E8"
                />
                <path
                  d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z"
                  fill="#3A57E8"
                />
              </svg>
              <svg
                width="25"
                height="17"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22.3729 11.0401C22.3729 11.1335 21.6845 20.3975 21.2913 24.2964C21.0451 26.689 19.5954 28.1402 17.4209 28.1815C15.7502 28.2213 14.1146 28.2351 12.5054 28.2351C10.7969 28.2351 9.12614 28.2213 7.50437 28.1815C5.40272 28.1279 3.9518 26.6478 3.71814 24.2964C3.31364 20.3838 2.6378 11.1335 2.62523 11.0401C2.61267 10.7584 2.69809 10.4904 2.87145 10.2732C3.0423 10.0726 3.28851 9.95166 3.54729 9.95166H21.4634C21.7209 9.95166 21.9546 10.0726 22.1393 10.2732C22.3114 10.4904 22.398 10.7584 22.3729 11.0401Z"
                  fill="#C03221"
                />
                <path
                  d="M24.125 6.21404C24.125 5.64921 23.7067 5.20669 23.2042 5.20669H19.4381C18.6718 5.20669 18.006 4.62675 17.8351 3.80905L17.6241 2.8072C17.3289 1.59646 16.3101 0.748535 15.1669 0.748535H9.83432C8.6786 0.748535 7.66986 1.59646 7.36334 2.87317L7.16612 3.81043C6.99402 4.62675 6.32822 5.20669 5.56319 5.20669H1.79706C1.29332 5.20669 0.875 5.64921 0.875 6.21404V6.73626C0.875 7.28735 1.29332 7.74361 1.79706 7.74361H23.2042C23.7067 7.74361 24.125 7.28735 24.125 6.73626V6.21404Z"
                  fill="#C03221"
                />
              </svg>
            </div>
          </div>

          <div className="pn_h2_mini">
            <div
              className="mini_header"
              style={{ margin: "0", fontSize: "16px" }}
            >
              Contact Lens History
            </div>
            <div className="pn_flex_mini2">
              <div className="input_label" style={{ margin: "0" }}>
                Date:
              </div>
              <input
                type="date"
                placeholder="12/08/2023"
                className="pn_input_form2"
              />
            </div>
          </div>
          <div className="pn_header1">
            <div className="flex">Record ID</div>
            <div className="flex">Test Date</div>
            <div className="flex">Payment</div>
            <div>C/L RX</div>
            <div>Lens Type</div>
            <div className="flex">Action</div>
          </div>
          <div
            className="pn_body2"
            style={{ height: "auto", padding: "35px 0" }}
          >
            <div className="flex">1234</div>
            <div className="flex">12/08/2023</div>
            <div className="flex">$26.6</div>
            <div>
              <div className="input_label" style={{ margin: "0" }}>
                Final RX
              </div>
              <div className="pn_con22">
                <div className="rl_item2">
                  <div className="pn_item_r1_2"></div>
                  <div
                    className="pn_item_r1_2"
                    style={{ alignItems: "center" }}
                  >
                    R:
                  </div>
                  <div
                    className="pn_item_r1_2"
                    style={{ alignItems: "center" }}
                  >
                    L:
                  </div>
                </div>
                <div className="rl_item2">
                  <div className="pn_item_r1_2" style={{ alignItems: "end" }}>
                    Sph
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="rl_item2">
                  <div className="pn_item_r1_2" style={{ alignItems: "end" }}>
                    CYL
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="rl_item2">
                  <div className="pn_item_r1_2" style={{ alignItems: "end" }}>
                    Axis
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="rl_item2">
                  <div className="pn_item_r1_2" style={{ alignItems: "end" }}>
                    Add
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="rl_item2">
                  <div className="pn_item_r1_2" style={{ alignItems: "end" }}>
                    BC
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="rl_item2">
                  <div className="pn_item_r1_2" style={{ alignItems: "end" }}>
                    Diameter
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                  <div className="pn_item_r1_2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input_5_2"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <div className="p4_txt1 txt_8px">Lens Name/Type</div>
                <div
                  className="p4_mini_dual"
                  style={{ marginBottom: "0.5rem" }}
                >
                  <div className="p4_txt1 txt_8px">RE:</div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="pn_input1"
                    placeholder=""
                  />
                  <svg
                    width="34"
                    height="16"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z"
                      fill="#405189"
                    />
                  </svg>
                </div>
                <div className="p4_mini_dual" style={{ marginBottom: "2rem" }}>
                  <div className="p4_txt1 txt_8px">LE:</div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="pn_input1"
                    placeholder=""
                  />
                  <svg
                    width="34"
                    height="16"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.770508 14C2.18051 6.32 8.91101 0.5 16.999 0.5C25.087 0.5 31.816 6.32 33.2275 14C31.8175 21.68 25.087 27.5 16.999 27.5C8.91101 27.5 2.18201 21.68 0.770508 14H0.770508ZM16.9982 21.5008C21.1403 21.5008 24.4982 18.143 24.4982 14.0009C24.4982 9.85873 21.1404 6.50086 16.9982 6.50084C12.8561 6.50083 9.49825 9.85867 9.49823 14.0008C9.49821 18.1429 12.856 21.5008 16.9982 21.5008H16.9982ZM16.9999 18.5C15.3922 18.5 13.9066 17.6423 13.1028 16.25C12.2989 14.8577 12.2989 13.1423 13.1028 11.75C13.9066 10.3577 15.3922 9.5 16.9999 9.5C18.6076 9.5 20.0932 10.3577 20.897 11.75C21.7009 13.1423 21.7009 14.8577 20.897 16.25C20.0932 17.6423 18.6076 18.5 16.9999 18.5Z"
                      fill="#405189"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex" style={{ grid: "7px" }}>
              <svg
                width="27"
                height="16"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z"
                  fill="#3A57E8"
                />
                <path
                  d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z"
                  fill="#3A57E8"
                />
              </svg>
              <svg
                width="25"
                height="17"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22.3729 11.0401C22.3729 11.1335 21.6845 20.3975 21.2913 24.2964C21.0451 26.689 19.5954 28.1402 17.4209 28.1815C15.7502 28.2213 14.1146 28.2351 12.5054 28.2351C10.7969 28.2351 9.12614 28.2213 7.50437 28.1815C5.40272 28.1279 3.9518 26.6478 3.71814 24.2964C3.31364 20.3838 2.6378 11.1335 2.62523 11.0401C2.61267 10.7584 2.69809 10.4904 2.87145 10.2732C3.0423 10.0726 3.28851 9.95166 3.54729 9.95166H21.4634C21.7209 9.95166 21.9546 10.0726 22.1393 10.2732C22.3114 10.4904 22.398 10.7584 22.3729 11.0401Z"
                  fill="#C03221"
                />
                <path
                  d="M24.125 6.21404C24.125 5.64921 23.7067 5.20669 23.2042 5.20669H19.4381C18.6718 5.20669 18.006 4.62675 17.8351 3.80905L17.6241 2.8072C17.3289 1.59646 16.3101 0.748535 15.1669 0.748535H9.83432C8.6786 0.748535 7.66986 1.59646 7.36334 2.87317L7.16612 3.81043C6.99402 4.62675 6.32822 5.20669 5.56319 5.20669H1.79706C1.29332 5.20669 0.875 5.64921 0.875 6.21404V6.73626C0.875 7.28735 1.29332 7.74361 1.79706 7.74361H23.2042C23.7067 7.74361 24.125 7.28735 24.125 6.73626V6.21404Z"
                  fill="#C03221"
                />
              </svg>
            </div>
          </div>

          <div className="pn_h2_mini">
            <div
              className="mini_header"
              style={{ margin: "0", fontSize: "16px" }}
            >
              Dispensing History
            </div>
            <div className="pn_flex_mini2">
              <div className="input_label" style={{ margin: "0" }}>
                Date:
              </div>
              <input
                type="date"
                placeholder="12/08/2023"
                className="pn_input_form2"
              />
            </div>
          </div>
          <div
            className="pn_header1"
            style={{ gridTemplateColumns: "15% 15% 15% 15% 15% 14% 11%" }}
          >
            <div className="flex">Record ID</div>
            <div className="flex">Test Date</div>
            <div className="flex">Payment</div>
            <div className="flex">Lens Details</div>
            <div className="flex">Frame Make</div>
            <div className="flex">Frame Model</div>
            <div className="flex">Action</div>
          </div>
          <div
            className="pn_body2"
            style={{
              height: "auto",
              padding: "35px 0",
              gridTemplateColumns: "15% 15% 15% 15% 15% 14% 11%",
            }}
          >
            <div className="flex">1234</div>
            <div className="flex">12/08/2023</div>
            <div className="flex">$26.6</div>
            <div className="flex">Varifocal</div>
            <div className="flex">Tomford</div>
            <div className="flex">2345</div>
            <div className="flex" style={{ grid: "7px" }}>
              <svg
                width="27"
                height="16"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z"
                  fill="#3A57E8"
                />
                <path
                  d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z"
                  fill="#3A57E8"
                />
              </svg>
              <svg
                width="25"
                height="17"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22.3729 11.0401C22.3729 11.1335 21.6845 20.3975 21.2913 24.2964C21.0451 26.689 19.5954 28.1402 17.4209 28.1815C15.7502 28.2213 14.1146 28.2351 12.5054 28.2351C10.7969 28.2351 9.12614 28.2213 7.50437 28.1815C5.40272 28.1279 3.9518 26.6478 3.71814 24.2964C3.31364 20.3838 2.6378 11.1335 2.62523 11.0401C2.61267 10.7584 2.69809 10.4904 2.87145 10.2732C3.0423 10.0726 3.28851 9.95166 3.54729 9.95166H21.4634C21.7209 9.95166 21.9546 10.0726 22.1393 10.2732C22.3114 10.4904 22.398 10.7584 22.3729 11.0401Z"
                  fill="#C03221"
                />
                <path
                  d="M24.125 6.21404C24.125 5.64921 23.7067 5.20669 23.2042 5.20669H19.4381C18.6718 5.20669 18.006 4.62675 17.8351 3.80905L17.6241 2.8072C17.3289 1.59646 16.3101 0.748535 15.1669 0.748535H9.83432C8.6786 0.748535 7.66986 1.59646 7.36334 2.87317L7.16612 3.81043C6.99402 4.62675 6.32822 5.20669 5.56319 5.20669H1.79706C1.29332 5.20669 0.875 5.64921 0.875 6.21404V6.73626C0.875 7.28735 1.29332 7.74361 1.79706 7.74361H23.2042C23.7067 7.74361 24.125 7.28735 24.125 6.73626V6.21404Z"
                  fill="#C03221"
                />
              </svg>
            </div>
          </div>

          <div
            className="report_body1"
            style={{ height: "auto", marginTop: "2rem" }}
          >
            <div className="patient_footer">
              <NavLink to="/new-sight-test" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New Sight Test</div>
              </NavLink>
              <NavLink to="/new-cl-test" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New C/L Test</div>
              </NavLink>
              <NavLink to="/new-dispense" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New Dispense</div>
              </NavLink>
              <div
                onClick={() => {
                  setnewAttach(true);
                }}
                className="patient_footer_elem"
              >
                <svg
                  width="32"
                  height="16"
                  viewBox="0 0 32 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.397 7.94069C24.478 3.41263 20.5405 0 15.75 0C11.9439 0 8.66263 2.16549 7.02201 5.31569C3.08451 5.70951 0 9.05612 0 13.125C0 17.456 3.54368 21 7.875 21H24.9375C28.5469 21 31.5 18.0469 31.5 14.4375C31.5 10.9595 28.8096 8.13743 25.397 7.94069ZM17.85 11.8125V16.8H13.65V11.8125H9.1875L15.75 5.25L22.3125 11.8125H17.85Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>New Attachment</div>
              </div>
              <NavLink to="/cl-after-care" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div> C/L Aftercare</div>
              </NavLink>
              <NavLink to="/pre-screening" className="patient_footer_elem">
                <svg
                  width="31"
                  height="15"
                  viewBox="0 0 31 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>Pre-Screening</div>
              </NavLink>
              <div
                onClick={() => {
                  setshowMakeAppmnt(true);
                }}
                className="patient_footer_elem"
              >
                <svg
                  width="25"
                  height="17"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5298 25C18.0176 25 16.729 24.467 15.6639 23.4009C14.5989 22.3348 14.0664 21.0449 14.0664 19.5312C14.0664 18.0176 14.5989 16.7277 15.6639 15.6616C16.729 14.5955 18.0176 14.0625 19.5298 14.0625C21.042 14.0625 22.3306 14.5955 23.3956 15.6616C24.4607 16.7277 24.9932 18.0176 24.9932 19.5312C24.9932 21.0449 24.4607 22.3348 23.3956 23.4009C22.3306 24.467 21.042 25 19.5298 25ZM22.6517 18.75H20.3103V16.4062C20.3103 16.1947 20.233 16.0116 20.0786 15.8569C19.9241 15.7023 19.7412 15.625 19.5298 15.625C19.3184 15.625 19.1355 15.7023 18.981 15.8569C18.8265 16.0116 18.7493 16.1947 18.7493 16.4062V19.5312C18.7493 19.7266 18.8103 19.8934 18.9322 20.0317C19.0542 20.1701 19.2046 20.2555 19.3834 20.2881C19.416 20.3044 19.4647 20.3125 19.5298 20.3125H22.6517C22.8631 20.3125 23.046 20.2352 23.2005 20.0806C23.355 19.9259 23.4322 19.7428 23.4322 19.5312C23.4322 19.3197 23.355 19.1366 23.2005 18.9819C23.046 18.8273 22.8631 18.75 22.6517 18.75ZM11.7249 20.3125H7.04197C6.83059 20.3125 6.64766 20.2352 6.49319 20.0806C6.33872 19.9259 6.26148 19.7428 6.26148 19.5312C6.26148 19.3197 6.33872 19.1366 6.49319 18.9819C6.64766 18.8273 6.83059 18.75 7.04197 18.75H11.7249C11.9363 18.75 12.1192 18.8273 12.2737 18.9819C12.4281 19.1366 12.5054 19.3197 12.5054 19.5312C12.5054 19.7428 12.4281 19.9259 12.2737 20.0806C12.1192 20.2352 11.9363 20.3125 11.7249 20.3125ZM7.04197 15.625H11.7249C11.9363 15.625 12.1192 15.7023 12.2737 15.8569C12.4281 16.0116 12.5054 16.1947 12.5054 16.4062C12.5054 16.6178 12.4281 16.8009 12.2737 16.9556C12.1192 17.1102 11.9363 17.1875 11.7249 17.1875H7.04197C6.83059 17.1875 6.64766 17.1102 6.49319 16.9556C6.33872 16.8009 6.26148 16.6178 6.26148 16.4062C6.26148 16.1947 6.33872 16.0116 6.49319 15.8569C6.64766 15.7023 6.83059 15.625 7.04197 15.625ZM14.8468 14.0625H7.04197C6.83059 14.0625 6.64766 13.9852 6.49319 13.8306C6.33872 13.6759 6.26148 13.4928 6.26148 13.2812C6.26148 13.0697 6.33872 12.8866 6.49319 12.7319C6.64766 12.5773 6.83059 12.5 7.04197 12.5H14.8468C15.0582 12.5 15.2412 12.5773 15.3956 12.7319C15.5501 12.8866 15.6273 13.0697 15.6273 13.2812C15.6273 13.4928 15.5501 13.6759 15.3956 13.8306C15.2412 13.9852 15.0582 14.0625 14.8468 14.0625ZM17.9688 10.9375H7.04197C6.83059 10.9375 6.64766 10.8602 6.49319 10.7056C6.33872 10.5509 6.26148 10.3678 6.26148 10.1562C6.26148 9.94466 6.33872 9.76156 6.49319 9.60693C6.64766 9.45231 6.83059 9.375 7.04197 9.375H17.9688C18.1802 9.375 18.3631 9.45231 18.5176 9.60693C18.672 9.76156 18.7493 9.94466 18.7493 10.1562C18.7493 10.3678 18.672 10.5509 18.5176 10.7056C18.3631 10.8602 18.1802 10.9375 17.9688 10.9375ZM17.9688 4.6875H7.04197C6.83059 4.6875 6.64766 4.61019 6.49319 4.45557C6.33872 4.30094 6.26148 4.11784 6.26148 3.90625C6.26148 3.69466 6.33872 3.51156 6.49319 3.35693C6.64766 3.20231 6.83059 3.125 7.04197 3.125H17.9688C18.1802 3.125 18.3631 3.20231 18.5176 3.35693C18.672 3.51156 18.7493 3.69466 18.7493 3.90625C18.7493 4.11784 18.672 4.30094 18.5176 4.45557C18.3631 4.61019 18.1802 4.6875 17.9688 4.6875ZM17.9688 7.8125H7.04197C6.83059 7.8125 6.64766 7.73519 6.49319 7.58057C6.33872 7.42594 6.26148 7.24284 6.26148 7.03125C6.26148 6.81966 6.33872 6.63656 6.49319 6.48193C6.64766 6.32731 6.83059 6.25 7.04197 6.25H17.9688C18.1802 6.25 18.3631 6.32731 18.5176 6.48193C18.672 6.63656 18.7493 6.81966 18.7493 7.03125C18.7493 7.24284 18.672 7.42594 18.5176 7.58057C18.3631 7.73519 18.1802 7.8125 17.9688 7.8125ZM20.3103 2.34375C20.3103 2.13216 20.233 1.94906 20.0786 1.79443C19.9241 1.63981 19.7412 1.5625 19.5298 1.5625H3.92002C3.70863 1.5625 3.52571 1.63981 3.37124 1.79443C3.21676 1.94906 3.13953 2.13216 3.13953 2.34375V3.125C3.57855 3.125 3.94847 3.27555 4.24929 3.57666C4.5501 3.87777 4.7005 4.24805 4.7005 4.6875C4.7005 5.12695 4.5501 5.49723 4.24929 5.79834C3.94847 6.09945 3.57855 6.25 3.13953 6.25V7.8125C3.57855 7.8125 3.94847 7.96305 4.24929 8.26416C4.5501 8.56527 4.7005 8.93555 4.7005 9.375C4.7005 9.81445 4.5501 10.1847 4.24929 10.4858C3.94847 10.7869 3.57855 10.9375 3.13953 10.9375V12.5C3.57855 12.5 3.94847 12.6506 4.24929 12.9517C4.5501 13.2528 4.7005 13.619 4.7005 14.0503C4.7005 14.4816 4.5501 14.8519 4.24929 15.1611C3.94847 15.4704 3.57855 15.625 3.13953 15.625V17.1875C3.57855 17.1875 3.94847 17.3381 4.24929 17.6392C4.5501 17.9403 4.7005 18.3065 4.7005 18.7378C4.7005 19.1691 4.5501 19.5394 4.24929 19.8486C3.94847 20.1579 3.57855 20.3125 3.13953 20.3125V21.0938C3.13953 21.3053 3.21676 21.4884 3.37124 21.6431C3.52571 21.7977 3.70863 21.875 3.92002 21.875H14.0664V23.4375H3.13953C2.71676 23.4375 2.35091 23.2829 2.04197 22.9736C1.73303 22.6644 1.57855 22.2982 1.57855 21.875V20.3125C1.15579 20.3125 0.789936 20.1579 0.480993 19.8486C0.17205 19.5394 0.0175781 19.1691 0.0175781 18.7378C0.0175781 18.3065 0.17205 17.9403 0.480993 17.6392C0.789936 17.3381 1.15579 17.1875 1.57855 17.1875V15.625C1.15579 15.625 0.789936 15.4704 0.480993 15.1611C0.17205 14.8519 0.0175781 14.4816 0.0175781 14.0503C0.0175781 13.619 0.17205 13.2528 0.480993 12.9517C0.789936 12.6506 1.15579 12.5 1.57855 12.5V10.9375C1.15579 10.9375 0.789936 10.7869 0.480993 10.4858C0.17205 10.1847 0.0175781 9.81445 0.0175781 9.375C0.0175781 8.93555 0.17205 8.56527 0.480993 8.26416C0.789936 7.96305 1.15579 7.8125 1.57855 7.8125V6.25C1.15579 6.25 0.789936 6.09945 0.480993 5.79834C0.17205 5.49723 0.0175781 5.12695 0.0175781 4.6875C0.0175781 4.24805 0.17205 3.87777 0.480993 3.57666C0.789936 3.27555 1.15579 3.125 1.57855 3.125V1.5625C1.57855 1.12305 1.73303 0.752767 2.04197 0.45166C2.35091 0.150553 2.71676 0 3.13953 0H20.3103C20.733 0 21.0989 0.150553 21.4078 0.45166C21.7168 0.752767 21.8712 1.12305 21.8712 1.5625V12.5H20.3103V2.34375Z"
                    fill="#4C004A"
                  />
                </svg>
                <div>Make Appointment</div>
              </div>
            </div>
          </div>
        </>
        )
      ) : (
        <></>
      )}
      {showMakeAppmnt && (
        <div className="popup">
          <div className="make_a_con">
            <div className="ma_title">Make Appointment</div>
            <div className="line_6"></div>
            <div className="normal_txt" style={{ marginBottom: "0.7rem" }}>
              Patient Search
            </div>
            <input type="text" className="form_input" placeholder="Type here" />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <div
                className="add_sig_btn"
                style={{
                  width: "6rem",
                  marginTop: "3rem",
                  marginBottom: "3rem",
                }}
              >
                Search
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="till_ni_btn"
                style={{ padding: "7px 16px", cursor: "pointer" }}
              >
                New Patient
              </div>
            </div>
            <svg
              className="login_xmark"
              onClick={() => {
                setshowMakeAppmnt(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="#e3e3e3"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <style></style>
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          </div>
        </div>
      )}
      {newAttach && (
        <div className="popup">
          <div className="make_a_con">
            <div className="ma_title">Upload File</div>
            <div className="line_6"></div>
            <div className="flex">
              <svg
                width="453"
                height="200"
                viewBox="0 0 453 331"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M104.26 65V52.04H105.718L110.614 62.363L115.483 52.04H116.959V64.991H115.438V55.559L111.037 65H110.182L105.781 55.559V65H104.26ZM122.246 65.27C121.52 65.27 120.911 65.138 120.419 64.874C119.933 64.604 119.564 64.25 119.312 63.812C119.066 63.374 118.943 62.894 118.943 62.372C118.943 61.862 119.039 61.421 119.231 61.049C119.429 60.671 119.705 60.359 120.059 60.113C120.413 59.861 120.836 59.663 121.328 59.519C121.79 59.393 122.306 59.285 122.876 59.195C123.452 59.099 124.034 59.012 124.622 58.934C125.21 58.856 125.759 58.781 126.269 58.709L125.693 59.042C125.711 58.178 125.537 57.539 125.171 57.125C124.811 56.711 124.187 56.504 123.299 56.504C122.711 56.504 122.195 56.639 121.751 56.909C121.313 57.173 121.004 57.605 120.824 58.205L119.303 57.746C119.537 56.894 119.99 56.225 120.662 55.739C121.334 55.253 122.219 55.01 123.317 55.01C124.199 55.01 124.955 55.169 125.585 55.487C126.221 55.799 126.677 56.273 126.953 56.909C127.091 57.209 127.178 57.536 127.214 57.89C127.25 58.238 127.268 58.604 127.268 58.988V65H125.846V62.669L126.179 62.885C125.813 63.671 125.3 64.265 124.64 64.667C123.986 65.069 123.188 65.27 122.246 65.27ZM122.489 63.929C123.065 63.929 123.563 63.827 123.983 63.623C124.409 63.413 124.751 63.14 125.009 62.804C125.267 62.462 125.435 62.09 125.513 61.688C125.603 61.388 125.651 61.055 125.657 60.689C125.669 60.317 125.675 60.032 125.675 59.834L126.233 60.077C125.711 60.149 125.198 60.218 124.694 60.284C124.19 60.35 123.713 60.422 123.263 60.5C122.813 60.572 122.408 60.659 122.048 60.761C121.784 60.845 121.535 60.953 121.301 61.085C121.073 61.217 120.887 61.388 120.743 61.598C120.605 61.802 120.536 62.057 120.536 62.363C120.536 62.627 120.602 62.879 120.734 63.119C120.872 63.359 121.082 63.554 121.364 63.704C121.652 63.854 122.027 63.929 122.489 63.929ZM128.528 65L132.245 60.086L128.609 55.28H130.517L133.181 58.844L135.818 55.28H137.726L134.09 60.086L137.816 65H135.899L133.181 61.328L130.445 65H128.528ZM139.438 53.561V51.905H141.04V53.561H139.438ZM139.438 65V55.28H141.04V65H139.438ZM155.359 65L155.368 58.781C155.368 58.055 155.173 57.488 154.783 57.08C154.399 56.666 153.898 56.459 153.28 56.459C152.92 56.459 152.578 56.543 152.254 56.711C151.93 56.873 151.666 57.131 151.462 57.485C151.258 57.833 151.156 58.28 151.156 58.826L150.31 58.484C150.298 57.794 150.439 57.191 150.733 56.675C151.033 56.153 151.441 55.748 151.957 55.46C152.473 55.172 153.055 55.028 153.703 55.028C154.717 55.028 155.515 55.337 156.097 55.955C156.679 56.567 156.97 57.392 156.97 58.43L156.961 65H155.359ZM143.731 65V55.28H145.162V57.881H145.342V65H143.731ZM149.554 65L149.563 58.844C149.563 58.1 149.371 57.518 148.987 57.098C148.603 56.672 148.093 56.459 147.457 56.459C146.827 56.459 146.317 56.675 145.927 57.107C145.537 57.539 145.342 58.112 145.342 58.826L144.496 58.322C144.496 57.692 144.646 57.128 144.946 56.63C145.246 56.132 145.654 55.742 146.17 55.46C146.686 55.172 147.271 55.028 147.925 55.028C148.579 55.028 149.149 55.166 149.635 55.442C150.121 55.718 150.496 56.114 150.76 56.63C151.024 57.14 151.156 57.749 151.156 58.457L151.147 65H149.554ZM163.005 65.252C162.381 65.252 161.844 65.153 161.394 64.955C160.95 64.757 160.581 64.493 160.287 64.163C159.993 63.833 159.762 63.467 159.594 63.065C159.426 62.663 159.306 62.252 159.234 61.832C159.168 61.412 159.135 61.019 159.135 60.653V55.28H160.755V60.149C160.755 60.605 160.797 61.046 160.881 61.472C160.965 61.898 161.106 62.282 161.304 62.624C161.508 62.966 161.778 63.236 162.114 63.434C162.456 63.632 162.882 63.731 163.392 63.731C163.794 63.731 164.16 63.662 164.49 63.524C164.82 63.386 165.102 63.182 165.336 62.912C165.57 62.636 165.75 62.288 165.876 61.868C166.002 61.448 166.065 60.959 166.065 60.401L167.118 60.725C167.118 61.661 166.947 62.468 166.605 63.146C166.269 63.824 165.792 64.346 165.174 64.712C164.562 65.072 163.839 65.252 163.005 65.252ZM166.245 65V62.399H166.065V55.28H167.676V65H166.245ZM181.815 65L181.824 58.781C181.824 58.055 181.629 57.488 181.239 57.08C180.855 56.666 180.354 56.459 179.736 56.459C179.376 56.459 179.034 56.543 178.71 56.711C178.386 56.873 178.122 57.131 177.918 57.485C177.714 57.833 177.612 58.28 177.612 58.826L176.766 58.484C176.754 57.794 176.895 57.191 177.189 56.675C177.489 56.153 177.897 55.748 178.413 55.46C178.929 55.172 179.511 55.028 180.159 55.028C181.173 55.028 181.971 55.337 182.553 55.955C183.135 56.567 183.426 57.392 183.426 58.43L183.417 65H181.815ZM170.187 65V55.28H171.618V57.881H171.798V65H170.187ZM176.01 65L176.019 58.844C176.019 58.1 175.827 57.518 175.443 57.098C175.059 56.672 174.549 56.459 173.913 56.459C173.283 56.459 172.773 56.675 172.383 57.107C171.993 57.539 171.798 58.112 171.798 58.826L170.952 58.322C170.952 57.692 171.102 57.128 171.402 56.63C171.702 56.132 172.11 55.742 172.626 55.46C173.142 55.172 173.727 55.028 174.381 55.028C175.035 55.028 175.605 55.166 176.091 55.442C176.577 55.718 176.952 56.114 177.216 56.63C177.48 57.14 177.612 57.749 177.612 58.457L177.603 65H176.01ZM194.485 65.27C193.483 65.27 192.598 65.063 191.83 64.649C191.062 64.235 190.459 63.656 190.021 62.912C189.589 62.162 189.373 61.283 189.373 60.275V52.049L190.993 52.04V60.14C190.993 60.752 191.095 61.286 191.299 61.742C191.509 62.192 191.785 62.567 192.127 62.867C192.469 63.167 192.844 63.392 193.252 63.542C193.666 63.686 194.077 63.758 194.485 63.758C194.899 63.758 195.313 63.683 195.727 63.533C196.141 63.383 196.516 63.161 196.852 62.867C197.194 62.567 197.467 62.189 197.671 61.733C197.875 61.277 197.977 60.746 197.977 60.14V52.04H199.597V60.275C199.597 61.277 199.378 62.153 198.94 62.903C198.508 63.653 197.908 64.235 197.14 64.649C196.372 65.063 195.487 65.27 194.485 65.27ZM206.581 65.27C205.669 65.27 204.901 65.045 204.277 64.595C203.653 64.139 203.179 63.524 202.855 62.75C202.537 61.97 202.378 61.097 202.378 60.131C202.378 59.153 202.537 58.277 202.855 57.503C203.179 56.729 203.653 56.12 204.277 55.676C204.907 55.232 205.678 55.01 206.59 55.01C207.49 55.01 208.264 55.235 208.912 55.685C209.566 56.129 210.067 56.738 210.415 57.512C210.763 58.286 210.937 59.159 210.937 60.131C210.937 61.103 210.763 61.976 210.415 62.75C210.067 63.524 209.566 64.139 208.912 64.595C208.264 65.045 207.487 65.27 206.581 65.27ZM202.108 69.32V55.28H203.539V62.435H203.719V69.32H202.108ZM206.383 63.803C207.025 63.803 207.556 63.641 207.976 63.317C208.396 62.993 208.711 62.555 208.921 62.003C209.131 61.445 209.236 60.821 209.236 60.131C209.236 59.447 209.131 58.829 208.921 58.277C208.717 57.725 208.399 57.287 207.967 56.963C207.541 56.639 206.998 56.477 206.338 56.477C205.708 56.477 205.186 56.633 204.772 56.945C204.358 57.251 204.049 57.68 203.845 58.232C203.641 58.778 203.539 59.411 203.539 60.131C203.539 60.839 203.638 61.472 203.836 62.03C204.04 62.582 204.352 63.017 204.772 63.335C205.192 63.647 205.729 63.803 206.383 63.803ZM213.09 65V51.77H214.692V65H213.09ZM221.533 65.27C220.567 65.27 219.733 65.051 219.031 64.613C218.335 64.175 217.798 63.569 217.42 62.795C217.042 62.021 216.853 61.133 216.853 60.131C216.853 59.111 217.045 58.217 217.429 57.449C217.813 56.681 218.356 56.084 219.058 55.658C219.76 55.226 220.585 55.01 221.533 55.01C222.505 55.01 223.342 55.229 224.044 55.667C224.746 56.099 225.283 56.702 225.655 57.476C226.033 58.244 226.222 59.129 226.222 60.131C226.222 61.145 226.033 62.039 225.655 62.813C225.277 63.581 224.737 64.184 224.035 64.622C223.333 65.054 222.499 65.27 221.533 65.27ZM221.533 63.749C222.541 63.749 223.291 63.413 223.783 62.741C224.275 62.069 224.521 61.199 224.521 60.131C224.521 59.033 224.272 58.16 223.774 57.512C223.276 56.858 222.529 56.531 221.533 56.531C220.855 56.531 220.297 56.684 219.859 56.99C219.421 57.296 219.094 57.719 218.878 58.259C218.662 58.799 218.554 59.423 218.554 60.131C218.554 61.223 218.806 62.099 219.31 62.759C219.814 63.419 220.555 63.749 221.533 63.749ZM230.966 65.27C230.24 65.27 229.631 65.138 229.139 64.874C228.653 64.604 228.284 64.25 228.032 63.812C227.786 63.374 227.663 62.894 227.663 62.372C227.663 61.862 227.759 61.421 227.951 61.049C228.149 60.671 228.425 60.359 228.779 60.113C229.133 59.861 229.556 59.663 230.048 59.519C230.51 59.393 231.026 59.285 231.596 59.195C232.172 59.099 232.754 59.012 233.342 58.934C233.93 58.856 234.479 58.781 234.989 58.709L234.413 59.042C234.431 58.178 234.257 57.539 233.891 57.125C233.531 56.711 232.907 56.504 232.019 56.504C231.431 56.504 230.915 56.639 230.471 56.909C230.033 57.173 229.724 57.605 229.544 58.205L228.023 57.746C228.257 56.894 228.71 56.225 229.382 55.739C230.054 55.253 230.939 55.01 232.037 55.01C232.919 55.01 233.675 55.169 234.305 55.487C234.941 55.799 235.397 56.273 235.673 56.909C235.811 57.209 235.898 57.536 235.934 57.89C235.97 58.238 235.988 58.604 235.988 58.988V65H234.566V62.669L234.899 62.885C234.533 63.671 234.02 64.265 233.36 64.667C232.706 65.069 231.908 65.27 230.966 65.27ZM231.209 63.929C231.785 63.929 232.283 63.827 232.703 63.623C233.129 63.413 233.471 63.14 233.729 62.804C233.987 62.462 234.155 62.09 234.233 61.688C234.323 61.388 234.371 61.055 234.377 60.689C234.389 60.317 234.395 60.032 234.395 59.834L234.953 60.077C234.431 60.149 233.918 60.218 233.414 60.284C232.91 60.35 232.433 60.422 231.983 60.5C231.533 60.572 231.128 60.659 230.768 60.761C230.504 60.845 230.255 60.953 230.021 61.085C229.793 61.217 229.607 61.388 229.463 61.598C229.325 61.802 229.256 62.057 229.256 62.363C229.256 62.627 229.322 62.879 229.454 63.119C229.592 63.359 229.802 63.554 230.084 63.704C230.372 63.854 230.747 63.929 231.209 63.929ZM242.144 65.27C241.238 65.27 240.461 65.045 239.813 64.595C239.165 64.139 238.664 63.524 238.31 62.75C237.962 61.976 237.788 61.103 237.788 60.131C237.788 59.159 237.962 58.286 238.31 57.512C238.664 56.738 239.165 56.129 239.813 55.685C240.461 55.235 241.235 55.01 242.135 55.01C243.053 55.01 243.824 55.232 244.448 55.676C245.072 56.12 245.543 56.729 245.861 57.503C246.185 58.277 246.347 59.153 246.347 60.131C246.347 61.097 246.185 61.97 245.861 62.75C245.543 63.524 245.072 64.139 244.448 64.595C243.824 65.045 243.056 65.27 242.144 65.27ZM242.342 63.803C242.996 63.803 243.533 63.647 243.953 63.335C244.373 63.017 244.682 62.582 244.88 62.03C245.084 61.472 245.186 60.839 245.186 60.131C245.186 59.411 245.084 58.778 244.88 58.232C244.682 57.68 244.376 57.251 243.962 56.945C243.548 56.633 243.023 56.477 242.387 56.477C241.727 56.477 241.181 56.639 240.749 56.963C240.323 57.287 240.005 57.725 239.795 58.277C239.591 58.829 239.489 59.447 239.489 60.131C239.489 60.821 239.594 61.445 239.804 62.003C240.014 62.555 240.329 62.993 240.749 63.317C241.175 63.641 241.706 63.803 242.342 63.803ZM245.186 65V57.845H245.006V52.04H246.617V65H245.186ZM256.414 65.261C255.256 65.261 254.305 65.009 253.561 64.505C252.823 63.995 252.37 63.284 252.202 62.372L253.84 62.111C253.972 62.639 254.275 63.059 254.749 63.371C255.223 63.677 255.811 63.83 256.513 63.83C257.179 63.83 257.701 63.692 258.079 63.416C258.457 63.14 258.646 62.765 258.646 62.291C258.646 62.015 258.583 61.793 258.457 61.625C258.331 61.451 258.07 61.289 257.674 61.139C257.284 60.989 256.693 60.809 255.901 60.599C255.043 60.371 254.368 60.134 253.876 59.888C253.384 59.642 253.033 59.357 252.823 59.033C252.613 58.709 252.508 58.316 252.508 57.854C252.508 57.284 252.664 56.786 252.976 56.36C253.288 55.928 253.723 55.595 254.281 55.361C254.845 55.127 255.499 55.01 256.243 55.01C256.981 55.01 257.641 55.127 258.223 55.361C258.805 55.595 259.273 55.928 259.627 56.36C259.987 56.786 260.2 57.284 260.266 57.854L258.628 58.151C258.55 57.629 258.298 57.218 257.872 56.918C257.452 56.618 256.909 56.459 256.243 56.441C255.613 56.417 255.1 56.528 254.704 56.774C254.314 57.02 254.119 57.353 254.119 57.773C254.119 58.007 254.191 58.208 254.335 58.376C254.485 58.544 254.758 58.703 255.154 58.853C255.556 59.003 256.138 59.174 256.9 59.366C257.758 59.582 258.433 59.819 258.925 60.077C259.423 60.329 259.777 60.629 259.987 60.977C260.197 61.319 260.302 61.742 260.302 62.246C260.302 63.182 259.957 63.92 259.267 64.46C258.577 64.994 257.626 65.261 256.414 65.261ZM262.467 53.561V51.905H264.069V53.561H262.467ZM262.467 65V55.28H264.069V65H262.467ZM265.87 65V64.712L271.765 56.738H266.356V55.28H274.348V55.586L268.462 63.542H274.042V65H265.87ZM279.824 65.27C278.87 65.27 278.036 65.06 277.322 64.64C276.614 64.214 276.062 63.623 275.666 62.867C275.27 62.105 275.072 61.217 275.072 60.203C275.072 59.141 275.267 58.223 275.657 57.449C276.047 56.669 276.59 56.069 277.286 55.649C277.988 55.223 278.81 55.01 279.752 55.01C280.73 55.01 281.561 55.235 282.245 55.685C282.935 56.135 283.451 56.777 283.793 57.611C284.141 58.445 284.291 59.438 284.243 60.59H282.623V60.014C282.605 58.82 282.362 57.929 281.894 57.341C281.426 56.747 280.73 56.45 279.806 56.45C278.816 56.45 278.063 56.768 277.547 57.404C277.031 58.04 276.773 58.952 276.773 60.14C276.773 61.286 277.031 62.174 277.547 62.804C278.063 63.434 278.798 63.749 279.752 63.749C280.394 63.749 280.952 63.602 281.426 63.308C281.9 63.014 282.272 62.591 282.542 62.039L284.081 62.57C283.703 63.428 283.133 64.094 282.371 64.568C281.615 65.036 280.766 65.27 279.824 65.27ZM276.233 60.59V59.303H283.415V60.59H276.233ZM290.03 53.561V51.905H291.632V53.561H290.03ZM290.03 65V55.28H291.632V65H290.03ZM298.004 65.261C296.846 65.261 295.895 65.009 295.151 64.505C294.413 63.995 293.96 63.284 293.792 62.372L295.43 62.111C295.562 62.639 295.865 63.059 296.339 63.371C296.813 63.677 297.401 63.83 298.103 63.83C298.769 63.83 299.291 63.692 299.669 63.416C300.047 63.14 300.236 62.765 300.236 62.291C300.236 62.015 300.173 61.793 300.047 61.625C299.921 61.451 299.66 61.289 299.264 61.139C298.874 60.989 298.283 60.809 297.491 60.599C296.633 60.371 295.958 60.134 295.466 59.888C294.974 59.642 294.623 59.357 294.413 59.033C294.203 58.709 294.098 58.316 294.098 57.854C294.098 57.284 294.254 56.786 294.566 56.36C294.878 55.928 295.313 55.595 295.871 55.361C296.435 55.127 297.089 55.01 297.833 55.01C298.571 55.01 299.231 55.127 299.813 55.361C300.395 55.595 300.863 55.928 301.217 56.36C301.577 56.786 301.79 57.284 301.856 57.854L300.218 58.151C300.14 57.629 299.888 57.218 299.462 56.918C299.042 56.618 298.499 56.459 297.833 56.441C297.203 56.417 296.69 56.528 296.294 56.774C295.904 57.02 295.709 57.353 295.709 57.773C295.709 58.007 295.781 58.208 295.925 58.376C296.075 58.544 296.348 58.703 296.744 58.853C297.146 59.003 297.728 59.174 298.49 59.366C299.348 59.582 300.023 59.819 300.515 60.077C301.013 60.329 301.367 60.629 301.577 60.977C301.787 61.319 301.892 61.742 301.892 62.246C301.892 63.182 301.547 63.92 300.857 64.46C300.167 64.994 299.216 65.261 298.004 65.261ZM309.74 65V53.813L307.301 55.289V53.498L309.74 52.04H311.369V65H309.74ZM319.167 65.27C318.327 65.27 317.577 65.081 316.917 64.703C316.263 64.319 315.744 63.8 315.36 63.146C314.982 62.486 314.793 61.736 314.793 60.896V56.144C314.793 55.304 314.982 54.554 315.36 53.894C315.744 53.234 316.263 52.715 316.917 52.337C317.577 51.959 318.327 51.77 319.167 51.77C320.007 51.77 320.757 51.959 321.417 52.337C322.077 52.715 322.596 53.234 322.974 53.894C323.352 54.554 323.541 55.304 323.541 56.144V60.896C323.541 61.736 323.352 62.486 322.974 63.146C322.596 63.8 322.077 64.319 321.417 64.703C320.757 65.081 320.007 65.27 319.167 65.27ZM319.167 63.731C319.677 63.731 320.139 63.608 320.553 63.362C320.967 63.116 321.297 62.786 321.543 62.372C321.789 61.952 321.912 61.49 321.912 60.986V56.045C321.912 55.535 321.789 55.073 321.543 54.659C321.297 54.245 320.967 53.915 320.553 53.669C320.139 53.423 319.677 53.3 319.167 53.3C318.663 53.3 318.201 53.423 317.781 53.669C317.367 53.915 317.037 54.245 316.791 54.659C316.545 55.073 316.422 55.535 316.422 56.045V60.986C316.422 61.49 316.545 61.952 316.791 62.372C317.037 62.786 317.367 63.116 317.781 63.362C318.201 63.608 318.663 63.731 319.167 63.731ZM330.435 65.27C329.595 65.27 328.845 65.081 328.185 64.703C327.531 64.319 327.012 63.8 326.628 63.146C326.25 62.486 326.061 61.736 326.061 60.896V56.144C326.061 55.304 326.25 54.554 326.628 53.894C327.012 53.234 327.531 52.715 328.185 52.337C328.845 51.959 329.595 51.77 330.435 51.77C331.275 51.77 332.025 51.959 332.685 52.337C333.345 52.715 333.864 53.234 334.242 53.894C334.62 54.554 334.809 55.304 334.809 56.144V60.896C334.809 61.736 334.62 62.486 334.242 63.146C333.864 63.8 333.345 64.319 332.685 64.703C332.025 65.081 331.275 65.27 330.435 65.27ZM330.435 63.731C330.945 63.731 331.407 63.608 331.821 63.362C332.235 63.116 332.565 62.786 332.811 62.372C333.057 61.952 333.18 61.49 333.18 60.986V56.045C333.18 55.535 333.057 55.073 332.811 54.659C332.565 54.245 332.235 53.915 331.821 53.669C331.407 53.423 330.945 53.3 330.435 53.3C329.931 53.3 329.469 53.423 329.049 53.669C328.635 53.915 328.305 54.245 328.059 54.659C327.813 55.073 327.69 55.535 327.69 56.045V60.986C327.69 61.49 327.813 61.952 328.059 62.372C328.305 62.786 328.635 63.116 329.049 63.362C329.469 63.608 329.931 63.731 330.435 63.731ZM337.328 65V52.04H338.786L343.682 62.363L348.551 52.04H350.027V64.991H348.506V55.559L344.105 65H343.25L338.849 55.559V65H337.328ZM352.551 65V52.04H357.6C358.374 52.04 359.034 52.199 359.58 52.517C360.132 52.835 360.552 53.255 360.84 53.777C361.134 54.293 361.281 54.851 361.281 55.451C361.281 56.153 361.101 56.768 360.741 57.296C360.381 57.824 359.895 58.187 359.283 58.385L359.265 57.944C360.099 58.166 360.747 58.574 361.209 59.168C361.671 59.762 361.902 60.47 361.902 61.292C361.902 62.048 361.746 62.702 361.434 63.254C361.128 63.806 360.684 64.235 360.102 64.541C359.526 64.847 358.842 65 358.05 65H352.551ZM354.171 63.47H357.744C358.224 63.47 358.653 63.383 359.031 63.209C359.409 63.029 359.706 62.777 359.922 62.453C360.144 62.129 360.255 61.739 360.255 61.283C360.255 60.845 360.156 60.452 359.958 60.104C359.766 59.756 359.493 59.48 359.139 59.276C358.791 59.066 358.386 58.961 357.924 58.961H354.171V63.47ZM354.171 57.449H357.582C357.966 57.449 358.311 57.368 358.617 57.206C358.929 57.038 359.175 56.804 359.355 56.504C359.541 56.204 359.634 55.853 359.634 55.451C359.634 54.893 359.445 54.437 359.067 54.083C358.689 53.729 358.194 53.552 357.582 53.552H354.171V57.449Z"
                  fill="#5B5B5B"
                />
                <path
                  d="M144.568 18.36C143.216 18.36 142.02 18.084 140.98 17.532C139.948 16.972 139.14 16.192 138.556 15.192C137.972 14.184 137.68 13 137.68 11.64V0.732L140.224 0.719999V11.508C140.224 12.244 140.348 12.892 140.596 13.452C140.844 14.012 141.176 14.48 141.592 14.856C142.008 15.232 142.472 15.516 142.984 15.708C143.504 15.9 144.032 15.996 144.568 15.996C145.112 15.996 145.64 15.9 146.152 15.708C146.672 15.508 147.14 15.22 147.556 14.844C147.972 14.468 148.3 14 148.54 13.44C148.788 12.88 148.912 12.236 148.912 11.508V0.719999H151.456V11.64C151.456 12.992 151.164 14.172 150.58 15.18C149.996 16.188 149.184 16.972 148.144 17.532C147.112 18.084 145.92 18.36 144.568 18.36ZM160.897 18.36C159.657 18.36 158.617 18.06 157.777 17.46C156.937 16.852 156.301 16.032 155.869 15C155.437 13.968 155.221 12.804 155.221 11.508C155.221 10.212 155.433 9.048 155.857 8.016C156.289 6.984 156.921 6.172 157.753 5.58C158.593 4.98 159.625 4.68 160.849 4.68C162.065 4.68 163.113 4.98 163.993 5.58C164.881 6.172 165.565 6.984 166.045 8.016C166.525 9.04 166.765 10.204 166.765 11.508C166.765 12.804 166.525 13.972 166.045 15.012C165.573 16.044 164.897 16.86 164.017 17.46C163.145 18.06 162.105 18.36 160.897 18.36ZM154.801 23.76V5.04H157.033V14.364H157.321V23.76H154.801ZM160.549 16.092C161.349 16.092 162.009 15.888 162.529 15.48C163.057 15.072 163.449 14.524 163.705 13.836C163.969 13.14 164.101 12.364 164.101 11.508C164.101 10.66 163.969 9.892 163.705 9.204C163.449 8.516 163.053 7.968 162.517 7.56C161.981 7.152 161.297 6.948 160.465 6.948C159.681 6.948 159.033 7.14 158.521 7.524C158.017 7.908 157.641 8.444 157.393 9.132C157.153 9.82 157.033 10.612 157.033 11.508C157.033 12.404 157.153 13.196 157.393 13.884C157.633 14.572 158.013 15.112 158.533 15.504C159.053 15.896 159.725 16.092 160.549 16.092ZM169.654 18V0.36H172.162V18H169.654ZM181.394 18.36C180.098 18.36 178.974 18.068 178.022 17.484C177.07 16.9 176.334 16.096 175.814 15.072C175.302 14.04 175.046 12.852 175.046 11.508C175.046 10.156 175.31 8.968 175.838 7.944C176.366 6.912 177.106 6.112 178.058 5.544C179.01 4.968 180.122 4.68 181.394 4.68C182.69 4.68 183.814 4.972 184.766 5.556C185.718 6.14 186.454 6.944 186.974 7.968C187.494 8.992 187.754 10.172 187.754 11.508C187.754 12.86 187.49 14.052 186.962 15.084C186.442 16.108 185.706 16.912 184.754 17.496C183.802 18.072 182.682 18.36 181.394 18.36ZM181.394 15.996C182.634 15.996 183.558 15.58 184.166 14.748C184.782 13.908 185.09 12.828 185.09 11.508C185.09 10.156 184.778 9.076 184.154 8.268C183.538 7.452 182.618 7.044 181.394 7.044C180.554 7.044 179.862 7.236 179.318 7.62C178.774 7.996 178.37 8.52 178.106 9.192C177.842 9.856 177.71 10.628 177.71 11.508C177.71 12.868 178.022 13.956 178.646 14.772C179.27 15.588 180.186 15.996 181.394 15.996ZM194.051 18.36C193.091 18.36 192.287 18.184 191.639 17.832C190.991 17.472 190.499 17 190.163 16.416C189.835 15.824 189.671 15.176 189.671 14.472C189.671 13.816 189.787 13.24 190.019 12.744C190.251 12.248 190.595 11.828 191.051 11.484C191.507 11.132 192.067 10.848 192.731 10.632C193.307 10.464 193.959 10.316 194.687 10.188C195.415 10.06 196.179 9.94 196.979 9.828C197.787 9.716 198.587 9.604 199.379 9.492L198.467 9.996C198.483 8.98 198.267 8.228 197.819 7.74C197.379 7.244 196.619 6.996 195.539 6.996C194.859 6.996 194.235 7.156 193.667 7.476C193.099 7.788 192.703 8.308 192.479 9.036L190.139 8.316C190.459 7.204 191.067 6.32 191.963 5.664C192.867 5.008 194.067 4.68 195.563 4.68C196.723 4.68 197.731 4.88 198.587 5.28C199.451 5.672 200.083 6.296 200.483 7.152C200.691 7.576 200.819 8.024 200.867 8.496C200.915 8.968 200.939 9.476 200.939 10.02V18H198.719V15.036L199.151 15.42C198.615 16.412 197.931 17.152 197.099 17.64C196.275 18.12 195.259 18.36 194.051 18.36ZM194.495 16.308C195.207 16.308 195.819 16.184 196.331 15.936C196.843 15.68 197.255 15.356 197.567 14.964C197.879 14.572 198.083 14.164 198.179 13.74C198.315 13.356 198.391 12.924 198.407 12.444C198.431 11.964 198.443 11.58 198.443 11.292L199.259 11.592C198.467 11.712 197.747 11.82 197.099 11.916C196.451 12.012 195.863 12.108 195.335 12.204C194.815 12.292 194.351 12.4 193.943 12.528C193.599 12.648 193.291 12.792 193.019 12.96C192.755 13.128 192.543 13.332 192.383 13.572C192.231 13.812 192.155 14.104 192.155 14.448C192.155 14.784 192.239 15.096 192.407 15.384C192.575 15.664 192.831 15.888 193.175 16.056C193.519 16.224 193.959 16.308 194.495 16.308ZM209.203 18.36C207.995 18.36 206.951 18.06 206.071 17.46C205.199 16.86 204.523 16.044 204.043 15.012C203.571 13.972 203.335 12.804 203.335 11.508C203.335 10.204 203.575 9.04 204.055 8.016C204.535 6.984 205.215 6.172 206.095 5.58C206.983 4.98 208.035 4.68 209.251 4.68C210.475 4.68 211.503 4.98 212.335 5.58C213.175 6.172 213.807 6.984 214.231 8.016C214.663 9.048 214.879 10.212 214.879 11.508C214.879 12.804 214.663 13.968 214.231 15C213.799 16.032 213.163 16.852 212.323 17.46C211.483 18.06 210.443 18.36 209.203 18.36ZM209.551 16.092C210.375 16.092 211.047 15.896 211.567 15.504C212.087 15.112 212.467 14.572 212.707 13.884C212.947 13.196 213.067 12.404 213.067 11.508C213.067 10.612 212.943 9.82 212.695 9.132C212.455 8.444 212.079 7.908 211.567 7.524C211.063 7.14 210.419 6.948 209.635 6.948C208.803 6.948 208.119 7.152 207.583 7.56C207.047 7.968 206.647 8.516 206.383 9.204C206.127 9.892 205.999 10.66 205.999 11.508C205.999 12.364 206.127 13.14 206.383 13.836C206.647 14.524 207.039 15.072 207.559 15.48C208.087 15.888 208.751 16.092 209.551 16.092ZM213.067 18V8.676H212.779V0.719999H215.299V18H213.067ZM228.609 18.36C227.401 18.36 226.357 18.06 225.477 17.46C224.605 16.86 223.929 16.044 223.449 15.012C222.977 13.972 222.741 12.804 222.741 11.508C222.741 10.204 222.981 9.04 223.461 8.016C223.941 6.984 224.621 6.172 225.501 5.58C226.389 4.98 227.441 4.68 228.657 4.68C229.881 4.68 230.909 4.98 231.741 5.58C232.581 6.172 233.213 6.984 233.637 8.016C234.069 9.048 234.285 10.212 234.285 11.508C234.285 12.804 234.069 13.968 233.637 15C233.205 16.032 232.569 16.852 231.729 17.46C230.889 18.06 229.849 18.36 228.609 18.36ZM228.957 16.092C229.781 16.092 230.453 15.896 230.973 15.504C231.493 15.112 231.873 14.572 232.113 13.884C232.353 13.196 232.473 12.404 232.473 11.508C232.473 10.612 232.349 9.82 232.101 9.132C231.861 8.444 231.485 7.908 230.973 7.524C230.469 7.14 229.825 6.948 229.041 6.948C228.209 6.948 227.525 7.152 226.989 7.56C226.453 7.968 226.053 8.516 225.789 9.204C225.533 9.892 225.405 10.66 225.405 11.508C225.405 12.364 225.533 13.14 225.789 13.836C226.053 14.524 226.445 15.072 226.965 15.48C227.493 15.888 228.157 16.092 228.957 16.092ZM232.473 18V8.676H232.185V0.719999H234.705V18H232.473ZM243.691 18.36C242.395 18.36 241.271 18.068 240.319 17.484C239.367 16.9 238.631 16.096 238.111 15.072C237.599 14.04 237.343 12.852 237.343 11.508C237.343 10.156 237.607 8.968 238.135 7.944C238.663 6.912 239.403 6.112 240.355 5.544C241.307 4.968 242.419 4.68 243.691 4.68C244.987 4.68 246.111 4.972 247.063 5.556C248.015 6.14 248.751 6.944 249.271 7.968C249.791 8.992 250.051 10.172 250.051 11.508C250.051 12.86 249.787 14.052 249.259 15.084C248.739 16.108 248.003 16.912 247.051 17.496C246.099 18.072 244.979 18.36 243.691 18.36ZM243.691 15.996C244.931 15.996 245.855 15.58 246.463 14.748C247.079 13.908 247.387 12.828 247.387 11.508C247.387 10.156 247.075 9.076 246.451 8.268C245.835 7.452 244.915 7.044 243.691 7.044C242.851 7.044 242.159 7.236 241.615 7.62C241.071 7.996 240.667 8.52 240.403 9.192C240.139 9.856 240.007 10.628 240.007 11.508C240.007 12.868 240.319 13.956 240.943 14.772C241.567 15.588 242.483 15.996 243.691 15.996ZM258.232 18.36C256.904 18.36 255.776 18.064 254.848 17.472C253.92 16.88 253.208 16.068 252.712 15.036C252.224 14.004 251.976 12.832 251.968 11.52C251.976 10.184 252.232 9.004 252.736 7.98C253.24 6.948 253.96 6.14 254.896 5.556C255.832 4.972 256.956 4.68 258.268 4.68C259.684 4.68 260.892 5.032 261.892 5.736C262.9 6.44 263.564 7.404 263.884 8.628L261.388 9.348C261.14 8.62 260.732 8.056 260.164 7.656C259.604 7.248 258.96 7.044 258.232 7.044C257.408 7.044 256.732 7.24 256.204 7.632C255.676 8.016 255.284 8.544 255.028 9.216C254.772 9.888 254.64 10.656 254.632 11.52C254.64 12.856 254.944 13.936 255.544 14.76C256.152 15.584 257.048 15.996 258.232 15.996C259.04 15.996 259.692 15.812 260.188 15.444C260.692 15.068 261.076 14.532 261.34 13.836L263.884 14.436C263.46 15.7 262.76 16.672 261.784 17.352C260.808 18.024 259.624 18.36 258.232 18.36ZM271.212 18.348C270.316 18.348 269.564 18.204 268.956 17.916C268.348 17.628 267.852 17.252 267.468 16.788C267.092 16.316 266.804 15.804 266.604 15.252C266.404 14.7 266.268 14.16 266.196 13.632C266.124 13.104 266.088 12.64 266.088 12.24V5.04H268.632V11.412C268.632 11.916 268.672 12.436 268.752 12.972C268.84 13.5 269 13.992 269.232 14.448C269.472 14.904 269.804 15.272 270.228 15.552C270.66 15.832 271.22 15.972 271.908 15.972C272.356 15.972 272.78 15.9 273.18 15.756C273.58 15.604 273.928 15.364 274.224 15.036C274.528 14.708 274.764 14.276 274.932 13.74C275.108 13.204 275.196 12.552 275.196 11.784L276.756 12.372C276.756 13.548 276.536 14.588 276.096 15.492C275.656 16.388 275.024 17.088 274.2 17.592C273.376 18.096 272.38 18.348 271.212 18.348ZM275.496 18V14.256H275.196V5.04H277.728V18H275.496ZM296.622 18L296.634 9.924C296.634 8.988 296.394 8.26 295.914 7.74C295.434 7.212 294.802 6.948 294.018 6.948C293.538 6.948 293.098 7.06 292.698 7.284C292.306 7.5 291.986 7.828 291.738 8.268C291.498 8.7 291.378 9.244 291.378 9.9L290.166 9.288C290.15 8.376 290.342 7.576 290.742 6.888C291.15 6.2 291.702 5.668 292.398 5.292C293.094 4.908 293.874 4.716 294.738 4.716C296.138 4.716 297.222 5.136 297.99 5.976C298.758 6.816 299.142 7.932 299.142 9.324L299.13 18H296.622ZM281.082 18V5.04H283.314V8.784H283.602V18H281.082ZM288.858 18L288.87 9.972C288.87 9.028 288.63 8.288 288.15 7.752C287.678 7.216 287.042 6.948 286.242 6.948C285.45 6.948 284.81 7.22 284.322 7.764C283.842 8.308 283.602 9.02 283.602 9.9L282.402 9.132C282.402 8.284 282.606 7.528 283.014 6.864C283.422 6.2 283.974 5.676 284.67 5.292C285.366 4.908 286.154 4.716 287.034 4.716C287.954 4.716 288.738 4.912 289.386 5.304C290.034 5.688 290.526 6.228 290.862 6.924C291.206 7.62 291.378 8.428 291.378 9.348L291.366 18H288.858ZM307.842 18.36C306.554 18.36 305.422 18.08 304.446 17.52C303.478 16.952 302.722 16.164 302.178 15.156C301.642 14.14 301.374 12.964 301.374 11.628C301.374 10.212 301.638 8.984 302.166 7.944C302.702 6.904 303.446 6.1 304.398 5.532C305.35 4.964 306.458 4.68 307.722 4.68C309.042 4.68 310.166 4.988 311.094 5.604C312.022 6.212 312.714 7.08 313.17 8.208C313.634 9.336 313.818 10.676 313.722 12.228H311.214V11.316C311.198 9.812 310.91 8.7 310.35 7.98C309.798 7.26 308.954 6.9 307.818 6.9C306.562 6.9 305.618 7.296 304.986 8.088C304.354 8.88 304.038 10.024 304.038 11.52C304.038 12.944 304.354 14.048 304.986 14.832C305.618 15.608 306.53 15.996 307.722 15.996C308.506 15.996 309.182 15.82 309.75 15.468C310.326 15.108 310.774 14.596 311.094 13.932L313.554 14.712C313.05 15.872 312.286 16.772 311.262 17.412C310.238 18.044 309.098 18.36 307.842 18.36ZM303.222 12.228V10.272H312.474V12.228H303.222ZM325.159 18V11.628C325.159 11.124 325.115 10.608 325.027 10.08C324.947 9.544 324.787 9.048 324.547 8.592C324.315 8.136 323.983 7.768 323.551 7.488C323.127 7.208 322.571 7.068 321.883 7.068C321.435 7.068 321.011 7.144 320.611 7.296C320.211 7.44 319.859 7.676 319.555 8.004C319.259 8.332 319.023 8.764 318.847 9.3C318.679 9.836 318.595 10.488 318.595 11.256L317.035 10.668C317.035 9.492 317.255 8.456 317.695 7.56C318.135 6.656 318.767 5.952 319.591 5.448C320.415 4.944 321.411 4.692 322.579 4.692C323.475 4.692 324.227 4.836 324.835 5.124C325.443 5.412 325.935 5.792 326.311 6.264C326.695 6.728 326.987 7.236 327.187 7.788C327.387 8.34 327.523 8.88 327.595 9.408C327.667 9.936 327.703 10.4 327.703 10.8V18H325.159ZM316.051 18V5.04H318.295V8.784H318.595V18H316.051ZM338.244 18C337.428 18.16 336.628 18.228 335.844 18.204C335.06 18.18 334.36 18.028 333.744 17.748C333.128 17.468 332.664 17.028 332.352 16.428C332.072 15.892 331.92 15.348 331.896 14.796C331.88 14.236 331.872 13.604 331.872 12.9V1.44H334.392V12.78C334.392 13.3 334.396 13.752 334.404 14.136C334.42 14.52 334.504 14.844 334.656 15.108C334.944 15.604 335.4 15.888 336.024 15.96C336.656 16.024 337.396 15.996 338.244 15.876V18ZM329.388 7.056V5.04H338.244V7.056H329.388Z"
                  fill="#212529"
                />
                <rect
                  x="1"
                  y="115"
                  width="451"
                  height="215"
                  rx="9"
                  fill="url(#paint0_linear_824_9245)"
                  stroke="#4C004A"
                  stroke-width="2"
                  stroke-dasharray="7 4"
                />
                <path
                  d="M130.346 206V195.2H133.728C133.828 195.2 134.013 195.202 134.283 195.207C134.558 195.212 134.821 195.232 135.071 195.267C135.916 195.372 136.626 195.675 137.201 196.175C137.781 196.675 138.218 197.31 138.513 198.08C138.808 198.845 138.956 199.685 138.956 200.6C138.956 201.52 138.808 202.365 138.513 203.135C138.218 203.9 137.781 204.532 137.201 205.032C136.626 205.527 135.916 205.827 135.071 205.932C134.821 205.967 134.558 205.987 134.283 205.992C134.013 205.997 133.828 206 133.728 206H130.346ZM131.951 204.507H133.728C133.898 204.507 134.101 204.502 134.336 204.492C134.571 204.482 134.778 204.462 134.958 204.432C135.508 204.327 135.953 204.09 136.293 203.72C136.638 203.345 136.891 202.885 137.051 202.34C137.211 201.795 137.291 201.215 137.291 200.6C137.291 199.965 137.208 199.377 137.043 198.837C136.878 198.292 136.623 197.837 136.278 197.472C135.938 197.102 135.498 196.867 134.958 196.767C134.778 196.732 134.568 196.712 134.328 196.707C134.093 196.697 133.893 196.692 133.728 196.692H131.951V204.507ZM140.702 206V197.9H142.097V199.865L141.902 199.61C142.002 199.35 142.132 199.112 142.292 198.897C142.452 198.677 142.637 198.497 142.847 198.357C143.052 198.207 143.28 198.092 143.53 198.012C143.785 197.927 144.045 197.877 144.31 197.862C144.575 197.842 144.83 197.855 145.075 197.9V199.37C144.81 199.3 144.515 199.28 144.19 199.31C143.87 199.34 143.575 199.442 143.305 199.617C143.05 199.782 142.847 199.982 142.697 200.217C142.552 200.452 142.447 200.715 142.382 201.005C142.317 201.29 142.285 201.592 142.285 201.912V206H140.702ZM148.556 206.225C147.956 206.225 147.454 206.115 147.049 205.895C146.644 205.67 146.336 205.375 146.126 205.01C145.921 204.64 145.819 204.235 145.819 203.795C145.819 203.385 145.891 203.025 146.036 202.715C146.181 202.405 146.396 202.142 146.681 201.927C146.966 201.707 147.316 201.53 147.731 201.395C148.091 201.29 148.499 201.197 148.954 201.117C149.409 201.037 149.886 200.962 150.386 200.892C150.891 200.822 151.391 200.752 151.886 200.682L151.316 200.997C151.326 200.362 151.191 199.892 150.911 199.587C150.636 199.277 150.161 199.122 149.486 199.122C149.061 199.122 148.671 199.222 148.316 199.422C147.961 199.617 147.714 199.942 147.574 200.397L146.111 199.947C146.311 199.252 146.691 198.7 147.251 198.29C147.816 197.88 148.566 197.675 149.501 197.675C150.226 197.675 150.856 197.8 151.391 198.05C151.931 198.295 152.326 198.685 152.576 199.22C152.706 199.485 152.786 199.765 152.816 200.06C152.846 200.355 152.861 200.672 152.861 201.012V206H151.474V204.147L151.744 204.387C151.409 205.007 150.981 205.47 150.461 205.775C149.946 206.075 149.311 206.225 148.556 206.225ZM148.834 204.942C149.279 204.942 149.661 204.865 149.981 204.71C150.301 204.55 150.559 204.347 150.754 204.102C150.949 203.857 151.076 203.602 151.136 203.337C151.221 203.097 151.269 202.827 151.279 202.527C151.294 202.227 151.301 201.987 151.301 201.807L151.811 201.995C151.316 202.07 150.866 202.137 150.461 202.197C150.056 202.257 149.689 202.317 149.359 202.377C149.034 202.432 148.744 202.5 148.489 202.58C148.274 202.655 148.081 202.745 147.911 202.85C147.746 202.955 147.614 203.082 147.514 203.232C147.419 203.382 147.371 203.565 147.371 203.78C147.371 203.99 147.424 204.185 147.529 204.365C147.634 204.54 147.794 204.68 148.009 204.785C148.224 204.89 148.499 204.942 148.834 204.942ZM158.146 209.825C157.711 209.825 157.289 209.758 156.879 209.623C156.474 209.488 156.104 209.288 155.769 209.023C155.434 208.763 155.156 208.44 154.936 208.055L156.384 207.32C156.559 207.665 156.809 207.918 157.134 208.078C157.459 208.238 157.801 208.318 158.161 208.318C158.606 208.318 158.986 208.238 159.301 208.078C159.616 207.923 159.854 207.688 160.014 207.373C160.179 207.058 160.259 206.668 160.254 206.203V203.937H160.441V197.9H161.829V206.218C161.829 206.433 161.821 206.638 161.806 206.833C161.791 207.028 161.764 207.223 161.724 207.418C161.609 207.963 161.389 208.413 161.064 208.768C160.744 209.123 160.334 209.388 159.834 209.563C159.339 209.738 158.776 209.825 158.146 209.825ZM158.026 206.225C157.271 206.225 156.619 206.038 156.069 205.662C155.524 205.287 155.101 204.777 154.801 204.132C154.506 203.482 154.359 202.752 154.359 201.942C154.359 201.127 154.509 200.4 154.809 199.76C155.109 199.115 155.534 198.607 156.084 198.237C156.639 197.862 157.296 197.675 158.056 197.675C158.821 197.675 159.464 197.862 159.984 198.237C160.509 198.607 160.904 199.115 161.169 199.76C161.439 200.405 161.574 201.132 161.574 201.942C161.574 202.752 161.439 203.48 161.169 204.125C160.899 204.77 160.501 205.282 159.976 205.662C159.451 206.038 158.801 206.225 158.026 206.225ZM158.244 204.807C158.759 204.807 159.179 204.685 159.504 204.44C159.829 204.195 160.066 203.857 160.216 203.427C160.366 202.997 160.441 202.502 160.441 201.942C160.441 201.382 160.364 200.887 160.209 200.457C160.059 200.027 159.824 199.692 159.504 199.452C159.189 199.212 158.786 199.092 158.296 199.092C157.776 199.092 157.349 199.22 157.014 199.475C156.679 199.73 156.429 200.072 156.264 200.502C156.104 200.932 156.024 201.412 156.024 201.942C156.024 202.477 156.104 202.962 156.264 203.397C156.429 203.827 156.674 204.17 156.999 204.425C157.329 204.68 157.744 204.807 158.244 204.807ZM170.485 206.225C169.88 206.225 169.315 206.138 168.79 205.962C168.265 205.782 167.825 205.502 167.47 205.122C167.195 204.817 166.99 204.482 166.855 204.117C166.725 203.747 166.653 203.355 166.638 202.94C166.638 202.535 166.695 202.142 166.81 201.763C166.93 201.377 167.118 201.035 167.373 200.735C167.488 200.595 167.615 200.475 167.755 200.375C167.895 200.27 168.035 200.177 168.175 200.097C167.855 199.747 167.613 199.415 167.448 199.1C167.283 198.78 167.2 198.402 167.2 197.967C167.2 197.357 167.36 196.81 167.68 196.325C168 195.835 168.438 195.482 168.993 195.267C169.248 195.162 169.508 195.092 169.773 195.057C170.038 195.017 170.295 194.997 170.545 194.997C170.995 194.997 171.43 195.062 171.85 195.192C172.27 195.322 172.63 195.535 172.93 195.83C173.12 196.005 173.28 196.202 173.41 196.422C173.545 196.642 173.648 196.867 173.718 197.097L172.173 197.457C172.088 197.217 171.948 197.015 171.753 196.85C171.588 196.705 171.395 196.607 171.175 196.557C170.96 196.502 170.745 196.475 170.53 196.475C170.175 196.475 169.855 196.542 169.57 196.677C169.31 196.802 169.115 196.975 168.985 197.195C168.855 197.41 168.79 197.67 168.79 197.975C168.79 198.245 168.838 198.462 168.933 198.627C169.028 198.792 169.155 198.965 169.315 199.145C169.41 199.25 169.523 199.362 169.653 199.482C169.788 199.602 169.925 199.727 170.065 199.857L173.005 202.595C173.015 202.485 173.023 202.367 173.028 202.242C173.033 202.117 173.035 201.997 173.035 201.882L173.028 200.48H174.43V202.332C174.43 202.647 174.42 202.932 174.4 203.187C174.385 203.437 174.355 203.642 174.31 203.802L175.66 205.055L174.648 206.143L173.56 205.107C173.33 205.337 173.073 205.532 172.788 205.692C172.503 205.847 172.215 205.962 171.925 206.038C171.68 206.113 171.438 206.163 171.198 206.188C170.963 206.213 170.725 206.225 170.485 206.225ZM170.53 204.725C170.73 204.725 170.915 204.715 171.085 204.695C171.255 204.67 171.418 204.625 171.573 204.56C171.783 204.475 171.953 204.387 172.083 204.297C172.218 204.207 172.33 204.12 172.42 204.035L169.345 201.215C169.19 201.27 169.045 201.342 168.91 201.432C168.78 201.517 168.668 201.617 168.573 201.732C168.458 201.877 168.37 202.047 168.31 202.242C168.255 202.432 168.23 202.637 168.235 202.857C168.235 203.097 168.273 203.317 168.348 203.517C168.428 203.712 168.53 203.887 168.655 204.042C168.855 204.282 169.133 204.457 169.488 204.567C169.848 204.672 170.195 204.725 170.53 204.725ZM179.872 206V195.2H183.255C183.355 195.2 183.54 195.202 183.81 195.207C184.085 195.212 184.347 195.232 184.597 195.267C185.442 195.372 186.152 195.675 186.727 196.175C187.307 196.675 187.745 197.31 188.04 198.08C188.335 198.845 188.482 199.685 188.482 200.6C188.482 201.52 188.335 202.365 188.04 203.135C187.745 203.9 187.307 204.532 186.727 205.032C186.152 205.527 185.442 205.827 184.597 205.932C184.347 205.967 184.085 205.987 183.81 205.992C183.54 205.997 183.355 206 183.255 206H179.872ZM181.477 204.507H183.255C183.425 204.507 183.627 204.502 183.862 204.492C184.097 204.482 184.305 204.462 184.485 204.432C185.035 204.327 185.48 204.09 185.82 203.72C186.165 203.345 186.417 202.885 186.577 202.34C186.737 201.795 186.817 201.215 186.817 200.6C186.817 199.965 186.735 199.377 186.57 198.837C186.405 198.292 186.15 197.837 185.805 197.472C185.465 197.102 185.025 196.867 184.485 196.767C184.305 196.732 184.095 196.712 183.855 196.707C183.62 196.697 183.42 196.692 183.255 196.692H181.477V204.507ZM190.229 206V197.9H191.624V199.865L191.429 199.61C191.529 199.35 191.659 199.112 191.819 198.897C191.979 198.677 192.164 198.497 192.374 198.357C192.579 198.207 192.806 198.092 193.056 198.012C193.311 197.927 193.571 197.877 193.836 197.862C194.101 197.842 194.356 197.855 194.601 197.9V199.37C194.336 199.3 194.041 199.28 193.716 199.31C193.396 199.34 193.101 199.442 192.831 199.617C192.576 199.782 192.374 199.982 192.224 200.217C192.079 200.452 191.974 200.715 191.909 201.005C191.844 201.29 191.811 201.592 191.811 201.912V206H190.229ZM199.401 206.225C198.591 206.225 197.888 206.043 197.293 205.677C196.698 205.312 196.238 204.81 195.913 204.17C195.593 203.525 195.433 202.782 195.433 201.942C195.433 201.097 195.598 200.355 195.928 199.715C196.258 199.07 196.721 198.57 197.316 198.215C197.911 197.855 198.606 197.675 199.401 197.675C200.211 197.675 200.913 197.857 201.508 198.222C202.103 198.587 202.563 199.09 202.888 199.73C203.213 200.37 203.376 201.107 203.376 201.942C203.376 202.787 203.211 203.532 202.881 204.177C202.556 204.817 202.096 205.32 201.501 205.685C200.906 206.045 200.206 206.225 199.401 206.225ZM199.401 204.747C200.176 204.747 200.753 204.487 201.133 203.967C201.518 203.442 201.711 202.767 201.711 201.942C201.711 201.097 201.516 200.422 201.126 199.917C200.741 199.407 200.166 199.152 199.401 199.152C198.876 199.152 198.443 199.272 198.103 199.512C197.763 199.747 197.511 200.075 197.346 200.495C197.181 200.91 197.098 201.392 197.098 201.942C197.098 202.792 197.293 203.472 197.683 203.982C198.073 204.492 198.646 204.747 199.401 204.747ZM208.826 206.225C208.051 206.225 207.401 206.038 206.876 205.662C206.351 205.282 205.954 204.77 205.684 204.125C205.414 203.48 205.279 202.752 205.279 201.942C205.279 201.132 205.411 200.405 205.676 199.76C205.946 199.115 206.341 198.607 206.861 198.237C207.386 197.862 208.031 197.675 208.796 197.675C209.556 197.675 210.211 197.862 210.761 198.237C211.316 198.607 211.744 199.115 212.044 199.76C212.344 200.4 212.494 201.127 212.494 201.942C212.494 202.752 212.344 203.482 212.044 204.132C211.749 204.777 211.326 205.287 210.776 205.662C210.231 206.038 209.581 206.225 208.826 206.225ZM205.016 209.6V197.9H206.411V203.727H206.591V209.6H205.016ZM208.609 204.807C209.109 204.807 209.521 204.68 209.846 204.425C210.176 204.17 210.421 203.827 210.581 203.397C210.746 202.962 210.829 202.477 210.829 201.942C210.829 201.412 210.746 200.932 210.581 200.502C210.421 200.072 210.174 199.73 209.839 199.475C209.504 199.22 209.076 199.092 208.556 199.092C208.066 199.092 207.661 199.212 207.341 199.452C207.026 199.692 206.791 200.027 206.636 200.457C206.486 200.887 206.411 201.382 206.411 201.942C206.411 202.502 206.486 202.997 206.636 203.427C206.786 203.857 207.024 204.195 207.349 204.44C207.674 204.685 208.094 204.807 208.609 204.807ZM218.248 209.6L219.815 205.332L219.838 206.593L216.305 197.9H217.94L220.58 204.612H220.1L222.62 197.9H224.21L219.74 209.6H218.248ZM228.609 206.225C227.799 206.225 227.097 206.043 226.502 205.677C225.907 205.312 225.447 204.81 225.122 204.17C224.802 203.525 224.642 202.782 224.642 201.942C224.642 201.097 224.807 200.355 225.137 199.715C225.467 199.07 225.929 198.57 226.524 198.215C227.119 197.855 227.814 197.675 228.609 197.675C229.419 197.675 230.122 197.857 230.717 198.222C231.312 198.587 231.772 199.09 232.097 199.73C232.422 200.37 232.584 201.107 232.584 201.942C232.584 202.787 232.419 203.532 232.089 204.177C231.764 204.817 231.304 205.32 230.709 205.685C230.114 206.045 229.414 206.225 228.609 206.225ZM228.609 204.747C229.384 204.747 229.962 204.487 230.342 203.967C230.727 203.442 230.919 202.767 230.919 201.942C230.919 201.097 230.724 200.422 230.334 199.917C229.949 199.407 229.374 199.152 228.609 199.152C228.084 199.152 227.652 199.272 227.312 199.512C226.972 199.747 226.719 200.075 226.554 200.495C226.389 200.91 226.307 201.392 226.307 201.942C226.307 202.792 226.502 203.472 226.892 203.982C227.282 204.492 227.854 204.747 228.609 204.747ZM237.285 206.218C236.725 206.218 236.255 206.128 235.875 205.947C235.495 205.767 235.185 205.532 234.945 205.242C234.71 204.947 234.53 204.627 234.405 204.282C234.28 203.937 234.195 203.6 234.15 203.27C234.105 202.94 234.083 202.65 234.083 202.4V197.9H235.673V201.882C235.673 202.197 235.698 202.522 235.748 202.857C235.803 203.187 235.903 203.495 236.048 203.78C236.198 204.065 236.405 204.295 236.67 204.47C236.94 204.645 237.29 204.732 237.72 204.732C238 204.732 238.265 204.687 238.515 204.597C238.765 204.502 238.983 204.352 239.168 204.147C239.358 203.942 239.505 203.672 239.61 203.337C239.72 203.002 239.775 202.595 239.775 202.115L240.75 202.482C240.75 203.217 240.613 203.867 240.338 204.432C240.063 204.992 239.668 205.43 239.153 205.745C238.638 206.06 238.015 206.218 237.285 206.218ZM239.963 206V203.66H239.775V197.9H241.358V206H239.963ZM243.461 206V197.9H244.856V199.865L244.661 199.61C244.761 199.35 244.891 199.112 245.051 198.897C245.211 198.677 245.396 198.497 245.606 198.357C245.811 198.207 246.039 198.092 246.289 198.012C246.544 197.927 246.804 197.877 247.069 197.862C247.334 197.842 247.589 197.855 247.834 197.9V199.37C247.569 199.3 247.274 199.28 246.949 199.31C246.629 199.34 246.334 199.442 246.064 199.617C245.809 199.782 245.606 199.982 245.456 200.217C245.311 200.452 245.206 200.715 245.141 201.005C245.076 201.29 245.044 201.592 245.044 201.912V206H243.461ZM253.007 206V197.615C253.007 197.41 253.015 197.192 253.03 196.962C253.045 196.727 253.087 196.497 253.157 196.272C253.232 196.042 253.355 195.832 253.525 195.642C253.73 195.417 253.955 195.257 254.2 195.162C254.445 195.067 254.687 195.012 254.927 194.997C255.172 194.982 255.397 194.975 255.602 194.975H256.622V196.265H255.677C255.307 196.265 255.03 196.357 254.845 196.542C254.665 196.722 254.575 196.98 254.575 197.315V206H253.007ZM251.665 199.16V197.9H256.622V199.16H251.665ZM258.186 196.572V195.05H259.754V196.572H258.186ZM258.186 206V197.9H259.754V206H258.186ZM262.156 206V194.975H263.724V206H262.156ZM269.568 206.225C268.763 206.225 268.056 206.05 267.446 205.7C266.841 205.345 266.368 204.852 266.028 204.222C265.693 203.587 265.526 202.852 265.526 202.017C265.526 201.132 265.691 200.365 266.021 199.715C266.356 199.065 266.821 198.562 267.416 198.207C268.011 197.852 268.703 197.675 269.493 197.675C270.318 197.675 271.021 197.867 271.601 198.253C272.181 198.632 272.613 199.175 272.898 199.88C273.188 200.585 273.303 201.422 273.243 202.392H271.676V201.822C271.666 200.882 271.486 200.187 271.136 199.737C270.791 199.287 270.263 199.062 269.553 199.062C268.768 199.062 268.178 199.31 267.783 199.805C267.388 200.3 267.191 201.015 267.191 201.95C267.191 202.84 267.388 203.53 267.783 204.02C268.178 204.505 268.748 204.747 269.493 204.747C269.983 204.747 270.406 204.637 270.761 204.417C271.121 204.192 271.401 203.872 271.601 203.457L273.138 203.945C272.823 204.67 272.346 205.232 271.706 205.632C271.066 206.027 270.353 206.225 269.568 206.225ZM266.681 202.392V201.17H272.463V202.392H266.681ZM278.023 206.218C277.038 206.218 276.236 206 275.616 205.565C274.996 205.13 274.616 204.517 274.476 203.727L276.081 203.48C276.181 203.9 276.411 204.232 276.771 204.477C277.136 204.717 277.588 204.837 278.128 204.837C278.618 204.837 279.001 204.737 279.276 204.537C279.556 204.337 279.696 204.062 279.696 203.712C279.696 203.507 279.646 203.342 279.546 203.217C279.451 203.087 279.248 202.965 278.938 202.85C278.628 202.735 278.156 202.592 277.521 202.422C276.826 202.242 276.273 202.05 275.863 201.845C275.458 201.635 275.168 201.392 274.993 201.117C274.823 200.837 274.738 200.5 274.738 200.105C274.738 199.615 274.868 199.187 275.128 198.822C275.388 198.457 275.753 198.175 276.223 197.975C276.698 197.775 277.253 197.675 277.888 197.675C278.508 197.675 279.061 197.772 279.546 197.967C280.031 198.162 280.423 198.44 280.723 198.8C281.023 199.155 281.203 199.572 281.263 200.052L279.658 200.345C279.603 199.955 279.421 199.647 279.111 199.422C278.801 199.197 278.398 199.075 277.903 199.055C277.428 199.035 277.043 199.115 276.748 199.295C276.453 199.47 276.306 199.712 276.306 200.022C276.306 200.202 276.361 200.355 276.471 200.48C276.586 200.605 276.806 200.725 277.131 200.84C277.456 200.955 277.936 201.092 278.571 201.252C279.251 201.427 279.791 201.622 280.191 201.837C280.591 202.047 280.876 202.3 281.046 202.595C281.221 202.885 281.308 203.237 281.308 203.652C281.308 204.452 281.016 205.08 280.431 205.535C279.851 205.99 279.048 206.218 278.023 206.218ZM291.656 206V202.017C291.656 201.702 291.628 201.38 291.573 201.05C291.523 200.715 291.423 200.405 291.273 200.12C291.128 199.835 290.921 199.605 290.651 199.43C290.386 199.255 290.038 199.167 289.608 199.167C289.328 199.167 289.063 199.215 288.813 199.31C288.563 199.4 288.343 199.547 288.153 199.752C287.968 199.957 287.821 200.227 287.711 200.562C287.606 200.897 287.553 201.305 287.553 201.785L286.578 201.417C286.578 200.682 286.716 200.035 286.991 199.475C287.266 198.91 287.661 198.47 288.176 198.155C288.691 197.84 289.313 197.682 290.043 197.682C290.603 197.682 291.073 197.772 291.453 197.952C291.833 198.132 292.141 198.37 292.376 198.665C292.616 198.955 292.798 199.272 292.923 199.617C293.048 199.962 293.133 200.3 293.178 200.63C293.223 200.96 293.246 201.25 293.246 201.5V206H291.656ZM285.963 206V195.2H287.366V201.027H287.553V206H285.963ZM298.792 206.225C297.987 206.225 297.279 206.05 296.669 205.7C296.064 205.345 295.592 204.852 295.252 204.222C294.917 203.587 294.749 202.852 294.749 202.017C294.749 201.132 294.914 200.365 295.244 199.715C295.579 199.065 296.044 198.562 296.639 198.207C297.234 197.852 297.927 197.675 298.717 197.675C299.542 197.675 300.244 197.867 300.824 198.253C301.404 198.632 301.837 199.175 302.122 199.88C302.412 200.585 302.527 201.422 302.467 202.392H300.899V201.822C300.889 200.882 300.709 200.187 300.359 199.737C300.014 199.287 299.487 199.062 298.777 199.062C297.992 199.062 297.402 199.31 297.007 199.805C296.612 200.3 296.414 201.015 296.414 201.95C296.414 202.84 296.612 203.53 297.007 204.02C297.402 204.505 297.972 204.747 298.717 204.747C299.207 204.747 299.629 204.637 299.984 204.417C300.344 204.192 300.624 203.872 300.824 203.457L302.362 203.945C302.047 204.67 301.569 205.232 300.929 205.632C300.289 206.027 299.577 206.225 298.792 206.225ZM295.904 202.392V201.17H301.687V202.392H295.904ZM304.15 206V197.9H305.545V199.865L305.35 199.61C305.45 199.35 305.58 199.112 305.74 198.897C305.9 198.677 306.085 198.497 306.295 198.357C306.5 198.207 306.727 198.092 306.977 198.012C307.232 197.927 307.492 197.877 307.757 197.862C308.022 197.842 308.277 197.855 308.522 197.9V199.37C308.257 199.3 307.962 199.28 307.637 199.31C307.317 199.34 307.022 199.442 306.752 199.617C306.497 199.782 306.295 199.982 306.145 200.217C306 200.452 305.895 200.715 305.83 201.005C305.765 201.29 305.732 201.592 305.732 201.912V206H304.15ZM313.396 206.225C312.591 206.225 311.884 206.05 311.274 205.7C310.669 205.345 310.196 204.852 309.856 204.222C309.521 203.587 309.354 202.852 309.354 202.017C309.354 201.132 309.519 200.365 309.849 199.715C310.184 199.065 310.649 198.562 311.244 198.207C311.839 197.852 312.531 197.675 313.321 197.675C314.146 197.675 314.849 197.867 315.429 198.253C316.009 198.632 316.441 199.175 316.726 199.88C317.016 200.585 317.131 201.422 317.071 202.392H315.504V201.822C315.494 200.882 315.314 200.187 314.964 199.737C314.619 199.287 314.091 199.062 313.381 199.062C312.596 199.062 312.006 199.31 311.611 199.805C311.216 200.3 311.019 201.015 311.019 201.95C311.019 202.84 311.216 203.53 311.611 204.02C312.006 204.505 312.576 204.747 313.321 204.747C313.811 204.747 314.234 204.637 314.589 204.417C314.949 204.192 315.229 203.872 315.429 203.457L316.966 203.945C316.651 204.67 316.174 205.232 315.534 205.632C314.894 206.027 314.181 206.225 313.396 206.225ZM310.509 202.392V201.17H316.291V202.392H310.509Z"
                  fill="#BDBDBD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M219.746 144.073C217.84 144.339 216.05 144.895 214.301 145.765C210.025 147.892 206.815 151.754 205.588 156.251C205.179 157.75 205.131 157.861 204.901 157.861C204.546 157.861 203.118 158.387 202.309 158.815C199.788 160.15 197.902 162.603 197.183 165.485C196.939 166.464 196.939 169.074 197.183 170.053C197.934 173.061 199.89 175.52 202.597 176.86C203.817 177.465 204.806 177.747 206.165 177.88C206.721 177.934 210.394 177.979 214.326 177.981L221.476 177.984V171.527V165.07L219.72 166.819C218.289 168.245 217.888 168.588 217.552 168.678C217.111 168.795 216.646 168.713 216.237 168.444C215.766 168.134 215.521 167.14 215.787 166.613C215.947 166.295 221.979 160.227 222.31 160.05C222.637 159.876 223.334 159.859 223.645 160.017C223.962 160.177 230.008 166.231 230.184 166.564C230.483 167.13 230.265 168.117 229.767 168.444C229.359 168.713 228.894 168.795 228.453 168.678C228.116 168.588 227.716 168.245 226.284 166.819L224.529 165.07V171.535V178L231.271 177.954C238.558 177.904 238.684 177.896 240.456 177.318C244.162 176.109 247.242 173.022 248.437 169.317C248.903 167.874 249.005 167.146 249 165.317C248.995 163.846 248.961 163.496 248.726 162.56C247.804 158.873 245.471 155.921 242.157 154.246C240.717 153.518 238.604 152.958 237.297 152.958H236.759L236.394 152.302C235.42 150.554 233.44 148.388 231.65 147.112C229.776 145.775 227.503 144.793 225.086 144.276C223.932 144.03 220.89 143.914 219.746 144.073Z"
                  fill="url(#paint1_linear_824_9245)"
                />
                <path
                  d="M220.597 252.225C219.787 252.225 219.084 252.043 218.489 251.677C217.894 251.312 217.434 250.81 217.109 250.17C216.789 249.525 216.629 248.782 216.629 247.942C216.629 247.097 216.794 246.355 217.124 245.715C217.454 245.07 217.917 244.57 218.512 244.215C219.107 243.855 219.802 243.675 220.597 243.675C221.407 243.675 222.109 243.857 222.704 244.222C223.299 244.587 223.759 245.09 224.084 245.73C224.409 246.37 224.572 247.107 224.572 247.942C224.572 248.787 224.407 249.532 224.077 250.177C223.752 250.817 223.292 251.32 222.697 251.685C222.102 252.045 221.402 252.225 220.597 252.225ZM220.597 250.747C221.372 250.747 221.949 250.487 222.329 249.967C222.714 249.442 222.907 248.767 222.907 247.942C222.907 247.097 222.712 246.422 222.322 245.917C221.937 245.407 221.362 245.152 220.597 245.152C220.072 245.152 219.639 245.272 219.299 245.512C218.959 245.747 218.707 246.075 218.542 246.495C218.377 246.91 218.294 247.392 218.294 247.942C218.294 248.792 218.489 249.472 218.879 249.982C219.269 250.492 219.842 250.747 220.597 250.747ZM226.22 252V243.9H227.615V245.865L227.42 245.61C227.52 245.35 227.65 245.112 227.81 244.897C227.97 244.677 228.155 244.497 228.365 244.357C228.57 244.207 228.797 244.092 229.047 244.012C229.302 243.927 229.562 243.877 229.827 243.862C230.092 243.842 230.347 243.855 230.592 243.9V245.37C230.327 245.3 230.032 245.28 229.707 245.31C229.387 245.34 229.092 245.442 228.822 245.617C228.567 245.782 228.365 245.982 228.215 246.217C228.07 246.452 227.965 246.715 227.9 247.005C227.835 247.29 227.802 247.592 227.802 247.912V252H226.22Z"
                  fill="#828282"
                />
                <g filter="url(#filter0_d_824_9245)">
                  <rect
                    x="157.5"
                    y="260.5"
                    width="132"
                    height="36"
                    rx="7.5"
                    stroke="#4C004A"
                    shape-rendering="crispEdges"
                  />
                </g>
                <path
                  d="M200.014 284V273.92H203.976C204.616 273.92 205.152 274.051 205.586 274.312C206.02 274.573 206.347 274.912 206.566 275.327C206.786 275.738 206.895 276.172 206.895 276.629C206.895 277.184 206.758 277.66 206.482 278.057C206.212 278.454 205.845 278.724 205.383 278.869L205.369 278.526C206.013 278.685 206.508 278.995 206.853 279.457C207.199 279.914 207.371 280.449 207.371 281.06C207.371 281.653 207.252 282.168 207.014 282.607C206.781 283.046 206.438 283.389 205.985 283.636C205.537 283.879 204.994 284 204.354 284H200.014ZM201.498 282.607H204.13C204.462 282.607 204.758 282.544 205.019 282.418C205.285 282.292 205.493 282.112 205.642 281.879C205.796 281.641 205.873 281.359 205.873 281.032C205.873 280.729 205.806 280.456 205.67 280.213C205.54 279.966 205.348 279.772 205.096 279.632C204.849 279.487 204.557 279.415 204.221 279.415H201.498V282.607ZM201.498 278.036H203.955C204.226 278.036 204.469 277.982 204.683 277.875C204.903 277.763 205.075 277.604 205.201 277.399C205.332 277.189 205.397 276.937 205.397 276.643C205.397 276.251 205.267 275.929 205.005 275.677C204.744 275.425 204.394 275.299 203.955 275.299H201.498V278.036ZM208.764 284V276.44H210.066V278.274L209.884 278.036C209.978 277.793 210.099 277.572 210.248 277.371C210.398 277.166 210.57 276.998 210.766 276.867C210.958 276.727 211.17 276.62 211.403 276.545C211.641 276.466 211.884 276.419 212.131 276.405C212.379 276.386 212.617 276.398 212.845 276.44V277.812C212.598 277.747 212.323 277.728 212.019 277.756C211.721 277.784 211.445 277.88 211.193 278.043C210.955 278.197 210.766 278.384 210.626 278.603C210.491 278.822 210.393 279.067 210.332 279.338C210.272 279.604 210.241 279.886 210.241 280.185V284H208.764ZM217.325 284.21C216.569 284.21 215.913 284.04 215.358 283.699C214.802 283.358 214.373 282.889 214.07 282.292C213.771 281.69 213.622 280.997 213.622 280.213C213.622 279.424 213.776 278.731 214.084 278.134C214.392 277.532 214.823 277.065 215.379 276.734C215.934 276.398 216.583 276.23 217.325 276.23C218.081 276.23 218.736 276.4 219.292 276.741C219.847 277.082 220.276 277.551 220.58 278.148C220.883 278.745 221.035 279.434 221.035 280.213C221.035 281.002 220.881 281.697 220.573 282.299C220.269 282.896 219.84 283.365 219.285 283.706C218.729 284.042 218.076 284.21 217.325 284.21ZM217.325 282.831C218.048 282.831 218.587 282.588 218.942 282.103C219.301 281.613 219.481 280.983 219.481 280.213C219.481 279.424 219.299 278.794 218.935 278.323C218.575 277.847 218.039 277.609 217.325 277.609C216.835 277.609 216.431 277.721 216.114 277.945C215.796 278.164 215.561 278.47 215.407 278.862C215.253 279.249 215.176 279.7 215.176 280.213C215.176 281.006 215.358 281.641 215.722 282.117C216.086 282.593 216.62 282.831 217.325 282.831ZM223.909 284L221.599 276.433L223.048 276.44L224.63 281.627L226.226 276.44H227.486L229.082 281.627L230.664 276.44H232.106L229.796 284H228.62L226.856 278.526L225.085 284H223.909ZM235.977 284.203C235.058 284.203 234.309 284 233.73 283.594C233.152 283.188 232.797 282.616 232.666 281.879L234.164 281.648C234.258 282.04 234.472 282.35 234.808 282.579C235.149 282.803 235.571 282.915 236.075 282.915C236.533 282.915 236.89 282.822 237.146 282.635C237.408 282.448 237.538 282.192 237.538 281.865C237.538 281.674 237.492 281.52 237.398 281.403C237.31 281.282 237.121 281.167 236.831 281.06C236.542 280.953 236.101 280.82 235.508 280.661C234.86 280.493 234.344 280.313 233.961 280.122C233.583 279.926 233.313 279.7 233.149 279.443C232.991 279.182 232.911 278.867 232.911 278.498C232.911 278.041 233.033 277.642 233.275 277.301C233.518 276.96 233.859 276.697 234.297 276.51C234.741 276.323 235.259 276.23 235.851 276.23C236.43 276.23 236.946 276.321 237.398 276.503C237.851 276.685 238.217 276.944 238.497 277.28C238.777 277.611 238.945 278.001 239.001 278.449L237.503 278.722C237.452 278.358 237.282 278.071 236.992 277.861C236.703 277.651 236.327 277.537 235.865 277.518C235.422 277.499 235.063 277.574 234.787 277.742C234.512 277.905 234.374 278.132 234.374 278.421C234.374 278.589 234.426 278.731 234.528 278.848C234.636 278.965 234.841 279.077 235.144 279.184C235.448 279.291 235.896 279.42 236.488 279.569C237.123 279.732 237.627 279.914 238 280.115C238.374 280.311 238.64 280.547 238.798 280.822C238.962 281.093 239.043 281.422 239.043 281.809C239.043 282.556 238.77 283.141 238.224 283.566C237.683 283.991 236.934 284.203 235.977 284.203ZM243.945 284.21C243.194 284.21 242.534 284.047 241.964 283.72C241.4 283.389 240.959 282.929 240.641 282.341C240.329 281.748 240.172 281.062 240.172 280.283C240.172 279.457 240.326 278.741 240.634 278.134C240.947 277.527 241.381 277.058 241.936 276.727C242.492 276.396 243.138 276.23 243.875 276.23C244.645 276.23 245.301 276.41 245.842 276.769C246.384 277.124 246.787 277.63 247.053 278.288C247.324 278.946 247.431 279.728 247.375 280.633H245.912V280.101C245.903 279.224 245.735 278.575 245.408 278.155C245.086 277.735 244.594 277.525 243.931 277.525C243.199 277.525 242.648 277.756 242.279 278.218C241.911 278.68 241.726 279.347 241.726 280.22C241.726 281.051 241.911 281.695 242.279 282.152C242.648 282.605 243.18 282.831 243.875 282.831C244.333 282.831 244.727 282.728 245.058 282.523C245.394 282.313 245.656 282.014 245.842 281.627L247.277 282.082C246.983 282.759 246.538 283.284 245.94 283.657C245.343 284.026 244.678 284.21 243.945 284.21ZM241.25 280.633V279.492H246.647V280.633H241.25Z"
                  fill="#4C004A"
                />
                <defs>
                  <filter
                    id="filter0_d_824_9245"
                    x="149"
                    y="253"
                    width="149"
                    height="53"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_824_9245"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_824_9245"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_824_9245"
                    x1="226.5"
                    y1="114"
                    x2="226.5"
                    y2="346.666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C8D1E5" stop-opacity="0" />
                    <stop offset="1" stop-color="#C8D1E5" stop-opacity="0.03" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_824_9245"
                    x1="223"
                    y1="144"
                    x2="223"
                    y2="178"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#828282" />
                    <stop offset="1" stop-color="#4F4F4F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="till_ni_btn"
                style={{
                  padding: "7px 16px",
                  cursor: "pointer",
                  marginTop: "2rem",
                }}
              >
                Upload
              </div>
            </div>
            <svg
              className="login_xmark"
              onClick={() => {
                setnewAttach(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="#e3e3e3"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <style></style>
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
export default PatientNew;
