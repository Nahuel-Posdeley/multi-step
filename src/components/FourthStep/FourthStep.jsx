import { CheckCircleOutline } from '@mui/icons-material'
import { Alert } from '@mui/material'
import React from 'react'

const FourthStep = () => {
  return (
    <div>
        <Alert style={{margin: '108px 0'}} icon={<CheckCircleOutline fontSize="inherit" />} severity="success">
            Completed !
        </Alert>
    </div>
  )
}

export default FourthStep