import React from 'react'
import './NewCLTest.css'
const CLAftercare = () => {
    window.scrollTo(0,0);
  return (
    <>
      <div className='page_title' >Contact Lens Aftercare</div>
      <div className="report_header" style={{marginTop:'1rem',paddingLeft:'1rem'}} >C/L Aftercare</div>
      <div className="nst_body padd_com" style={{height: 'auto'}}>
        <div className="grid2_con">
            <div>
                <div className="input_label">Full Name</div>
                <input type="text" className='cl_form_input' placeholder='Type here'/>
            </div>
            <div>
                <div className="input_label">Patient ID</div>
                <input type="text" className='cl_form_input' placeholder='Type here'/>
            </div>
        </div>
        <div className="grid2_con" style={{marginTop:'1rem'}} >
            <div>
                <div className="input_label">History</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' style={{height:'7.8rem'}} ></textarea>
            </div>
            <div>
                <div className="input_label">Medication</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
                <div className="input_label">Allergies</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
        </div>
        <div className='flex_align' style={{gap:'1.5rem'}}>
            <div className="flex_align">
                <input type="checkbox" name="" id="" />
                <div className="input_label" style={{margin:'0'}} >VDU</div>
            </div>
            <div className="flex_align">
                <input type="checkbox" name="" id="" />
                <div className="input_label" style={{margin:'0'}} >Driver</div>
            </div>
            <div className="flex_align">
                <input type="checkbox" name="" id="" />
                <div className="input_label" style={{margin:'0'}} >Smoker</div>
            </div>
        </div>
        <div className="hr_line" style={{margin:'1rem 0'}}></div>
        <div className="input_label" style={{fontWeight:'600'}} >Occular Health</div>
        <div className="grid2_con" style={{marginTop:'1rem'}} >
            <div>
                <div className="input_label">Lids / Lashes</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
            <div>
                <div className="input_label">Cornea</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
        </div>
        <div className="grid2_con" style={{marginTop:'1rem'}} >
            <div>
                <div className="input_label">Conjuctive</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
            <div>
                <div className="input_label">Tear Film</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
        </div>
        <div className="grid2_con" style={{marginTop:'1rem'}} >
            <div>
                <div className="input_label">Limbus</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
            <div>
                <div className="input_label">Neovascularisation</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
        </div>
        <div className="grid2_con" style={{marginTop:'1rem'}} >
            <div>
                <div className="input_label">Fluorescein</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
            <div>
                <div className="input_label">Notes</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
        </div>
        <div className="hr_line" style={{margin:'1rem 0'}}></div>
        <div className="input_label" style={{fontWeight:'600'}}>Lens FIT</div>
        <div className="grid2_con" style={{marginTop:'1rem'}} >
            <div>
                <div className="input_label">K Readings</div>
                <div className="p4_mini_dual" style={{marginBottom:'0.5rem'}} >
                    <div className="p4_txt1 ml0_1">RE:</div>
                    <input type="text" name="" id="" className='p4_input1' placeholder='' />
                </div>
                <div className="p4_mini_dual">
                    <div className="p4_txt1 ml0_1">LE:</div>
                    <input type="text" name="" id="" className='p4_input1' placeholder='' />
                </div>
            </div>
            <div>
                <div className="input_label">Position</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
        </div>
        <div className="grid2_con" style={{marginTop:'1rem'}} >
            <div>
                <div className="input_label">Movement</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
            <div>
                <div className="input_label">Notes</div>
                <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
            </div>
        </div>
        <div className="hr_line" style={{margin:'1rem 0'}}></div>
        <div className="input_label" style={{margin:'0'}}>Visual Acuity</div>
        <div className='cl_con1' >
            <div className="rl_item2">
              <div className="rl_item_r1_2"></div>
              <div className="rl_item_r1_2" style={{alignItems: 'center'}} >RE:</div>
              <div className="rl_item_r1_2" style={{alignItems: 'center'}} >LE:</div>
            </div>                                      
            <div className="rl_item2">
              <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' />
              </div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' />
              </div>
            </div> 
            <div className="rl_item2">
              <div className="rl_item_r1_2" style={{alignItems: 'end'}} >OVER RX</div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' />
              </div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' />
              </div>
            </div>              
            <div className="rl_item2">
              <div className="rl_item_r1_2" style={{alignItems: 'end'}} >VA</div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' />
              </div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' />
              </div>
            </div>            
            <div className="rl_item2">
              <div className="rl_item_r1_2" style={{alignItems: 'end'}} >NVA</div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22'  placeholder='' />
              </div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22'  placeholder='' />
              </div>
            </div>                          
            <div className="rl_item2">
              <div className="rl_item_r1_2" style={{alignItems: 'end'}} >BVA</div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' style={{width:'3.5rem',height:'4.2rem',marginTop: '0.6rem',marginBottom: '0.6rem'}} />
              </div>
              {/* <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22' placeholder='' />
              </div> */}
            </div>            
            <div className="rl_item2">
              <div className="rl_item_r1_2" style={{alignItems: 'end'}} >BNV</div>
              <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22'  placeholder='' style={{width:'3.5rem',height:'4.2rem',marginTop: '0.6rem',marginBottom: '0.6rem'}} /> 
              </div>
              {/* <div className="rl_item_r1_2">
                <input type="text" name="" id="" className='input_5_22'  placeholder='' /> 
              </div>                 */}
            </div>                                                   
        </div>
        <div className="hr_line" style={{margin:'1rem 0'}}></div>
        <div className="input_label">Final RX</div>
        <div className="grid2_con2">
            <div>
                <div className='cl_con2' >
                    <div className="rl_item2">
                      <div className="rl_item_r1_2"></div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >RE:</div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >LE:</div>
                    </div>                                      
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Sph</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div> 
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >C/L</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div>            
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>                          
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >BC</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>                          
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Diameter</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>
                </div>
                <div className="flex_align" style={{gap:'1rem'}}>
                    <div className="flex_align">
                        <input type="checkbox" name="" id="" />
                        <div className="input_label2">Trial</div>
                    </div>
                    <div className="flex_align">
                        <input type="checkbox" name="" id="" />
                        <div className="input_label2">Revenue</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="input_label" style={{marginTop:'1.5rem'}} >Lens Name/Type</div>
                <div className="p4_mini_dual" style={{marginBottom:'1rem'}} >
                    <div className="p4_txt1 ml0_1" >RE:</div>
                    <input type="text" name="" id="" className='p4_input1' style={{width:'15rem'}} placeholder='Type here' />
                </div>
                <div className="p4_mini_dual">
                    <div className="p4_txt1 ml0_1" >LE:</div>
                    <input type="text" name="" id="" className='p4_input1' style={{width:'15rem'}} placeholder='Type here' />
                </div>
                <div className="input_label" style={{marginTop:'1rem'}}>Recall</div>
                <input type="date" className='cl_form_input' placeholder='12/05/2023'/>
            </div>
        </div>
        <div className="input_label">Solutions</div>
        <textarea name="" id="" cols="30" rows="10" className='cl_ta' placeholder='Type here' ></textarea>
        <div className="cl_btn_con" style={{marginTop:'1rem'}} >
            <div className="place_order_btn">Place Order</div>
            <div className="save_btn">Save</div>
        </div>
      </div>
      <div className="page_title" style={{fontSize:'20px',marginTop:'1rem'}} >Previous C/L Details</div>
      <div className="cl_ac_grid3" style={{paddingLeft:'52px'}}>
            <div className='input_label' style={{margin:'0'}} >Date of test</div>
            <div className='input_label' style={{margin:'0'}} >Lens name/type</div>
            <div className='input_label' style={{margin:'0'}} >Prescription</div>
      </div>
      <div className="nst_body padd_com g_22" style={{flexDirection:'column'}} >
        <div className="cl_ac_grid3_body" >
            <div className='input_label' style={{display:'flex',alignItems:'center',margin:'0'}} >12/08/2023</div>
            <div className='input_label' style={{display:'flex',alignItems:'center',margin:'0'}} >Total 1</div>
            <div>
                <div className='cl_con33' >
                    <div className="rl_item2">
                      <div className="rl_item_r1_2"></div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >RE:</div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >LE:</div>
                    </div>                                      
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Sph</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div> 
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >C/L</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div>            
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>                          
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >BC</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>                          
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Diameter</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hr_line" style={{margin:'0'}}></div>
        <div className="cl_ac_grid3_body" >
            <div className='input_label' style={{display:'flex',alignItems:'center',margin:'0'}} >12/08/2023</div>
            <div className='input_label' style={{display:'flex',alignItems:'center',margin:'0'}} >Total 2</div>
            <div>
                <div className='cl_con33' >
                    <div className="rl_item2">
                      <div className="rl_item_r1_2"></div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >RE:</div>
                      <div className="rl_item_r1_2" style={{alignItems: 'center'}} >LE:</div>
                    </div>                                      
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Sph</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div> 
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >C/L</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div>              
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Axis</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22' placeholder='' />
                      </div>
                    </div>            
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Add</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>                          
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >BC</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>                          
                    <div className="rl_item2">
                      <div className="rl_item_r1_2" style={{alignItems: 'end'}} >Diameter</div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                      <div className="rl_item_r1_2">
                        <input type="text" name="" id="" className='input_5_22'  placeholder='' />
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default CLAftercare