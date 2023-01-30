import { Button, TextField } from '@mui/material'
import React from 'react'
import { DataContext } from '../../context/StepContext';
import './styles.css';

const SecondStep = () => {
  const {setCurrentStep,handleSubmit,emailAddres,setEmailAddres,country,setCountry,district,setDistrict} = DataContext()
  return (
    <form onSubmit={handleSubmit} className='container__card__step'>
            <TextField value={emailAddres} onChange={(e) => setEmailAddres(e.target.value)} label="Email Addres" variant="outlined" />
            <TextField value={country} onChange={(e) => setCountry(e.target.value)} label="Country"variant="outlined" />
            <TextField value={district} onChange={(e) => setDistrict(e.target.value)} label="District" variant="outlined" />
            <div className='container__btn__card'>
              <Button onClick={()=>setCurrentStep(0)} variant='contained' color='secondary'>Prev</Button>
              <Button type='submit' variant='contained' color='primary'>Next</Button>
            </div>
    </form>
  )
}

export default SecondStep