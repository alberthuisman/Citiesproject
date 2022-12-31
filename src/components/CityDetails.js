import React from 'react'
import { useParams } from 'react-router-dom'

export default function CityDetails({cities}) {
    const {cityName } = useParams();
    const currentCity = cities.filter(item => item.cityName === cityName);

  return (
    <div className='city-details-container'>
        <img className="detail-image" src={currentCity[0].imageUrl} alt="city"/>
        <h3>{currentCity[0].cityName.toUpperCase()}</h3>
        <h3>{currentCity[0].description}</h3>
    </div>
  )
}
