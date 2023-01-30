import { Button, TextField } from '@mui/material'
import React, { useState } from 'react';
import { DataContext } from '../../context/StepContext';

const ThirdStep = () => {
  const {setCurrentStep,handleSubmit,city,setCity,landmark,setLandmark,postalCode, setPostalCode} = DataContext();
  return (
    <form onSubmit={handleSubmit} className='container__card__step'>
            <TextField value={city} onChange={(e) => setCity(e.target.value)} label="City" variant="outlined" />
            <TextField value={landmark} onChange={(e) => setLandmark(e.target.value)} label="Landmark"variant="outlined" />
            <TextField value={postalCode} onChange={(e) => setPostalCode(e.target.value)} label="Postal Code" variant="outlined" />
            <div className='container__btn__card'>
              <Button onClick={()=>setCurrentStep(1)} variant='contained' color='secondary'>Prev</Button>
              <Button type='submit' variant='contained' color='primary'>Next</Button>
            </div>
    </form>
  )
}

export default ThirdStep