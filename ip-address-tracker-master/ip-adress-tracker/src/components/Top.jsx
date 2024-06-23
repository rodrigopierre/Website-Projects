import React from 'react'
import './Top.css'
import axios from 'axios'

function Top() {

  function pegarIP() {
    const ip = document.getElementById('id-input').value;
    pegarApi(ip);
  }

  async function pegarApi(ip) {
    try {
      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rUYEqGcts4wQGsSdL6DMkHOPmk4EX&ipAddress=${ip}`);
      const data = response.data; // Armazena o resultado da API na variável 'data'
      console.log(data); // Exibe os dados no console
      localStorage.setItem('country', data.location.country);
      localStorage.setItem('ip', ip);
      localStorage.setItem('city', data.location.city);
      localStorage.setItem('isp', data.isp);
      localStorage.setItem('timezone', data.location.timezone);
      localStorage.setItem('lat', data.location.lat);
      localStorage.setItem('lng', data.location.lng);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  return (
    <div className='top-screen'>
        <h1>IP Address Tracker</h1>
        <div className='input-container'>
            <input type="text" placeholder='Search for any IP address or domain' id='id-input'/>
            <button className='input-btn' onClick={() => pegarIP()}>{'>'}</button>
        </div>
    </div>
  )
}

export default Top