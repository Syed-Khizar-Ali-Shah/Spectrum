import React from 'react'
import './SalesSummary.css'
import './SalesDetails.css'
import './StaffPerformance.css'

function StaffPerformance() {
  window.scrollTo(0,0);
    return (
    <>
        <div className='page_title' >Staff Performance</div>
        <div className="sd_body2 sd_h1_top" style={{height:'auto',marginTop:'1rem',marginBottom:'2rem',padding:'1rem 4rem'}}>           
            <div>
                <div className="input_label">Start Date</div>
                <input type="date" className='form_input' placeholder='18/08/2022' />
            </div>
            <div>
                <div className="input_label">End Date</div>
                <input type="date" className='form_input' placeholder='18/08/2023' />
            </div>
        </div>
        
        <div className="sp_line2">
            <div>
                <div className="input_label" style={{margin:'0'}} >Report: </div>
                <select name="" id="" className='sp_select' >
                    <option value="">Daily</option>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    <option value="">Quarterly</option>
                    <option value="">Annually</option>
                </select>
            </div>
        </div>

        <div className="sd_header22" style={{gridTemplateColumns: '25% 15% 15% 15% 15% 15%'}}>
            <div>Staff Name</div>
            <div>Varifocals</div>
            <div>HMAAR</div>
            <div>Polaroid</div>
            <div>High Index</div>
            <div>Transitions</div>
        </div>      
        <div className="sd_body2">
            <div className="sd_body2_in" style={{gridTemplateColumns: '25% 15% 15% 15% 15% 15%'}}>
                <div>David Lewis</div>
                <div>12345</div>
                <div>45645</div>
                <div>68452</div>
                <div>12345</div>
                <div>87345</div>
            </div>         
            <div className="sd_body2_in" style={{gridTemplateColumns: '25% 15% 15% 15% 15% 15%'}}>
                <div>Richard James</div>
                <div>12345</div>
                <div>45645</div>
                <div>68452</div>
                <div>12345</div>
                <div>87345</div>
            </div>         
            <div className="sd_body2_in" style={{gridTemplateColumns: '25% 15% 15% 15% 15% 15%'}}>
                <div>John Smith</div>
                <div>12345</div>
                <div>45645</div>
                <div>68452</div>
                <div>12345</div>
                <div>87345</div>
            </div>         
            <div className="sd_body2_in" style={{gridTemplateColumns: '25% 15% 15% 15% 15% 15%'}}>
                <div>John Smith</div>
                <div>12345</div>
                <div>45645</div>
                <div>68452</div>
                <div>12345</div>
                <div>87345</div>
            </div>         
        </div>      
    </>
  )
}

export default StaffPerformance