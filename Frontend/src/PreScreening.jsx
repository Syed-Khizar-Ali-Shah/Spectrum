import React,{useState} from 'react'
import './PreScreening.css'
window.scrollTo(0,0);

function PreScreening() {
    const [A1,setA1] = useState(0);
    const [A2,setA2] = useState(0);
    const [A3,setA3] = useState(0);
    
    const [B1,setB1] = useState(0);
    const [B2,setB2] = useState(0);
    const [B3,setB3] = useState(0);

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

    const [AA1,setAA1] = useState(0);
    const [AA2,setAA2] = useState(0);
    const [AA3,setAA3] = useState(0);
    
    const [BB1,setBB1] = useState(0);
    const [BB2,setBB2] = useState(0);
    const [BB3,setBB3] = useState(0);

    const calculateAverage11 = () => {
      const sum = parseInt(AA1) + parseInt(AA2) + parseInt(AA3);
      const average = sum / 3;
      return isNaN(average) ? '' : average.toFixed(2); // return empty string if average is NaN, otherwise round to 2 decimal places
    };
    const calculateAverage22 = () => {
      const sum = parseInt(BB1) + parseInt(BB2) + parseInt(BB3);
      const average = sum / 3;
      return isNaN(average) ? '' : average.toFixed(2); // return empty string if average is NaN, otherwise round to 2 decimal places
    };
  return (
    <>
        <div className='page_title' >Pre-Screening</div>
        <div className="ps_header" style={{marginTop:'1rem',paddingLeft:'1rem'}} >Personal Information</div>
        <div className="nst_body padd_com" style={{height: 'auto'}}>
            <div className="input3_flex">
                <div>
                    <div className="input_label">First Name</div>
                    <input type="text" name="" id="" className='form_input' placeholder='Type here' />
                </div>
                <div>
                    <div className="input_label">Last Name</div>
                    <input type="text" name="" id="" className='form_input' placeholder='Type here' />
                </div>
                <div>
                    <div className="input_label">Patient ID</div>
                    <input type="text" name="" id="" className='form_input' placeholder='Type here' />
                </div>
            </div>
            <div className="input3_flex">
                <div>
                    <div className="input_label">DoB</div>
                    <input type="text" name="" id="" className='form_input' placeholder='12/08/2023' />
                </div>
                <div>
                    <div className="input_label">Ethnicity</div>
                    <select name="" id="" className='form_input' >
                        <option value="">Not Stated</option>
                    </select>
                </div>
                <div>
                    <div className="input_label">Email</div>
                    <input type="email" name="" id="" className='form_input' placeholder='abcd@gmail.com' />
                </div>
            </div>
            <div className="input3_flex">
                <div>
                    <div className="input_label">Postcode</div>
                    <input type="text" name="" id="" className='form_input' placeholder='084502' />
                </div>
                <div>
                    <div className="input_label">Address</div>
                    <input type="text" name="" id="" className='form_input' placeholder='1 Market St, Stockport, Gt, Sk1 1KS UK' />
                </div>
                <div>
                    <div className="input_label">Mobile</div>
                    <input type="text" name="" id="" className='form_input' placeholder='+0123456789' />
                </div>
            </div>
        </div>
        <div className="ps_header" style={{marginTop:'2rem',paddingLeft:'1rem'}} >Pre-Visit Questionnaire</div>
        <div className="nst_body padd_com" style={{height: 'auto'}}>
            <div className="ps_grid2">
                <div className='ps_border' >
                    <div className="input_label" style={{marginBottom:'1rem'}}>What is the main reason for your appointment with us?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Eye health concern</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}}>Change in vision</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}}>Broken glasses</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}}>New glasses</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}}>Response to recall</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}}>Interested in contact lenses</div>
                    </div>

                    <div className="input_label" style={{marginBottom:'1rem'}} >Do you have any other vision or eye health concerns or headaches?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - Please Specify</div>
                    </div>
                    <div className="input_label" style={{margin:'1rem 0 0.5rem 0'}} >Patient Response</div>
                    <input type="text" className='ps_input1' placeholder='Type here' />
                    
                    <div className="input_label" style={{marginBottom:'1rem'}} >Do you take any medications?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes</div>
                    </div>
                    <div className="input_label" style={{margin:'1rem 0 0.5rem 0'}} >Name of your GP surgery</div>
                    <input type="text" className='ps_input1' placeholder='Type here' />
                    
                    <div className="input_label" style={{marginBottom:'1rem'}} >Do you use computer, tablet and phone screens at all?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - over 8 hours per day</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - 4 - 8 hours per day</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - under 4 hours per day</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Other - please specify</div>
                    </div>
                    <div className="input_label" style={{margin:'1rem 0 0.5rem 0'}} >What is your occupation?</div>
                    <input type="text" className='ps_input1' placeholder='Type here' />

                    <div className="input_label" style={{marginBottom:'0.5rem'}} >What are your main hobbies and interests?</div>
                    <input type="text" className='ps_input1' placeholder='Type here' />
                    
                    <div className="input_label" style={{marginBottom:'1rem'}} >Do you currently wear glasses?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes</div>
                    </div>
                    
                    <div className="input_label" style={{marginBottom:'1rem'}} >Are you a contact lens wearer?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No- I used to be</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes</div>
                    </div>

                    <div className="input_label" style={{marginBottom:'1rem'}} >Is there a time that you would like to be free from wearing your glasses, <br /> for example, socialising, playing sports or just changing up your look?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Not sure</div>
                    </div>
                    
                    <div className="hr_line" style={{margin:'1rem 0'}} ></div>
                    
                    <div className="input_label"  style={{margin:'0'}} >Retinoscopy/Autorefraction</div>
                    <div className='rl_con44' style={{gridTemplateColumns: '5% 10% 10% 10% 10% 14% 10% 10%',width:'25rem'}} >
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
                    <div className="input_label"  style={{margin:'0'}} >Previous RX 1</div>
                    <div className='rl_con44' style={{gridTemplateColumns: '5% 10% 10% 10% 10% 14% 10% 10%',width:'25rem'}} >
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

                    <div className="input_label"  style={{margin:'0',marginLeft:'1.1rem',marginBottom:'0.3rem'}} >IOP</div>
                    <input type="text" className='ps_input1' style={{marginBottom:'1rem',marginLeft:'1.1rem'}} placeholder='Time'/>

                    {/* <div className="flex_align">
                        <div className="input_label" style={{margin:'0'}} >R:</div>
                        <input type="text" className='ps_input1' style={{margin:'0',marginBottom:'0.5rem'}} placeholder=''/>
                    </div>
                    <div className="flex_align">
                        <div className="input_label" style={{margin:'0'}} >L:</div>
                        <input type="text" className='ps_input1' style={{margin:'0',marginLeft:'0.1rem'}} placeholder=''/>
                    </div> */}
                    
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

                    <div className="input_label" style={{marginTop:'1.5rem'}} >Visual Fields</div>
                    <div className="ps_grid2">
                        <div>
                            <input type="text" className='ps_input1' style={{margin:'0',marginLeft:'0.1rem'}} placeholder='double click to set default'/>
                        </div>
                        <div>
                            <div className="flex_align">
                                <div className="input_label" style={{margin:'0'}} >R:</div>
                                <input type="text" className='ps_input1' style={{margin:'0',marginBottom:'0.3rem'}} placeholder=''/>
                            </div>
                            <div className="flex_align">
                                <div className="input_label" style={{margin:'0'}} >L:</div>
                                <input type="text" className='ps_input1' style={{margin:'0',marginLeft:'0.1rem'}} placeholder=''/>
                            </div>
                        </div>
                    </div>
                </div >
                <div className='ps_pr' >
                    <div className="input_label" style={{marginBottom:'0.2rem'}}>Have you noticed any problems with your hearing?</div>
                    <div className="input_label" style={{marginBottom:'0.5rem',color:'#9599AD',fontSize:'10px'}}>For over 18s only</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes</div>
                    </div>

                    <div className="input_label" style={{marginTop:'1rem',marginBottom:'0.6rem'}}>When was your last sight test?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >1 year ago or less</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >2 years ago or less</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >More than 3 years ago</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I've never had a sight test</div>
                    </div>

                    <div className="input_label" style={{marginTop:'1rem',marginBottom:'0.6rem'}}>How often do you think you should have your eyes tested?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Every year</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Every 2 years</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Every 3 years</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Only if I notice a change in my eyes</div>
                    </div>

                    <div className="input_label" style={{marginTop:'1rem',marginBottom:'0.6rem'}}>For most people it is recommended that you should have your <br /> eyes tested every 2 years. If you have not had your eyes <br /> tested in the last 2 years please say why.</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I have had my eyes tested in the past 2 years</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I did not know how often I should have my eyes tested</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I have not got the time - it's an inconvenience</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I can see OK</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >My eyes don't hurt</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I'm concerned about how much it will cost</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I don't want to wear glasses</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >I'm worried that I might have something wrong with my eyes</div>
                    </div>
                    
                    <div className="input_label" style={{marginTop:'1rem',marginBottom:'0.6rem'}}>Do you have a close relative who has glaucoma?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Don't Know</div>
                    </div>

                    <div className="input_label" style={{marginTop:'1rem',marginBottom:'0.6rem'}}>Do you have diabetes?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No</div>
                    </div>

                    <div className="input_label" style={{marginTop:'1rem',marginBottom:'0.6rem'}}>Do you know if you are entitled to a free NHS sight test?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - I know I am</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - I know I am not entitled</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No - I don't know if I am entitled</div>
                    </div>

                    <div className="input_label" style={{marginTop:'1rem',marginBottom:'0.6rem'}}>Do you know if you are entitled to financial help towards the <br /> cost of spectacles or contact lenses (NHS optical voucher)?</div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - I know I am</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >Yes - I know I am not entitled</div>
                    </div>
                    <div className="flex_align" style={{marginBottom:'0.7rem'}} >
                        <input type="radio" name="" id="" />
                        <div className="input_label" style={{margin:'0'}} >No - I don't know if I am entitled</div>
                    </div>
                    
                    <div className="hr_line" style={{margin: '3.35rem 0 1rem 0'}} ></div>
                    
                    <div className="input_label"  style={{margin:'0',visibility:'hidden'}} >Retinoscopy/Autorefraction</div>
                    <div className='rl_con44' style={{gridTemplateColumns: '5% 10% 10% 10% 10% 14% 10% 10%',width:'25rem',visibility:'hidden'}} >
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
                    <div className="input_label"  style={{margin:'0'}} >Previous RX 2 (incl from Autorefraction)</div>
                    <div className='rl_con44' style={{gridTemplateColumns: '5% 10% 10% 10% 10% 14% 10% 10%',width:'25rem'}} >
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

                    <div className="input_label"  style={{margin:'0',marginLeft:'1.1rem',marginBottom:'0.3rem'}} >Post IOP</div>
                    <input type="text" className='ps_input1' style={{marginBottom:'1rem',marginLeft:'1.1rem'}} placeholder='Time'/>

                    {/* <div className="flex_align">
                        <div className="input_label" style={{margin:'0'}} >R2:</div>
                        <input type="text" className='ps_input1' style={{margin:'0',marginBottom:'0.5rem'}} placeholder=''/>
                    </div>
                    <div className="flex_align">
                        <div className="input_label" style={{margin:'0'}} >L2:</div>
                        <input type="text" className='ps_input1' style={{margin:'0',marginLeft:'0.1rem'}} placeholder=''/>
                    </div> */}
                    <div className="p4_mini_dual" style={{marginBottom:'-0.2rem',width:'13rem',display:'grid',gridTemplateColumns:'7% 23% 23% 24% 20%'}} >
                        <div className="p4_txt1"></div>
                        <div className='flex p4_txt1' >1</div>
                        <div className='flex p4_txt1' >2</div>
                        <div className='flex p4_txt1' >3</div>
                        <div className='flex p4_txt1' >Avg</div>
                      </div>
                      <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}} >
                        <div className="p4_txt1">R2:</div>
                        <input type="tel" name="" id="" value={AA1} onChange={(e)=>{setAA1(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                        <input type="tel" name="" id="" value={AA2} onChange={(e)=>{setAA2(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                        <input type="tel" name="" id="" value={AA3} onChange={(e)=>{setAA3(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                        <div className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} >{ calculateAverage11() }</div>
                      </div>
                      <div className="p4_mini_dual" style={{marginBottom:'2rem'}}>
                        <div className="p4_txt1">L2:</div>
                        <input type="tel" name="" id="" value={BB1} onChange={(e)=>{setBB1(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                        <input type="tel" name="" id="" value={BB2} onChange={(e)=>{setBB2(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                        <input type="tel" name="" id="" value={BB3} onChange={(e)=>{setBB3(e.target.value)}} className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} placeholder='' />
                        <div className='p4_input1' style={{width:'2rem',margin:'0 0.5rem'}} >{ calculateAverage22() }</div>
                      </div>  
                    </div>
            </div>
            <div style={{display:'flex',justifyContent:'end',marginTop:'2rem'}} >
                <div className="save_btn">Save</div>
            </div>
        </div>
    </>
  )
}

export default PreScreening