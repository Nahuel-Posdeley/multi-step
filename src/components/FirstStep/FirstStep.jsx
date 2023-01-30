import { Button, TextField } from '@mui/material'
import React from 'react'
import { DataContext } from '../../context/StepContext'
import './styles.css'

const FirstStep = () => {
    const {setCurrentStep,handleSubmit,firsName,setFirsName,lastName,setLastName,contactNumber,setContactNumber} = DataContext()

  return (
    <form onSubmit={handleSubmit} className='container__card__step'>
            <TextField value={firsName} onChange={(e)=> setFirsName(e.target.value)} label="First name" variant="outlined" />
            <TextField value={lastName} onChange={(e)=> setLastName(e.target.value)} label="Last name"variant="outlined" />
            <TextField value={contactNumber} onChange={(e)=> setContactNumber(e.target.value)} label="Contact Number" variant="outlined" />
            <div className='container__btn__card'>
                <Button onClick={()=>setCurrentStep(0)} variant='contained' color='secondary'>Prev</Button>
                <Button type='submit' variant='contained' color='primary'>Next</Button>
            </div>
    </form>
  )
}

export default FirstStep