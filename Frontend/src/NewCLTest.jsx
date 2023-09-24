import React, { useEffect, useState } from "react";
import "./NewCLTest.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "./utils/data";

const NewCLTest = () => {
  let initialFormData = {
    fullName: "",
    patientId: "",
    history: "",
    medication: "",
    allergies: "",
    VDU: false,
    driver: false,
    smoker: false,
    lashes: "",
    cornea: "",
    conjunctiva: "",
    tearFilm: "",
    limbus: "",
    neovascularisation: "",
    fluorescein: "",
    notes: "",
    REH: "",
    REV: "",
    LEH: "",
    LEV: "",
    position: "",
    movement: "",
    lenseFitNotes: "",
    REVA: "",
    REOVER: "",
    RENVA: "",
    LEVA: "",
    LEOVER: "",
    LENVA: "",
    BVA: "",
    BNV: "",
    RESPH: "",
    RECYL: "",
    REAXIS: "",
    READD: "",
    REBC: "",
    REDiameter: "",
    LESPH: "",
    LECYL: "",
    LEAXIS: "",
    LEADD: "",
    LEBC: "",
    LEDiameter: "",
    trial: false,
    revenue: false,
    solutions: "",
    lenseTypeRE: "",
    lenseTypeLE: "",
    recall: "",
    note: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const searchPatient = useSelector(
    (state) => state.spectrumReducer.searchPatients
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle different input types (text, checkbox)
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSave = (e) => {
    // Send formData to your API or perform other actions
    console.log("fdtesr", formData);

      axios.post(`${baseUrl}/api/contactLense/${searchPatient._id}`, formData).then(res => {
        console.log(res.data);
        alert("New Contact Lense Info Added.")
      }).catch(err => {
         console.log(err)
         alert("Something went wrong!");
      }) 

    // Clear the form after submission
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (searchPatient) {
      setFormData({
        ...formData,
        patientId: searchPatient._id,
        fullName: searchPatient.forename + " " + searchPatient.surname,
      });
    }
  }, [searchPatient]);

  window.scrollTo(0, 0);
  return (
    <>
      <div className="page_title">New Contact Lens Test</div>
      <div
        className="report_header"
        style={{ marginTop: "1rem", paddingLeft: "1rem" }}
      >
        C/L FIT
      </div>
      <div className="nst_body padd_com" style={{ height: "auto" }}>
        <div className="grid2_con">
          <div>
            <div className="input_label">Full Name</div>
            <input
              type="text"
              className="cl_form_input"
              placeholder="Type here"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="input_label">Patient ID</div>
            <input
              type="text"
              className="cl_form_input"
              placeholder="Type here"
              name="patientId"
              value={formData.patientId}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid2_con" style={{ marginTop: "1rem" }}>
          <div>
            <div className="input_label">History</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              style={{ height: "7.8rem" }}
              name="history"
              value={formData.history}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <div className="input_label">Medication</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="medication"
              value={formData.medication}
              onChange={handleInputChange}
            ></textarea>
            <div className="input_label">Allergies</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="allergies"
              value={formData.allergies}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="flex_align" style={{ gap: "1.5rem" }}>
          <div className="flex_align">
            <input
              type="checkbox"
              id=""
              name="VDU"
              checked={formData.VDU}
              onChange={handleInputChange}
            />
            <div className="input_label" style={{ margin: "0" }}>
              VDU
            </div>
          </div>
          <div className="flex_align">
            <input
              type="checkbox"
              id=""
              name="driver"
              checked={formData.driver}
              onChange={handleInputChange}
            />
            <div className="input_label" style={{ margin: "0" }}>
              Driver
            </div>
          </div>
          <div className="flex_align">
            <input
              type="checkbox"
              id=""
              name="smoker"
              checked={formData.smoker}
              onChange={handleInputChange}
            />
            <div className="input_label" style={{ margin: "0" }}>
              Smoker
            </div>
          </div>
        </div>
        <div className="hr_line" style={{ margin: "1rem 0" }}></div>
        <div className="input_label" style={{ fontWeight: "600" }}>
          Occular Health
        </div>
        <div className="grid2_con" style={{ marginTop: "1rem" }}>
          <div>
            <div className="input_label">Lids / Lashes</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="lashes"
              value={formData.lashes}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <div className="input_label">Cornea</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="cornea"
              value={formData.cornea}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="grid2_con" style={{ marginTop: "1rem" }}>
          <div>
            <div className="input_label">Conjunctiva</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="conjunctiva"
              value={formData.conjunctiva}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <div className="input_label">Tear Film</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="tearFilm"
              value={formData.tearFilm}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="grid2_con" style={{ marginTop: "1rem" }}>
          <div>
            <div className="input_label">Limbus</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="limbus"
              value={formData.limbus}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <div className="input_label">Neovascularisation</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="neovascularisation"
              value={formData.neovascularisation}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="grid2_con" style={{ marginTop: "1rem" }}>
          <div>
            <div className="input_label">Fluorescein</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="fluorescein"
              value={formData.fluorescein}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <div className="input_label">Notes</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="hr_line" style={{ margin: "1rem 0" }}></div>
        <div className="input_label" style={{ fontWeight: "600" }}>
          Lens FIT
        </div>
        <div className="grid2_con" style={{ marginTop: "1rem" }}>
          <div>
            <div className="input_label">K Readings</div>
            <div
              className="p4_mini_dual width_prob_c2"
              style={{ marginBottom: "0.5rem" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="p4_txt1 ml0_1">RE-H:</div>
                <input
                  type="text"
                  id=""
                  className="p4_input1"
                  placeholder=""
                  name="REH"
                  value={formData.REH}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginLeft: "0.5rem" }} className="p4_txt1 ml0_1">
                  RE-V:
                </div>
                <input
                  type="text"
                  id=""
                  className="p4_input1"
                  placeholder=""
                  name="REV"
                  value={formData.REV}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="p4_mini_dual width_prob_c2">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="p4_txt1 ml0_1">LE-H:</div>
                <input
                  type="text"
                  id=""
                  className="p4_input1"
                  placeholder=""
                  name="LEH"
                  value={formData.LEH}
                  onChange={handleInputChange}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginLeft: "0.5rem" }} className="p4_txt1 ml0_1">
                  LE-V:
                </div>
                <input
                  type="text"
                  id=""
                  className="p4_input1"
                  placeholder=""
                  name="LEV"
                  value={formData.LEV}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="input_label">Position</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="grid2_con" style={{ marginTop: "1rem" }}>
          <div>
            <div className="input_label">Movement</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="movement"
              value={formData.movement}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <div className="input_label">Notes</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="lenseFitNotes"
              value={formData.lenseFitNotes}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="hr_line" style={{ margin: "1rem 0" }}></div>
        <div className="input_label" style={{ margin: "0" }}>
          Visual Acuity
        </div>
        <div className="cl_con1">
          <div className="rl_item2">
            <div className="rl_item_r1_2"></div>
            <div className="rl_item_r1_2" style={{ alignItems: "center" }}>
              RE:
            </div>
            <div className="rl_item_r1_2" style={{ alignItems: "center" }}>
              LE:
            </div>
          </div>
          <div className="rl_item2">
            <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
              VA
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="REVA"
                value={formData.REVA}
                onChange={handleInputChange}
              />
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="LEVA"
                value={formData.LEVA}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="rl_item2">
            <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
              OVER RX
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="REOVER"
                value={formData.REOVER}
                onChange={handleInputChange}
              />
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="LEOVER"
                value={formData.LEOVER}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="rl_item2">
            <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
              VA
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="REVA"
                value={formData.REVA}
                onChange={handleInputChange}
              />
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="LEVA"
                value={formData.LEVA}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="rl_item2">
            <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
              NVA
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="RENVA"
                value={formData.RENVA}
                onChange={handleInputChange}
              />
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="LENVA"
                value={formData.LENVA}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="rl_item2">
            <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
              BVA
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="BVA"
                value={formData.BVA}
                onChange={handleInputChange}
                style={{
                  width: "3.5rem",
                  height: "4.2rem",
                  marginTop: "0.6rem",
                  marginBottom: "0.6rem",
                }}
              />
            </div>
            {/* <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_2' placeholder='' />
              </div> */}
          </div>
          <div className="rl_item2">
            <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
              BNV
            </div>
            <div className="rl_item_r1_2">
              <input
                type="text"
                id=""
                className="input_5_2"
                placeholder=""
                name="BNV"
                value={formData.BNV}
                onChange={handleInputChange}
                style={{
                  width: "3.5rem",
                  height: "4.2rem",
                  marginTop: "0.6rem",
                  marginBottom: "0.6rem",
                }}
              />
            </div>
            {/* <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
              </div>                 */}
          </div>
        </div>
        <div className="hr_line" style={{ margin: "1rem 0" }}></div>
        <div className="input_label">Final RX</div>
        <div className="grid2_con2">
          <div>
            <div className="cl_con2">
              <div className="rl_item2">
                <div className="rl_item_r1_2"></div>
                <div className="rl_item_r1_2" style={{ alignItems: "center" }}>
                  RE:
                </div>
                <div className="rl_item_r1_2" style={{ alignItems: "center" }}>
                  LE:
                </div>
              </div>
              <div className="rl_item2">
                <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                  Sph
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="RESPH"
                    value={formData.RESPH}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="LESPH"
                    value={formData.LESPH}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="rl_item2">
                <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                  Cyl
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="RECYL"
                    value={formData.RECYL}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="LECYL"
                    value={formData.LECYL}
                    onChange={handleInputChange}
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
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="REAXIS"
                    value={formData.REAXIS}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="LEAXIS"
                    value={formData.LEAXIS}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="rl_item2">
                <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                  Add
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="READD"
                    value={formData.READD}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="LEADD"
                    value={formData.LEADD}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="rl_item2">
                <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                  BC
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="REBC"
                    value={formData.REBC}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="LEBC"
                    value={formData.LEBC}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="rl_item2">
                <div className="rl_item_r1_2" style={{ alignItems: "end" }}>
                  Diameter
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="REDiameter"
                    value={formData.REDiameter}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="rl_item_r1_2">
                  <input
                    type="text"
                    id=""
                    className="input_5_2"
                    placeholder=""
                    name="LEDiameter"
                    value={formData.LEDiameter}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex_align" style={{ gap: "1rem" }}>
              <div className="flex_align">
                <input
                  type="checkbox"
                  id=""
                  name="trial"
                  checked={formData.trial}
                  onChange={handleInputChange}
                />
                <div className="input_label2">Trial</div>
              </div>
              <div className="flex_align">
                <input
                  type="checkbox"
                  id=""
                  name="revenue"
                  checked={formData.revenue}
                  onChange={handleInputChange}
                />
                <div className="input_label2">Revenue</div>
              </div>
            </div>
            <div className="input_label" style={{ marginTop: "1rem" }}>
              Solutions
            </div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="solutions"
              value={formData.solutions}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <div className="input_label" style={{ marginTop: "1.5rem" }}>
              Lens Name/Type
            </div>
            <div className="p4_mini_dual" style={{ marginBottom: "1rem" }}>
              <div className="p4_txt1 ml0_1">RE:</div>
              <input
                type="text"
                id=""
                className="p4_input1"
                style={{ width: "15rem" }}
                placeholder="Type here"
                name="lenseTypeRE"
                value={formData.lenseTypeRE}
                onChange={handleInputChange}
              />
            </div>
            <div className="p4_mini_dual">
              <div className="p4_txt1 ml0_1">LE:</div>
              <input
                type="text"
                id=""
                className="p4_input1"
                style={{ width: "15rem" }}
                placeholder="Type here"
                name="lenseTypeLE"
                value={formData.lenseTypeLE}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_label" style={{ marginTop: "1rem" }}>
              Recall
            </div>
            <input
              type="date"
              className="cl_form_input"
              placeholder="12/05/2023"
              name="recall"
              value={formData.recall}
              onChange={handleInputChange}
            />
            <div className="input_label">Note</div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="cl_ta"
              placeholder="Type here"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        {/* <div className="input_label">Solutions</div> */}
        {/* <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea> */}
        <div
          className="cl_btn_con"
          style={{ marginTop: "1rem" }}
        >
          <div className="place_order_btn">
            Place Order
          </div>
          <button className="save_btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default NewCLTest;
