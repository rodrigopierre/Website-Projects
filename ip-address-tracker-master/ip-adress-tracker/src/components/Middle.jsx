import React, { useEffect, useState } from 'react'
import './Middle.css'

function Middle() {
    const [ip, setIP] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isp, setIsp] = useState('');
    const [timezone, setTimezone] = useState('');

    useEffect(() => {
        setIP(localStorage.getItem('ip'));
        setCity(localStorage.getItem('city'));
        setCountry(localStorage.getItem('country'));
        setIsp(localStorage.getItem('isp'));
        setTimezone(localStorage.getItem('timezone'));
    }, []);

  return (
    <div className='middle-container'>
        <div className='middle'>
            <div className='middle1'>
                <p>IP Address</p>
                <h1>{ip}</h1>
            </div>
            <div className='middle2'>
                <p>Location</p>
                <h1>{city}, {country}</h1>
            </div>
            <div className='middle3'>
                <p>Timezone</p>
                <h1>utc {timezone}</h1>
            </div>
            <div className='middle4'>
                <p>isp</p>
                <h1>{isp}</h1>
            </div>
        </div>
    </div>
  )
}

export default Middle