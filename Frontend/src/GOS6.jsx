import React from 'react'
import './GOS6.css'

function GOS6() {
  return (
    <div style={{height:'100%'}}>
      <div className="g1_header">
        <div className="g1_t1">Claim Type: </div>
        <select name="" id="" className='g1_select'>
          <option value="">GOS6</option>
        </select>
        <div className="g1_t1">Claim Ref: </div>
        <select name="" id="" className='g1_select' style={{width: '15rem'}} >
          <option value="">1450:18 Jan-2022 sent for</option>
        </select>
        <div className="till_ni_btn">
          New
        </div>
        <div>
          <svg width="29" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5522 0H3.2239C1.43452 0 0 1.44962 0 3.2239V25.7761C0 27.5504 1.43452 29 3.2239 29H25.7761C27.5504 29 29 27.5504 29 25.7761V6.4478L22.5522 0ZM14.4962 25.7685C11.8235 25.7685 9.66415 23.6092 9.66415 20.9365C9.66415 18.2637 11.8235 16.1044 14.4962 16.1044C17.169 16.1044 19.3283 18.2637 19.3283 20.9365C19.3283 23.6092 17.169 25.7685 14.4962 25.7685ZM19.3283 9.66415H3.2239V3.2239H19.3283V9.66415Z" fill="#686868"/>
          </svg>
          <svg width="31" height="21" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M25.3739 12.2559C25.3739 12.3437 24.6855 21.0505 24.2923 24.7149C24.0461 26.9636 22.5964 28.3275 20.4219 28.3663C18.7511 28.4037 17.1155 28.4166 15.5063 28.4166C13.7979 28.4166 12.1271 28.4037 10.5053 28.3663C8.4037 28.3159 6.95277 26.9248 6.71912 24.7149C6.31462 21.0376 5.63877 12.3437 5.62621 12.2559C5.61365 11.9911 5.69907 11.7392 5.87243 11.5351C6.04327 11.3466 6.28949 11.2329 6.54827 11.2329H24.4644C24.7219 11.2329 24.9556 11.3466 25.1402 11.5351C25.3123 11.7392 25.399 11.9911 25.3739 12.2559Z" fill="#C03221"/>
            <path d="M27.125 7.72003C27.125 7.18917 26.7067 6.77327 26.2042 6.77327H22.4381C21.6718 6.77327 21.006 6.22821 20.8351 5.45969L20.6241 4.5181C20.3289 3.38018 19.3101 2.58325 18.1669 2.58325H12.8343C11.6786 2.58325 10.6699 3.38018 10.3633 4.5801L10.1661 5.46098C9.99402 6.22821 9.32822 6.77327 8.56319 6.77327H4.79706C4.29332 6.77327 3.875 7.18917 3.875 7.72003V8.21085C3.875 8.72879 4.29332 9.1576 4.79706 9.1576H26.2042C26.7067 9.1576 27.125 8.72879 27.125 8.21085V7.72003Z" fill="#C03221"/>
          </svg>
          <svg width="33" height="22" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.625 16.5C2.9175 9.46 9.08712 4.125 16.5011 4.125C23.9151 4.125 30.0834 9.46 31.3773 16.5C30.0847 23.54 23.9151 28.875 16.5011 28.875C9.08712 28.875 2.91887 23.54 1.625 16.5H1.625ZM16.5002 23.3759C20.2972 23.3759 23.3752 20.2978 23.3752 16.5009C23.3752 12.7039 20.2972 9.62587 16.5003 9.62585C12.7033 9.62584 9.62526 12.7039 9.62524 16.5008C9.62522 20.2978 12.7032 23.3758 16.5002 23.3759H16.5002ZM16.5012 20.625C15.0275 20.625 13.6657 19.8388 12.9289 18.5625C12.192 17.2862 12.192 15.7138 12.9289 14.4375C13.6657 13.1612 15.0275 12.375 16.5012 12.375C17.9749 12.375 19.3367 13.1612 20.0736 14.4375C20.8104 15.7138 20.8104 17.2862 20.0736 18.5625C19.3367 19.8388 17.9749 20.625 16.5012 20.625Z" fill="#4C004A"/>
          </svg>
        </div>
        <div className='d_btn' >
          <div className="till_ni_btn">
            Scan and Store
          </div>
          <div className="till_ss_btn mb20" style={{margin:'0'}} >
            Progress Notes 
          </div>
        </div>
        <svg width="38" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.9375 27.9062V20.1875H14.1758C13.8608 20.1875 13.5588 20.0624 13.3361 19.8397C13.1134 19.617 12.9883 19.3149 12.9883 19C12.9883 18.6851 13.1134 18.383 13.3361 18.1603C13.5588 17.9376 13.8608 17.8125 14.1758 17.8125H24.9375V10.0938C24.9363 8.99181 24.4981 7.93533 23.7189 7.15614C22.9397 6.37695 21.8832 5.93868 20.7812 5.9375H6.53125C5.42931 5.93868 4.37283 6.37695 3.59364 7.15614C2.81445 7.93533 2.37618 8.99181 2.375 10.0938V27.9062C2.37618 29.0082 2.81445 30.0647 3.59364 30.8439C4.37283 31.6231 5.42931 32.0613 6.53125 32.0625H20.7812C21.8832 32.0613 22.9397 31.6231 23.7189 30.8439C24.4981 30.0647 24.9363 29.0082 24.9375 27.9062Z" fill="#C03221"/>
          <path d="M31.5704 20.1875L27.6606 24.0981C27.4473 24.3226 27.3301 24.6215 27.3341 24.9312C27.3381 25.2408 27.4628 25.5367 27.6818 25.7557C27.9008 25.9747 28.1966 26.0994 28.5063 26.1034C28.8159 26.1074 29.1149 25.9902 29.3394 25.7769L35.2769 19.8394C35.4994 19.6167 35.6244 19.3148 35.6244 19C35.6244 18.6852 35.4994 18.3832 35.2769 18.1606L29.3394 12.2231C29.1149 12.0098 28.8159 11.8926 28.5063 11.8966C28.1966 11.9005 27.9008 12.0253 27.6818 12.2443C27.4628 12.4633 27.3381 12.7591 27.3341 13.0688C27.3301 13.3784 27.4473 13.6774 27.6606 13.9019L31.5704 17.8125H24.9375V20.1875H31.5704Z" fill="#C03221"/>
        </svg>
      </div>
      <div className="g1_header2">
        GOS 6
      </div>
      <div className="g1_body1">
        <div>
          <div className='g1_b1_left1'>
            <div className='g1_b1_ll' >            
              <div>
                <div className="input_label">
                  Claim Reference
                </div>
                <input 
                  type="text"          
                  className='form_input2'
                  placeholder='6711'
                />
              </div>
              <div>
                <div className="input_label">
                  Forename
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  DoB
                </div>
                <input 
                  type="date"                
                  className='form_input2'
                  placeholder='12/1/2023'
                />
              </div>
              <div>
                <div className="input_label">
                  Address Line 1
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Town/City
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Postcode
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Nl number
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
            </div>
            <div className='g1_b1_lr' >
              <div>
                <div className="input_label">
                  Title
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Mrs'
                />
              </div>
              <div>
                <div className="input_label">
                  Surname
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Previous Surname
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Address Line 2
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Country
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  NHS number
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Sign Date
                </div>
                <input 
                  type="date"                
                  className='form_input2'
                  placeholder='12/1/2023'
                />
              </div>
            </div>
          </div>
          <div className="g1_b1_left2">
            <div>
              <div className='iamtext' >I am the</div>
            </div>
            <div>
              <div className="radio_label">
                <input type="radio" name="" id="" />
                <div className='ptxt2' >Patient</div>
              </div>
              <div className="radio_label">
                <input type="radio" name="" id="" />
                <div className='ptxt2' >Parent</div>
              </div>
              <div className="radio_label">
                <input type="radio" name="" id="" />
                <div className='ptxt2' >Carer or Guardian</div>
              </div>
            </div>
          </div>
          <div className="g1_b1_left2">
            <div>
              <div className='iamtext' >The Patient</div>
            </div>
            <div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >is aged under 16 years</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >is aged over 60 years</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >is over 40 and has relevant family history of glaucoma </div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >has glaucoma </div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >is at risk of glaucoma</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >has diabetes</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >has been prescribed complex lenses</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >is a prisoner on leave</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >is registered blind or partially sighted</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >aged 16 to 18 and in full-time education</div>
              </div>
            </div>
          </div>
          <div className="box_con">
            <div className="box_elem_1">
              <div className="be1_left">
                <div className="radio_label">
                  <input type="checkbox" name="" id="" />
                  <div className='ptxt2' >Income support</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'50% 50%'}} >
                  <div className="radio_label">
                    <input type="checkbox" name="" id="" />
                    <div className='ptxt2' >PCG</div>
                  </div>
                  <div className="radio_label">
                    <input type="checkbox" name="" id="" />
                    <div className='ptxt2' >JSA</div>
                  </div>
                </div>
                <div className="radio_label">
                  <input type="checkbox" name="" id="" />
                  <div className='ptxt2' >Income support</div>
                </div>
              </div>
              <div className="be1_right">
                <div className="radio_label">
                  <input type="checkbox" name="" id="" />
                  <div className='ptxt2' >Income support</div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'50% 50%'}} >
                  <div className="radio_label">
                    <input type="checkbox" name="" id="" />
                    <div className='ptxt2' >ESA</div>
                  </div>
                  <div className="radio_label">
                    <input type="checkbox" name="" id="" />
                    <div className='ptxt2' >Text Credit</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box_elem_2">
              <div className='b2_txt1' >Benefit Recipient</div>
              <div className='b2_txt2' >(Only complete this section if different from patient)</div>
            </div>
            <div className="box_elem_1">
              <div>
                <div className="input_label">
                  Forename
                </div>
                <input 
                  type="text"                
                  className='box_input'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  Surname
                </div>
                <input 
                  type="text"                
                  className='box_input'
                  placeholder='Type here'
                />
              </div>              
            </div>
            <div className="box_elem_1">
              <div>
                <div className="input_label">
                  NI number
                </div>
                <input 
                  type="text"                
                  className='box_input'
                  placeholder='Type here'
                />
              </div>
              <div>
                <div className="input_label">
                  DoB
                </div>
                <input 
                  type="date"                
                  className='box_input'
                  placeholder='12/1/2023'
                />
              </div>
            </div>
          </div>
          <div className="box_elem3">
            <div className="box_elem_1">
                <div>
                  <div className="input_label">
                    Establishment name
                  </div>
                  <input 
                    type="text"                
                    className='form_input2'
                    placeholder='Type here'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Establishment town
                  </div>
                  <input 
                    type="text"                
                    className='form_input2'
                    placeholder='Type here'
                  />
                </div>              
            </div>
            <div className="box_elem_1">
                <div>
                  <div className="input_label">
                    HC2 cert. number
                  </div>
                  <input 
                    type="text"                
                    className='form_input2'
                    placeholder='Type here'
                  />
                </div>
                <div>
                  <div className="input_label">
                    Last eye exam
                  </div>
                  <input 
                    type="date"                
                    className='form_input2'
                    placeholder='12/1/2023'
                  />
                </div>
            </div>
            <div style={{display:'flex',gap:'15px'}} >
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >First Test</div>
              </div>
              <div className="radio_label">
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >Unknown</div>
              </div>
            </div>
          </div>
        </div>
        <div className="g1_b1_right">
          <div className="practitioner_label">
            Practitioner
          </div>
          <div className="txt5">
            To be completed by the practitioner who has conducted the eye exam
          </div>
          <div>
            <div className="input_label">
              Early recall code
            </div>
            <div className='grid3'>
              <div className='flex3' >
                <select className='form_input2' placeholder='Select' style={{cursor:'pointer',marginBottom: '0'}} >
                  <option value="0">Select</option>
                </select>
              </div>
              <div  className='flex3' style={{paddingLeft: '19px'}} >
                <div className="till_ni_btn">
                  Select
                </div>
                <svg width="31" height="21" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M25.3739 12.2559C25.3739 12.3437 24.6855 21.0505 24.2923 24.7149C24.0461 26.9636 22.5964 28.3275 20.4219 28.3663C18.7511 28.4037 17.1155 28.4166 15.5063 28.4166C13.7979 28.4166 12.1271 28.4037 10.5053 28.3663C8.4037 28.3159 6.95277 26.9248 6.71912 24.7149C6.31462 21.0376 5.63877 12.3437 5.62621 12.2559C5.61365 11.9911 5.69907 11.7392 5.87243 11.5351C6.04327 11.3466 6.28949 11.2329 6.54827 11.2329H24.4644C24.7219 11.2329 24.9556 11.3466 25.1402 11.5351C25.3123 11.7392 25.399 11.9911 25.3739 12.2559Z" fill="#C03221"/>
                  <path d="M27.125 7.72003C27.125 7.18917 26.7067 6.77327 26.2042 6.77327H22.4381C21.6718 6.77327 21.006 6.22821 20.8351 5.45969L20.6241 4.5181C20.3289 3.38018 19.3101 2.58325 18.1669 2.58325H12.8343C11.6786 2.58325 10.6699 3.38018 10.3633 4.5801L10.1661 5.46098C9.99402 6.22821 9.32822 6.77327 8.56319 6.77327H4.79706C4.29332 6.77327 3.875 7.18917 3.875 7.72003V8.21085C3.875 8.72879 4.29332 9.1576 4.79706 9.1576H26.2042C26.7067 9.1576 27.125 8.72879 27.125 8.21085V7.72003Z" fill="#C03221"/>
                </svg>
              </div>
            </div>
            <div className="box_elem_1">
              <div>
                <div className="input_label">
                  Exam Date
                </div>
                <input 
                  type="date"                
                  className='form_input2'
                  placeholder='12/1/2023'
                />
              </div>
              <div>
                <div className="input_label">
                  Reffered to
                </div>
                <select className='form_input2' placeholder='Select' style={{cursor:'pointer',marginBottom: '0'}} >
                  <option value="0">Select</option>
                </select>
              </div>              
            </div>
            <div className="box_elem_1">
              <div>
                <div className="input_label">
                  Prescription
                </div>
                <select className='form_input2' placeholder='Select' style={{cursor:'pointer',marginBottom: '0'}} >
                  <option value="0">New or Changed</option>
                </select>
              </div>
              <div>
                <div className="input_label">
                  Ethnicity
                </div>
                <select className='form_input2' placeholder='Select' style={{cursor:'pointer',marginBottom: '0'}} >
                  <option value="0">Unknown</option>
                </select>
              </div>              
            </div>
            <div>
              <div className="flex4">
                <div className="txt4">1st Voucher Type: </div>
                <input type="text" name="" id="" className='input_4' />
                <di className="txt6">or</di>
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >Complex</div>                
              </div>
              <div className="flex4">
                <div className="txt4">Supplements: </div> &nbsp; &nbsp;                
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >Prism</div>                
                <input type="checkbox" style={{marginLeft:'1rem'}} name="" id="" />
                <div className='ptxt2' >Tints</div>                
              </div>
              <div className="flex4">
                <div className="txt4">2nd Voucher Type: </div>
                <input type="text" name="" id="" className='input_4' />
                <di className="txt6">or</di>
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >Complex</div>                
              </div>
              <div className="flex4">
                <div className="txt4">Supplements: </div> &nbsp; &nbsp;                
                <input type="checkbox" name="" id="" />
                <div className='ptxt2' >Prism</div>                
                <input type="checkbox" style={{marginLeft:'1rem'}} name="" id="" />
                <div className='ptxt2' >Tints</div>                
              </div>
              <div className="txt7">Load Exam Details</div>
              <div className="box_elem_1">
              <div>
                <div className="input_label">
                  Optom title
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Mr'
                />
              </div>
              <div>
                <div className="input_label">
                  Optom forename
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='John'
                />
              </div>              
              </div>
              <div className="box_elem_1">
              <div>
                <div className="input_label">
                  Optom surname
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Smith'
                />
              </div>
              <div>
                <div className="input_label">
                  Optom sign. date
                </div>
                <input 
                  type="date"                
                  className='form_input2'
                  placeholder='12/1/2023'
                />
              </div>              
              </div>
              <div className="box_elem_1">
                <div>
                  <div className="input_label">
                    Optom list no
                  </div>
                  <input 
                    type="text"                
                    className='form_input2'
                    placeholder='01-2345'
                  />
                </div>
                <div>
                  <div className="add_sig_btn">
                    Add Signature
                  </div>
                </div>              
              </div>
              <div className="practitioner_label">
                Contractor:
              </div>
              <hr style={{marginTop: "15px",border: "1px solid #e2e2e2"}} />
              <div className="txt5">
                To be completed by the contractor or authorised signatory
              </div>
              <div className="txt7">Authorise Signature</div>
              <div className="box_elem_1">
              <div>
                <div className="input_label">
                  Signature forname
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='John'
                />
              </div>
              <div>
                <div className="input_label">
                  Optom Surname
                </div>
                <input 
                  type="text"                
                  className='form_input2'
                  placeholder='Smith'
                />
              </div>              
              </div>
              <div className="box_elem_1">
                <div>
                  <div className="input_label">
                    Optom list no
                  </div>
                  <input 
                    type="date"                
                    className='form_input2'
                    placeholder='12/1/2023'
                  />
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'15px'}} >
                  <div className="txt8">Show Last Status</div>
                  <div className="add_sig_btn" style={{marginTop: "0"}} >
                    Add Signature
                  </div>
                </div>              
              </div>
              <div className="input_label">
                Submitted on: <span className='txt_light' >21-jan-2020</span>
              </div>
              <div className="flex_between mt20">
                <div className="till_ni_btn" style={{display:"inline-block",whiteSpace: "nowrap"}}>
                  Retract
                </div>
                <div className="add_sig_btn" style={{marginTop: "0"}} >
                  Get Status
                </div>
                <div className="till_ni_btn_cancel" style={{width:'6rem'}} >
                  Error Codes
                </div>
              </div>
              <div className="txt5" style={{paddingLeft: '0',marginTop:'2rem'}}>
                I cannot attend a practice unaccompanied for a sight test because:
              </div>
              <textarea name="" id="" rows="30" className='form_input2' style={{width:'100%',height:'5rem'}} placeholder='Type here'  >
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GOS6
