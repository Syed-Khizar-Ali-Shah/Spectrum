import React from 'react';
// import "./Patient.css"
import { useState } from 'react';
import Patient2 from './Patient2';
import Patient1 from './Patient1';
function Patient() {
  const [patient, setpatient] = useState(false)
  const [bgcolor, setbgcolor] = useState(false)
  return (
    <>
      {
        patient ? <Patient2 setpatient={setpatient} setbgcolor={setbgcolor} bgcolor={bgcolor}/> : <Patient1 setpatient={setpatient} setbgcolor={setbgcolor} bgcolor={bgcolor}/>
      }
    </>
  )
}

export default Patient
