import React, { useState } from 'react'
import './Stock.css'
import StockAdd from './StockAdd'
import StockUpdate from './StockUpdate';

function Stock() {
  const [stockAdd,setstock_add] = useState(true); //stock add page open
  const [blueCol,setblueCol] = useState('#4C004A');
  return (
    <>
        <div className='page_title' >Stock</div>
        <div className="stock_header">
          <div className="stock_child" onClick={()=>{setstock_add(true)}} 
            style={{background: stockAdd?blueCol:'',color: stockAdd?'white':'#212529' ,cursor:'pointer',borderRadius: '4px 0px 0px 0px'}} >
              Stock Add
          </div>
          <div className="stock_child" onClick={()=>{setstock_add(false)}}
            style={{background: !stockAdd?blueCol:'',color: !stockAdd?'white':'#212529',cursor:'pointer'}} >
              Stock Update
          </div>
        </div>
        { stockAdd?<>
            <StockAdd blueCol={blueCol} />
          </>:<>
            <StockUpdate />
          </>
        }
    </>
  )
}

export default Stock
