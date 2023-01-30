import { Step, StepLabel, Stepper, TableCell, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FirstStep from '../../components/FirstStep/FirstStep'
import FourthStep from '../../components/FourthStep/FourthStep'
import SecondStep from '../../components/SecondStep/SecondStep'
import TableComponent from '../../components/TableComponent/TableComponet'
import ThirdStep from '../../components/ThirdStep/ThirdStep'
import { DataContext } from '../../context/StepContext'

import './styles.css'

const Home = () => {
    const {currentStep ,data} = DataContext()
    const [user, setUser] = useState({})
    
    const showStep = (step) => {
        switch(step){
            case 0 :
                return <FirstStep />
            case 1: 
                return <SecondStep />
            case 2:
                return <ThirdStep />
                case 3:
                    return <FourthStep />
            default:
                return <FirstStep />
        }
    }
    useEffect(()=> {
      const getDataString = localStorage.getItem('userData');
       const dat = JSON.parse(getDataString);
       setUser(dat)
       
    },[data])

  return (
    <div>
        <h3 className='title__home'>
        React js Multi Step Aplication {currentStep}
      </h3>
      <div className='container__step'>
        <Stepper activeStep={currentStep} orientation='horizontal'>
          <Step>
              <StepLabel>----</StepLabel>
          </Step>
          <Step>
              <StepLabel>----</StepLabel>
          </Step>
          <Step>
              <StepLabel></StepLabel>
          </Step>
        </Stepper>
        {showStep(currentStep)}
      </div>
        <TableComponent>
          {console.log(user && user)}
                    {
                      user && user.length > 0 && user.map(item => {
                        return (
                          <TableRow key={item.emailAddres}>
                            <TableCell>{item.firsName}</TableCell>
                            <TableCell>{item.lastName}</TableCell>
                            <TableCell>{item.contactNumber}</TableCell>
                            <TableCell>{item.emailAddres}</TableCell>
                            <TableCell>{item.country}</TableCell>
                            <TableCell>{item.district}</TableCell>
                            <TableCell>{item.city}</TableCell>
                            <TableCell>{item.landmark}</TableCell>
                            <TableCell>{item.postalCode}</TableCell>
                          </TableRow>
                        )
                      })
                    }
        </TableComponent>
    </div>
  )
}

export default Home