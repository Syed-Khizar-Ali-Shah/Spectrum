import React from 'react'
import './Admin.css'

function Admin() {
  return (
    <>
        <div className='page_title' >Admin</div>
        <div className="admin_line1_con">
          <div className="admin_l1_elem">
            <div className="admin_li_img flex">
              <img src='/software-engineer.png' alt="" />
            </div>
            <div className='flex' style={{flexDirection:'column',gap:'10px'}} >
              <div className="a_li_txt1">Welcome, Admin</div>
              <div className="a_li_txt2">Learn Sales Force</div>
            </div>
          </div>
          <div className="admin_l1_elem">
            <div className="admin_li_img flex">
              <img src="/check-up.png" alt="" />
            </div>
            <div className='flex' style={{flexDirection:'column',gap:'10px'}} >
              <div className="a_li_txt1">Health Check</div>
              <div className="a_li_txt2">View More Details</div>
            </div>
          </div>
          <div className="admin_l1_elem">
            <div className="admin_li_img flex">
              <img src="/security.png" alt="" />
            </div>
            <div className='flex' style={{flexDirection:'column',gap:'10px'}} >
              <div className="a_li_txt1">Security Center</div>
              <div className="a_li_txt2">View More Details</div>
            </div>
          </div>
          <div className="admin_l1_elem">
            <div className="admin_li_img flex">
              <img src="/privacy.png" alt="" />
            </div>
            <div className='flex' style={{flexDirection:'column',gap:'10px'}} >
              <div className="a_li_txt1">Privacy Center</div>
              <div className="a_li_txt2">View More Details</div>
            </div>
          </div>
        </div>
        <div className="admin_line2_con">
          <div className="admin_l2_elem">
            <div className="admin_l2_img1 flex">
              <img src="/user.png" alt="" />
            </div>
            <div className="l2_1_txt">
              User
            </div>
            <div className="l2_2_txt">
              Manage User Accounts and <br /> Permissions
            </div>
            <div className="l2_3_txt">
              No activity yet
            </div>
            <div className='l2_con_bottom2' >
              <div className="con_hr"></div>
              <div className="l2_4_txt">
                Import Multiple Users
              </div>
            </div>
          </div>
          <div className="admin_l2_elem">
            <div className="a_l2_con1">
              <div className="l2_2_img2">
                <img src="/wrench.png" alt="" />
              </div>
              <div>
              <div className='a_c2_txt1' >
                Optimiser Insights
              </div>
              </div>
            </div>
            <div className="a_c2_txt2">
              Top 3 insights for the day
            </div>
            <ul className='a_c2_ul'>
              <li>Too many work flows rules</li>
              <li>File storage limite running out</li>
              <li>100 unused reports to clean up</li>
            </ul>
            <div className='l2_con_bottom2' >
              <div className="con_hr"></div>
              <div className="a_c2_txt4">Launch Optimizer</div>              
            </div>
          </div>
          <div className="admin_l2_elem">
            <div className="a_l2_con1">
              <div className="l2_2_img2" style={{background:'none'}} >
                <img src="/building.png" alt="" />
              </div>
              <div className='a_c2_txt1' >
                Optimiser Insights
              </div>
            </div>
            <div className="a_c2_txt2">
              Org ID: 0003h0001R5qh
            </div>
            <ul className='a_c2_ul'>
              <li>Org Instance: NA 1111</li>
              <li>Release version: Winter ‘21 Patch 6.2</li>
              <li>License Usage: 22/25</li>
            </ul>
            <div className='l2_con_bottom2' >
              <div className="con_hr"></div>
              <div className="a_c2_txt4">Take Action Now</div>              
            </div>
          </div>
          <div className="admin_l2_elem">
            <div className="admin_l2_img1 flex">
              <img src="/import.png" alt="" />
            </div>
            <div className="l2_1_txt">
              Import Data
            </div>
            <div className="l2_2_txt">
              Launch the Data Import <br /> Wizard to Import your Data
            </div>
            <div className="l2_3_txt">
              No activity yet
            </div>
            <div className='l2_con_bottom2' >
              <div className="con_hr"></div>
              <div className="l2_4_txt">
                Launch Data Importer
              </div>
            </div>
          </div>
        </div>
        <div className="admin_line3_con">
          <div className="admin_l3_elem">
            <div className="a_l3_header a_l3_h11">
              <img src="/check-mark.png" alt="" />
              <div>Trust Monitor</div>
            </div>
            <div className="a_l3_body">
              <div className="a_l3_body_txt1">Lorem Ipsum</div>
              <div className="l3_green_line">
                <div className="a_l3_body_txt2">Lorem Ipsum Title</div>
                <img src="/approved.png" style={{height:'0.7rem'}} alt="" />
              </div>
              <div className="a_l3_line3">
                <div className="a_l3_line3_elem">
                  <div className="l3_mini_header">
                    Title
                  </div>
                  <div className="l3_mini_body">
                    <img src="/check.png" style={{height:'0.65rem'}} alt="" />
                  </div>
                </div>
                <div className="a_l3_line3_elem">
                  <div className="l3_mini_header">
                    Title
                  </div>
                  <div className="l3_mini_body">
                    <img src="/check.png" style={{height:'0.65rem'}} alt="" />
                  </div>
                </div>
                <div className="a_l3_line3_elem">
                  <div className="l3_mini_header">
                    Title
                  </div>
                  <div className="l3_mini_body">
                    <img src="/check.png" style={{height:'0.65rem'}} alt="" />
                  </div>
                </div>
                <div className="a_l3_line3_elem">
                  <div className="l3_mini_header">
                    Title
                  </div>
                  <div className="l3_mini_body">
                    <img src="/check.png" style={{height:'0.65rem'}} alt="" />
                  </div>
                </div>
                <div className="a_l3_line3_elem">
                  <div className="l3_mini_header">
                    Title
                  </div>
                  <div className="l3_mini_body">
                    <img src="/check.png" style={{height:'0.65rem'}} alt="" />
                  </div>
                </div>
                <div className="a_l3_line3_elem">
                  <div className="l3_mini_header">
                    Title
                  </div>
                  <div className="l3_mini_body">
                    <img src="/check.png" style={{height:'0.65rem'}} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="admin_l3_elem">
            <div className="a_l3_header" style={{display:'flex',justifyContent:'space-between'}}>
              <div className='a_l3_h11' >
                <img src="/user2.png" style={{height:'1.6rem'}} alt="" />
                <div >Admin Activity</div>
              </div>
              <div className="txt_view_all">View All</div>
            </div>
            <div className="a_l3_body">
              <div className="a_b2_header">
                <div>Date</div>
                <div>User</div>
                <div>Action</div>
              </div>
              <div className="con_hr"></div>
              <div className="a_b2_body">
                <div>9/23/2022</div>
                <div>Spectrum.com</div>
                <div>Max number of streaming topics</div>
              </div>
              <div className="a_b2_body">
                <div>9/23/2022</div>
                <div>Spectrum.com</div>
                <div>Max number of streaming topics</div>
              </div>
              <div className="a_b2_body">
                <div>9/23/2022</div>
                <div>Spectrum.com</div>
                <div>Max number of streaming topics</div>
              </div>
              <div className="a_b2_body">
                <div>9/23/2022</div>
                <div>Spectrum.com</div>
                <div>Max number of streaming topics</div>
              </div>
              <div className="a_b2_body">
                <div>9/23/2022</div>
                <div>Spectrum.com</div>
                <div>Max number of streaming topics</div>
              </div>
              <div className="a_b2_body">
                <div>9/23/2022</div>
                <div>Spectrum.com</div>
                <div>Max number of streaming topics</div>
              </div>                         
            </div>
            <div className="cl_btn_con" style={{marginTop:'1rem'}} >
              <div className="place_order_btn" style={{display:'flex',alignItems:'center',padding:'8px 20px'}}>
                <svg width="26" height="17" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.27734 13C2.29568 7.45333 7.15659 3.25 12.9979 3.25C18.8393 3.25 23.6991 7.45333 24.7185 13C23.7002 18.5467 18.8393 22.75 12.9979 22.75C7.15659 22.75 2.29676 18.5467 1.27734 13H1.27734ZM12.9944 18.4173C15.9859 18.4173 18.411 15.9921 18.411 13.0006C18.411 10.0091 15.9859 7.58393 12.9944 7.58392C10.0029 7.58391 7.57774 10.009 7.57772 13.0006C7.5777 15.9921 10.0028 18.4172 12.9943 18.4173H12.9944ZM12.9956 16.25C11.8344 16.25 10.7615 15.6306 10.181 14.625C9.60042 13.6194 9.60042 12.3806 10.181 11.375C10.7615 10.3694 11.8344 9.75 12.9956 9.75C14.1567 9.75 15.2296 10.3694 15.8101 11.375C16.3907 12.3806 16.3907 13.6194 15.8101 14.625C15.2296 15.6306 14.1567 16.25 12.9956 16.25Z" fill="#4C004A"/>
                </svg>
                <div>PCSE Server is Ready</div>  
              </div>
              <div className="save_btn" style={{display:'flex',alignItems:'center',padding:'8px 20px'}}>
                <svg width="25" height="17" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 2.34375C6.8999 2.34375 2.34375 6.90039 2.34375 12.5C2.34375 18.1084 6.8916 22.6562 12.5 22.6562C18.1001 22.6562 22.6562 18.1001 22.6562 12.5C22.6562 6.89111 18.1089 2.34375 12.5 2.34375ZM12.5 17.627C11.2827 17.627 10.1153 17.1434 9.25449 16.2826C8.39373 15.4219 7.91016 14.2544 7.91016 13.0371C7.91016 11.8198 8.39373 10.6524 9.25449 9.7916C10.1153 8.93084 11.2827 8.44727 12.5 8.44727H12.7056L12.0166 7.75879C11.8884 7.63058 11.8164 7.4567 11.8164 7.27539C11.8164 7.09408 11.8884 6.9202 12.0166 6.79199C12.1448 6.66379 12.3187 6.59176 12.5 6.59176C12.6813 6.59176 12.8552 6.66379 12.9834 6.79199L14.9365 8.74512C15 8.8086 15.0504 8.88396 15.0847 8.9669C15.1191 9.04984 15.1368 9.13874 15.1368 9.22852C15.1368 9.31829 15.1191 9.40719 15.0847 9.49013C15.0504 9.57307 15 9.64844 14.9365 9.71191L12.9834 11.665C12.8552 11.7932 12.6813 11.8653 12.5 11.8653C12.3187 11.8653 12.1448 11.7932 12.0166 11.665C11.8884 11.5368 11.8164 11.363 11.8164 11.1816C11.8164 11.0003 11.8884 10.8264 12.0166 10.6982L12.8955 9.81934C12.7793 9.81445 12.6465 9.81445 12.5 9.81445C11.8626 9.81445 11.2396 10.0035 10.7096 10.3576C10.1796 10.7117 9.76657 11.215 9.52265 11.8039C9.27874 12.3927 9.21492 13.0407 9.33927 13.6658C9.46361 14.291 9.77054 14.8652 10.2212 15.3159C10.6719 15.7666 11.2462 16.0735 11.8713 16.1978C12.4964 16.3222 13.1444 16.2584 13.7333 16.0145C14.3221 15.7705 14.8254 15.3575 15.1795 14.8275C15.5337 14.2976 15.7227 13.6745 15.7227 13.0371C15.7227 12.8558 15.7947 12.6819 15.9229 12.5537C16.0511 12.4255 16.2249 12.3535 16.4062 12.3535C16.5876 12.3535 16.7614 12.4255 16.8896 12.5537C17.0178 12.6819 17.0898 12.8558 17.0898 13.0371C17.0884 14.254 16.6044 15.4206 15.7439 16.281C14.8835 17.1415 13.7169 17.6255 12.5 17.627Z" fill="#E6E6E6"/>
                </svg>
                <div>Refresh Status</div>
              </div>
            </div>   
          </div>
        </div>
    </>
  )
}
export default Admin