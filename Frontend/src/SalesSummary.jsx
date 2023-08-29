import React from 'react'
import './SalesSummary.css'

function SalesSummary() {
  window.scrollTo(0,0);
    return (
    <>
        <div className='page_title' >Sales Summary</div>
        <div className="ss_header11">
            <div></div>
            <div>Private S/T</div>
            <div>C/L Test Fees</div>
            <div>Spectacles</div>
            <div>Contact Lens</div>
            <div>MISC</div>
            <div>NHS S/T</div>
            <div>NHS GOS 3 Vouchers</div>
        </div>
        <div className="ss_body1" style={{height:'auto'}}>
            <div className="ss_body_in">
                <div style={{color:'#4C004A',fontWeight:'600',borderRight:'1px solid #D0D0D0'}}>Daily</div>
                <div>Loerm</div>
                <div>$57.7</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
            </div>
            <div className="ss_body_in">
                <div style={{color:'#4C004A',fontWeight:'600',borderRight:'1px solid #D0D0D0'}}>Weekly</div>
                <div>Loerm</div>
                <div>$57.7</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
            </div>
            <div className="ss_body_in">
                <div style={{color:'#4C004A',fontWeight:'600',borderRight:'1px solid #D0D0D0'}}>Monthly</div>
                <div>Loerm</div>
                <div>$57.7</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
            </div>
            <div className="ss_body_in">
                <div style={{color:'#4C004A',fontWeight:'600',borderRight:'1px solid #D0D0D0'}}>Quarterly</div>
                <div>Loerm</div>
                <div>$57.7</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
            </div>
            <div className="ss_body_in">
                <div style={{color:'#4C004A',fontWeight:'600',borderRight:'1px solid #D0D0D0'}}>Yearly</div>
                <div>Loerm</div>
                <div>$57.7</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
                <div>Loerm</div>
            </div>
        </div>      
    </>
  )
}

export default SalesSummary
