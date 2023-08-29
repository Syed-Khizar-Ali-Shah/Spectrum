import React,{useState} from 'react'
import './NewSightTest.css'

function NewSightTest() {
    // window.scrollTo(0,0);

    const [A1,setA1] = useState(0);
    const [A2,setA2] = useState(0);
    const [A3,setA3] = useState(0);
    const [Avg1,setAvg1] = useState(0);
    
    const [B1,setB1] = useState(0);
    const [B2,setB2] = useState(0);
    const [B3,setB3] = useState(0);
    const [Avg2,setAvg2] = useState(0);

    const [plNote,setplNote] = useState(false);
    const [showComplex,setshowComplex] = useState(true);

    const [report1,setreport1] = useState(true);
    const [report2,setreport2] = useState(false);
    const [report3,setreport3] = useState(false);
    const [report4,setreport4] = useState(false);
    const [report5,setreport5] = useState(false);
    const [report6,setreport6] = useState(false);

    const calculateAverage = () => {
      const sum = parseInt(A1) + parseInt(A2) + parseInt(A3);
      const average = sum / 3;
      return isNaN(average) ? '' : average.toFixed(2); // return empty string if average is NaN, otherwise round to 2 decimal places
    };
    const calculateAverage2 = () => {
      const sum = parseInt(B1) + parseInt(B2) + parseInt(B3);
      const average = sum / 3;
      return isNaN(average) ? '' : average.toFixed(2); // return empty string if average is NaN, otherwise round to 2 decimal places
    };

    function change1(){
      setreport1(true)
      setreport2(false)
      setreport3(false)
      setreport4(false)
      setreport5(false)
      setreport6(false)
    }
    function change2(){
      setreport1(false)
      setreport2(true)
      setreport3(false)
      setreport4(false)
      setreport5(false)
      setreport6(false)
    }
    function change3(){
      setreport1(false)
      setreport2(false)
      setreport3(true)
      setreport4(false)
      setreport5(false)
      setreport6(false)
    }
    function change4(){
      setreport1(false)
      setreport2(false)
      setreport3(false)
      setreport4(true)
      setreport5(false)
      setreport6(false)
    }
    function change5(){
      setreport1(false)
      setreport2(false)
      setreport3(false)
      setreport4(false)
      setreport5(true)
      setreport6(false)
    }
    function change6(){
      setreport1(false)
      setreport2(false)
      setreport3(false)
      setreport4(false)
      setreport5(false)
      setreport6(true)
    }
    const [blueCol,setblueCol] = useState('#4C004A');
  return (
    <>
        <div className='page_title' >New Sight Test</div>
        <div className="report_header" style={{marginTop:'1rem'}} >
          <div className="report_child" onClick={change1} 
            style={{background: report1?blueCol:'',color: report1?'white':'#212529' ,cursor:'pointer',borderRadius: '4px 0px 0px 0px'}} >
              Patient Information
          </div>
          <div className="report_child" onClick={change2}
            style={{background: report2?blueCol:'',color: report2?'white':'#212529',cursor:'pointer'}} >
              Previous RX
          </div>
          <div className="report_child" onClick={change3}
            style={{background: report3?blueCol:'',color: report3?'white':'#212529',cursor:'pointer'}} >
              History & Symptoms
          </div>
          <div className="report_child" onClick={change4}
            style={{background: report4?blueCol:'',color: report4?'white':'#212529',cursor:'pointer'}} >
              Ocular Examination
          </div>
          <div className="report_child" onClick={change5}
            style={{background: report5?blueCol:'',color: report5?'white':'#212529',cursor:'pointer'}} >
              Additional Examinations
          </div>
          <div className="report_child" onClick={change6}
            style={{background: report6?blueCol:'',color: report6?'white':'#212529',cursor:'pointer'}} >
              Refraction
          </div>
        </div>
        { report1 &&
            <div className="nst_body padd_com" style={{height: 'auto'}}>
                <div className="rb2_bottom">
                  <div>
                    <div className="input_label">
                      Full Name
                    </div>
                    <input 
                      type="text"                
                      className='form_input'
                      placeholder='1023'
                    />
                  </div>
                  <div>
                    <div className="input_label">
                      Patient ID
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
                      Title
                    </div>
                    <input 
                      type="text"                
                      className='form_input'
                      placeholder='Doctor'
                    />
                  </div>
                  <div>
                    <div className="input_label">
                      DoB
                    </div>
                    <input 
                      type="date"                
                      className='form_input'
                      placeholder='12/1/2001'
                    />
                  </div>
                </div>
                <div className="rb2_bottom">
                  <div>
                    <div className="input_label">
                      Age
                    </div>
                    <input 
                      type="text"                
                      className='form_input'
                      placeholder='25'
                    />
                  </div>
                  <div>
                    <div className="input_label">
                      Patient Category
                    </div>
                    <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                      <option value="0">Private</option>
                      <option value="0">NHS</option>
                      <option value="0">Corporate</option>
                    </select>
                  </div>
                </div>
                <div className="rb2_bottom">
                  <div>
                    <div className="input_label">
                      Occupation
                    </div>
                    <input 
                      type="text"                
                      className='form_input'
                      placeholder='Lorem'
                    />
                  </div>
                  <div>
                    <div className="input_label">
                      Address
                    </div>
                    <input 
                      type="text"
                      className='form_input'
                      placeholder='Lorem'
                    />
                  </div>
                </div>
                <div className="rb2_bottom">
                  <div>
                    <div className="input_label">
                      Mobile
                    </div>
                    <input 
                      type="text"                
                      className='form_input'
                      placeholder='+01234567899'
                    />
                  </div>
                  <div>
                    <div className="input_label">
                      Email
                    </div>
                    <input 
                      type="Email"
                      className='form_input'
                      placeholder='abcdef@gmail.com'
                    />
                  </div>
                </div>
                <div className="rb2_bottom">
                  <div>
                    <div className="input_label">
                      Benefits
                    </div>
                    <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                      <option value="0">Universal Credits</option>
                      <option value="0">Tax Credits</option>
                      <option value="0">working and  child tax credits</option>
                      <option value="0">Jobseeker’s Allowance (JSA)</option>
                      <option value="0">Pension Credit</option>
                      <option value="0">Income Support</option>
                      <option value="0">HC2</option>
                      <option value="0">HC3</option>
                    </select>
                  </div>
                  <div>
                    <div className="input_label">
                      Driver
                    </div>
                    <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                      <option value="0">Yes</option>
                      <option value="0">No</option>
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
                      Diabetic
                    </div>
                    <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                      <option value="0">No</option>
                      <option value="0">Universal Credits</option>
                      <option value="0">Tax Credits</option>
                      <option value="0">working and  child tax credits</option>
                      <option value="0">Jobseeker’s Allowance (JSA)</option>
                      <option value="0">Pension Credit</option>
                      <option value="0">Income Support</option>
                      <option value="0">HC2</option>
                      <option value="0">HC3</option>
                    </select>
                  </div>
                  <div>
                    <div className="input_label">
                      Glaucoma
                    </div>
                    <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                      <option value="0">Yes</option>
                      <option value="0">No</option>
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
                      CL Wearer
                    </div>
                    <select className='form_input' placeholder='Select' style={{cursor:'pointer'}} >
                      <option value="0">No</option>
                      <option value="0">Universal Credits</option>
                      <option value="0">Tax Credits</option>
                      <option value="0">working and  child tax credits</option>
                      <option value="0">Jobseeker’s Allowance (JSA)</option>
                      <option value="0">Pension Credit</option>
                      <option value="0">Income Support</option>
                      <option value="0">HC2</option>
                      <option value="0">HC3</option>
                    </select>
                  </div>
                  <div>
                    <div className="input_label">
                      Date
                    </div>
                    <input 
                      type="date"                
                      className='form_input'
                      placeholder='12/1/2001'
                    />                
                  </div>
                </div>                
                <div className="rb2_bottom">
                  <div></div>
                  <div style={{position:'relative'}} >
                    <button className='save-btn' style={{position:'absolute',right:'0'}} >Save</button>              
                  </div>
                </div>                
            </div>
        }
        { report2 &&
            <div className="nst_body padd_com" style={{height: 'auto'}}>
                <div className="rb2_bottom2">
                <div>
                    <div className="input_label">Previous RX 1</div>
                    <div className='rx_txt2' >(Click here to pre-populated with the patients previous subjective RX)</div>
                    <div className='rl_con2' >
                        <div className="rl_item2">
                          <div className="rl_item_r1_2"></div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R:</div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L:</div>
                        </div>                                      
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div> 
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>                
                        </div>                                                   
                    </div>
                </div>                
                <div>
                    <div className="input_label">Previous RX 2 (incl from Autorefraction)</div>
                    <div className='rx_txt2' ></div>
                    <div className='rl_con2' >
                        <div className="rl_item2">
                          <div className="rl_item_r1_2"></div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R2:</div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L2:</div>
                        </div>                                      
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div> 
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>                
                        </div>                                                   
                    </div>
                </div>
                </div>
                <div className="input_label">Notes</div>
                <textarea name="" id="" className='nst_ta' style={{height:'5rem',width:'15rem'}} placeholder='Type here' ></textarea>
            </div>
        }
        { report3 &&
            <div className="nst_body padd_com" style={{height: 'auto'}}>
                <div className="rb2_bottom3" style={{marginBottom:'1rem'}} >
                    <div>
                        <div className="input_label">Reason for visit <span className='rx_txt2' >Default value set</span> </div>                    
                        <textarea name="" id="" className='nst_ta' placeholder='Routine, Distance' ></textarea>
                    </div>
                    <div>
                        <div className="input_label">POH <span className='rx_txt2' >Default value set</span> </div>                    
                        <textarea name="" id="" className='nst_ta' placeholder='None' ></textarea>                    
                    </div>
                </div>
                <div className="rb2_bottom3" style={{marginBottom:'1rem'}} >
                    <div>
                        <div className="input_label">GH <span className='rx_txt2' >Default value set</span> </div>                    
                        <textarea name="" id="" className='nst_ta' placeholder='Good' ></textarea>
                    </div>
                    <div>
                        <div className="input_label">Medication <span className='rx_txt2' ></span> </div>                    
                        <textarea name="" id="" className='nst_ta' placeholder='None' ></textarea>                    
                    </div>
                </div>
                <div className="rb2_bottom3" style={{marginBottom:'1rem'}} >
                    <div>
                        <div className="input_label">Family General Health (FGH) <span className='rx_txt2' >Default value set</span> </div>                    
                        <textarea name="" id="" className='nst_ta' placeholder='No significant headaches' ></textarea>
                    </div>
                    <div>
                        <div className="input_label">Family Ocular Health (FOH) <span className='rx_txt2' >Default value set</span> </div>                    
                        <textarea name="" id="" className='nst_ta' placeholder='No significant Hx, No glaucoma' ></textarea>                    
                    </div>
                </div>
                <div className="ppe_btn_con">
                    <div className="ppe_btn_elem">
                        <svg width="33" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.62305 16.5C2.91555 9.46 9.08517 4.125 16.4992 4.125C23.9132 4.125 30.0814 9.46 31.3753 16.5C30.0828 23.54 23.9132 28.875 16.4992 28.875C9.08517 28.875 2.91692 23.54 1.62305 16.5H1.62305ZM16.4983 23.3759C20.2952 23.3759 23.3733 20.2978 23.3733 16.5009C23.3733 12.7039 20.2953 9.62587 16.4983 9.62585C12.7014 9.62584 9.62331 12.7039 9.62329 16.5008C9.62327 20.2978 12.7013 23.3758 16.4982 23.3759H16.4983ZM16.4993 20.625C15.0255 20.625 13.6638 19.8388 12.9269 18.5625C12.1901 17.2862 12.1901 15.7138 12.9269 14.4375C13.6638 13.1612 15.0255 12.375 16.4993 12.375C17.973 12.375 19.3348 13.1612 20.0716 14.4375C20.8085 15.7138 20.8085 17.2862 20.0716 18.5625C19.3348 19.8388 17.973 20.625 16.4993 20.625Z" fill="#4C004A"/>
                        </svg>
                        <div>Patients Previous Examination</div>
                    </div>
                </div>
                <div className="nst_con2" style={{borderTop:'1px solid #D0D0D0',borderBottom:'1px solid #D0D0D0'}} >
                    <div className="nst_con2_elem" style={{borderRight:'1px solid #D0D0D0',paddingBottom:'1rem'}} >
                        <div className="nst_con2_e1_txt1">Medication</div>
                        <div className="c2_dual_con">
                            <div className="c2_dual_elem">
                                <input type="checkbox" name="" id="" />
                                <div className="nst_con2_e1_txt2">Thyroxine</div>
                            </div>
                            <div className="c2_dual_elem">
                                <input type="checkbox" name="" id="" />
                                <div className="nst_con2_e1_txt2">TIMOLOL</div>
                            </div>                        
                        </div>
                        <div className="c2_dual_con">
                            <div className="c2_dual_elem">
                                <input type="checkbox" name="" id="" />
                                <div className="nst_con2_e1_txt2">Atenolol</div>
                            </div>
                            <div className="c2_dual_elem">
                                <input type="checkbox" name="" id="" />
                                <div className="nst_con2_e1_txt2">TIMOPTOL</div>
                            </div>
                        </div>
                        <div className="c2_dual_con">
                            <div className="c2_dual_elem">
                                <input type="checkbox" name="" id="" />
                                <div className="nst_con2_e1_txt2">Bendroflumethiazide</div>
                            </div>
                            <div className="c2_dual_elem">
                                <input type="checkbox" name="" id="" />
                                <div className="nst_con2_e1_txt2">XALATAN</div>
                            </div>
                        </div>
                        <div className="c2_dual_con">
                            <div className="c2_dual_elem">
                              <input type="checkbox" name="" id="" />
                              <div className="nst_con2_e1_txt2">Bisoprolol Fumarate</div>                                
                            </div>
                            <div className="c2_dual_elem">
                              <input type="checkbox" name="" id="" />
                              <div className="nst_con2_e1_txt2">Betoptic</div>                                
                            </div>
                        </div>
                        
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">FUROsemide</div>
                        </div>

                        <div className="c2_dual_elem" style={{marginTop:'2rem'}} >
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Gliclazide</div>
                        </div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Insulin</div>
                        </div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Metformin Hydrochiloride</div>
                        </div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Omeprazole</div>
                        </div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Ramipril</div>
                        </div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Statin</div>
                        </div>
                    </div>
                    <div className="nst_con2_elem" style={{paddingLeft:'1rem'}} >
                        <div className="nst_con2_e1_txt1">Patient Information</div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Patient has Glaucoma</div>
                        </div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Patient has family history of Glaucoma</div>
                        </div>
                        <div className="c2_dual_elem">
                            <input type="checkbox" name="" id="" />
                            <div className="nst_con2_e1_txt2">Patient is Diabetic</div>
                        </div>
                        <div className="ppe_btn_con">
                          { plNote &&
                            <div>
                              <div className="input_label">Note <span className='rx_txt2' ></span> </div>                    
                              <textarea name="" id="" className='nst_ta' placeholder='Type here' ></textarea>  
                            </div>
                          }
                          <div className="ppe_btn_elem" onClick={()=>{setplNote(!plNote)}}>
                              <svg width="22" height="17" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18.6002 0.314537C18.1815 -0.104194 17.5144 -0.104194 17.0957 0.314537L9.01246 8.39773C8.88472 8.51841 8.79956 8.67451 8.74278 8.84483L7.42279 13.2519C7.30922 13.6281 7.41568 14.0326 7.69247 14.3094C7.89115 14.5152 8.16793 14.6216 8.44472 14.6216C8.54404 14.6216 8.65052 14.6074 8.74988 14.579L13.1569 13.259C13.3273 13.2022 13.4834 13.1171 13.604 12.9894L21.6873 4.90613C21.886 4.70744 21.9995 4.43776 21.9995 4.15388C21.9995 3.87003 21.886 3.60035 21.6873 3.40162L18.6002 0.314537Z" fill="#4C004A"/>
                                  <path d="M20.9355 9.93793C20.3474 9.93793 19.871 10.4147 19.871 11.0024V18.0992C19.871 19.0778 19.075 19.8734 18.0968 19.8734H3.90323C2.92499 19.8734 2.12903 19.0778 2.12903 18.0992V3.90567C2.12903 2.92709 2.92499 2.13147 3.90323 2.13147H11C11.588 2.13147 12.0645 1.65466 12.0645 1.06696C12.0645 0.479259 11.588 0.00244141 11 0.00244141H3.90323C1.75098 0.00244141 0 1.75376 0 3.90567V18.0992C0 20.2511 1.75098 22.0024 3.90323 22.0024H18.0968C20.249 22.0024 22 20.2511 22 18.0992V11.0024C22 10.4147 21.5235 9.93793 20.9355 9.93793Z" fill="#4C004A"/>
                              </svg>
                              <div >Patients lifestyle notes</div>
                          </div>                          
                        </div>
                    </div>
                </div>
                <div className='rx_txt2' style={{marginTop:'1rem'}} >Click to view MIMS website</div>                    
                <div className="input_label">Other Notes</div>
                <textarea name="" id="" className='nst_ta' style={{width:'100%'}} placeholder='Type here' ></textarea>
                <div className="ppe_btn_con">
                    <div className="saveCon_btn_elem">
                        <div>Save & Continue</div>
                        <svg width="25" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.5" cy="12.5" r="12.5" fill="#4C004A" fill-opacity="0.2"/>
                            <path d="M7.08366 12.5002C7.08366 12.1262 7.3868 11.8231 7.76074 11.8231H15.3102L12.0094 8.52238C11.7397 8.2526 11.7435 7.81403 12.018 7.54906C12.2858 7.29062 12.7112 7.29437 12.9743 7.5575L17.8634 12.4465C17.893 12.4762 17.893 12.5242 17.8634 12.5538L12.9753 17.4418C12.713 17.7042 12.2877 17.7041 12.0253 17.4418C11.7638 17.1803 11.7629 16.7566 12.0232 16.494L15.3102 13.1772H7.76074C7.3868 13.1772 7.08366 12.8741 7.08366 12.5002Z" fill="#4C004A"/>
                        </svg>
                    </div>
                </div>
            </div>
        }
        { report4 &&
            <>
            <div className="nst_body padd_com" style={{height: 'auto'}}>
                <div className="p4_oe_con">
                    <div className="p4_oe_con_elem border-right1">
                        <div className="p4_elem_text1">
                            Right Eye
                        </div>
                        <div className="input_label" style={{margin:'1rem 0',height:'1rem'}} ></div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Lids</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">MGD GD1</option>
                                    <option value="">MGD GD2</option>
                                    <option value="">MGD GD3</option>
                                    <option value="">MGD GD4</option>
                                    <option value="">Chalazion</option>
                                    <option value="">Stye</option>
                                    <option value="">Allergic Papillae</option>
                                    <option value="">Ptosis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Lashes</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Blepharitis GD1</option>
                                    <option value="">Blepharitis GD2</option>
                                    <option value="">Blepharitis GD3</option>
                                    <option value="">Blepharitis GD4</option>
                                    <option value="">Trichiasis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Conjunctiva</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Hyperaemia GD1</option>
                                    <option value="">Hyperaemia GD2</option>
                                    <option value="">Hyperaemia GD3</option>
                                    <option value="">Hyperaemia GD4</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Sclera</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Diffuse Scleritis</option>
                                    <option value="">Nodular Scleritis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Cornea</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">PDS</option>
                                    <option value="">Scarring</option>
                                    <option value="">Epithelial erosion / Staining</option>
                                    <option value="">Dystrophy</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Ant. Cha</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Aqueous Flare</option>
                                    <option value="">VH GD1</option>
                                    <option value="">VH GD2</option>
                                    <option value="">VH GD3</option>
                                    <option value="">VH GD4</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Iris</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Nevus</option>
                                    <option value="">Transillumination</option>
                                    <option value="">Distortion</option>
                                    <option value="">Surgical damage</option>
                                    <option value="">Melanoma</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Pupils</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">PERRLA/ NO RAPD</option>
                                    <option value="">RAPD</option>
                                    <option value="">Holmes- Aidie Pupil</option>
                                    <option value="">Horners Syndrome</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Lens</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Nuclear Change</option>
                                    <option value="">Nuclear Cataract</option>
                                    <option value="">Cortical Cataract</option>
                                    <option value="">Capsular Cataract</option>
                                    <option value="">Mixed Cataract</option>
                                    <option value="">Congenital Cataract</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Pos. Chaa</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">PVD</option>
                                    <option value="">Asteroid Hyalosis</option>
                                    <option value="">Vitreous Haemorrhage</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">CD Ratio</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">0.05</option>
                                    <option value="">0.1</option>
                                    <option value="">0.15</option>
                                    <option value="">0.2</option>
                                    <option value="">0.25</option>
                                    <option value="">0.3</option>
                                    <option value="">0.35</option>
                                    <option value="">0.4</option>
                                    <option value="">0.45</option>
                                    <option value="">0.5</option>
                                    <option value="">0.45</option>
                                    <option value="">0.5</option>
                                    <option value="">0.55</option>
                                    <option value="">0.6</option>
                                    <option value="">0.65</option>
                                    <option value="">0.7</option>
                                    <option value="">0.75</option>
                                    <option value="">0.8</option>
                                    <option value="">0.85</option>
                                    <option value="">0.9</option>
                                    <option value="">0.95</option>
                                    <option value="">1.0</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">NRR</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Pink, defined, Flat , <br /> ISNT applies</option>
                                    <option value="">Glaucomatous</option>
                                    <option value="">NRR Thinning</option>
                                    <option value="">Raised / Inflammation</option>
                                    <option value="">Blurred Margins</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Macular</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Clear Reflex</option>
                                    <option value="">Drusen</option>
                                    <option value="">Dry AMD</option>
                                    <option value="">Wet AMD</option>
                                    <option value="">Macula Hole</option>
                                    <option value="">Diabetic Maculopathy</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">AV</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">2/3, Clear/ Healthy</option>
                                    <option value="">1/3</option>
                                    <option value="">4/5</option>
                                    <option value="">Tortuous</option>
                                    <option value="">Nipping</option>
                                    <option value="">Atherosclerosis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Periphery</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy Flat</option>
                                    <option value="">Nevus</option>
                                    <option value="">Melanoma</option>
                                    <option value="">Retinal Detachment</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className="flex">
                            <div className="saveCon_btn_elem">
                                <div>All clear and Healthy</div>                            
                            </div>
                        </div>
                        <div className="p4_d_txt2" style={{marginTop:'1rem'}} >Eye</div>
                        <div className="img_note_con">
                            <div className="img_note_elem" style={{borderRight:'1px solid #D0D0D0'}} >
                                <div className="flex" style={{flexDirection:'column',gap:'10px'}} >
                                    {/* <svg width="150" height="50" viewBox="0 0 223 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M111.343 92C141.634 92 169.103 87.0051 189.037 78.8925C199.001 74.8372 207.131 69.9832 212.786 64.542C218.444 59.0982 221.686 53.0012 221.686 46.5C221.686 39.9988 218.444 33.9018 212.786 28.458C207.131 23.0168 199.001 18.1628 189.037 14.1075C169.103 5.99489 141.634 1 111.343 1C81.0522 1 53.5827 5.99489 33.6488 14.1075C23.6844 18.1628 15.5543 23.0168 9.89935 28.458C4.24165 33.9018 1 39.9988 1 46.5C1 53.0012 4.24165 59.0982 9.89935 64.542C15.5543 69.9832 23.6844 74.8372 33.6488 78.8925C53.5827 87.0051 81.0522 92 111.343 92Z" fill="white" stroke="black" stroke-width="2"/>
                                        <circle cx="111.979" cy="47.1358" r="20.9786" fill="#212529"/>
                                        <circle cx="207.971" cy="46.4999" r="12.7143" fill="#212529"/>
                                        <circle cx="111.343" cy="46.5" r="45.5" stroke="black" stroke-width="2"/>
                                    </svg> */}
                                    <svg width="150" height="50" viewBox="0 0 223 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M111.343 92C141.634 92 169.103 87.0051 189.037 78.8925C199.001 74.8372 207.131 69.9832 212.786 64.542C218.444 59.0982 221.686 53.0012 221.686 46.5C221.686 39.9988 218.444 33.9018 212.786 28.458C207.131 23.0168 199.001 18.1628 189.037 14.1075C169.103 5.99489 141.634 1 111.343 1C81.0522 1 53.5827 5.99489 33.6488 14.1075C23.6844 18.1628 15.5543 23.0168 9.89935 28.458C4.24165 33.9018 1 39.9988 1 46.5C1 53.0012 4.24165 59.0982 9.89935 64.542C15.5543 69.9832 23.6844 74.8372 33.6488 78.8925C53.5827 87.0051 81.0522 92 111.343 92Z" fill="white" stroke="black" stroke-width="2"/>
                                      <circle cx="111.343" cy="46.5" r="45.5" stroke="black" stroke-width="2"/>
                                    </svg>
                                    <div className="p4_d_txt3">Draw on Eye</div>
                                </div>
                            </div>
                            <div className="img_note_elem">
                                <input type="text" placeholder='Note' className='note_12' />
                            </div>
                        </div>
                        <div className="p4_d_txt2" style={{marginTop:'1rem'}} >Lens</div>
                        <div className="img_note_con">
                            <div className="img_note_elem" style={{borderRight:'1px solid #D0D0D0'}} >
                                <div className="flex" style={{flexDirection:'column',gap:'0px'}} >
                                    <svg width="127" height="70" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="63.5" cy="63.5" r="62.5" fill="white" stroke="black" stroke-width="2"/>
                                    </svg>
                                    <div className="p4_d_txt3">Draw on Eye</div>
                                </div>
                            </div>
                            <div className="img_note_elem">
                                <input type="text" placeholder='Note' className='note_12' />
                            </div>
                        </div>
                        <div className="p4_d_txt2" style={{marginTop:'1rem'}} >Fundus</div>
                        <div className="img_note_con">
                            <div className="img_note_elem" style={{borderRight:'1px solid #D0D0D0'}} >
                                <div className="flex" style={{flexDirection:'column'}} >
                                    <svg width="132" height="70" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="66" cy="66" r="65" fill="white" stroke="black" stroke-width="2"/>
                                        <circle cx="90" cy="66" r="17" stroke="black" stroke-width="2"/>
                                    </svg>
                                    <div className="p4_d_txt3">Draw on Eye</div>
                                </div>
                            </div>
                            <div className="img_note_elem">
                                <input type="text" placeholder='Note' className='note_12' />
                            </div>
                        </div>
                    </div>
                    <div className="p4_oe_con_elem pl1" >
                        <div className="p4_elem_text1">
                            Left Eye
                        </div>
                        <div className="input_label" style={{margin:'1rem 0',height:'1rem'}} >Reason for visit <span className='rx_txt2' >Default value set</span> </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Lids</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">MGD GD1</option>
                                    <option value="">MGD GD2</option>
                                    <option value="">MGD GD3</option>
                                    <option value="">MGD GD4</option>
                                    <option value="">Chalazion</option>
                                    <option value="">Stye</option>
                                    <option value="">Allergic Papillae</option>
                                    <option value="">Ptosis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Lashes</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Blepharitis GD1</option>
                                    <option value="">Blepharitis GD2</option>
                                    <option value="">Blepharitis GD3</option>
                                    <option value="">Blepharitis GD4</option>
                                    <option value="">Trichiasis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Conjunctiva</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Hyperaemia GD1</option>
                                    <option value="">Hyperaemia GD2</option>
                                    <option value="">Hyperaemia GD3</option>
                                    <option value="">Hyperaemia GD4</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Sclera</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Diffuse Scleritis</option>
                                    <option value="">Nodular Scleritis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Cornea</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">PDS</option>
                                    <option value="">Scarring</option>
                                    <option value="">Epithelial erosion / Staining</option>
                                    <option value="">Dystrophy</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Ant. Cha</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Aqueous Flare</option>
                                    <option value="">VH GD1</option>
                                    <option value="">VH GD2</option>
                                    <option value="">VH GD3</option>
                                    <option value="">VH GD4</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Iris</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Nevus</option>
                                    <option value="">Transillumination</option>
                                    <option value="">Distortion</option>
                                    <option value="">Surgical damage</option>
                                    <option value="">Melanoma</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Pupils</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">PERRLA/ NO RAPD</option>
                                    <option value="">RAPD</option>
                                    <option value="">Holmes- Aidie Pupil</option>
                                    <option value="">Horners Syndrome</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Lens</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Nuclear Change</option>
                                    <option value="">Nuclear Cataract</option>
                                    <option value="">Cortical Cataract</option>
                                    <option value="">Capsular Cataract</option>
                                    <option value="">Mixed Cataract</option>
                                    <option value="">Congenital Cataract</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">Pos. Chaa</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">PVD</option>
                                    <option value="">Asteroid Hyalosis</option>
                                    <option value="">Vitreous Haemorrhage</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">CD Ratio</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">0.05</option>
                                    <option value="">0.1</option>
                                    <option value="">0.15</option>
                                    <option value="">0.2</option>
                                    <option value="">0.25</option>
                                    <option value="">0.3</option>
                                    <option value="">0.35</option>
                                    <option value="">0.4</option>
                                    <option value="">0.45</option>
                                    <option value="">0.5</option>
                                    <option value="">0.45</option>
                                    <option value="">0.5</option>
                                    <option value="">0.55</option>
                                    <option value="">0.6</option>
                                    <option value="">0.65</option>
                                    <option value="">0.7</option>
                                    <option value="">0.75</option>
                                    <option value="">0.8</option>
                                    <option value="">0.85</option>
                                    <option value="">0.9</option>
                                    <option value="">0.95</option>
                                    <option value="">1.0</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">NRR</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Pink, defined, Flat , <br /> ISNT applies</option>
                                    <option value="">Glaucomatous</option>
                                    <option value="">NRR Thinning</option>
                                    <option value="">Raised / Inflammation</option>
                                    <option value="">Blurred Margins</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Macular</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy</option>
                                    <option value="">Clear Reflex</option>
                                    <option value="">Drusen</option>
                                    <option value="">Dry AMD</option>
                                    <option value="">Wet AMD</option>
                                    <option value="">Macula Hole</option>
                                    <option value="">Diabetic Maculopathy</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                <div className="p4_d_txt1">AV</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">2/3, Clear/ Healthy</option>
                                    <option value="">1/3</option>
                                    <option value="">4/5</option>
                                    <option value="">Tortuous</option>
                                    <option value="">Nipping</option>
                                    <option value="">Atherosclerosis</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                        </div>
                        <div className="p4_dual_con">
                            <div>
                                <div className="p4_d_txt1">Periphery</div>
                                <select name="" id="" className='p4_select' placeholder='Select'>
                                    <option value="">Select</option>
                                    <option value="">Clear/ Healthy Flat</option>
                                    <option value="">Nevus</option>
                                    <option value="">Melanoma</option>
                                    <option value="">Retinal Detachment</option>
                                    <option value="">See Notes</option>
                                </select>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className="flex">
                            <div className="saveCon_btn_elem">
                                <div>All clear and Healthy</div>                            
                            </div>
                        </div>
                        <div className="p4_d_txt2" style={{marginTop:'1rem'}} >Eye</div>
                        <div className="img_note_con">
                            <div className="img_note_elem" style={{borderRight:'1px solid #D0D0D0'}} >
                                <div className="flex" style={{flexDirection:'column',gap:'10px'}} >
                                    {/* <svg width="150" height="50" viewBox="0 0 223 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M111.343 92C81.052 92 53.5825 87.0051 33.6487 78.8925C23.6842 74.8372 15.5541 69.9832 9.89919 64.542C4.24147 59.0982 0.999832 53.0012 0.999832 46.5C0.999832 39.9988 4.24147 33.9018 9.89919 28.458C15.5541 23.0168 23.6842 18.1628 33.6487 14.1075C53.5825 5.99489 81.052 1 111.343 1C141.633 1 169.103 5.99489 189.037 14.1075C199.001 18.1628 207.131 23.0168 212.786 28.458C218.444 33.9018 221.686 39.9988 221.686 46.5C221.686 53.0012 218.444 59.0982 212.786 64.542C207.131 69.9832 199.001 74.8372 189.037 78.8925C169.103 87.0051 141.633 92 111.343 92Z" fill="white" stroke="black" stroke-width="2"/>
                                        <circle cx="20.9786" cy="20.9786" r="20.9786" transform="matrix(-1 0 0 1 131.686 26.1572)" fill="#212529"/>
                                        <circle cx="12.7143" cy="12.7143" r="12.7143" transform="matrix(-1 0 0 1 27.4287 33.7856)" fill="#212529"/>
                                        <circle cx="44.5" cy="44.5" r="45.5" transform="matrix(-1 0 0 1 155.843 2)" stroke="black" stroke-width="2"/>
                                    </svg> */}
                                    <svg width="150" height="50" viewBox="0 0 223 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M111.343 92C81.052 92 53.5825 87.0051 33.6487 78.8925C23.6842 74.8372 15.5541 69.9832 9.89919 64.542C4.24147 59.0982 0.999832 53.0012 0.999832 46.5C0.999832 39.9988 4.24147 33.9018 9.89919 28.458C15.5541 23.0168 23.6842 18.1628 33.6487 14.1075C53.5825 5.99489 81.052 1 111.343 1C141.633 1 169.103 5.99489 189.037 14.1075C199.001 18.1628 207.131 23.0168 212.786 28.458C218.444 33.9018 221.686 39.9988 221.686 46.5C221.686 53.0012 218.444 59.0982 212.786 64.542C207.131 69.9832 199.001 74.8372 189.037 78.8925C169.103 87.0051 141.633 92 111.343 92Z" fill="white" stroke="black" stroke-width="2"/>
                                      <circle cx="44.5" cy="44.5" r="45.5" transform="matrix(-1 0 0 1 155.843 2)" stroke="black" stroke-width="2"/>
                                    </svg>
                                    <div className="p4_d_txt3">Draw on Eye</div>
                                </div>
                            </div>
                            <div className="img_note_elem">
                                <input type="text" placeholder='Note' className='note_12' />
                            </div>
                        </div>
                        <div className="p4_d_txt2" style={{marginTop:'1rem'}} >Lens</div>
                        <div className="img_note_con">
                            <div className="img_note_elem" style={{borderRight:'1px solid #D0D0D0'}} >
                                <div className="flex" style={{flexDirection:'column',gap:'0px'}} >
                                    <svg width="127" height="70" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="63.5" cy="63.5" r="62.5" fill="white" stroke="black" stroke-width="2"/>
                                    </svg>
                                    <div className="p4_d_txt3">Draw on Eye</div>
                                </div>
                            </div>
                            <div className="img_note_elem">
                                <input type="text" placeholder='Note' className='note_12' />
                            </div>
                        </div>
                        <div className="p4_d_txt2" style={{marginTop:'1rem'}} >Fundus</div>
                        <div className="img_note_con">
                            <div className="img_note_elem" style={{borderRight:'1px solid #D0D0D0'}} >
                                <div className="flex" style={{flexDirection:'column'}} >
                                    <svg width="132" height="70" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="66" cy="66" r="65" fill="white" stroke="black" stroke-width="2"/>
                                        <circle cx="44" cy="69" r="17" stroke="black" stroke-width="2"/>
                                    </svg>

                                    <div className="p4_d_txt3">Draw on Eye</div>
                                </div>
                            </div>
                            <div className="img_note_elem">
                                <input type="text" placeholder='Note' className='note_12' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input_label" style={{marginTop:'1rem'}} >Ophthalmoscopy Notes:</div>
                <textarea name="" id="" className='nst_ta' style={{width:'100%'}} placeholder='Type here' ></textarea>
                <div className="ppe_btn_con">
                    <div className="saveCon_btn_elem">
                        <div>Save & Continue</div>
                        <svg width="25" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.5" cy="12.5" r="12.5" fill="#4C004A" fill-opacity="0.2"/>
                            <path d="M7.08366 12.5002C7.08366 12.1262 7.3868 11.8231 7.76074 11.8231H15.3102L12.0094 8.52238C11.7397 8.2526 11.7435 7.81403 12.018 7.54906C12.2858 7.29062 12.7112 7.29437 12.9743 7.5575L17.8634 12.4465C17.893 12.4762 17.893 12.5242 17.8634 12.5538L12.9753 17.4418C12.713 17.7042 12.2877 17.7041 12.0253 17.4418C11.7638 17.1803 11.7629 16.7566 12.0232 16.494L15.3102 13.1772H7.76074C7.3868 13.1772 7.08366 12.8741 7.08366 12.5002Z" fill="#4C004A"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="report_header" style={{marginTop:'1rem',paddingLeft:'1rem'}} >Ocular Health Examination methods</div>
            <div className="nst_body padd_com g_22" style={{height: 'auto'}}>
                <div className='b_d_con_end' >
                    <input type="checkbox" name="" id="" />
                    <div className="p4_d_txt2" style={{paddingBottom: '0px'}} >Slit Lamp</div>
                </div>
                <div className='b_d_con_end' >
                    <input type="checkbox" name="" id="" />
                    <div className="p4_d_txt2" style={{paddingBottom: '0px'}} >Direct  Ophthalmoscope</div>
                </div>
                <div className='b_d_con_end' >
                    <input type="checkbox" name="" id="" />
                    <div className="p4_d_txt2" style={{paddingBottom: '0px'}} >OCT</div>
                </div>
                <div className='b_d_con_end' >
                    <input type="checkbox" name="" id="" />
                    <div className="p4_d_txt2" style={{paddingBottom: '0px'}} >Volk</div>
                </div>
                <div className='b_d_con_end' >
                    <input type="checkbox" name="" id="" />
                    <div className="p4_d_txt2" style={{paddingBottom: '0px'}} >Fundus Imaging</div>
                </div>
            </div>
            </>
        }
        { report5 &&
            <>
            <div className="nst_body padd_com" style={{height: 'auto'}}>
                <div className="p5_mid_con">
                    <div className="p5_mid_elem border-right2">
                        <div className="p4_txt1">IOP</div>
                        <input type="text" name="" id="" className='p4_input1' placeholder='Time' style={{marginBottom:'1rem'}} />
                        <div className="p4_mini_dual" style={{marginBottom:'-0.2rem',width:'13rem',display:'grid',gridTemplateColumns:'7% 23% 23% 24% 20%'}} >
                            <div className="p4_txt1"></div>
                            <div className='flex p4_txt1' >1</div>
                            <div className='flex p4_txt1' >2</div>
                            <div className='flex p4_txt1' >3</div>
                            <div className='flex p4_txt1' >Avg</div>
                        </div>
                        <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}} >
                            <div className="p4_txt1">R:</div>
                            <input type="tel" name="" id="" value={A1} onChange={(e)=>{setA1(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                            <input type="tel" name="" id="" value={A2} onChange={(e)=>{setA2(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                            <input type="tel" name="" id="" value={A3} onChange={(e)=>{setA3(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                            <div className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} >{ calculateAverage() }</div>
                        </div>
                        <div className="p4_mini_dual" style={{marginBottom:'2rem'}}>
                            <div className="p4_txt1">L:</div>
                            <input type="tel" name="" id="" value={B1} onChange={(e)=>{setB1(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                            <input type="tel" name="" id="" value={B2} onChange={(e)=>{setB2(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                            <input type="tel" name="" id="" value={B3} onChange={(e)=>{setB3(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                            <div className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} >{ calculateAverage2() }</div>
                        </div>
                        <div className="p4_txt1">Distance CT with RX</div>
                        <div className="p4_dual2">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Type here' />
                            <select name="" id="" className='p4_input2' >
                                <option value="">Select</option>
                                <option value="">Orthophoria</option>
                                <option value="">Esophoria</option>
                                <option value="">Exophoria</option>
                                <option value="">Hyperphoria</option>
                                <option value="">Hypophoria</option>
                                <option value="">ALT Esotropia</option>
                                <option value="">ALT Exotropia</option>
                                <option value="">Esotropia</option>
                                <option value="">Exotropia</option>
                                <option value="">Hypertropia</option>
                                <option value="">Hypotropia</option>
                            </select>
                        </div>
                        <div className="p4_txt1">Distance CT without RX</div>
                        <div className="p4_dual2">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Type here' />
                            <select name="" id="" className='p4_input2' >
                              <option value="">Select</option>
                              <option value="">Orthophoria</option>
                              <option value="">Esophoria</option>
                              <option value="">Exophoria</option>
                              <option value="">Hyperphoria</option>
                              <option value="">Hypophoria</option>
                              <option value="">ALT Esotropia</option>
                              <option value="">ALT Exotropia</option>
                              <option value="">Esotropia</option>
                              <option value="">Exotropia</option>
                              <option value="">Hypertropia</option>
                              <option value="">Hypotropia</option>
                            </select>
                        </div>
                        <div className="p4_txt1">Near CT with RX</div>
                        <div className="p4_dual2">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Type here' />
                            <select name="" id="" className='p4_input2' >
                                <option value="">Select</option>
                                <option value="">Orthophoria</option>
                                <option value="">Esophoria</option>
                                <option value="">Exophoria</option>
                                <option value="">Hyperphoria</option>
                                <option value="">Hypophoria</option>
                                <option value="">ALT Esotropia</option>
                                <option value="">ALT Exotropia</option>
                                <option value="">Esotropia</option>
                                <option value="">Exotropia</option>
                                <option value="">Hypertropia</option>
                                <option value="">Hypotropia</option>
                            </select>
                        </div>
                        <div className="p4_txt1">Near CT without RX</div>
                        <div className="p4_dual2">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Type here' />
                            <select name="" id="" className='p4_input2' >
                                <option value="">Select</option>
                                <option value="">Orthophoria</option>
                                <option value="">Esophoria</option>
                                <option value="">Exophoria</option>
                                <option value="">Hyperphoria</option>
                                <option value="">Hypophoria</option>
                                <option value="">ALT Esotropia</option>
                                <option value="">ALT Exotropia</option>
                                <option value="">Esotropia</option>
                                <option value="">Exotropia</option>
                                <option value="">Hypertropia</option>
                                <option value="">Hypotropia</option>
                            </select>
                        </div>
                        <div className="p4_txt1">OMB Distance</div>
                        <div className="p4_dual3">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Type here' />
                            <div style={{display:'flex',flexDirection:'column',gap:'6px'}} >
                                <div className="p4_mini_dual" style={{marginBottom:'0.2rem'}} >
                                    <div className="p4_txt1">H:</div>
                                    <input type="text" name="" id="" className='p4_input2' placeholder='' />
                                </div>
                                <div className="p4_mini_dual">
                                    <div className="p4_txt1">V:</div>
                                    <input type="text" name="" id="" className='p4_input2' placeholder='' />
                                </div>
                            </div>
                        </div>
                        <div className="p4_txt1">OMB Near</div>
                        <div className="p4_dual3">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Type here' />
                            <div style={{display:'flex',flexDirection:'column',gap:'6px'}} >
                                <div className="p4_mini_dual" style={{marginBottom:'0.2rem'}} >
                                    <div className="p4_txt1">H:</div>
                                    <input type="text" name="" id="" className='p4_input2' placeholder='' />
                                </div>
                                <div className="p4_mini_dual">
                                    <div className="p4_txt1">V:</div>
                                    <input type="text" name="" id="" className='p4_input2' placeholder='' />
                                </div>
                            </div>
                        </div>
                        <div className="p4_txt1">Visual Fields</div>
                        <div className="p4_dual3">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Double click to set default' />
                            <div style={{display:'flex',flexDirection:'column',gap:'6px'}} >
                                <div className="p4_mini_dual" style={{marginBottom:'0.2rem'}} >
                                    <div className="p4_txt1">R:</div>
                                    <input type="text" name="" id="" className='p4_input2' placeholder='' />
                                </div>
                                <div className="p4_mini_dual">
                                    <div className="p4_txt1">L:</div>
                                    <input type="text" name="" id="" className='p4_input2' placeholder='' />
                                </div>
                            </div>
                        </div>
                        <div className="p4_txt1">Amsler Chart</div>
                        <div className="p4_dual3">
                            <input type="text" name="" id="" className='p4_input2' placeholder='Type here' />
                            <div style={{display:'flex',flexDirection:'column',gap:'6px'}} >
                                <div className="p4_mini_dual" style={{marginBottom:'0.2rem'}} >
                                    <div className="p4_txt1">R:</div>
                                    <select type="text" name="" id="" className='p4_input2' placeholder='' ></select>
                                </div>
                                <div className="p4_mini_dual">
                                    <div className="p4_txt1">L:</div>
                                    <select type="text" name="" id="" className='p4_input2' placeholder='' ></select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p5_mid_elem" style={{paddingLeft: '2rem'}} >
                        <div className="p4_txt1">Drop</div>
                        <input type="text" name="" id="" className='p4_input1' placeholder='Time' style={{marginBottom:'1rem'}} />
                        <div className="p4_mini_dual" style={{marginBottom:'0.5rem',marginLeft:'0'}} >
                            <div className="p4_txt1" style={{marginBottom:'0'}}>BN:</div>
                            <input type="text" name="" id="" className='p4_input1' style={{marginLeft: '2.8rem'}} placeholder='' />
                        </div>
                        <div className="p4_mini_dual" style={{marginBottom:'2rem',marginLeft:'0'}}>
                            <div className="p4_txt1" style={{marginBottom:'0'}}>Expiry Date:</div>
                            <input type="date" name="" id="" className='p4_input1' placeholder='' />
                        </div>

                        <div className="p4_txt1">Post IOP</div>
                        <input type="text" name="" id="" className='p4_input1' placeholder='Time' style={{marginBottom:'1rem'}} />
                        <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}} >
                            <div className="p4_txt1">R:</div>
                            <input type="text" name="" id="" className='p4_input1' placeholder='' />
                        </div>
                        <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}}>
                            <div className="p4_txt1">L:</div>
                            <input type="text" name="" id="" className='p4_input1' placeholder='' />
                        </div>
                        <div className="p4_txt1">Motitlity</div>
                        <select type="text" name="" id="" className='p4_input1' placeholder='' style={{marginBottom:'1rem',width:'7rem'}} >
                          <option value="">Select</option>
                          <option value="">SAFE</option>
                          <option value="">Full Smooth</option>
                          <option value="">No Diplopia</option>
                          <option value="">See Notes</option>
                        </select>
                        <div className="p4_txt1">NPC</div>
                        <input type="text" name="" id="" className='p4_input1' placeholder='double click to set default' style={{marginBottom:'1rem',width:'87%'}} />
                        <div className="p4_txt1">Stereopsis</div>
                        <input type="text" name="" id="" className='p4_input1' placeholder='Type here' style={{marginBottom:'1rem',width:'87%'}} />
                        <div className="p4_txt1">Amplitude of Accommodation</div>
                        <input type="text" name="" id="" className='p4_input1' placeholder='double click to set default' style={{marginBottom:'1rem',width:'87%'}} />
                        <div className="p4_txt1">Colour Vision</div>
                        <div className="p4_dual2">
                            <select name="" id="" className='p4_input2' >
                                <option value="">Select</option>
                                <option value="">Ishihara</option>
                                <option value="">City</option>
                                <option value="">Other - See Notes</option>
                            </select>
                            <input type="text" name="" id="" className='p4_input2' />
                        </div>
                        <div className="p4_txt1">Keratometry</div>
                        <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}} >
                            <div className="p4_txt1">R:</div>
                            <input type="text" name="" id="" className='p4_input1' style={{width:'87%'}} placeholder='Type here' />
                        </div>
                        <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}} >
                            <div className="p4_txt1">L:</div>
                            <input type="text" name="" id="" className='p4_input1' style={{width:'87%'}} placeholder='Type here' />
                        </div>
                    </div>
                </div>
                <div className="input_label" style={{marginTop:'1rem'}} >Notes:</div>
                <textarea name="" id="" className='nst_ta' style={{width:'100%'}} placeholder='Type here' ></textarea>
                <div className="ppe_btn_con">
                    <div className="saveCon_btn_elem">
                        <div>Save & Continue</div>
                        <svg width="25" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.5" cy="12.5" r="12.5" fill="#4C004A" fill-opacity="0.2"/>
                            <path d="M7.08366 12.5002C7.08366 12.1262 7.3868 11.8231 7.76074 11.8231H15.3102L12.0094 8.52238C11.7397 8.2526 11.7435 7.81403 12.018 7.54906C12.2858 7.29062 12.7112 7.29437 12.9743 7.5575L17.8634 12.4465C17.893 12.4762 17.893 12.5242 17.8634 12.5538L12.9753 17.4418C12.713 17.7042 12.2877 17.7041 12.0253 17.4418C11.7638 17.1803 11.7629 16.7566 12.0232 16.494L15.3102 13.1772H7.76074C7.3868 13.1772 7.08366 12.8741 7.08366 12.5002Z" fill="#4C004A"/>
                        </svg>
                    </div>
                </div>
            </div>
            </>
        }
        { report6 &&
            <>
              <div className="nst_body padd_com" style={{height: 'auto'}}>
                <div className="p6_dual_con">
                  <div className="p6_dual_elem">
                      <div className="input_label">Previous RX 1</div>
                      <div className='rx_txt2' >(Click here to pre-populated with the patients previous subjective RX)</div>
                      <div className='rl_con2' style={{gridTemplateColumns: '5% 10% 10% 10% 10% 14% 10% 10%'}} >
                        <div className="rl_item2">
                          <div className="rl_item_r1_2"></div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R:</div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L:</div>
                        </div>                                      
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div> 
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>                
                        </div>                                                   
                      </div>
                  </div>
                  <div className="p6_dual_elem">
                      <div className="input_label">Previous RX 2</div>
                      <div className='rx_txt2' ></div>
                      <div className='rl_con2' style={{gridTemplateColumns: '5% 10% 10% 10% 10% 14% 10% 10%'}}>
                        <div className="rl_item2">
                          <div className="rl_item_r1_2"></div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R2:</div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L2:</div>
                        </div>
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div> 
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>                
                        </div>                                                   
                    </div>
                  </div>
                </div>
                <div className="hr_line"></div>
                <div className="input_label">Retinoscopy/Autorefraction</div>
                <div className='refract_l2' >
                  <div className='rl_con2' style={{gridTemplateColumns: '5% 10% 10% 10% 10% 14% 10% 10%',width:'25rem'}} >
                        <div className="rl_item2">
                          <div className="rl_item_r1_2"></div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R:</div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L:</div>
                        </div>                                      
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div> 
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                          <div className="rl_item_r1_2">
                            <select type="text" name="" id="" className='input_5_2'></select>
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>                
                        </div>                                                   
                  </div>
                  <div className='rl_con2' style={{gridTemplateColumns: '8% 11% 20% 20% 21% 22%',width: '20rem'}} >
                        <div className="rl_item2">
                          <div className="rl_item_r1_2"></div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >RE:</div>
                          <div className="rl_item_r1_2" style={{alignItems: 'center'}} >LE:</div>
                        </div>                                      
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >PD</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div>
                        </div> 
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >BIN PD</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" style={{height:'4.1rem',width:'3rem',margin:'0.6rem'}} className='input_5_2' placeholder='' />
                          </div>
                          {/* <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div> */}
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >BVD</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" style={{height:'4.1rem',width:'3rem',margin:'0.6rem'}} className='input_5_2' placeholder='' />
                          </div>
                          {/* <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2' placeholder='' />
                          </div> */}
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >UNAIDED <br /> DVA </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                        </div>              
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >UNAIDED <br /> DVA</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' />
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
                        </div>            
                        <div className="rl_item2">
                          <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>
                          <div className="rl_item_r1_2">
                            <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                          </div>                
                        </div>                                                    */}
                  </div>
                </div>
                <div className="hr_line"></div>
                <div className="input_label">Subjective RX </div>
                <div className='rx_txt2' >Click to populate from current Rx </div>
                <div className="p6_dual_matrix">
                <div className='pn_con22 min_width_c2' style={{gridTemplateColumns:'6% 11% 11% 11% 11% 15% 12% 11% 12%',width:'22rem'}} >
                  <div className="rl_item2">
                    <div className="pn_item_r1_2"></div>
                    <div className="pn_item_r1_2" style={{alignItems: 'center'}} >RE:</div>
                    <div className="pn_item_r1_2" style={{alignItems: 'center'}} >LE:</div>
                  </div>                                      
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                  </div> 
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                  </div>              
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end'}} >AXIS</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                  </div>            
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end'}} >DVA</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                    </div>
                  </div>                               
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end'}} >INT ADD</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2' placeholder='' />
                    </div>
                  </div>            
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end'}} >INT VA</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                    </div>                
                  </div>  
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end',justifyContent:'center'}} >NEAR ADD</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                    </div>                
                  </div>  
                  <div className="rl_item2">
                    <div className="pn_item_r1_2" style={{alignItems: 'end'}} >NVA</div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                    </div>
                    <div className="pn_item_r1_2">
                      <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                    </div>                
                  </div>  
                </div>
                  {/* <div className='rl_con2' style={{gridTemplateColumns: '7% 13% 13% 14% 16% 22% 15%',width: '18rem'}} >
                    <div className="rl_item2">
                      <div className="rl_item_r1_2"></div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R:</div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L:</div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                      </div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                      </div>                
                    </div>
                  </div>
                  <div className='rl_con3' style={{gridTemplateColumns: '13% 13% 11% 13% 13% 12% 12% 13% 11%',width: '29rem'}} >
                    <div className="rl_item2 no_display" >
                      <div className="rl_item_r1_2" ></div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R:</div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L:</div>
                    </div>                                      
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Near Add</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div> 
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Near VA</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Int Add</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>            
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Prism</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                      </div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                    </div>
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Int VA</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                    </div>              
                                                                      
                  </div> */}
                </div>
                {/* <div className="matrix_below"  style={{marginBottom:'2rem'}}>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >PD Right</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >PD Left</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >PD Combined</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >BVD</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >BIN BVCA</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                </div> */}
                <div className="hr_line"></div>
                <div className="input_label" onClick={()=>{setshowComplex(!showComplex)}} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:'0.5rem'}} >
                  <div>Complex RX</div>
                  <svg style={{transform: showComplex? 'rotate(180deg)':'rotate(360deg)'}} width="18" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12L12 0L24 12H0Z" fill="black"/>
                  </svg>
                </div>
                <div className='rx_txt2' >Copy from Subjective Rx</div>
                { showComplex &&
                  <div className="p6_dual_matrix">
                  <div className='rl_con2' style={{gridTemplateColumns: '7% 13% 13% 14% 16% 22% 15%',width: '18rem'}} >
                    <div className="rl_item2">
                      <div className="rl_item_r1_2"></div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R:</div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L:</div>
                    </div>                    
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >SPH</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div> 
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >CYL</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>            
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >H Prism</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' />
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">IN</option>
                          <option value="">OUT</option>
                        </select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">IN</option>
                          <option value="">OUT</option>
                        </select>                                              
                      </div>
                    </div>           
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >V Prism</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2'  placeholder='' /> 
                      </div>                
                    </div>                                                   
                  </div>
                  <div className='rl_con3' style={{gridTemplateColumns: '16% 14% 11% 14% 16% 13% 16%',width: '22rem'}} >
                    <div className="rl_item2 no_display" >
                      <div className="rl_item_r1_2" ></div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >R:</div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >L:</div>
                    </div>                    
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">UP</option>
                          <option value="">DOWN</option>
                        </select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">UP</option>
                          <option value="">DOWN</option>
                        </select>
                      </div>
                    </div>                   
                    
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Int Add</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'></select>
                      </div>
                    </div>
                    <div className="rl_item2">              
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Near Add</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div> 
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >NV H <br /> Prism</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>

                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">IN</option>
                          <option value="">OUT</option>
                        </select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">IN</option>
                          <option value="">OUT</option>
                        </select>
                      </div>
                    </div>
                                                                  
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >NV H <br /> Prism</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_2' placeholder='' />
                      </div>
                    </div>

                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Direction</div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">UP</option>
                          <option value="">DOWN</option>
                        </select>
                      </div>
                      <div className="rl_item_r1_2">
                        <select type="text" name="" id="" className='input_5_2'>
                          <option value=""></option>
                          <option value="">UP</option>
                          <option value="">DOWN</option>
                        </select>
                      </div>
                    
                    </div>                                                
                  </div>
                  </div>}
                {/* <div className="matrix_below"  style={{marginBottom:'2rem'}}>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >PD Right</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >PD Left</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >PD Combined</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >BVD</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                  <div className='matrix_below_elem'>
                    <div className="input_label" style={{margin:'0'}} >BIN BVCA</div>
                    <input type="text" name="" id="" className='input_5_2' placeholder='' />
                  </div>
                </div> */}
                <div className="hr_line"></div>
                <div className="p6_con5">
                  <div className="p6_con6_e" style={{borderRight:'1px solid #D0D0D0'}}>
                    <div className="flex_align mb8">
                      <input type="checkbox" name="" id="" />
                      <div className="input_label2">Modified Rx Given</div>
                    </div>
                    <div className="input_label2 mb8">Outcomes:</div>
                    <div className="flex_align mb8">
                      <input type="radio" name="" id="" />
                      <div className="input_label2">No Change - New RX required</div>
                    </div>
                    <div className="flex_align mb8">
                      <input type="radio" name="" id="" />
                      <div className="input_label2">No Change</div>
                    </div>
                    <div className="flex_align mb8">
                      <input type="radio" name="" id="" />
                      <div className="input_label2">New Rx</div>
                    </div>
                    <div className="flex_align mb8">
                      <input type="radio" name="" id="" />
                      <div className="input_label2">No RX</div>
                    </div>
                    <div className="flex_align mb8">
                      <input type="radio" name="" id="" />
                      <div className="input_label2">Consultation Only</div>
                    </div>
                    <div className="flex_align mb8">
                      <input type="radio" name="" id="" />
                      <div className="input_label2">Prefer to HES</div>
                    </div>
                  </div>
                  <div className="p6_con6_e pl2" >
                    <div className="input_label2 mb8">Recommendations:</div>
                    <div className="p6_con5">
                      <div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Distance</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Near</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Intermediate</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Verifocal</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Bifocal</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Occupational</div>
                        </div>
                      </div>                      
                      <div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">HMAR</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Photocromic</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Slim 30 (1.6)</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Slim 40 (1.67)</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Slim 50 (1.74)</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Tint</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Polaroid</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">CR39 (1.5)</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Glass</div>
                        </div>
                        <div className="flex_align mb8">
                          <input type="checkbox" name="" id="" />
                          <div className="input_label2">Polycarbonate (1.59)</div>
                        </div>
                      </div>                  
                    </div>
                  </div>
                </div>
                <div className="hr_line"></div>
                <div className="p6_con5">
                  <div>
                    <div className="input_label">Examination Comment</div>
                    <textarea name="" id="" className='nst_ta t_width1' style={{width:'21rem',height:'4rem'}} placeholder='Healthy eye, 
                      2 year recall-any concerns to return sooner' ></textarea>
                  </div>
                  <div>
                    <div className="input_label">Recall</div>
                    <input 
                      type="date"    
                      className='form_input'
                      placeholder='10/15/2023'
                    />
                  </div>
                </div>
                <div style={{position:'relative'}} >
                  <button className='save-btn' style={{position:'absolute',right:'0'}} >Save</button>
                </div>
              </div>
            </>
        }
    </>
  )
}
export default NewSightTest