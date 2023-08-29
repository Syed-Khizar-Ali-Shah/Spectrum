import React from 'react'
import './NewDispence.css'

function NewDispense() {
    window.scrollTo(0,0);
  return (
    <>
        <div className='page_title flex_between'>
            <div>New Dispense</div>
            <div className="existing-patient-inputs">
            <div className="existing-patient-inputs-div">
                <div className="label-existing-patient"><label htmlFor="PatientID" > Patient ID : </label></div>
                <input
                    type="text"
                    className="existing-patient-inner-inputs"
                    id="12454"
                    placeholder='Patient Id'
                />
            </div>
            <div className="existing-patient-inputs-div">
                <div className="label-existing-patient"><label htmlFor="Patientname" > Patient Name : </label></div>
                <input
                    type="text"
                    className="existing-patient-inner-inputs"
                    id="Patientname"
                    placeholder='Sam Smith'
                />
            </div>
            </div>
        </div>
        <div className="ps_header" style={{marginTop:'1rem',paddingLeft:'1rem'}} >New Dispense</div>
        <div className="nst_body padd_com" style={{height: 'auto'}}>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">Full Name</div>
                    <input type="text" className='cl_form_input' placeholder='Type here' />
                </div>
                <div>
                    <div className="input_label">Patient ID</div>
                    <input type="text" className='cl_form_input' placeholder='Type here' />
                </div>
            </div>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">Lense Type</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">Single Vision</option>
                        <option value="">Bi-Focals</option>
                        <option value="">Vari Focal</option>
                        <option value="">Occupational</option>
                        <option value="">Lifestyle</option>
                    </select>
                </div>
                <div>
                    <div className="input_label">Coatings</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">HMAR</option>
                        <option value="">HMAR Blue</option>
                        <option value="">Transition</option>
                        <option value="">Transition Extra Active</option>
                        <option value="">Polaroid</option>
                        <option value="">TINT</option>
                    </select>
                </div>
            </div>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">Bi-Focal</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">D28</option>
                        <option value="">D35</option>
                        <option value="">C28</option>
                        <option value="">C35</option>
                        <option value="">R24</option>
                        <option value="">R30</option>
                        <option value="">Executive</option>
                        <option value="">Seamless</option>
                    </select>
                </div>
                <div>
                    <div className="input_label">Transparency</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">10%</option>
                        <option value="">20%</option>
                        <option value="">40%</option>
                        <option value="">80%</option>
                    </select>
                </div>
            </div>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">Occupational</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">OFFICE 0.75</option>
                        <option value="">OFFICE 1.00</option>
                        <option value="">OFFICE 1.25</option>
                    </select>
                </div>
                <div>
                    <div className="input_label">Tint</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">Grey</option>
                        <option value="">Brown</option>
                        <option value="">Blue</option>
                        <option value="">Green</option>
                    </select>
                </div>
            </div>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">VARI Focal</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">Premium</option>
                        <option value="">Premium Wide View</option>
                    </select>
                </div>
                <div>
                    <div className="input_label">Tint Type</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">Graduated</option>
                        <option value="">Solid</option>
                    </select>
                </div>
            </div>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">Single Vision</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">Distance</option>
                        <option value="">Reading</option>
                        <option value="">VDU</option>
                    </select>
                </div>
                <div>
                    <div className="input_label">Transition (Colour)</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">Grey</option>
                        <option value="">Brown</option>
                    </select>
                </div>
            </div>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">Index</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">CR 39 (1.5)</option>
                        <option value="">Slim 30 (1.6)</option>
                        <option value="">Slim 40 (1.67)</option>
                        <option value="">Slim 50 (1.74)</option>
                        <option value="">Glass</option>
                        <option value="">Polycarbonate (1.59)</option>
                    </select>
                </div>
                <div>
                    <div className="input_label">Transition Extra Act (Colour)</div>
                    <select name="" id="" className='cl_form_input' >
                        <option value="">Grey</option>
                        <option value="">Brown</option>
                    </select>
                </div>
            </div>
            <div className="cl_btn_con" style={{marginTop:'1rem'}} >
                <div className="place_order_btn">Lens Price:$49</div>
            </div>
            <div className="hr_line" style={{margin:'1rem 0'}}></div>
            <div className="input_label" style={{marginBottom:'1.2rem'}} >Frame Detail</div>
            <div className="nd_con2">
                <div className="nd_con2_elem">
                    <div className="input_label">Barcode</div>
                    <input type="text" className='nd_input1' />
                </div>
                <div className="nd_con2_elem">
                    <div className="input_label">Name</div>
                    <input type="text" className='nd_input1' />
                </div>
                <div className="nd_con2_elem">
                    <div className="input_label">Model</div>
                    <input type="text" className='nd_input1' />
                </div>
                <div className="nd_con2_elem">
                    <div className="input_label">Colour</div>
                    <input type="text" className='nd_input1' />
                </div>
                <div className="nd_con2_elem">
                    <div className="input_label">Lens Size</div>
                    <input type="text" className='nd_input1' />
                </div>
                <div className="nd_con2_elem">
                    <div className="input_label">Bridge</div>
                    <input type="text" className='nd_input1' />
                </div>
                <div className="nd_con2_elem">
                    <div className="input_label">Arm</div>
                    <input type="text" className='nd_input1' />
                </div>
            </div>
            <div className="frame_price_con">
                <div className="frame_price_elem">
                    <div className="input_label">Frame Price</div>
                    <div className="f_price">$29</div>
                </div>
            </div>
            <div className="hr_line" style={{margin:'1rem 0'}}></div>
            <div className="input_label" style={{marginBottom:'1rem'}} >Technical Data</div>
            <div className="nd_dual_con3">
                <div className="nd_con3_elem">
                    <div className='input_label nd_con3_e1' style={{margin:'0'}} >PD</div>
                    <div className='input_label nd_con3_e2' style={{margin:'0'}} >R:</div>
                    <input type="text" className='nd_con3_e3' placeholder='Type here' />
                </div>
                <div className="nd_con3_elem">
                    <div className='input_label nd_con3_e1' style={{margin:'0'}} >PD</div>
                    <div className='input_label nd_con3_e2' style={{margin:'0'}} >L:</div>
                    <input type="text" className='nd_con3_e3' placeholder='Type here' />
                </div>
            </div>
            <div className="nd_dual_con3">
                <div className="nd_con3_elem">
                    <div className='input_label nd_con3_e1' style={{margin:'0'}} >Height</div>
                    <div className='input_label nd_con3_e2' style={{margin:'0'}} >R:</div>
                    <input type="text" className='nd_con3_e3' placeholder='Type here' />
                </div>
                <div className="nd_con3_elem">
                    <div className='input_label nd_con3_e1' style={{margin:'0'}} >Height</div>
                    <div className='input_label nd_con3_e2' style={{margin:'0'}} >L:</div>
                    <input type="text" className='nd_con3_e3' placeholder='Type here' />
                </div>
            </div>


        </div>

        <div className="ps_header" style={{marginTop:'2rem',paddingLeft:'1rem'}} >Advance Dispense</div>
        <div className="nst_body padd_com" style={{height: 'auto'}}>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">BVD</div>
                    <input type="text" className='cl_form_input' placeholder='Type here' />
                </div>
                <div>
                    <div className="input_label">Pantoscopic Tilt</div>
                    <input type="text" className='cl_form_input' placeholder='Type here' />
                </div>
            </div>
            <div className="nd_dual_grid">
                <div>
                    <div className="input_label">Lense Size</div>
                    <input type="text" className='cl_form_input' placeholder='Type here' />
                </div>
                <div>
                    <div className="input_label">Notes</div>
                    <textarea name="" id="" cols="30" rows="10" className='cl_form_input' style={{height:'3rem'}} placeholder='Type here' ></textarea>
                </div>
            </div>
            <div className="cl_btn_con" style={{marginTop:'1rem'}} >
                <div className="place_order_btn">Price inc VAT $231</div>
                <div className="save_btn">Place Order</div>
            </div>
        </div>
    </>
  )
}

export default NewDispense
