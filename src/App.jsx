
import './App.css'
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Stack,Button } from '@mui/material'



function App() {
  const sliderRef = useRef(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease-in-out',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };

  return (
      <div>
  
      <div className='container'>
        <nav className="navbar navbar-expand-lg nav1">
     
       <div className="div1"><a className="navbar-brand a2 ms-3" href="#">CALICO</a></div>
       <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link a1 tag" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tag" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tag" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link tag" href="#">Contact</a>
              </li>
             
            
            </ul>
            <div className="" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                    <a className="nav-link" href="#"><i class="fa-solid fa-phone"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i class="fa-brands fa-facebook"></i></a>
                  </li>
              </ul>
             </div>
            
          </div>
        
       </div>
    </nav> 
    {/* First section  */}
   <div className='div2'>
      <div className="parallax-container">
            <div className="parallax-section parallax-section1"></div>
            <div className="content">
              <h1 className='heading1'>CALICO</h1>
              <p className='para1'>PHOTOGRAPHY</p>
            </div>
          </div> 
   </div>
  
  {/* Fresh Seasonal */}
  
  <div className='div3 mt-5 p-5'>
  <h1 className='heading2'>Nurtured to perfection</h1>
  <p className='para2'>Capturing moments is easy but aptly capturing the essence of the moment and the plethora of emotions it possesses is what sets Calico studio Photography & Films apart</p>
  </div>
  
  {/* 3 cards and shop all button  */}
  
 
  <div>

  <div style={{ position: 'relative', zIndex: '2' }}className='mt-5'>
        <Slider ref={sliderRef} {...sliderSettings} autoplay={true} autoplaySpeed={2000}>
          <div>
  <div className="row">
    <div className="col-lg-4 g-4">
  <img src="https://images.pexels.com/photos/13942314/pexels-photo-13942314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
 
</div>
    
    <div className="col-lg-4 g-4">
<img src="https://images.pexels.com/photos/19314463/pexels-photo-19314463/free-photo-of-elegant-couple-on-wedding-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

    </div>

    <div className="col-lg-4 g-4">
<img src="https://images.pexels.com/photos/14089126/pexels-photo-14089126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


    </div>
    </div>
  </div>



  <div>
  <div className="row">
    <div className="col-lg-4 g-4">
  <img src="https://images.pexels.com/photos/3650423/pexels-photo-3650423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  


</div>
    
    <div className="col-lg-4 g-4">
<img src="https://images.pexels.com/photos/2909501/pexels-photo-2909501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


    </div>

    <div className="col-lg-4 g-4">
<img src="https://images.pexels.com/photos/2496344/pexels-photo-2496344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


    </div>
    </div>
  </div>



  <div>
  <div className="row">
    <div className="col-lg-4 g-4">
  <img src="https://images.pexels.com/photos/11391118/pexels-photo-11391118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  


</div>
    
    <div className="col-lg-4 g-4">
<img src="https://images.pexels.com/photos/12720350/pexels-photo-12720350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


    </div>

    <div className="col-lg-4 g-4">
<img src="https://images.pexels.com/photos/3673470/pexels-photo-3673470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

<div className='div6'>
  <h5 className='heading3 mt-4'>FIND MORE</h5>
</div>
    </div>
    </div>
  </div>

  
           








 </Slider>
      </div>


      
      <div style={{ position: 'absolute', top:'1500px', right: '20px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', zIndex: '3' }}>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '10px',
              height: '10px',
              marginBottom: '5px',
              background: index === currentSlide ? 'green' : 'gray',
              border: 'none',
              cursor: 'pointer',
             
            }}
          />
        ))}
      </div>
 <div className='div7 p-5'> <button type="button" className='butt1'>ENQUIRE NOW</button></div>
</div>

{/*  */}

<div className='div2'>
<div class="parallax-container">
          <div class="parallax-section parallax-section2"></div>
          <div class="content">
            <h1 className='heading4'>Over years We are providing excellent services
to make your events memorable</h1>
            <p className='para5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur, recusandae facilis delectus cum exercitationem rerum ex quo doloremque aut accusamus? Odit dolor harum perferendis inventore vero repellat deleniti id?</p>

            <div className='div7 p-5'> <button type="button" className='butt2'>Find More</button></div>
          </div>
        </div> 
</div>
  
  
  
  
  
  
        

{/* footer */}
 
 
<div className='container'>
   <div className="row p-5 row1">
  
    <div className="col-lg-3 p-5  border border-light " >
  <div className="d1 ms-4">
  <h1 className='p-3' style={{color:'white'}}>CALICO</h1>
  </div>
  <h6 className='head1'>PHOTOGRAPHY</h6>

    </div>
    <div className="col-lg-3 p-5  border border-light">
  <h3 className='head1'>Quick Menu</h3>
 <a href=''> Home</a> <br />
 <a href=''> Portfolio</a> <br />
  <a href="">Gallery</a> <br />
  <a href="">Contact </a>
    </div>
    <div className="col-lg-3 p-5   border border-light">
  <h3 className='head1'>Our Services</h3>
  <a href=''> Wedding Photography
</a> <br />
 <a href=''> Save the Date</a> <br />
  <a href="">Baptism</a> <br />
  <a href="">Other Events</a>
  
    </div>
    <div className="col-lg-3 p-5  border border-light">
    <h3 className='head1'>Address</h3>
  
  <p>
   Flat NO:B2b ,Newyork City Near Metrocap  </p>
  
  <p>Follow  <i class="fa-brands fa-facebook-f"></i>   <i class="fa-brands fa-instagram">  </i></p>
    </div>
   </div>
  
 </div>
    
 
 
    





















   
   
   
   
      
   



   
  
  
  











  
  </div>
  
    </div>
      
    )
  }
  
  export default App