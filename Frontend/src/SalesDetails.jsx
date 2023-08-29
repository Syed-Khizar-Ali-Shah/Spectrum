import React from 'react'
import './SalesSummary.css'
import './SalesDetails.css'

function SalesDetails() {
  window.scrollTo(0,0);
    return (
    <>
        <div className='page_title' >Sales Details</div>
        <div className="sd_body2 sd_h1_top" style={{height:'auto',marginTop:'1rem',marginBottom:'2rem',padding:'1rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'1rem'}} >
                <div>
                    <div className="input_label">Measure</div>
                    <input type="text" className='form_input' placeholder='Revenue' />
                </div>
                <div>
                    <div className="input_label" style={{visibility:'hidden'}} >Measure</div>
                    <input type="text" className='form_input' placeholder='Buy Outlets' />
                </div>
            </div>
            <div>
                <div className="input_label">Date Range</div>
                <input type="date" className='form_input' placeholder='18/08/2022 - 19/09/2023' />
            </div>
        </div>
        
        <div className="sd_header11">            
            <div>Outlet</div>
            <div>Q1</div>
            <div>Q2</div>
            <div>Q3</div>
            <div>Q4</div>
        </div>
        <div className="sd_body1" style={{height:'auto'}}>
            <div className="sd_body1_in">
                <div className='sd_fd'>Private S/T</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
            <div className="sd_body1_in">
                <div className='sd_fd'>C/L Test Fees</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
            <div className="sd_body1_in">
                <div className='sd_fd'>Spectacles</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
            <div className="sd_body1_in">
                <div className='sd_fd'>Contact Lens</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
            <div className="sd_body1_in">
                <div className='sd_fd'>MISC</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
            <div className="sd_body1_in">
                <div className='sd_fd'>NHS S/T</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
        </div>

        <div className="sd_header22">            
            <div>Revenue</div>
            <div>Cost of Goods</div>
            <div>Gross Profit</div>
            <div>Margin</div>
        </div>      
        <div className="sd_body2" style={{height:'auto'}}>
            <div className="sd_body2_in">
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
            <div className="sd_body2_in">
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>
            <div className="sd_body2_in">
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
                <div>$57.00</div>
            </div>           
        </div>      
    </>
  )
}

export default SalesDetails
