import React, { useState } from 'react'
import axios from 'axios'
import './Vejr.css'

function Vejr() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f9de4a24900764d24efc22786a7284db`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="Vejr" id='Vejr'>
      <div className="title">
        <h1>Find vejrudsigten</h1>
      </div>

      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Søg eftter by eller sted'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Føles som</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Fugtighed</p>
            </div>
            <div className="Cloud">
            {data.clouds ? <p className='bold'>{data.clouds.all}%</p> : null}
            <p>Skyer</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Vejr;