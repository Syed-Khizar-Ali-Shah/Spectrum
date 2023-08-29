import React, { useState } from 'react'
import './Communication.css'

function Communication() {
  const [report1,setreport1] = useState(true);
  const [report2,setreport2] = useState(false);
  const [report3,setreport3] = useState(false);
  const [report4,setreport4] = useState(false);

  function change1(){
    setreport1(true)
    setreport2(false)
    setreport3(false)
    setreport4(false)
  }
  function change2(){
    setreport1(false)
    setreport2(true)
    setreport3(false)
    setreport4(false)
  }
  function change3(){
    setreport1(false)
    setreport2(false)
    setreport3(true)
    setreport4(false)
  }
  function change4(){
    setreport1(false)
    setreport2(false)
    setreport3(false)
    setreport4(true)
  }
  const [blueCol,setblueCol] = useState('#4C004A');

  return (
    <>
        <div className='page_title' >Communication</div>
        <div className="report_header">
          <div className="report_child" onClick={change1} 
            style={{background: report1?blueCol:'',color: report1?'white':'#212529' ,cursor:'pointer',borderRadius: '4px 0px 0px 0px'}} >
              Manual Recall
          </div>
          <div className="report_child" onClick={change2}
            style={{background: report2?blueCol:'',color: report2?'white':'#212529',cursor:'pointer'}} >
              Recall Search
          </div>
          <div className="report_child" onClick={change3}
            style={{background: report3?blueCol:'',color: report3?'white':'#212529',cursor:'pointer'}} >
              Recall History - Spec
          </div>
          <div className="report_child" onClick={change4}
            style={{background: report4?blueCol:'',color: report4?'white':'#212529',cursor:'pointer'}} >
              Recall History - CL
          </div>
        </div>
        { report1 ? (
          <>
            <div className="report_body1 padd_com" style={{height: 'auto'}} >
              <div className="mini_header">
                Manual Recall
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Practice
                  </div>
                  <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">The Practice</option>
                  </select>
                </div>
                <div>
                  <div className="input_label">
                    Full or CL Examination Due
                  </div>
                  <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">Select</option>
                    <option value="0">Sight Test</option>
                    <option value="0">Contact lens after care</option>
                  </select>
                  {/* <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  /> */}
                </div>
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Recall Date Start
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Recall Date End
                  </div>
                  <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  />
                </div>
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Patient Type
                  </div>
                  <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">All Patient</option>
                  </select>
                </div>
                <div>                 
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'end'}} >
                <div className="add_sig_btn" style={{margin:'0',fontSize:'11px'}} >
                  Add Signature
                </div>
              </div>
              <div style={{fontSize:'12px',fontFamily:'Manrope',color:'#9599AD'}} >
                Enter your search criteria below (Use % as wild card)
              </div>              
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Patient ID
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='1023'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Full Name
                  </div>
                  <input 
                    type="text"
                    className='form_input'
                    placeholder='Jack Smith'
                  />
                </div>
              </div>
              <div className="rb2_bottom">
                <div>
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
                    Post Code
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='09023'
                  />
                </div>
              </div>
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Gender
                  </div>
                  <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">Select</option>
                  </select>
                </div>
                <div>
                  <div className="input_label">
                    Occupation
                  </div>
                  <textarea name="" id="" className='nst_ta' placeholder='Type here' ></textarea>
                  {/* <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">Select</option>
                  </select> */}
                  {/* <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  /> */}
                </div>
              </div>
              <div className="rb2_bottom">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'17rem'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'7px'}} >
                    <input type="checkbox" name="" id="" />
                    <div className="input_label" style={{margin:'0'}}>
                      Glaucoma
                    </div>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:'7px'}} >
                    <input type="checkbox" name="" id="" />
                    <div className="input_label" style={{margin:'0'}}>
                      Diabetic
                    </div>
                  </div>
                  
                </div>
                <div>
                </div>
              </div>
              <div className="add_sig_btn task2_submit_btn" style={{margin:'0',fontSize:'11px',right: '7.5rem',padding: '6px 27px'}} >
                Show Deleted
              </div>
              <button className='task2_submit_btn' >Find</button>

            </div>
          </>
        ):(<></>)
        }
        { report2? (
          <>
            <div className="report_body1 padd_com" style={{height: 'auto'}} >
              <div className="mini_header">
                Manual Recall
              </div>
              <div style={{fontSize:'12px',fontFamily:'Manrope',color:'#9599AD',marginBottom:'2rem'}} >
                Enter your search criteria below (Use * as wild card)
              </div> 
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Patient Type
                  </div>
                  <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">All Patient</option>
                  </select>
                </div>
                <div>
                  
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
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Patient ID
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='1023'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Patient ID in Range
                  </div>
                  <div className='patient_r_box' >
                    <div style={{display:'flex',alignItems:'center',gap:'5px'}} >
                      <div className='input_label' style={{margin:'0'}} >From</div>
                      <input type="text" name="" id="" placeholder='12' className='form_input' style={{width:'4rem',margin:'0'}} />
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:'5px'}} >
                      <div className='input_label' style={{margin:'0'}} >To</div>
                      <input type="text" name="" id="" placeholder='40' className='form_input' style={{width:'4rem',margin:'0'}} />
                    </div>
                  </div>                  
                </div>
              </div>              
              <div className="rb2_bottom">
                <div>
                  <div className="input_label">
                    Post Code
                  </div>
                  <input 
                    type="text"                
                    className='form_input'
                    placeholder='102345'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Gender
                  </div>
                  <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                    <option value="0">Select</option>
                  </select>
                  {/* <input 
                    type="date"                
                    className='form_input'
                    placeholder='12/1/2023'
                  /> */}
                </div>
              </div>
              <div className="input_label" style={{fontWeight:'600',marginTop:'2rem',marginBottom:'1rem'}} >
                Search for Pxs with
              </div>
              <div className='rc_con' >
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    None
                  </div>
                </div>
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    Date of Birth
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    Missed Appointments
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    Cancelled Appointments
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    CL Examination
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    Examination
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    A Collection Due
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    Dispense
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    An Email Address
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    A Mobile Number
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    A Payment Due
                  </div>
                </div>                  
                <div className='rc_elem'>
                  <input type="radio" name="" id="" />
                  <div className="input_label" style={{margin:'0'}}>
                    No Activity Since Start Date
                  </div>
                </div>                                                
              </div>
              <div className="add_sig_btn task2_submit_btn" style={{margin:'0',fontSize:'11px',right: '7.5rem',padding: '6px 27px'}} >
                Show Deleted
              </div>
              <button className='task2_submit_btn' >Find</button>

            </div>
          </>
        ):(<></>)
        }
        { report3? (
          <>
          <div className="dispensing_body1">
              <div className="mini_header">
                Recall History - Spectacle Recall
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
                  <div style={{fontSize:'12px',fontFamily:'Manrope',color:'#9599AD',marginBottom:'7rem'}} >
                    Leave Blank for Recall sent in past 60 days
                  </div> 
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
          <div className="appoint_header2" style={{marginTop:'3rem',gridTemplateColumns: '18% 20% 24% 9% 9% 20%'}} >
              <div>Patient name</div>
              <div>First Recall Date</div>
              <div>First Recall Time</div>
              <div>Ref</div>
              <div>Sent</div>
              <div>Action</div>
          </div>
          <div className="report_body2" style={{paddingBottom: '5rem'}} >
              <div className="appoint_elem" style={{gridTemplateColumns: '18% 20% 24% 9% 9% 20%'}}>                             
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">01:40</div>
                <div className="body2_elem_child">05875</div>
                <div className="body2_elem_child">3</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="29" height="18" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.42676 14.5C2.56259 8.31333 7.98438 3.625 14.4997 3.625C21.015 3.625 26.4356 8.31333 27.5727 14.5C26.4368 20.6867 21.015 25.375 14.4997 25.375C7.98438 25.375 2.5638 20.6867 1.42676 14.5H1.42676ZM14.4991 20.5424C17.8358 20.5424 20.5407 17.8374 20.5408 14.5007C20.5408 11.164 17.8358 8.45904 14.4991 8.45903C11.1624 8.45902 8.45745 11.1639 8.45743 14.5007C8.45742 17.8374 11.1623 20.5423 14.4991 20.5424H14.4991ZM14.5005 18.125C13.2054 18.125 12.0087 17.4341 11.3611 16.3125C10.7136 15.1909 10.7136 13.8091 11.3611 12.6875C12.0087 11.5659 13.2054 10.875 14.5005 10.875C15.7956 10.875 16.9923 11.5659 17.6398 12.6875C18.2874 13.8091 18.2874 15.1909 17.6398 16.3125C16.9923 17.4341 15.7956 18.125 14.5005 18.125Z" fill="#405189"/>
                  </svg>
                  <svg width="23" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3625 6.57199L16.4277 10.6382L6.94025 20.1247H2.875V16.0585L12.3625 6.57104V6.57199ZM13.7178 5.217L15.7504 3.18342C16.1247 2.8093 16.7313 2.8093 17.1055 3.18342L19.8166 5.89454C20.1908 6.26877 20.1908 6.8754 19.8166 7.24963L17.7831 9.28225L13.7178 5.217Z" fill="#405189"/>
                  </svg>
                  <svg width="28" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3125 6.125H5.79688C4.95564 6.125 4.14886 6.45918 3.55402 7.05402C2.95918 7.64886 2.625 8.45564 2.625 9.29688V17.9375C2.625 18.7497 2.94766 19.5287 3.52199 20.103C4.09632 20.6773 4.87527 21 5.6875 21H6.125V23.17C6.125 23.7548 6.35731 24.3157 6.77083 24.7292C7.18435 25.1427 7.7452 25.375 8.33 25.375H19.67C20.2548 25.375 20.8157 25.1427 21.2292 24.7292C21.6427 24.3157 21.875 23.7548 21.875 23.17V21H22.3125C23.1247 21 23.9037 20.6773 24.478 20.103C25.0523 19.5287 25.375 18.7497 25.375 17.9375V9.1875C25.375 8.37527 25.0523 7.59632 24.478 7.02199C23.9037 6.44766 23.1247 6.125 22.3125 6.125ZM20.125 23.17C20.1246 23.2905 20.0765 23.406 19.9913 23.4913C19.906 23.5765 19.7905 23.6246 19.67 23.625H8.33C8.20946 23.6246 8.09398 23.5765 8.00874 23.4913C7.92351 23.406 7.87543 23.2905 7.875 23.17V14.455C7.87543 14.3345 7.92351 14.219 8.00874 14.1337C8.09398 14.0485 8.20946 14.0004 8.33 14H19.67C19.7905 14.0004 19.906 14.0485 19.9913 14.1337C20.0765 14.219 20.1246 14.3345 20.125 14.455V23.17ZM21.5469 11.3706C21.2792 11.3921 21.0113 11.331 20.7795 11.1955C20.5476 11.06 20.3629 10.8566 20.2502 10.6128C20.1376 10.369 20.1025 10.0965 20.1496 9.83215C20.1967 9.56775 20.3237 9.32417 20.5136 9.13427C20.7035 8.94437 20.9471 8.81729 21.2115 8.77019C21.4759 8.72309 21.7484 8.75823 21.9922 8.87086C22.236 8.9835 22.4394 9.16822 22.5749 9.40008C22.7104 9.63195 22.7715 9.8998 22.75 10.1675C22.725 10.4783 22.5902 10.77 22.3698 10.9904C22.1494 11.2109 21.8576 11.3456 21.5469 11.3706Z" fill="#1AA053"/>
                    <path d="M18.812 2.625H9.18703C8.45094 2.6261 7.73979 2.89185 7.18338 3.37377C6.62698 3.85568 6.26242 4.52161 6.15625 5.25H21.8428C21.7366 4.52161 21.3721 3.85568 20.8157 3.37377C20.2593 2.89185 19.5481 2.6261 18.812 2.625Z" fill="#1AA053"/>
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
                Recall History - Contact Lens Recall
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
                  <div style={{fontSize:'12px',fontFamily:'Manrope',color:'#9599AD',marginBottom:'7rem'}} >
                    Leave Blank for Recall sent in past 60 days
                  </div> 
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
          <div className="appoint_header2" style={{marginTop:'3rem',gridTemplateColumns: '18% 20% 24% 9% 9% 20%'}} >
              <div>Patient name</div>
              <div>First Recall Date</div>
              <div>First Recall Time</div>
              <div>Ref</div>
              <div>Sent</div>
              <div>Action</div>
          </div>
          <div className="report_body2" style={{paddingBottom: '5rem'}} >
              <div className="appoint_elem" style={{gridTemplateColumns: '18% 20% 24% 9% 9% 20%'}}>                             
                <div className="body2_elem_child">John Smith</div>
                <div className="body2_elem_child">12/1/2023</div>
                <div className="body2_elem_child">01:40</div>
                <div className="body2_elem_child">05875</div>
                <div className="body2_elem_child">3</div>
                <div className="body2_elem_child b2ec_last">
                  <svg width="29" height="18" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.42676 14.5C2.56259 8.31333 7.98438 3.625 14.4997 3.625C21.015 3.625 26.4356 8.31333 27.5727 14.5C26.4368 20.6867 21.015 25.375 14.4997 25.375C7.98438 25.375 2.5638 20.6867 1.42676 14.5H1.42676ZM14.4991 20.5424C17.8358 20.5424 20.5407 17.8374 20.5408 14.5007C20.5408 11.164 17.8358 8.45904 14.4991 8.45903C11.1624 8.45902 8.45745 11.1639 8.45743 14.5007C8.45742 17.8374 11.1623 20.5423 14.4991 20.5424H14.4991ZM14.5005 18.125C13.2054 18.125 12.0087 17.4341 11.3611 16.3125C10.7136 15.1909 10.7136 13.8091 11.3611 12.6875C12.0087 11.5659 13.2054 10.875 14.5005 10.875C15.7956 10.875 16.9923 11.5659 17.6398 12.6875C18.2874 13.8091 18.2874 15.1909 17.6398 16.3125C16.9923 17.4341 15.7956 18.125 14.5005 18.125Z" fill="#405189"/>
                  </svg>
                  <svg width="23" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3625 6.57199L16.4277 10.6382L6.94025 20.1247H2.875V16.0585L12.3625 6.57104V6.57199ZM13.7178 5.217L15.7504 3.18342C16.1247 2.8093 16.7313 2.8093 17.1055 3.18342L19.8166 5.89454C20.1908 6.26877 20.1908 6.8754 19.8166 7.24963L17.7831 9.28225L13.7178 5.217Z" fill="#405189"/>
                  </svg>
                  <svg width="28" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3125 6.125H5.79688C4.95564 6.125 4.14886 6.45918 3.55402 7.05402C2.95918 7.64886 2.625 8.45564 2.625 9.29688V17.9375C2.625 18.7497 2.94766 19.5287 3.52199 20.103C4.09632 20.6773 4.87527 21 5.6875 21H6.125V23.17C6.125 23.7548 6.35731 24.3157 6.77083 24.7292C7.18435 25.1427 7.7452 25.375 8.33 25.375H19.67C20.2548 25.375 20.8157 25.1427 21.2292 24.7292C21.6427 24.3157 21.875 23.7548 21.875 23.17V21H22.3125C23.1247 21 23.9037 20.6773 24.478 20.103C25.0523 19.5287 25.375 18.7497 25.375 17.9375V9.1875C25.375 8.37527 25.0523 7.59632 24.478 7.02199C23.9037 6.44766 23.1247 6.125 22.3125 6.125ZM20.125 23.17C20.1246 23.2905 20.0765 23.406 19.9913 23.4913C19.906 23.5765 19.7905 23.6246 19.67 23.625H8.33C8.20946 23.6246 8.09398 23.5765 8.00874 23.4913C7.92351 23.406 7.87543 23.2905 7.875 23.17V14.455C7.87543 14.3345 7.92351 14.219 8.00874 14.1337C8.09398 14.0485 8.20946 14.0004 8.33 14H19.67C19.7905 14.0004 19.906 14.0485 19.9913 14.1337C20.0765 14.219 20.1246 14.3345 20.125 14.455V23.17ZM21.5469 11.3706C21.2792 11.3921 21.0113 11.331 20.7795 11.1955C20.5476 11.06 20.3629 10.8566 20.2502 10.6128C20.1376 10.369 20.1025 10.0965 20.1496 9.83215C20.1967 9.56775 20.3237 9.32417 20.5136 9.13427C20.7035 8.94437 20.9471 8.81729 21.2115 8.77019C21.4759 8.72309 21.7484 8.75823 21.9922 8.87086C22.236 8.9835 22.4394 9.16822 22.5749 9.40008C22.7104 9.63195 22.7715 9.8998 22.75 10.1675C22.725 10.4783 22.5902 10.77 22.3698 10.9904C22.1494 11.2109 21.8576 11.3456 21.5469 11.3706Z" fill="#1AA053"/>
                    <path d="M18.812 2.625H9.18703C8.45094 2.6261 7.73979 2.89185 7.18338 3.37377C6.62698 3.85568 6.26242 4.52161 6.15625 5.25H21.8428C21.7366 4.52161 21.3721 3.85568 20.8157 3.37377C20.2593 2.89185 19.5481 2.6261 18.812 2.625Z" fill="#1AA053"/>
                  </svg>
                </div>             
              </div>
          </div>
          </>
        ):(<></>)
        }
    </>
  )
}

export default Communication
