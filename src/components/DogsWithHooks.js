import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function DogsWithHooks({ match }) {
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      if (response) {
        let json = await response.json()
        console.log('response', response)
        setData(json)
      }
    }
    fetchData()
  }, [])

  const breed = match.params.breed

  return (
    <div>
      <h1>Dogs</h1>
      <h1>Breed: {breed}</h1>
      <h1>Random image:</h1>
      <h1>
        <img src={data && data.message} alt={data && data.message} />
      </h1>
      <h2>{data && data.message}</h2>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}
