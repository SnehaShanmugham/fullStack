import React from 'react'
import ImageSlider from '../../component/ImageSlider'
import Navbar from '../../component/Header/Navbar'
import '../../assets/css/Home.css'
import Footer from '../../component/Footer/Footer'

import boat from '../../assets/images/boat.jpg';
import boat2 from '../../assets/images/boat2.jpg';
import boathouse from '../../assets/images/boathouse.jpg';
import Explore from './Explore'

const Home = () => {

  const slides = [
    { image: boat },
    { image: boat2 },
    { image: boathouse }
];

  return (
    <div>
      <Navbar/>
      <ImageSlider slides={slides} autoPlay={true} />
    
    {/* <div className='landing'>
        <div className='overlay'></div>
        <div className='content'>
            <h1>WELCOME TO BOATHOUSE</h1>
            <p>Happy Journey</p>
            <p>Beautiful Memories are Waiting</p>
            <button className='homebutton'>Book Now</button>
        </div> 
</div> */}
<Explore/>


<Footer/>
    </div>
  )
}

export default Home