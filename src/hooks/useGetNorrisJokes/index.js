import axios from 'axios'

const useGetNorrisJokes = () => {
  const fetchJokes = async () => {
    try {
      const joke = await axios.get(
        'https://api.api-ninjas.com/v1/chucknorris',
        {
          headers: { 'X-Api-Key': 'UHIA0ZIW5wr1WR9t1DegqA==uLJPR9E2uI88eGAt' },
          contentType: 'application/json',
        }
      )

      return joke
    } catch (error) {
      console.error(error)
    }
  }

  return { fetchJokes }
}

export default useGetNorrisJokes
