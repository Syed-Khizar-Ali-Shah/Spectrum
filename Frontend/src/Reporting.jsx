import React, { useState } from 'react'
import './Reporting.css'
import { NavLink } from 'react-router-dom';


function Reporting() {
  const [report1,setreport1] = useState(true);
  const [report2,setreport2] = useState(false);
  const [report3,setreport3] = useState(false);
  const [report4,setreport4] = useState(false);
  const [report5,setreport5] = useState(false);
  const [report6,setreport6] = useState(false);
  const [report7,setreport7] = useState(false);
  const [report8,setreport8] = useState(false);
  const [report9,setreport9] = useState(false);

  function change1(){
    setreport1(true)
    setreport2(false)
    setreport3(false)
    setreport4(false)
    setreport5(false)
    setreport6(false)
    setreport7(false)
    setreport8(false)
    setreport9(false)
  }
  function change2(){
    setreport1(false)
    setreport2(true)
    setreport3(false)
    setreport4(false)
    setreport5(false)
    setreport6(false)
    setreport7(false)
    setreport8(false)
    setreport9(false)
  }
  function change3(){
    setreport1(false)
    setreport2(false)
    setreport3(true)
    setreport4(false)
    setreport5(false)
    setreport6(false)
    setreport7(false)
    setreport8(false)
    setreport9(false)
  }
  function change4(){
    setreport1(false)
    setreport2(false)
    setreport3(false)
    setreport4(true)
    setreport5(false)
    setreport6(false)
    setreport7(false)
    setreport8(false)
    setreport9(false)
  }
  function change5(){
    setreport1(false)
    setreport2(false)
    setreport3(false)
    setreport4(false)
    setreport5(true)
    setreport6(false)
    setreport7(false)
    setreport8(false)
    setreport9(false)
  }
  function change6(){
    setreport1(false)
    setreport2(false)
    setreport3(false)
    setreport4(false)
    setreport5(false)
    setreport6(true)
    setreport7(false)
    setreport8(false)
    setreport9(false)
  }
  function change7(){
    setreport1(false)
    setreport2(false)
    setreport3(false)
    setreport4(false)
    setreport5(false)
    setreport6(false)
    setreport7(true)
    setreport8(false)
    setreport9(false)
  }
  function change8(){
    setreport1(false)
    setreport2(false)
    setreport3(false)
    setreport4(false)
    setreport5(false)
    setreport6(false)
    setreport7(false)
    setreport8(true)
    setreport9(false)
  }
  function change9(){
    setreport1(false)
    setreport2(false)
    setreport3(false)
    setreport4(false)
    setreport5(false)
    setreport6(false)
    setreport7(false)
    setreport8(false)
    setreport9(true)
  }
  const [blueCol,setblueCol] = useState('#4C004A');

  return (
    <>
        <div className='page_title' >Reporting</div>
        <div className="report_header">
          <div className="report_child" onClick={change1} 
            style={{background: report1?blueCol:'',color: report1?'white':'#212529' ,cursor:'pointer',borderRadius: '4px 0px 0px 0px'}} >
              Clinical Info
          </div>
          <div className="report_child" onClick={change2}
            style={{background: report2?blueCol:'',color: report2?'white':'#212529',cursor:'pointer'}} >
              Dispensing Info
          </div>
          <div className="report_child" onClick={change3}
            style={{background: report3?blueCol:'',color: report3?'white':'#212529',cursor:'pointer'}} >
              Appointment Info
          </div>
          <div className="report_child" onClick={change4}
            style={{background: report4?blueCol:'',color: report4?'white':'#212529',cursor:'pointer'}} >
              Collections Due
          </div>
          <div className="report_child" onClick={change5}
            style={{background: report5?blueCol:'',color: report5?'white':'#212529',cursor:'pointer'}} >
              Payment Due
          </div>
          <div className="report_child" onClick={change6}
            style={{background: report6?blueCol:'',color: report6?'white':'#212529',cursor:'pointer'}} >
              Collections Mode
          </div>
          <div className="report_child" onClick={change7}
            style={{background: report7?blueCol:'',color: report7?'white':'#212529',cursor:'pointer'}} >
              Payments Mode
          </div>
          <div className="report_child" onClick={change8}
            style={{background: report8?blueCol:'',color: report8?'white':'#212529',cursor:'pointer'}} >
              Order Status
          </div>
          <div className="report_child" onClick={change9}
            style={{background: report9?blueCol:'',color: report9?'white':'#212529',cursor:'pointer'}} >
              GOS Vouchers
          </div>
        </div>
        { report1 ? (
          <>
            <div className="report_body1">
              <div className="mini_header">
                Reports - Clinical Information
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Due by Time
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Due by Time
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                </div>
              </div>
              <button className='task2_submit_btn' >Find</button>
            </div>
            <div className='sub_title' >New Patient</div>
            <div className="report_header2">
              <div>Registrattion Date</div>
              <div>Patient ID</div>
              <div>Name</div>
              <div>Next Appointment</div>
            </div>
            <div className="report_body2">
              <div className="body2_elem">
                <div className="body2_elem_child">12/1/23 </div>                             
                <div className="body2_elem_child">1233</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12/1/23 </div>             
              </div>
              <div className="body2_elem">
                <div className="body2_elem_child">12/1/23 </div>                             
                <div className="body2_elem_child">1233</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12/1/23 </div>             
              </div>
            </div>
            <div className='sub_title' >RX Count</div>
            <div className="report_header2">
              <div>Date</div>
              <div>External RXs</div>
              <div>Internal RXs</div>
              <div>Total Rxs</div>
            </div>
            <div className="report_body2">
              <div className="body2_elem">
                <div className="body2_elem_child">12/1/23 </div>                             
                <div className="body2_elem_child">1233</div>
                <div className="body2_elem_child">34556</div>
                <div className="body2_elem_child">235632</div>             
              </div>
              <div className="body2_elem">
                <div className="body2_elem_child">12/1/23 </div>                             
                <div className="body2_elem_child">1233</div>
                <div className="body2_elem_child">34564</div>
                <div className="body2_elem_child">564565</div>             
              </div>
            </div>
            <div className='sub_title' >CL RX Count</div>
            <div className="report_header2">
              <div>Date</div>
              <div>Total CL Rxs for period</div>
            </div>
            <div className="report_body2">
              <div className="body2_elem">
                <div className="body2_elem_child">12/1/23 </div>                             
                <div className="body2_elem_child">1256533</div>                            
              </div>              
            </div>
          </>
        ):(<></>)
        }
        { report2? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Reports - Dispensing Information
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Due by Time
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                  <div className="input_label">
                    Staff Member
                  </div>
                  <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">Select</option>
                  </select>
                  <div className='staff_checkbox' >
                    <input type="checkbox" />
                    <div>Money Outstanding Only</div>
                  </div>
                  <div className="input_label">
                    Username
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Date of Birth
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Due by Time
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                  <div className="input_label">
                    Patient ID
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label" style={{marginTop:'22px'}} >
                    Surname
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                </div>
              </div>
              <button className='task2_submit_btn' >Find</button>
          </div>
          <div className="dispensing_body2">
            <div className='db_row'>
              <div className="dispensing_body2_elem">
                <div className="d_b2_e_child">
                  <img style={{height:'1.3rem'}} src="/xls 1.png" alt="" />
                  <div>Sales Details</div>
                  <svg width="26" height="18" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9219 16.4653V1" stroke="#4C004A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.6834 12.689L12.9202 16.4651L9.16992 12.689" stroke="#4C004A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8882 7.00562H20.0996C21.3586 7.00903 22.5649 7.51154 23.454 8.40302C24.3431 9.29449 24.8423 10.5022 24.8423 11.7612V11.7612V18.0504C24.844 18.6726 24.7229 19.2891 24.486 19.8644C24.249 20.4397 23.9009 20.9627 23.4616 21.4032C23.0222 21.8438 22.5002 22.1933 21.9255 22.4318C21.3508 22.6703 20.7347 22.7931 20.1125 22.7931H5.75557C5.13106 22.7931 4.51266 22.6701 3.93568 22.4311C3.35871 22.1921 2.83451 21.8418 2.39292 21.4002C1.95132 20.9586 1.60098 20.4344 1.362 19.8574C1.12301 19.2804 1 18.662 1 18.0375V11.7483C1 10.4904 1.49972 9.2841 2.38914 8.39468C3.27857 7.50525 4.48483 7.00562 5.74267 7.00562H6.95412" stroke="#4C004A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="dispensing_body2_elem">
                <div className="d_b2_e_child">
                  <img style={{height:'1.3rem'}} src="/xls 1.png" alt="" />
                  <div>Stock Breakdown</div>
                  <svg width="26" height="18" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9219 16.4653V1" stroke="#4C004A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.6834 12.689L12.9202 16.4651L9.16992 12.689" stroke="#4C004A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8882 7.00562H20.0996C21.3586 7.00903 22.5649 7.51154 23.454 8.40302C24.3431 9.29449 24.8423 10.5022 24.8423 11.7612V11.7612V18.0504C24.844 18.6726 24.7229 19.2891 24.486 19.8644C24.249 20.4397 23.9009 20.9627 23.4616 21.4032C23.0222 21.8438 22.5002 22.1933 21.9255 22.4318C21.3508 22.6703 20.7347 22.7931 20.1125 22.7931H5.75557C5.13106 22.7931 4.51266 22.6701 3.93568 22.4311C3.35871 22.1921 2.83451 21.8418 2.39292 21.4002C1.95132 20.9586 1.60098 20.4344 1.362 19.8574C1.12301 19.2804 1 18.662 1 18.0375V11.7483C1 10.4904 1.49972 9.2841 2.38914 8.39468C3.27857 7.50525 4.48483 7.00562 5.74267 7.00562H6.95412" stroke="#4C004A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="dispensing_body2_elem">
                <NavLink to='/sales-details' className="d_b2_e_child">
                  <svg width="31" height="18" fill='#4c004a' viewBox="0 0 31 25" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z" fill="#4c004a"/>
                  </svg>
                  <div>Sales Details</div>
                </NavLink>
              </div>
            </div>
            <div className='db_row'>
              <div className="dispensing_body2_elem">
                <NavLink to='/kpis' className="d_b2_e_child">
                  <svg width="31" height="18" fill='#4c004a' viewBox="0 0 31 25" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z" fill="#4c004a"/>
                  </svg>
                  <div>KPIs</div>                  
                </NavLink>
              </div>  
              <div className="dispensing_body2_elem">
                <NavLink to='/staff-performance' className="d_b2_e_child">
                  <svg width="31" height="18" fill='#4c004a' viewBox="0 0 31 25" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z" fill="#4c004a"/>
                  </svg>
                  <div>Staff Performance</div>                  
                </NavLink>
              </div>  
              <div className="dispensing_body2_elem">
                <NavLink to='/sales-summary' className="d_b2_e_child">
                  <svg width="31" height="18" fill='#4c004a' viewBox="0 0 31 25" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.623047 12.5C1.91555 5.46 8.08517 0.125 15.4992 0.125C22.9132 0.125 29.0814 5.46 30.3753 12.5C29.0828 19.54 22.9132 24.875 15.4992 24.875C8.08517 24.875 1.91692 19.54 0.623047 12.5H0.623047ZM15.4983 19.3759C19.2952 19.3759 22.3733 16.2978 22.3733 12.5009C22.3733 8.70392 19.2953 5.62587 15.4983 5.62585C11.7014 5.62584 8.62331 8.70387 8.62329 12.5008C8.62327 16.2978 11.7013 19.3758 15.4982 19.3759H15.4983ZM15.4993 16.625C14.0255 16.625 12.6638 15.8388 11.9269 14.5625C11.1901 13.2862 11.1901 11.7138 11.9269 10.4375C12.6638 9.16122 14.0255 8.375 15.4993 8.375C16.973 8.375 18.3348 9.16122 19.0716 10.4375C19.8085 11.7138 19.8085 13.2862 19.0716 14.5625C18.3348 15.8388 16.973 16.625 15.4993 16.625Z" fill="#4c004a"/>
                  </svg>
                  <div>Sales Summary</div>                  
                </NavLink>
              </div>  
            </div>          
          </div>
          </>
        ):(<></>)
        }
        { report3? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Reports - Diary Information
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Start Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                                  
                  <div className="input_label">
                    Username
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Date of Birth
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                </div>
                <div>
                  <div className="input_label">
                    End Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                  
                  <div className="input_label" >
                    Surname
                  </div>
                  <input 
                    type="text"
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label" >
                    Postcode
                  </div>
                  <input 
                    type="text"
                    className='form_input'
                    placeholder='Type here'
                  />
                </div>
              </div>
              <button className='task2_submit_btn' >Find</button>
          </div>
          <div className='sub_title appoint_header' >
            <div>Appointment Information</div>
            <div className="b2eclast">
              <input type="checkbox" />
              <div className='normal_font' >Select All</div>
              <svg width="33" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6953 0L33 7.30469V29.3047C33 30.3359 32.6419 31.2096 31.9258 31.9258C31.2096 32.6419 30.3359 33 29.3047 33H3.69531C2.66406 33 1.79036 32.6419 1.07422 31.9258C0.358073 31.2096 0 30.3359 0 29.3047V3.69531C0 2.66406 0.358073 1.79036 1.07422 1.07422C1.79036 0.358073 2.66406 0 3.69531 0H25.6953ZM16.5 29.3047C18.0469 29.3047 19.3503 28.7747 20.4102 27.7148C21.4701 26.6549 22 25.3659 22 23.8477C22 22.3294 21.4701 21.026 20.4102 19.9375C19.3503 18.849 18.0469 18.3047 16.5 18.3047C14.9531 18.3047 13.6497 18.849 12.5898 19.9375C11.5299 21.026 11 22.3294 11 23.8477C11 25.3659 11.5299 26.6549 12.5898 27.7148C13.6497 28.7747 14.9531 29.3047 16.5 29.3047ZM22 11V3.69531H3.69531V11H22Z" fill="#4C004A"/>
              </svg>
              <svg width="41" height="25" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.6719 8.96875H8.48828C7.25648 8.96875 6.07512 9.45808 5.2041 10.3291C4.33308 11.2001 3.84375 12.3815 3.84375 13.6133V26.2656C3.84375 27.455 4.31621 28.5956 5.15719 29.4366C5.99818 30.2775 7.13879 30.75 8.32812 30.75H8.96875V33.9275C8.96875 34.7838 9.30892 35.6051 9.91443 36.2106C10.5199 36.8161 11.3412 37.1562 12.1975 37.1562H28.8025C29.6588 37.1562 30.4801 36.8161 31.0856 36.2106C31.6911 35.6051 32.0312 34.7838 32.0312 33.9275V30.75H32.6719C33.8612 30.75 35.0018 30.2775 35.8428 29.4366C36.6838 28.5956 37.1562 27.455 37.1562 26.2656V13.4531C37.1562 12.2638 36.6838 11.1232 35.8428 10.2822C35.0018 9.44121 33.8612 8.96875 32.6719 8.96875V8.96875ZM29.4688 33.9275C29.4681 34.104 29.3977 34.2731 29.2729 34.3979C29.1481 34.5227 28.979 34.5931 28.8025 34.5938H12.1975C12.021 34.5931 11.8519 34.5227 11.7271 34.3979C11.6023 34.2731 11.5319 34.104 11.5312 33.9275V21.1663C11.5319 20.9897 11.6023 20.8206 11.7271 20.6958C11.8519 20.571 12.021 20.5006 12.1975 20.5H28.8025C28.979 20.5006 29.1481 20.571 29.2729 20.6958C29.3977 20.8206 29.4681 20.9897 29.4688 21.1663V33.9275ZM31.5508 16.6498C31.1588 16.6814 30.7666 16.5919 30.4271 16.3934C30.0875 16.195 29.8171 15.8972 29.6521 15.5402C29.4872 15.1832 29.4357 14.7842 29.5047 14.3971C29.5737 14.0099 29.7598 13.6532 30.0378 13.3752C30.3159 13.0971 30.6726 12.911 31.0597 12.8421C31.4469 12.7731 31.8459 12.8245 32.2029 12.9895C32.5599 13.1544 32.8577 13.4249 33.0561 13.7644C33.2545 14.1039 33.344 14.4961 33.3125 14.8881C33.2759 15.3432 33.0786 15.7703 32.7558 16.0931C32.433 16.4159 32.0058 16.6133 31.5508 16.6498V16.6498Z" fill="#1AA053"/>
                <path d="M27.5473 3.84375H13.4536C12.3757 3.84535 11.3344 4.2345 10.5196 4.94016C9.7049 5.64581 9.17108 6.62092 9.01562 7.6875H31.9852C31.8298 6.62092 31.296 5.64581 30.4812 4.94016C29.6665 4.2345 28.6251 3.84535 27.5473 3.84375V3.84375Z" fill="#1AA053"/>
              </svg>
            </div>
          </div>
            <div className="appoint_header2">
              <div>Last Date</div>
              <div>Patient ID</div>
              <div>Name</div>
              <div>Next Appointment</div>
              <div>Attended last requirement</div>
              <div>Action</div>
            </div>
            <div className="report_body2">
              <div className="appoint_elem">
                <div className="body2_elem_child b2ec1">
                  <input type="checkbox" />
                  <div>12/1/2023</div> 
                </div>                             
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">Yes</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="30" height="18" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5H28.5C29.3284 0.5 30 1.17157 30 2V26C30 26.8284 29.3284 27.5 28.5 27.5H1.5C0.671573 27.5 0 26.8284 0 26V2C0 1.17157 0.671573 0.5 1.5 0.5ZM27 6.85657L15.108 17.5066L3 6.82357V24.4996H27V6.85657ZM3.76823 3.5L15.0932 13.493L26.2547 3.5H3.76823Z" fill="#4c004a"/>
                  </svg>
                  <svg width="29" height="18" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27594 17.9993L0.335938 22.666V1.99935C0.335938 1.26297 0.932891 0.666016 1.66927 0.666016H21.6693C22.4057 0.666016 23.0026 1.26297 23.0026 1.99935V17.9993H6.27594ZM5.35067 15.332H20.3333V3.33203H3V17.1787L5.35067 15.332ZM9.67188 20.666H23.3212L25.6719 22.5127V8.66602H27.0052C27.7416 8.66602 28.3385 9.26297 28.3385 9.99935V27.9993L22.3985 23.3327H11.0052C10.2688 23.3327 9.67188 22.7357 9.67188 21.9993V20.666Z" fill="#9599AD"/>
                  </svg>
                </div>             
              </div>
              <div className="appoint_elem">
                <div className="body2_elem_child b2ec1">
                  <input type="checkbox" />
                  <div>12/1/2023</div> 
                </div>                             
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">Yes</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="30" height="18" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5H28.5C29.3284 0.5 30 1.17157 30 2V26C30 26.8284 29.3284 27.5 28.5 27.5H1.5C0.671573 27.5 0 26.8284 0 26V2C0 1.17157 0.671573 0.5 1.5 0.5ZM27 6.85657L15.108 17.5066L3 6.82357V24.4996H27V6.85657ZM3.76823 3.5L15.0932 13.493L26.2547 3.5H3.76823Z" fill="#4c004a"/>
                  </svg>
                  <svg width="29" height="18" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27594 17.9993L0.335938 22.666V1.99935C0.335938 1.26297 0.932891 0.666016 1.66927 0.666016H21.6693C22.4057 0.666016 23.0026 1.26297 23.0026 1.99935V17.9993H6.27594ZM5.35067 15.332H20.3333V3.33203H3V17.1787L5.35067 15.332ZM9.67188 20.666H23.3212L25.6719 22.5127V8.66602H27.0052C27.7416 8.66602 28.3385 9.26297 28.3385 9.99935V27.9993L22.3985 23.3327H11.0052C10.2688 23.3327 9.67188 22.7357 9.67188 21.9993V20.666Z" fill="#9599AD"/>
                  </svg>
                </div>             
              </div>              
            </div>
          </>
        ):(<></>)
        }
        { report4? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Reports - Collection Due
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Start Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                                                   
                </div>
                <div>
                  <div className="input_label">
                    End Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                  
                </div>
              </div>
              <button className='task2_submit_btn' >Find</button>
          </div>
          <div className='sub_title appoint_header' >
            <div>Items to Collect (Displaying last 30 days)</div>
            <div className="b2eclast">
              <div className='normal_font' >Report: </div>
              <select className='select_input_header' >
                <option value="30 days">30 days</option>
                <option value="30 days">60 days</option>
                <option value="30 days">90 days</option>
                <option value="30 days">120 days</option>
                <option value="30 days">1 year</option>
              </select>              
            </div>
          </div>
            <div className="collect_header2">
              <div>Sale ID</div>
              <div>Patient name</div>
              <div>Patient ID</div>
              <div>Date Required</div>
              <div>Date Ready</div>
              <div>Patient informed</div>
              <div>Action</div>
            </div>
            <div className="report_body2">
              <div className="collect_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">Yes</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6666 16.6667C21.0607 16.6666 19.4643 16.4194 17.9336 15.9336C17.4668 15.8001 16.9336 15.8666 16.6003 16.2669L13.6666 19.1999C9.8665 17.2669 6.80013 14.1999 4.8665 10.3997L7.80019 7.46681C8.13344 7.1335 8.26656 6.60031 8.13344 6.1335C7.59987 4.60031 7.33331 3 7.33331 1.33331C7.33331 0.60025 6.73338 0 6 0H1.33331C0.599937 0 0 0.60025 0 1.33331C0 13.8665 10.1335 24 22.6666 24C23.3997 24 24 23.3997 24 22.6667V18C24 17.2669 23.3997 16.6667 22.6666 16.6667Z" fill="#405189"/>
                  </svg>
                  <svg width="30" height="16" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5H28.5C29.3284 0.5 30 1.17157 30 2V26C30 26.8284 29.3284 27.5 28.5 27.5H1.5C0.671573 27.5 0 26.8284 0 26V2C0 1.17157 0.671573 0.5 1.5 0.5ZM27 6.85657L15.108 17.5066L3 6.82357V24.4996H27V6.85657ZM3.76823 3.5L15.0932 13.493L26.2547 3.5H3.76823Z" fill="#4c004a"/>
                  </svg>
                  <svg width="29" height="18" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27594 17.9993L0.335938 22.666V1.99935C0.335938 1.26297 0.932891 0.666016 1.66927 0.666016H21.6693C22.4057 0.666016 23.0026 1.26297 23.0026 1.99935V17.9993H6.27594ZM5.35067 15.332H20.3333V3.33203H3V17.1787L5.35067 15.332ZM9.67188 20.666H23.3212L25.6719 22.5127V8.66602H27.0052C27.7416 8.66602 28.3385 9.26297 28.3385 9.99935V27.9993L22.3985 23.3327H11.0052C10.2688 23.3327 9.67188 22.7357 9.67188 21.9993V20.666Z" fill="#9599AD"/>
                  </svg>
                  <svg width="29" height="23" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5875 8.28681L20.7132 13.4138L8.75075 25.3751H3.625V20.2481L15.5875 8.2856V8.28681ZM17.2963 6.57802L19.8592 4.01394C20.3311 3.54223 21.0959 3.54223 21.5678 4.01394L24.9862 7.43232C25.4579 7.90417 25.4579 8.66904 24.9862 9.1409L22.4221 11.7038L17.2963 6.57802Z" fill="#405189"/>
                  </svg>
                  <svg width="26" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58796 5.2964V23.2918H20.5231V25.8196H2.58796C1.86574 25.8196 1.25386 25.5688 0.752315 25.0672C0.250772 24.5657 0 23.9739 0 23.2918V5.2964H2.58796ZM23.1111 0.180664C23.8333 0.180664 24.4452 0.431436 24.9468 0.932979C25.4483 1.43452 25.6991 2.02634 25.6991 2.70844V18.1159C25.6991 18.8381 25.4483 19.45 24.9468 19.9515C24.4452 20.453 23.8333 20.7038 23.1111 20.7038H7.7037C6.98148 20.7038 6.3696 20.453 5.86806 19.9515C5.36651 19.45 5.11574 18.8381 5.11574 18.1159V2.70844C5.11574 2.02634 5.36651 1.43452 5.86806 0.932979C6.3696 0.431436 6.98148 0.180664 7.7037 0.180664H23.1111ZM21.8472 11.7362V9.14826H16.6713V4.03252H14.1435V9.14826H8.96759V11.7362H14.1435V16.852H16.6713V11.7362H21.8472Z" fill="#1AA053"/>
                  </svg>
                </div>             
              </div>                                 
              <div className="collect_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">Yes</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6666 16.6667C21.0607 16.6666 19.4643 16.4194 17.9336 15.9336C17.4668 15.8001 16.9336 15.8666 16.6003 16.2669L13.6666 19.1999C9.8665 17.2669 6.80013 14.1999 4.8665 10.3997L7.80019 7.46681C8.13344 7.1335 8.26656 6.60031 8.13344 6.1335C7.59987 4.60031 7.33331 3 7.33331 1.33331C7.33331 0.60025 6.73338 0 6 0H1.33331C0.599937 0 0 0.60025 0 1.33331C0 13.8665 10.1335 24 22.6666 24C23.3997 24 24 23.3997 24 22.6667V18C24 17.2669 23.3997 16.6667 22.6666 16.6667Z" fill="#405189"/>
                  </svg>
                  <svg width="30" height="16" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5H28.5C29.3284 0.5 30 1.17157 30 2V26C30 26.8284 29.3284 27.5 28.5 27.5H1.5C0.671573 27.5 0 26.8284 0 26V2C0 1.17157 0.671573 0.5 1.5 0.5ZM27 6.85657L15.108 17.5066L3 6.82357V24.4996H27V6.85657ZM3.76823 3.5L15.0932 13.493L26.2547 3.5H3.76823Z" fill="#4c004a"/>
                  </svg>
                  <svg width="29" height="18" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27594 17.9993L0.335938 22.666V1.99935C0.335938 1.26297 0.932891 0.666016 1.66927 0.666016H21.6693C22.4057 0.666016 23.0026 1.26297 23.0026 1.99935V17.9993H6.27594ZM5.35067 15.332H20.3333V3.33203H3V17.1787L5.35067 15.332ZM9.67188 20.666H23.3212L25.6719 22.5127V8.66602H27.0052C27.7416 8.66602 28.3385 9.26297 28.3385 9.99935V27.9993L22.3985 23.3327H11.0052C10.2688 23.3327 9.67188 22.7357 9.67188 21.9993V20.666Z" fill="#9599AD"/>
                  </svg>
                  <svg width="29" height="23" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5875 8.28681L20.7132 13.4138L8.75075 25.3751H3.625V20.2481L15.5875 8.2856V8.28681ZM17.2963 6.57802L19.8592 4.01394C20.3311 3.54223 21.0959 3.54223 21.5678 4.01394L24.9862 7.43232C25.4579 7.90417 25.4579 8.66904 24.9862 9.1409L22.4221 11.7038L17.2963 6.57802Z" fill="#405189"/>
                  </svg>
                  <svg width="26" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58796 5.2964V23.2918H20.5231V25.8196H2.58796C1.86574 25.8196 1.25386 25.5688 0.752315 25.0672C0.250772 24.5657 0 23.9739 0 23.2918V5.2964H2.58796ZM23.1111 0.180664C23.8333 0.180664 24.4452 0.431436 24.9468 0.932979C25.4483 1.43452 25.6991 2.02634 25.6991 2.70844V18.1159C25.6991 18.8381 25.4483 19.45 24.9468 19.9515C24.4452 20.453 23.8333 20.7038 23.1111 20.7038H7.7037C6.98148 20.7038 6.3696 20.453 5.86806 19.9515C5.36651 19.45 5.11574 18.8381 5.11574 18.1159V2.70844C5.11574 2.02634 5.36651 1.43452 5.86806 0.932979C6.3696 0.431436 6.98148 0.180664 7.7037 0.180664H23.1111ZM21.8472 11.7362V9.14826H16.6713V4.03252H14.1435V9.14826H8.96759V11.7362H14.1435V16.852H16.6713V11.7362H21.8472Z" fill="#1AA053"/>
                  </svg>
                </div>             
              </div>                                 
            </div>
          </>
        ):(<></>)
        }
        { report5? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Reports - Payments Due
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Start Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                                                   
                </div>
                <div>
                  <div className="input_label">
                    End Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                  
                </div>
              </div>
              <button className='task2_submit_btn' >Find</button>
          </div>
          <div className='sub_title appoint_header' >
            <div>Balances Due</div>
            <div className="b2eclast">
              <div className='normal_font' >Report: </div>
              <select className='select_input_header' >
                <option value="30 days">30 days</option>
                <option value="30 days">60 days</option>
                <option value="30 days">90 days</option>
                <option value="30 days">120 days</option>
                <option value="30 days">1 year</option>
              </select>              
            </div>
          </div>
            <div className="payments_header2">
              <div>Order ID</div>
              <div>Patient</div>
              <div>ID</div>
              <div>Order Date</div>
              <div>Total</div>
              <div>Outstanding</div>
              <div>Paid so far</div>
              <div>Total due</div>
              <div>Action</div>
            </div>
            <div className="report_body2">
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
              <div className="payments_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$76.5</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child">$36.4</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                    <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.3729 10.2559C22.3729 10.3437 21.6845 19.0505 21.2913 22.7149C21.0451 24.9636 19.5954 26.3275 17.4209 26.3663C15.7502 26.4037 14.1146 26.4166 12.5054 26.4166C10.7969 26.4166 9.12614 26.4037 7.50437 26.3663C5.40272 26.3159 3.9518 24.9248 3.71814 22.7149C3.31364 19.0376 2.6378 10.3437 2.62523 10.2559C2.61267 9.99109 2.69809 9.73923 2.87145 9.53515C3.0423 9.34657 3.28851 9.23291 3.54729 9.23291H21.4634C21.7209 9.23291 21.9546 9.34657 22.1393 9.53515C22.3114 9.73923 22.398 9.99109 22.3729 10.2559Z" fill="#C03221"/>
                    <path d="M24.125 5.72027C24.125 5.18942 23.7067 4.77352 23.2042 4.77352H19.4381C18.6718 4.77352 18.006 4.22845 17.8351 3.45994L17.6241 2.51834C17.3289 1.38043 16.3101 0.583496 15.1669 0.583496H9.83432C8.6786 0.583496 7.66986 1.38043 7.36334 2.58034L7.16612 3.46123C6.99402 4.22845 6.32822 4.77352 5.56319 4.77352H1.79706C1.29332 4.77352 0.875 5.18942 0.875 5.72027V6.21109C0.875 6.72903 1.29332 7.15785 1.79706 7.15785H23.2042C23.7067 7.15785 24.125 6.72903 24.125 6.21109V5.72027Z" fill="#C03221"/>
                  </svg>
                </div>
              </div>                                             
            </div>
          </>
        ):(<></>)
        }
        { report6? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Reports - Collection Made
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Start Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                                                   
                  <div className='mini_txt' >Leave Blank for items collected in the past 7 days</div>
                </div>
                <div>
                  <div className="input_label">
                    End Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                  
                </div>
              </div>
              <button className='task2_submit_btn' >Find</button>
          </div>
          <div className='sub_title appoint_header' >
            <div>Items Collected</div>
            <div className="b2eclast">
              <div className='normal_font' >Report: </div>
              <select className='select_input_header' >
                <option value="30 days">30 days</option>
                <option value="30 days">60 days</option>
                <option value="30 days">90 days</option>
                <option value="30 days">120 days</option>
                <option value="30 days">1 year</option>
              </select>              
            </div>
          </div>
            <div className="collect_header2">
              <div>Sale ID</div>
              <div>Name</div>
              <div>Patient ID</div>
              <div>Date Required</div>
              <div>Date Ready</div>
              <div>Patient informed</div>
              <div>Action</div>
            </div>
            <div className="report_body2">
              <div className="collect_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">Yes</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6666 16.6667C21.0607 16.6666 19.4643 16.4194 17.9336 15.9336C17.4668 15.8001 16.9336 15.8666 16.6003 16.2669L13.6666 19.1999C9.8665 17.2669 6.80013 14.1999 4.8665 10.3997L7.80019 7.46681C8.13344 7.1335 8.26656 6.60031 8.13344 6.1335C7.59987 4.60031 7.33331 3 7.33331 1.33331C7.33331 0.60025 6.73338 0 6 0H1.33331C0.599937 0 0 0.60025 0 1.33331C0 13.8665 10.1335 24 22.6666 24C23.3997 24 24 23.3997 24 22.6667V18C24 17.2669 23.3997 16.6667 22.6666 16.6667Z" fill="#405189"/>
                  </svg>
                  <svg width="30" height="16" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5H28.5C29.3284 0.5 30 1.17157 30 2V26C30 26.8284 29.3284 27.5 28.5 27.5H1.5C0.671573 27.5 0 26.8284 0 26V2C0 1.17157 0.671573 0.5 1.5 0.5ZM27 6.85657L15.108 17.5066L3 6.82357V24.4996H27V6.85657ZM3.76823 3.5L15.0932 13.493L26.2547 3.5H3.76823Z" fill="#4c004a"/>
                  </svg>
                  <svg width="29" height="18" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27594 17.9993L0.335938 22.666V1.99935C0.335938 1.26297 0.932891 0.666016 1.66927 0.666016H21.6693C22.4057 0.666016 23.0026 1.26297 23.0026 1.99935V17.9993H6.27594ZM5.35067 15.332H20.3333V3.33203H3V17.1787L5.35067 15.332ZM9.67188 20.666H23.3212L25.6719 22.5127V8.66602H27.0052C27.7416 8.66602 28.3385 9.26297 28.3385 9.99935V27.9993L22.3985 23.3327H11.0052C10.2688 23.3327 9.67188 22.7357 9.67188 21.9993V20.666Z" fill="#9599AD"/>
                  </svg>
                  <svg width="29" height="23" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5875 8.28681L20.7132 13.4138L8.75075 25.3751H3.625V20.2481L15.5875 8.2856V8.28681ZM17.2963 6.57802L19.8592 4.01394C20.3311 3.54223 21.0959 3.54223 21.5678 4.01394L24.9862 7.43232C25.4579 7.90417 25.4579 8.66904 24.9862 9.1409L22.4221 11.7038L17.2963 6.57802Z" fill="#405189"/>
                  </svg>
                  <svg width="26" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58796 5.2964V23.2918H20.5231V25.8196H2.58796C1.86574 25.8196 1.25386 25.5688 0.752315 25.0672C0.250772 24.5657 0 23.9739 0 23.2918V5.2964H2.58796ZM23.1111 0.180664C23.8333 0.180664 24.4452 0.431436 24.9468 0.932979C25.4483 1.43452 25.6991 2.02634 25.6991 2.70844V18.1159C25.6991 18.8381 25.4483 19.45 24.9468 19.9515C24.4452 20.453 23.8333 20.7038 23.1111 20.7038H7.7037C6.98148 20.7038 6.3696 20.453 5.86806 19.9515C5.36651 19.45 5.11574 18.8381 5.11574 18.1159V2.70844C5.11574 2.02634 5.36651 1.43452 5.86806 0.932979C6.3696 0.431436 6.98148 0.180664 7.7037 0.180664H23.1111ZM21.8472 11.7362V9.14826H16.6713V4.03252H14.1435V9.14826H8.96759V11.7362H14.1435V16.852H16.6713V11.7362H21.8472Z" fill="#1AA053"/>
                  </svg>
                </div>             
              </div>                                 
              <div className="collect_elem">                                     
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12533</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">Yes</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6666 16.6667C21.0607 16.6666 19.4643 16.4194 17.9336 15.9336C17.4668 15.8001 16.9336 15.8666 16.6003 16.2669L13.6666 19.1999C9.8665 17.2669 6.80013 14.1999 4.8665 10.3997L7.80019 7.46681C8.13344 7.1335 8.26656 6.60031 8.13344 6.1335C7.59987 4.60031 7.33331 3 7.33331 1.33331C7.33331 0.60025 6.73338 0 6 0H1.33331C0.599937 0 0 0.60025 0 1.33331C0 13.8665 10.1335 24 22.6666 24C23.3997 24 24 23.3997 24 22.6667V18C24 17.2669 23.3997 16.6667 22.6666 16.6667Z" fill="#405189"/>
                  </svg>
                  <svg width="30" height="16" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5H28.5C29.3284 0.5 30 1.17157 30 2V26C30 26.8284 29.3284 27.5 28.5 27.5H1.5C0.671573 27.5 0 26.8284 0 26V2C0 1.17157 0.671573 0.5 1.5 0.5ZM27 6.85657L15.108 17.5066L3 6.82357V24.4996H27V6.85657ZM3.76823 3.5L15.0932 13.493L26.2547 3.5H3.76823Z" fill="#4c004a"/>
                  </svg>
                  <svg width="29" height="18" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27594 17.9993L0.335938 22.666V1.99935C0.335938 1.26297 0.932891 0.666016 1.66927 0.666016H21.6693C22.4057 0.666016 23.0026 1.26297 23.0026 1.99935V17.9993H6.27594ZM5.35067 15.332H20.3333V3.33203H3V17.1787L5.35067 15.332ZM9.67188 20.666H23.3212L25.6719 22.5127V8.66602H27.0052C27.7416 8.66602 28.3385 9.26297 28.3385 9.99935V27.9993L22.3985 23.3327H11.0052C10.2688 23.3327 9.67188 22.7357 9.67188 21.9993V20.666Z" fill="#9599AD"/>
                  </svg>
                  <svg width="29" height="23" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5875 8.28681L20.7132 13.4138L8.75075 25.3751H3.625V20.2481L15.5875 8.2856V8.28681ZM17.2963 6.57802L19.8592 4.01394C20.3311 3.54223 21.0959 3.54223 21.5678 4.01394L24.9862 7.43232C25.4579 7.90417 25.4579 8.66904 24.9862 9.1409L22.4221 11.7038L17.2963 6.57802Z" fill="#405189"/>
                  </svg>
                  <svg width="26" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58796 5.2964V23.2918H20.5231V25.8196H2.58796C1.86574 25.8196 1.25386 25.5688 0.752315 25.0672C0.250772 24.5657 0 23.9739 0 23.2918V5.2964H2.58796ZM23.1111 0.180664C23.8333 0.180664 24.4452 0.431436 24.9468 0.932979C25.4483 1.43452 25.6991 2.02634 25.6991 2.70844V18.1159C25.6991 18.8381 25.4483 19.45 24.9468 19.9515C24.4452 20.453 23.8333 20.7038 23.1111 20.7038H7.7037C6.98148 20.7038 6.3696 20.453 5.86806 19.9515C5.36651 19.45 5.11574 18.8381 5.11574 18.1159V2.70844C5.11574 2.02634 5.36651 1.43452 5.86806 0.932979C6.3696 0.431436 6.98148 0.180664 7.7037 0.180664H23.1111ZM21.8472 11.7362V9.14826H16.6713V4.03252H14.1435V9.14826H8.96759V11.7362H14.1435V16.852H16.6713V11.7362H21.8472Z" fill="#1AA053"/>
                  </svg>
                </div>             
              </div>                                 
            </div>
          </>
        ):(<></>)
        }
        { report7? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Reports - Payment Made
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Start Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                                                   
                  <div className='mini_txt' >Leave Blank for payment today</div>
                </div>
                <div>
                  <div className="input_label">
                    End Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />                  
                </div>
              </div>
              <button className='task2_submit_btn' >Find</button>
          </div>
          <div className='sub_title appoint_header' >
            <div>Payments Made</div>
            <div className="b2eclast">
              <div className='normal_font' >Report: </div>
              <select className='select_input_header' >
                <option value="30 days">30 days</option>
                <option value="30 days">60 days</option>
                <option value="30 days">90 days</option>
                <option value="30 days">120 days</option>
                <option value="30 days">1 year</option>
              </select>              
            </div>
          </div>
            <div className="payment_made_header2">
              <div>Cash</div>
              <div>Card</div>
              <div>BACS</div>
              <div>D/D</div>
              <div>Total</div>
            </div>
            <div className="report_body2">
              <div className="payment_made_elem">                                     
                <div className="body2_elem_child">$36.5</div>                                         
                <div className="body2_elem_child">$36.5</div>                                         
                <div className="body2_elem_child">$36.5</div>                                         
                <div className="body2_elem_child">$36.5</div>                                         
                <div className="body2_elem_child">$36.5</div>                                         
              </div>                                             
            </div>
          </>
        ):(<></>)
        }
        { report8? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header flex_between">
                <div>Reports - Order Status</div>
                <div className="flex">
                  <svg width="41" height="30" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.6719 8.96875H8.48828C7.25647 8.96875 6.07512 9.45808 5.2041 10.3291C4.33308 11.2001 3.84375 12.3815 3.84375 13.6133V26.2656C3.84375 27.455 4.31621 28.5956 5.15719 29.4366C5.99818 30.2775 7.13879 30.75 8.32812 30.75H8.96875V33.9275C8.96875 34.7838 9.30892 35.6051 9.91443 36.2106C10.5199 36.8161 11.3412 37.1562 12.1975 37.1562H28.8025C29.6588 37.1562 30.4801 36.8161 31.0856 36.2106C31.6911 35.6051 32.0312 34.7838 32.0312 33.9275V30.75H32.6719C33.8612 30.75 35.0018 30.2775 35.8428 29.4366C36.6838 28.5956 37.1562 27.455 37.1562 26.2656V13.4531C37.1562 12.2638 36.6838 11.1232 35.8428 10.2822C35.0018 9.44121 33.8612 8.96875 32.6719 8.96875ZM29.4688 33.9275C29.4681 34.104 29.3977 34.2731 29.2729 34.3979C29.1481 34.5227 28.979 34.5931 28.8025 34.5938H12.1975C12.021 34.5931 11.8519 34.5227 11.7271 34.3979C11.6023 34.2731 11.5319 34.104 11.5312 33.9275V21.1663C11.5319 20.9897 11.6023 20.8207 11.7271 20.6958C11.8519 20.571 12.021 20.5006 12.1975 20.5H28.8025C28.979 20.5006 29.1481 20.571 29.2729 20.6958C29.3977 20.8207 29.4681 20.9897 29.4688 21.1663V33.9275ZM31.5508 16.6498C31.1588 16.6814 30.7666 16.5919 30.4271 16.3934C30.0875 16.195 29.8171 15.8972 29.6521 15.5402C29.4872 15.1832 29.4357 14.7842 29.5047 14.3971C29.5737 14.0099 29.7598 13.6532 30.0378 13.3752C30.3159 13.0971 30.6726 12.911 31.0597 12.8421C31.4469 12.7731 31.8459 12.8245 32.2029 12.9895C32.5599 13.1544 32.8577 13.4249 33.0561 13.7644C33.2545 14.1039 33.344 14.4961 33.3125 14.8881C33.2759 15.3432 33.0786 15.7703 32.7558 16.0931C32.433 16.4159 32.0058 16.6133 31.5508 16.6498Z" fill="#1AA053"/>
                    <path d="M27.5473 3.84375H13.4536C12.3757 3.84535 11.3344 4.2345 10.5196 4.94016C9.7049 5.64581 9.17108 6.62092 9.01562 7.6875H31.9852C31.8298 6.62092 31.296 5.64581 30.4812 4.94016C29.6665 4.2345 28.6251 3.84535 27.5473 3.84375Z" fill="#1AA053"/>
                  </svg>
                  <svg width="67" height="40" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_824_17346)">
                    <circle cx="33.5" cy="31.5" r="23.5" fill="#DAE4FD"/>
                    <path d="M29.8281 36.6626L36.3818 36.6826C36.7905 36.6841 37.1213 37.0263 37.1213 37.4458V41.1327C37.1213 41.5536 36.8822 41.9345 36.5097 42.1106L30.5606 44.9041C30.4217 44.9685 30.2743 45 30.127 45C29.931 45 29.735 44.9427 29.564 44.8296C29.2652 44.632 29.0845 44.2913 29.0845 43.9261V37.4257C29.0845 37.0034 29.4181 36.6612 29.8281 36.6626ZM44.127 18C45.7143 18 47 19.3244 47 20.9595V23.0271C47 23.8203 46.69 24.582 46.1396 25.1376L37.3578 34.0205C37.2063 34.1751 37.0006 34.261 36.788 34.2596L29.4351 34.2367C29.2113 34.2367 28.9986 34.1408 28.8457 33.9732L20.7756 25.0975C20.2766 24.5491 20 23.8246 20 23.0729V20.961C20 19.3259 21.2857 18 22.8731 18H44.127Z" fill="#4C004A"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_824_17346" x="0" y="0" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_824_17346"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_824_17346" result="shape"/>
                    </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Start Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                  <div className="input_label">
                    Postcode
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Forename
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Date of Birth
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                </div>
                <div>
                  <div className="input_label">
                    End Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                  <div className="input_label">
                    Patient ID
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Surname
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                </div>
              </div>
              <div className="rb2_bottom">
                <div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">New</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">With Lab</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Checked</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Ready for Collection</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Returned</div>
                  </div>
                </div>
                <div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Lenses Arrived</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Collected</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Cancelled</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Quote Only</div>
                  </div>
                </div>
              </div>
              <div className='appoint_header' style={{marginTop:'2rem'}} >
                <div className='mini_txt' >No Results found</div>
                <div className='flex' style={{gap:'2px'}} >
                  <input type="checkbox" name="" id="" />
                  <div className="mini_txt_dark">Select All</div>
                  <button className='task2_submit_btn2' >Find</button>
                </div>
              </div>
          </div>
          <div className='sub_title appoint_header' >
            <div>Order Status</div>
            <div className="b2eclast">
              <div className='normal_font' >Report: </div>
              <select className='select_input_header' >
                <option value="30 days">30 days</option>
                <option value="30 days">60 days</option>
                <option value="30 days">90 days</option>
                <option value="30 days">120 days</option>
                <option value="30 days">1 year</option>
              </select>              
            </div>
          </div>
            <div className="order_status_header2">
              <div>New</div>
              <div>With Lab</div>
              <div>Checked</div>
              <div>Lenses Arrived</div>
              <div>Collected</div>
              <div>Quote Only</div>
              <div>Returned</div>
              <div>Ready for Collection</div>
            </div>
            <div className="report_body2">
              <div className="order_status_elem">                                     
                <div className="body2_elem_child">Lorem</div>                                         
                <div className="body2_elem_child">Lorem</div>                                         
                <div className="body2_elem_child">Lorem</div>                                         
                <div className="body2_elem_child">Lorem</div>                                         
                <div className="body2_elem_child">Lorem</div>                                         
                <div className="body2_elem_child">Lorem</div>                                         
                <div className="body2_elem_child">Lorem</div>                                         
                <div className="body2_elem_child">Lorem</div>                                         
              </div>                                             
            </div>
          </>
        ):(<></>)
        }
        { report9? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Reports - GOS Vouchers Submission
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Start Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                  <div className="input_label">
                    Performer
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Patient ID
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Username
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Unique Ref
                  </div>
                  <textarea 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                    style={{height:'5rem'}}
                  />
                  
                </div>
                <div>
                  <div className="input_label">
                    End Date
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                  <div className="input_label">
                    Batch Ref
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div className="input_label">
                    Date of Birth
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                  <div className="input_label">
                    Surname
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='Type here'
                  />
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="radio" />
                    <div className="mini_txt_dark">Use Dispense Date</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="radio" />
                    <div className="mini_txt_dark">Use Submitted Date</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="radio" />
                    <div className="mini_txt_dark">Use (Expected) Payment Date - start  m/y only</div>
                  </div>
                </div>
              </div>
              <div className="rb2_bottom">
                <div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Unsubmitted Only</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Ready To Submit Only</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Batch Sign Only</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Awaiting Confirmation Only</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Accepted Only</div>
                  </div>
                </div>
                <div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Rejected Only</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Include Paid Claims</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Show GOS3</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Show GOS4</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark">Show GOS1 & GOS6</div>
                  </div>
                  <div style={{display:'flex',gap:'2px'}} >
                    <input type="checkbox" />
                    <div className="mini_txt_dark" style={{fontWeight:'600'}} >Select All</div>
                  </div>
                </div>
              </div>
              <div className='appoint_header' style={{marginTop:'2rem',justifyContent:'end'}} >                
                <div className='flex wrap_' style={{gap:'15px'}} >
                  <div className="batch_btn">
                    <svg width="29" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.245 1.57723C17.7571 1.07796 17.1744 0.681239 16.531 0.410383C15.8876 0.139527 15.1966 0 14.4985 0C13.8005 0 13.1095 0.139527 12.4661 0.410383C11.8227 0.681239 11.24 1.07796 10.7521 1.57723L9.62473 2.7336L8.0116 2.71367C7.31334 2.7054 6.62047 2.83684 5.97374 3.10025C5.32701 3.36366 4.73948 3.75373 4.2457 4.24751C3.75192 4.74129 3.36185 5.32882 3.09844 5.97555C2.83503 6.62228 2.70359 7.31515 2.71185 8.01342L2.72998 9.62654L1.57723 10.7539C1.07796 11.2418 0.681239 11.8245 0.410383 12.4679C0.139527 13.1113 0 13.8023 0 14.5004C0 15.1984 0.139527 15.8894 0.410383 16.5328C0.681239 17.1762 1.07796 17.7589 1.57723 18.2468L2.73179 19.3742L2.71185 20.9873C2.70359 21.6856 2.83503 22.3784 3.09844 23.0252C3.36185 23.6719 3.75192 24.2594 4.2457 24.7532C4.73948 25.247 5.32701 25.637 5.97374 25.9005C6.62047 26.1639 7.31334 26.2953 8.0116 26.287L9.62473 26.2689L10.7521 27.4217C11.24 27.9209 11.8227 28.3177 12.4661 28.5885C13.1095 28.8594 13.8005 28.9989 14.4985 28.9989C15.1966 28.9989 15.8876 28.8594 16.531 28.5885C17.1744 28.3177 17.7571 27.9209 18.245 27.4217L19.3724 26.2671L20.9855 26.287C21.6837 26.2953 22.3766 26.1639 23.0233 25.9005C23.6701 25.637 24.2576 25.247 24.7514 24.7532C25.2452 24.2594 25.6352 23.6719 25.8986 23.0252C26.1621 22.3784 26.2935 21.6856 26.2852 20.9873L26.2671 19.3742L27.4199 18.2468C27.9191 17.7589 28.3158 17.1762 28.5867 16.5328C28.8576 15.8894 28.9971 15.1984 28.9971 14.5004C28.9971 13.8023 28.8576 13.1113 28.5867 12.4679C28.3158 11.8245 27.9191 11.2418 27.4199 10.7539L26.2653 9.62654L26.2852 8.01342C26.2935 7.31515 26.1621 6.62228 25.8986 5.97555C25.6352 5.32882 25.2452 4.74129 24.7514 4.24751C24.2576 3.75373 23.6701 3.36366 23.0233 3.10025C22.3766 2.83684 21.6837 2.7054 20.9855 2.71367L19.3724 2.73179L18.245 1.57723ZM18.7652 12.4232C18.9353 12.2531 19.0309 12.0223 19.0309 11.7816C19.0309 11.5409 18.9353 11.3101 18.7652 11.14C18.595 10.9698 18.3642 10.8742 18.1235 10.8742C17.8829 10.8742 17.6521 10.9698 17.4819 11.14L12.686 15.9377L10.6089 13.8587C10.5247 13.7745 10.4246 13.7076 10.3145 13.662C10.2044 13.6164 10.0865 13.593 9.96729 13.593C9.84813 13.593 9.73014 13.6164 9.62005 13.662C9.50996 13.7076 9.40993 13.7745 9.32567 13.8587C9.24141 13.943 9.17457 14.043 9.12897 14.1531C9.08337 14.2632 9.0599 14.3812 9.0599 14.5004C9.0599 14.6195 9.08337 14.7375 9.12897 14.8476C9.17457 14.9577 9.24141 15.0577 9.32567 15.142L12.0444 17.8607C12.1286 17.9451 12.2286 18.0121 12.3387 18.0578C12.4488 18.1035 12.5668 18.127 12.686 18.127C12.8052 18.127 12.9233 18.1035 13.0334 18.0578C13.1435 18.0121 13.2435 17.9451 13.3277 17.8607L18.7652 12.4232Z" fill="#4C004A"/>
                    </svg>
                    <div className="normal_text">Batch Sign</div>
                  </div>
                  <div className="print_summary_btn" >
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.7344 4.59375H4.34766C3.71673 4.59375 3.11165 4.84438 2.66552 5.29052C2.21938 5.73665 1.96875 6.34173 1.96875 6.97266V13.4531C1.96875 14.0623 2.21074 14.6465 2.64149 15.0773C3.07224 15.508 3.65646 15.75 4.26562 15.75H4.59375V17.3775C4.59375 17.8161 4.76798 18.2367 5.07812 18.5469C5.38826 18.857 5.8089 19.0312 6.2475 19.0312H14.7525C15.1911 19.0312 15.6117 18.857 15.9219 18.5469C16.232 18.2367 16.4062 17.8161 16.4062 17.3775V15.75H16.7344C17.3435 15.75 17.9278 15.508 18.3585 15.0773C18.7893 14.6465 19.0312 14.0623 19.0312 13.4531V6.89062C19.0312 6.28146 18.7893 5.69724 18.3585 5.26649C17.9278 4.83574 17.3435 4.59375 16.7344 4.59375ZM15.0938 17.3775C15.0934 17.4679 15.0574 17.5545 14.9934 17.6184C14.9295 17.6824 14.8429 17.7184 14.7525 17.7188H6.2475C6.15709 17.7184 6.07048 17.6824 6.00656 17.6184C5.94263 17.5545 5.90657 17.4679 5.90625 17.3775V10.8413C5.90657 10.7508 5.94263 10.6642 6.00656 10.6003C6.07048 10.5364 6.15709 10.5003 6.2475 10.5H14.7525C14.8429 10.5003 14.9295 10.5364 14.9934 10.6003C15.0574 10.6642 15.0934 10.7508 15.0938 10.8413V17.3775ZM16.1602 8.52797C15.9594 8.54411 15.7585 8.49827 15.5846 8.39663C15.4107 8.295 15.2722 8.14247 15.1877 7.95962C15.1032 7.77677 15.0768 7.57241 15.1122 7.37411C15.1475 7.17581 15.2428 6.99313 15.3852 6.8507C15.5277 6.70827 15.7103 6.61297 15.9086 6.57764C16.1069 6.54231 16.3113 6.56867 16.4942 6.65315C16.677 6.73763 16.8295 6.87616 16.9312 7.05006C17.0328 7.22396 17.0786 7.42485 17.0625 7.62562C17.0438 7.85869 16.9427 8.07748 16.7773 8.24282C16.612 8.40815 16.3932 8.50924 16.1602 8.52797Z" fill="#1AA053"/>
                      <path d="M14.109 1.96875H6.89027C6.33821 1.96957 5.80484 2.16889 5.38754 2.53032C4.97023 2.89176 4.69681 3.3912 4.61719 3.9375H16.3821C16.3025 3.3912 16.0291 2.89176 15.6118 2.53032C15.1945 2.16889 14.6611 1.96957 14.109 1.96875Z" fill="#1AA053"/>
                    </svg>
                    <div className="normal_text">Print Summary</div>
                  </div>
                  <button className='task2_submit_btn2' style={{margin:'0'}} >Find</button>
                </div>
              </div>
          </div>       
          </>
        ):(<></>)
        }
    </>
  )
}

export default Reporting
