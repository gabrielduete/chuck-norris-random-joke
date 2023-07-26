import * as React from 'react'
import { Typography, CircularProgress } from '@mui/material'

const ShowJoke = ({ joke, isLoading }) => {
  return (
    <Typography marginTop="36px" variant="h4" component="h1">
      {isLoading ? <CircularProgress /> : joke}
    </Typography>
  )
}

export default ShowJoke
