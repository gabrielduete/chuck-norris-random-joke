import * as React from 'react'
import { Autocomplete, TextField, Button } from '@mui/material'

const App = () => {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ]

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Dog Name" />}
      />
      <Button variant="contained">SEARCH</Button>
    </div>
  )
}

export default App
