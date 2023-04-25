import React from 'react'
import Button from 'react-bootstrap/Button'
import './ArtistPick.css'
import ArtistCarousel from './ArtistCarousel/ArtistCarousel'
import Test from '../../Parallax/Test'
import Artist from '../../Artist/Artist'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ArtistPick = () => {

  const navigate = useNavigate();
  
  return (
    <div className='art-container'>
      <label className='card-container subtext'>
        BEAUTIFY YOUR LIVING SPACE
      </label>
      <p className='card-container desctext'>Shop for exquisite art that reflects <br /> your personal style.</p>
      <Test />
      <div className='container-two'>
        <label className='card-container subtext'>
          A JOURNEY THROUGH ART
        </label>
        <p className='card-container desctext'>Let art be your guide on a <br /> journey of creativity.</p>
        <div className='card-container caros'><ArtistCarousel /></div>
        <div className='card-container art-button'><Button variant="dark" onClick={() => navigate('/products')}>See More</Button></div>
      </div>
      <Artist />
    </div>
  )
}

export default ArtistPick
