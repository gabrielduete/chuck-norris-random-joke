import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import ShowJoke from '../ShowJoke'
import useGetNorrisJokes from '../../hooks/useGetNorrisJokes'
import Confetti from 'react-confetti'

const SearchJoke = () => {
  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const { fetchJokes } = useGetNorrisJokes()

  const errorMessage = 'Error D: try again'

  const runConfetti = () => {
    setShowConfetti(true)

    setTimeout(() => {
      setShowConfetti(false)
    }, 4000)
  }

  const getJoke = async () => {
    setIsLoading(true)

    try {
      const { data } = await fetchJokes()

      setJoke(data?.joke)
    } catch (error) {
      console.error('Error request joke', error)
      setJoke('Error D: try again')
    } finally {
      setIsLoading(false)
      joke !== errorMessage && runConfetti()
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '750px',
          margin: '0 20px 0 20px',
        }}
      >
        {showConfetti && (
          <Confetti onConfettiComplete={!showConfetti} opacity={0.6} />
        )}
        <Button
          sx={{
            bgcolor: '#262626',
          }}
          variant="contained"
          onClick={() => getJoke()}
        >
          RANDOM JOKE NORRIS
        </Button>
        <ShowJoke joke={joke} isLoading={isLoading} />
      </Box>
    </Box>
  )
}

export default SearchJoke
