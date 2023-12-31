import React from 'react'
import './Till.css'
import './Margin.css'

function Till() {
  return (
    <>
        <div className='page_title flex_between' >
          <div>Sales Register</div>
          <div className="till_head_right">
            <div>
              <div className='till_h_title' >Patient ID: </div>
              <input className='till_head_input' type="text" placeholder='Type here' />
            </div>
            <div>
              <div className='till_h_title' >Patient Name: </div>
              <input className='till_head_input' type="text" placeholder='Type here' />
            </div>
          </div>
        </div>
        <div className="d_grid2">        
          <div className="till_line2 flex_between">
              <div>
                <div className='till_h_title' >Register Mode: </div>
                <select className='till_head_input' name="" id="">
                  <option value="Sale">Sale</option>
                  <option value="Sale">Refund</option>
                </select>
              </div>
              <div className="till_ss_btn">
                Suspended Sales 
              </div>
          </div>
        </div>
        {/* Line 3 */}
        <div className="d_grid2 mb2">
          <div className="till_line2 flex_between">
              <div>
                <div className='till_h_title' >Find/Scan Items: </div>
                <input className='till_head_input' style={{width:'13rem',fontSize:'13px'}} type="text" placeholder='Start typing item name and scan barcode' />
              </div>
              <div className="till_ni_btn">
                New Item
              </div>
          </div>
        </div>
        <div className="till_body">
          <div className="td_left">
            <div className="till_header">
              <div>Delete</div>
              <div>Item #</div>
              <div>Item Name</div>
              <div>Price</div>
              <div>QTY</div>
              <div>Disc %</div>
              <div>Total</div>
              <div>Edit</div>
            </div>
            <div>
              <div className="till_table_body">
              <div>
                <svg width="25" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M22.3739 10.2559C22.3739 10.3437 21.6855 19.0505 21.2923 22.7149C21.0461 24.9636 19.5964 26.3275 17.4219 26.3663C15.7511 26.4037 14.1155 26.4166 12.5063 26.4166C10.7979 26.4166 9.12712 26.4037 7.50534 26.3663C5.4037 26.3159 3.95277 24.9248 3.71912 22.7149C3.31462 19.0376 2.63877 10.3437 2.62621 10.2559C2.61365 9.99109 2.69907 9.73923 2.87243 9.53515C3.04327 9.34657 3.28949 9.23291 3.54827 9.23291H21.4644C21.7219 9.23291 21.9556 9.34657 22.1402 9.53515C22.3123 9.73923 22.399 9.99109 22.3739 10.2559Z" fill="#C03221"/>
                  <path d="M24.125 5.72003C24.125 5.18917 23.7067 4.77327 23.2042 4.77327H19.4381C18.6718 4.77327 18.006 4.22821 17.8351 3.45969L17.6241 2.5181C17.3289 1.38018 16.3101 0.583252 15.1669 0.583252H9.83432C8.6786 0.583252 7.66986 1.38018 7.36334 2.5801L7.16612 3.46098C6.99402 4.22821 6.32822 4.77327 5.56319 4.77327H1.79706C1.29332 4.77327 0.875 5.18917 0.875 5.72003V6.21085C0.875 6.72879 1.29332 7.1576 1.79706 7.1576H23.2042C23.7067 7.1576 24.125 6.72879 24.125 6.21085V5.72003Z" fill="#C03221"/>
                </svg>
                <div>Disc: none</div>
              </div>
              <div>1</div>
              <div>
                <div>Cool Items</div>
                <div>(100.00 in stock)</div>
              </div>
              <div><div className='till_t_p_btn' >100.00</div></div>
              <div><div className='till_t_p_btn2' >2</div></div>
              <div><div className='till_t_p_btn2' >0</div></div>
              <div>$10.00</div>
              <div>
                <svg width="27" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                  <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                </svg>
              </div>
              </div>
              <div className="till_table_body">
              <div>
                <svg width="25" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M22.3739 10.2559C22.3739 10.3437 21.6855 19.0505 21.2923 22.7149C21.0461 24.9636 19.5964 26.3275 17.4219 26.3663C15.7511 26.4037 14.1155 26.4166 12.5063 26.4166C10.7979 26.4166 9.12712 26.4037 7.50534 26.3663C5.4037 26.3159 3.95277 24.9248 3.71912 22.7149C3.31462 19.0376 2.63877 10.3437 2.62621 10.2559C2.61365 9.99109 2.69907 9.73923 2.87243 9.53515C3.04327 9.34657 3.28949 9.23291 3.54827 9.23291H21.4644C21.7219 9.23291 21.9556 9.34657 22.1402 9.53515C22.3123 9.73923 22.399 9.99109 22.3739 10.2559Z" fill="#C03221"/>
                  <path d="M24.125 5.72003C24.125 5.18917 23.7067 4.77327 23.2042 4.77327H19.4381C18.6718 4.77327 18.006 4.22821 17.8351 3.45969L17.6241 2.5181C17.3289 1.38018 16.3101 0.583252 15.1669 0.583252H9.83432C8.6786 0.583252 7.66986 1.38018 7.36334 2.5801L7.16612 3.46098C6.99402 4.22821 6.32822 4.77327 5.56319 4.77327H1.79706C1.29332 4.77327 0.875 5.18917 0.875 5.72003V6.21085C0.875 6.72879 1.29332 7.1576 1.79706 7.1576H23.2042C23.7067 7.1576 24.125 6.72879 24.125 6.21085V5.72003Z" fill="#C03221"/>
                </svg>
                <div>Disc: none</div>
              </div>
              <div>1</div>
              <div>
                <div>Cool Items</div>
                <div>(100.00 in stock)</div>
              </div>
              <div><div className='till_t_p_btn' >100.00</div></div>
              <div><div className='till_t_p_btn2' >2</div></div>
              <div><div className='till_t_p_btn2' >0</div></div>
              <div>$10.00</div>
              <div>
                <svg width="27" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                  <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                </svg>
              </div>
              </div>          
              <div className="till_table_body">
              <div>
                <svg width="25" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M22.3739 10.2559C22.3739 10.3437 21.6855 19.0505 21.2923 22.7149C21.0461 24.9636 19.5964 26.3275 17.4219 26.3663C15.7511 26.4037 14.1155 26.4166 12.5063 26.4166C10.7979 26.4166 9.12712 26.4037 7.50534 26.3663C5.4037 26.3159 3.95277 24.9248 3.71912 22.7149C3.31462 19.0376 2.63877 10.3437 2.62621 10.2559C2.61365 9.99109 2.69907 9.73923 2.87243 9.53515C3.04327 9.34657 3.28949 9.23291 3.54827 9.23291H21.4644C21.7219 9.23291 21.9556 9.34657 22.1402 9.53515C22.3123 9.73923 22.399 9.99109 22.3739 10.2559Z" fill="#C03221"/>
                  <path d="M24.125 5.72003C24.125 5.18917 23.7067 4.77327 23.2042 4.77327H19.4381C18.6718 4.77327 18.006 4.22821 17.8351 3.45969L17.6241 2.5181C17.3289 1.38018 16.3101 0.583252 15.1669 0.583252H9.83432C8.6786 0.583252 7.66986 1.38018 7.36334 2.5801L7.16612 3.46098C6.99402 4.22821 6.32822 4.77327 5.56319 4.77327H1.79706C1.29332 4.77327 0.875 5.18917 0.875 5.72003V6.21085C0.875 6.72879 1.29332 7.1576 1.79706 7.1576H23.2042C23.7067 7.1576 24.125 6.72879 24.125 6.21085V5.72003Z" fill="#C03221"/>
                </svg>
                <div>Disc: none</div>
              </div>
              <div>1</div>
              <div>
                <div>Cool Items</div>
                <div>(100.00 in stock)</div>
              </div>
              <div><div className='till_t_p_btn' >100.00</div></div>
              <div><div className='till_t_p_btn2' >2</div></div>
              <div><div className='till_t_p_btn2' >0</div></div>
              <div>$10.00</div>
              <div>
                <svg width="27" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.8275 0.385423C22.3136 -0.128474 21.4949 -0.128474 20.981 0.385423L11.0607 10.3057C10.9039 10.4538 10.7994 10.6454 10.7297 10.8544L9.10974 16.2631C8.97036 16.7248 9.10102 17.2212 9.44071 17.5609C9.68455 17.8135 10.0242 17.9441 10.3639 17.9441C10.4858 17.9441 10.6165 17.9267 10.7384 17.8918L16.1471 16.2719C16.3562 16.2022 16.5478 16.0977 16.6958 15.9409L26.6162 6.02056C26.8601 5.77671 26.9994 5.44575 26.9994 5.09734C26.9994 4.74899 26.8601 4.41801 26.6162 4.17412L22.8275 0.385423Z" fill="#3A57E8"/>
                  <path d="M25.6935 12.196C24.9719 12.196 24.3871 12.7812 24.3871 13.5024V22.2121C24.3871 23.4131 23.4102 24.3895 22.2097 24.3895H4.79032C3.58976 24.3895 2.6129 23.4131 2.6129 22.2121V4.79276C2.6129 3.59178 3.58976 2.61534 4.79032 2.61534H13.5C14.2217 2.61534 14.8065 2.03016 14.8065 1.30889C14.8065 0.587627 14.2217 0.00244141 13.5 0.00244141H4.79032C2.14893 0.00244141 0 2.15179 0 4.79276V22.2121C0 24.8531 2.14893 27.0024 4.79032 27.0024H22.2097C24.8511 27.0024 27 24.8531 27 22.2121V13.5024C27 12.7812 26.4152 12.196 25.6935 12.196Z" fill="#3A57E8"/>
                </svg>
              </div>
              </div>
              <div className="flex_end mtr3">
                <div className="till_ni_btn_cancel">
                  Cancel
                </div>
                <div className="till_ni_btn">
                  New Item
                </div>
              </div>      
            </div>
          </div>
          <div className="td_right">
            <div className="till_right_con">
              <div className="trc_name">
                <span>Customer</span> Fake Customer
              </div>
              <div className="remove_cust mt5">
                Remove Customer
              </div>
              <div className="trc_line mt15 mb15"></div>
              <div className="sub_line1">
                <div className="sl_1">Sub Total: </div>
                <div className="sl_2">$26.00</div>
              </div>
              <div className="sub_line1">
                <div className="sl_1">20% Sales Tax: </div>
                <div className="sl_2">$26.00</div>
              </div>
              <div className="sub_line1">
                <div className="sl_1">Total: </div>
                <div className="sl_2">$26.00</div>
              </div>              
              <div className="till_ni_btn_cancel mb15" style={{width:'6rem'}} >
                Cancel Sale
              </div>
              <div className="trc_ntxt">Comment</div>
              <textarea name="" id="" cols="30" rows="4" placeholder='Type here' className='txt_a_l mb15' ></textarea>
              <div className="till_ni_btn mb20" style={{width:'7rem'}} >
                Complete Sale
              </div>
              <div className="till_ss_btn mb20"style={{width:'8rem'}} >
                Suspended Sales 
              </div>
              <div className="sub_line1 mb9">
                <div className="sl_1">Payment Total: </div>
                <div className="sl_2">$26.00</div>
              </div>
              <div className="sub_line1 mb9">
                <div className="sl_1">Amount Due: </div>
                <div className="sl_2">$0.00</div>
              </div>
              <div className="sub_line1 mb9">
                <div className="sl_1">Payment Type: </div>
                <select name="" id="" className='tc_select' >
                  <option value="">Debit Card</option>
                </select>
              </div>
              <div className="sub_line1 mb9">
                <div className="sl_1">Amount Tendered: </div>
                <input type="text" name="" id="" className='tc_input' placeholder='0.00' />
              </div>
              <div className="till_ni_btn mt15 mb15" style={{width:'6.5rem'}} >
                Add Payment
              </div>
              <div className="tc_mini_header3">
                <div>Delete</div>
                <div>Type</div>
                <div>Amount</div>
              </div>
              <div className="tc_body_mini3">
                <div className="tc_body_mini3_row">
                  <div>
                    <svg width="25" height="18" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M22.3739 10.2559C22.3739 10.3437 21.6855 19.0505 21.2923 22.7149C21.0461 24.9636 19.5964 26.3275 17.4219 26.3663C15.7511 26.4037 14.1155 26.4166 12.5063 26.4166C10.7979 26.4166 9.12712 26.4037 7.50534 26.3663C5.4037 26.3159 3.95277 24.9248 3.71912 22.7149C3.31462 19.0376 2.63877 10.3437 2.62621 10.2559C2.61365 9.99109 2.69907 9.73923 2.87243 9.53515C3.04327 9.34657 3.28949 9.23291 3.54827 9.23291H21.4644C21.7219 9.23291 21.9556 9.34657 22.1402 9.53515C22.3123 9.73923 22.399 9.99109 22.3739 10.2559Z" fill="#C03221"/>
                      <path d="M24.125 5.72003C24.125 5.18917 23.7067 4.77327 23.2042 4.77327H19.4381C18.6718 4.77327 18.006 4.22821 17.8351 3.45969L17.6241 2.5181C17.3289 1.38018 16.3101 0.583252 15.1669 0.583252H9.83432C8.6786 0.583252 7.66986 1.38018 7.36334 2.5801L7.16612 3.46098C6.99402 4.22821 6.32822 4.77327 5.56319 4.77327H1.79706C1.29332 4.77327 0.875 5.18917 0.875 5.72003V6.21085C0.875 6.72879 1.29332 7.1576 1.79706 7.1576H23.2042C23.7067 7.1576 24.125 6.72879 24.125 6.21085V5.72003Z" fill="#C03221"/>
                    </svg>
                  </div>
                  <div style={{color:'#5B5B5B'}} >Cash</div>
                  <div style={{color:'#1E1E1E',fontWeight:'600'}} >$17.00</div>
                </div>
                <div className="tc_body_mini3_row">
                  <div>
                    <svg width="25" height="18" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M22.3739 10.2559C22.3739 10.3437 21.6855 19.0505 21.2923 22.7149C21.0461 24.9636 19.5964 26.3275 17.4219 26.3663C15.7511 26.4037 14.1155 26.4166 12.5063 26.4166C10.7979 26.4166 9.12712 26.4037 7.50534 26.3663C5.4037 26.3159 3.95277 24.9248 3.71912 22.7149C3.31462 19.0376 2.63877 10.3437 2.62621 10.2559C2.61365 9.99109 2.69907 9.73923 2.87243 9.53515C3.04327 9.34657 3.28949 9.23291 3.54827 9.23291H21.4644C21.7219 9.23291 21.9556 9.34657 22.1402 9.53515C22.3123 9.73923 22.399 9.99109 22.3739 10.2559Z" fill="#C03221"/>
                      <path d="M24.125 5.72003C24.125 5.18917 23.7067 4.77327 23.2042 4.77327H19.4381C18.6718 4.77327 18.006 4.22821 17.8351 3.45969L17.6241 2.5181C17.3289 1.38018 16.3101 0.583252 15.1669 0.583252H9.83432C8.6786 0.583252 7.66986 1.38018 7.36334 2.5801L7.16612 3.46098C6.99402 4.22821 6.32822 4.77327 5.56319 4.77327H1.79706C1.29332 4.77327 0.875 5.18917 0.875 5.72003V6.21085C0.875 6.72879 1.29332 7.1576 1.79706 7.1576H23.2042C23.7067 7.1576 24.125 6.72879 24.125 6.21085V5.72003Z" fill="#C03221"/>
                    </svg>
                  </div>
                  <div style={{color:'#5B5B5B'}} >Debit Card</div>
                  <div style={{color:'#1E1E1E',fontWeight:'600'}} >$17.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Till
