import React, { useRef } from 'react'
import './Diary.css'
import { useState } from 'react'

function Diary() {
  const [dateToday,setDateToday] = useState(new Date());
  const [showMakeAppmnt,setshowMakeAppmnt] = useState(false);

  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    datePickerRef.current.click();
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDateToday(selectedDate);
  };
  return (
    <>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div className='page_title'>Diary</div>
        <div className='till_ni_btn' style={{padding:'7px 16px',cursor:'pointer'}} onClick={()=>{setshowMakeAppmnt(true)}} >Make Appointment</div>
      </div>
      <div className='d_header' >
        <select className='form_input6' placeholder='Select' style={{cursor:'pointer'}} >
          <option value="0">The Practice</option>
        </select>
        <div className="dh_2">
          <div className="dh_2_con">
            <input type="text" name="" id="" placeholder='Staff Name' className='gen_input' />
            <svg width="17" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1763 10.9637L16.7491 15.5366C16.9098 15.6974 17.0001 15.9155 17 16.1429C16.9999 16.3703 16.9095 16.5884 16.7487 16.7491C16.5878 16.9098 16.3697 17.0001 16.1424 17C15.915 16.9999 15.6969 16.9095 15.5362 16.7487L10.9634 12.1758C9.59644 13.2346 7.87745 13.7328 6.15615 13.5692C4.43486 13.4055 2.84055 12.5923 1.69756 11.2949C0.554579 9.99743 -0.0512229 8.31329 0.00339672 6.58505C0.0580164 4.85682 0.768955 3.21429 1.99158 1.99163C3.21421 0.768974 4.85669 0.0580178 6.58489 0.0033968C8.31309 -0.0512242 9.99718 0.554593 11.2946 1.69761C12.592 2.84062 13.4052 4.43497 13.5688 6.15631C13.7325 7.87765 13.2342 9.59668 12.1755 10.9637H12.1763ZM6.80032 11.8995C8.15286 11.8995 9.45 11.3622 10.4064 10.4058C11.3628 9.44939 11.9001 8.15221 11.9001 6.79964C11.9001 5.44706 11.3628 4.14988 10.4064 3.19347C9.45 2.23705 8.15286 1.69975 6.80032 1.69975C5.44777 1.69975 4.15063 2.23705 3.19424 3.19347C2.23785 4.14988 1.70055 5.44706 1.70055 6.79964C1.70055 8.15221 2.23785 9.44939 3.19424 10.4058C4.15063 11.3622 5.44777 11.8995 6.80032 11.8995Z" fill="#777777"/>
            </svg>
          </div>
        </div>
        <div className="dh3_con">
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0718527 5.05404C0.0718838 4.92243 0.0978943 4.79212 0.148391 4.67059C0.198889 4.54905 0.272879 4.43868 0.366121 4.3458L4.39013 0.36995C4.57956 0.182783 4.83559 0.0785346 5.10188 0.0801376C5.36818 0.0817405 5.62293 0.189064 5.8101 0.378498C5.99727 0.567932 6.10152 0.823958 6.09991 1.09026C6.09831 1.35655 5.99099 1.61131 5.80155 1.79847L2.48181 5.06855L5.75195 8.37829C5.91462 8.57058 5.99874 8.81716 5.9875 9.06878C5.97627 9.32039 5.8705 9.5585 5.69134 9.73552C5.51217 9.91254 5.27281 10.0154 5.02108 10.0236C4.76935 10.0318 4.5238 9.94475 4.33348 9.77978L0.357634 5.75577C0.174014 5.5684 0.0713783 5.31638 0.0718527 5.05404Z" fill="#4E4E4F"/>
          </svg>
          <select className='today_min flex'>
            <option value="">Today</option>
            <option value="">Week</option>
          </select>
          
          <div className='normal_txt' >{ new Date(dateToday).toLocaleDateString('en-US',{ weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</div>
          
          <label htmlFor="datePicker">
            {/* <svg onClick={handleIconClick} width="22" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.625 5.5C20.625 4.77065 20.3353 4.07118 19.8195 3.55545C19.3038 3.03973 18.6043 2.75 17.875 2.75H17.1875V2.08183C17.1875 1.71187 16.903 1.39433 16.5331 1.37586C16.4401 1.37138 16.3472 1.38582 16.26 1.4183C16.1728 1.45079 16.0931 1.50064 16.0257 1.56484C15.9584 1.62904 15.9047 1.70625 15.8681 1.7918C15.8314 1.87734 15.8125 1.96943 15.8125 2.0625V2.75H6.1875V2.08183C6.1875 1.71187 5.90305 1.39433 5.53309 1.37586C5.44013 1.37138 5.34723 1.38582 5.26002 1.4183C5.17281 1.45079 5.0931 1.50064 5.02573 1.56484C4.95835 1.62904 4.90472 1.70625 4.86806 1.7918C4.83141 1.87734 4.81251 1.96943 4.8125 2.0625V2.75H4.125C3.39565 2.75 2.69618 3.03973 2.18046 3.55545C1.66473 4.07118 1.375 4.77065 1.375 5.5V6.01562C1.375 6.06121 1.39311 6.10492 1.42534 6.13716C1.45757 6.16939 1.50129 6.1875 1.54688 6.1875H20.4531C20.4987 6.1875 20.5424 6.16939 20.5747 6.13716C20.6069 6.10492 20.625 6.06121 20.625 6.01562V5.5Z" fill="#4E4E4F"/>
              <path d="M1.375 17.875C1.375 18.6043 1.66473 19.3038 2.18046 19.8195C2.69618 20.3353 3.39565 20.625 4.125 20.625H17.875C18.6043 20.625 19.3038 20.3353 19.8195 19.8195C20.3353 19.3038 20.625 18.6043 20.625 17.875V7.69141C20.625 7.65722 20.6114 7.62443 20.5872 7.60026C20.5631 7.57608 20.5303 7.5625 20.4961 7.5625H1.50391C1.46972 7.5625 1.43693 7.57608 1.41276 7.60026C1.38858 7.62443 1.375 7.65722 1.375 7.69141V17.875ZM16.1562 8.9375C16.3602 8.9375 16.5596 8.99798 16.7292 9.1113C16.8988 9.22461 17.0309 9.38567 17.109 9.57411C17.1871 9.76254 17.2075 9.96989 17.1677 10.1699C17.1279 10.37 17.0297 10.5537 16.8855 10.698C16.7412 10.8422 16.5575 10.9404 16.3574 10.9802C16.1574 11.02 15.95 10.9996 15.7616 10.9215C15.5732 10.8434 15.4121 10.7113 15.2988 10.5417C15.1855 10.3721 15.125 10.1727 15.125 9.96875C15.125 9.69525 15.2337 9.43294 15.427 9.23955C15.6204 9.04615 15.8827 8.9375 16.1562 8.9375ZM16.1562 12.375C16.3602 12.375 16.5596 12.4355 16.7292 12.5488C16.8988 12.6621 17.0309 12.8232 17.109 13.0116C17.1871 13.2 17.2075 13.4074 17.1677 13.6074C17.1279 13.8075 17.0297 13.9912 16.8855 14.1355C16.7412 14.2797 16.5575 14.3779 16.3574 14.4177C16.1574 14.4575 15.95 14.4371 15.7616 14.359C15.5732 14.2809 15.4121 14.1488 15.2988 13.9792C15.1855 13.8096 15.125 13.6102 15.125 13.4062C15.125 13.1327 15.2337 12.8704 15.427 12.677C15.6204 12.4836 15.8827 12.375 16.1562 12.375ZM12.7188 8.9375C12.9227 8.9375 13.1221 8.99798 13.2917 9.1113C13.4613 9.22461 13.5934 9.38567 13.6715 9.57411C13.7496 9.76254 13.77 9.96989 13.7302 10.1699C13.6904 10.37 13.5922 10.5537 13.448 10.698C13.3037 10.8422 13.12 10.9404 12.9199 10.9802C12.7199 11.02 12.5125 10.9996 12.3241 10.9215C12.1357 10.8434 11.9746 10.7113 11.8613 10.5417C11.748 10.3721 11.6875 10.1727 11.6875 9.96875C11.6875 9.69525 11.7961 9.43294 11.9895 9.23955C12.1829 9.04615 12.4452 8.9375 12.7188 8.9375ZM12.7188 12.375C12.9227 12.375 13.1221 12.4355 13.2917 12.5488C13.4613 12.6621 13.5934 12.8232 13.6715 13.0116C13.7496 13.2 13.77 13.4074 13.7302 13.6074C13.6904 13.8075 13.5922 13.9912 13.448 14.1355C13.3037 14.2797 13.12 14.3779 12.9199 14.4177C12.7199 14.4575 12.5125 14.4371 12.3241 14.359C12.1357 14.2809 11.9746 14.1488 11.8613 13.9792C11.748 13.8096 11.6875 13.6102 11.6875 13.4062C11.6875 13.1327 11.7961 12.8704 11.9895 12.677C12.1829 12.4836 12.4452 12.375 12.7188 12.375ZM12.7188 15.8125C12.9227 15.8125 13.1221 15.873 13.2917 15.9863C13.4613 16.0996 13.5934 16.2607 13.6715 16.4491C13.7496 16.6375 13.77 16.8449 13.7302 17.0449C13.6904 17.245 13.5922 17.4287 13.448 17.573C13.3037 17.7172 13.12 17.8154 12.9199 17.8552C12.7199 17.895 12.5125 17.8746 12.3241 17.7965C12.1357 17.7184 11.9746 17.5863 11.8613 17.4167C11.748 17.2471 11.6875 17.0477 11.6875 16.8438C11.6875 16.5702 11.7961 16.3079 11.9895 16.1145C12.1829 15.9211 12.4452 15.8125 12.7188 15.8125ZM9.28125 12.375C9.48521 12.375 9.68459 12.4355 9.85418 12.5488C10.0238 12.6621 10.1559 12.8232 10.234 13.0116C10.3121 13.2 10.3325 13.4074 10.2927 13.6074C10.2529 13.8075 10.1547 13.9912 10.0105 14.1355C9.86623 14.2797 9.68248 14.3779 9.48244 14.4177C9.28239 14.4575 9.07504 14.4371 8.88661 14.359C8.69817 14.2809 8.53711 14.1488 8.4238 13.9792C8.31048 13.8096 8.25 13.6102 8.25 13.4062C8.25 13.1327 8.35865 12.8704 8.55205 12.677C8.74544 12.4836 9.00775 12.375 9.28125 12.375ZM9.28125 15.8125C9.48521 15.8125 9.68459 15.873 9.85418 15.9863C10.0238 16.0996 10.1559 16.2607 10.234 16.4491C10.3121 16.6375 10.3325 16.8449 10.2927 17.0449C10.2529 17.245 10.1547 17.4287 10.0105 17.573C9.86623 17.7172 9.68248 17.8154 9.48244 17.8552C9.28239 17.895 9.07504 17.8746 8.88661 17.7965C8.69817 17.7184 8.53711 17.5863 8.4238 17.4167C8.31048 17.2471 8.25 17.0477 8.25 16.8438C8.25 16.5702 8.35865 16.3079 8.55205 16.1145C8.74544 15.9211 9.00775 15.8125 9.28125 15.8125ZM5.84375 12.375C6.04771 12.375 6.24709 12.4355 6.41668 12.5488C6.58627 12.6621 6.71845 12.8232 6.7965 13.0116C6.87455 13.2 6.89498 13.4074 6.85519 13.6074C6.81539 13.8075 6.71718 13.9912 6.57295 14.1355C6.42873 14.2797 6.24498 14.3779 6.04494 14.4177C5.84489 14.4575 5.63754 14.4371 5.44911 14.359C5.26067 14.2809 5.09961 14.1488 4.9863 13.9792C4.87298 13.8096 4.8125 13.6102 4.8125 13.4062C4.8125 13.1327 4.92115 12.8704 5.11455 12.677C5.30794 12.4836 5.57025 12.375 5.84375 12.375ZM5.84375 15.8125C6.04771 15.8125 6.24709 15.873 6.41668 15.9863C6.58627 16.0996 6.71845 16.2607 6.7965 16.4491C6.87455 16.6375 6.89498 16.8449 6.85519 17.0449C6.81539 17.245 6.71718 17.4287 6.57295 17.573C6.42873 17.7172 6.24498 17.8154 6.04494 17.8552C5.84489 17.895 5.63754 17.8746 5.44911 17.7965C5.26067 17.7184 5.09961 17.5863 4.9863 17.4167C4.87298 17.2471 4.8125 17.0477 4.8125 16.8438C4.8125 16.5702 4.92115 16.3079 5.11455 16.1145C5.30794 15.9211 5.57025 15.8125 5.84375 15.8125Z" fill="#4E4E4F"/>
            </svg> */}
          </label>

          <input
            type="date"
            id="datePicker"
            ref={datePickerRef}
            value={dateToday.toISOString().split('T')[0]}
            onChange={handleDateChange}
            style={{width: '1.18rem',border:'none'}}
          />
                    
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00019 5C7.00095 5.1316 6.97572 5.26207 6.92596 5.3839C6.87619 5.50574 6.80287 5.61656 6.71019 5.71L2.71019 9.71C2.52188 9.8983 2.26649 10.0041 2.00019 10.0041C1.73388 10.0041 1.47849 9.8983 1.29018 9.71C1.10188 9.52169 0.996094 9.2663 0.996094 9C0.996094 8.7337 1.10188 8.4783 1.29018 8.29L4.59019 5L1.30019 1.71C1.13636 1.5187 1.05075 1.27262 1.06047 1.02094C1.07019 0.769269 1.17453 0.530529 1.35262 0.352434C1.53072 0.174339 1.76946 0.0700083 2.02113 0.0602875C2.27281 0.0505667 2.51888 0.136171 2.71019 0.299997L6.71019 4.3C6.89493 4.48626 6.99908 4.73766 7.00019 5Z" fill="#4E4E4F"/>
          </svg>
        </div>
      </div>
      <div className="report_body2" style={{paddingBottom: '5rem'}} >
        <div className="d_body_con">
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <img src="/profile.jpeg" className='d_profile_img' alt="" />
              <div className="normal_txt" style={{fontWeight:'600',marginTop:'5px'}} >Nick</div>
            </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <img src="/profile.jpeg" className='d_profile_img' alt="" />
              <div className="normal_txt" style={{fontWeight:'600',marginTop:'5px'}} >Nick</div>
            </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <img src="/profile.jpeg" className='d_profile_img' alt="" />
              <div className="normal_txt" style={{fontWeight:'600',marginTop:'5px'}} >Nick</div>
            </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <img src="/profile.jpeg" className='d_profile_img' alt="" />
              <div className="normal_txt" style={{fontWeight:'600',marginTop:'5px'}} >Nick</div>
            </div>
          </div>
        </div>        
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_green">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_orange">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>          
        </div>
        <div className='d_line' ></div>
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_blue">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>  
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_red">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
        </div>
        <div className='d_line' ></div>            
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_orange">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_blue">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>          
        </div>
        <div className='d_line' ></div>
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_green">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>  
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_red">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
        </div>
        <div className='d_line' ></div>            
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_green">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_red">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>          
        </div>
        <div className='d_line' ></div>
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_orange">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>  
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_red">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
        </div>
        <div className='d_line' ></div>            
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_green">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_orange">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>          
        </div>
        <div className='d_line' ></div>
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_blue">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>  
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_red">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
        </div>
        <div className='d_line' ></div>            
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_green">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_orange">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>          
        </div>
        <div className='d_line' ></div>
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_blue">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>  
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_red">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
        </div>
        <div className='d_line' ></div>            
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_green">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_orange">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>          
        </div>
        <div className='d_line' ></div>
        <div className="d_body_con">
          <div className="db_elem flex">
            <div className="normal_txt" style={{fontWeight:'600'}} >9:30 <span style={{fontSize:'11px'}} > am</span> </div>
          </div>
          <div className="db_elem"></div>
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_blue">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
          <div className="db_elem"></div>  
          <div className="db_elem">
            <div className='flex' style={{flexDirection:'column',height: '100%'}}>
              <div className="colored_box bg_red">
                <div className="normal_txt">9:00 - 9:30</div>
                <div className="normal_txt f14_600">Lorem Ipsum</div>
                <div className="normal_txt">Contact Lens</div>
              </div>
            </div>
          </div>          
        </div>
      </div>
      { showMakeAppmnt &&
        <div className="popup">
          <div className="make_a_con">
            <div className='ma_title' >Make Appointment</div>
            <div className='line_6' ></div>
            <div className="normal_txt" style={{marginBottom:'0.7rem'}} >Patient Search</div>
            <input type="text" className='form_input' placeholder='Type here' />
            <div style={{display:'flex',justifyContent:'end',alignItems:'center'}} >
              <div className="add_sig_btn" style={{width:'6rem',marginTop:'3rem',marginBottom:'3rem'}} >Search</div>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
              <div className='till_ni_btn' style={{padding:'7px 16px',cursor:'pointer'}} >New Patient</div>
            </div>
            <svg className='login_xmark' onClick={()=>{setshowMakeAppmnt(false)}} xmlns="http://www.w3.org/2000/svg" fill='#e3e3e3' height="1.5em" viewBox="0 0 512 512"><style></style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
          </div>
        </div>
      }
    </>
  )
}

export default Diary
