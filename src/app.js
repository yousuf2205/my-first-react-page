
import React, {  useState, useEffect, useRef } from 'react';

import naturaimg from './media/natura logo_natura green 2 (1).png';
import heroimg2 from './media/natura ant leaf 3.png';
import Marqueeimg1 from './media/m_img1.png';
import Marqueeimg2 from './media/m_img2.png';
import Marqueeimg3 from './media/m_img3.png';
import Marqueeimg4 from './media/m_img4.png';
import Marqueeimg5 from './media/m_img5.png';
import Marqueeimg6 from './media/m_img6.png';
import Marqueeimg7 from './media/m_img7.png';
import Marqueeimg8 from './media/m_img8.png';
import Marqueeimg9 from './media/m_img9.png';
import smallant from './media/natura ant leaf 3.png';
function App() {
    const menuItems = ['Home', 'About Us', 'Services', 'Products'];
    
    return (
        <>
        <section className='header'>
            <div className='container'>
                <div className='header-main'>
                    <Logo />
                <Greeting items={menuItems} />
                </div>
            </div>
        </section>

        <section className='hero-banner hero-gradient'>
            <div className='container'>
                <Bannerimg />
                <Bannerimg2 />
                <Bannerheading />
                <Bannerpara />
                <Bannerbutton />
                < Trusted />
            </div>
            <Marquee />
        </section>

        <section className='services'>
            <div className='container'>
                <div className='service-main'>    {/*main--------*/}
                    <Block1 />
                    <div className='service-block2'></div>
                </div>
            </div>
            
        </section>

        <section className='contact-form'>
        <div className='container'>
            <Form />
        </div>
      </section>
        </>
    );
}




const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email };

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert('Error submitting form');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to submit form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};








//header section componenets
import logo from './media/logo.png';
function Logo(){
    return(
        <img src={logo} alt="logo" className='logo' />
    )
}

function Greeting({ items }) {
    return (
        <div className='header-list'>
            <ul className='list'>
                {items.map((item, index) => (
                    <a href='#' key={index}><li>{item}</li></a>
                ))}
            </ul>
        </div>
    );
}
//header section componenets



//banner section components

function Bannerimg(){
    return(
        <div className='natura-img'>
            <img src={naturaimg} alt='img' className='natura-banner-img' />
                    </div>
    );
}


function Bannerimg2(){
    console.log(heroimg2);
    return(
        <div className='hero-img2'>
            <img src={heroimg2} alt='img' />
        </div>
    )
}

function Bannerheading(){
    return(
        <h1 id='h1'>serving the greater portland & vancouver area for over 10 Years
</h1>
    )
}

function Bannerpara(){
    return(
        <div className='banner-para'>
            <p>Natura Pest Control has proudly been your go-to pest solution in Oregon and Washington for over a decade. We're not your average pest control company; we're your steadfast ally and local resource, right by your side at every turn.</p>
            <p>At Natura, you're treated like family, and we put your peace of mind first. Your pest troubles are as unique as you are, and we tackle them with a personalized touch, crafting solutions tailored just for you. Plus, we have the credentials to back it up, with over 50 years of combined experience from our Leadership team!</p>
        </div>   
    )
}

function Bannerbutton(){
    return(
        <div className='btn'>
            <button>REQUEST A QUOTE</button>
        </div>
    )
}

function Trusted(){
    return(
        <h2 id='banner-h2'>your trusted pest experts</h2>
    )
}


function Marquee(){

    const images = [
        Marqueeimg1,
        Marqueeimg2,
        Marqueeimg3,
        Marqueeimg4,
        Marqueeimg5,
        Marqueeimg6,
        Marqueeimg7,
        Marqueeimg8,
        Marqueeimg9,
      ];
    const logosSlideRef = useRef(null);

    useEffect(() => {
      if (logosSlideRef.current) {
        const copy = logosSlideRef.current.cloneNode(true);
        logosSlideRef.current.parentNode.appendChild(copy);
      }
    }, []);
    return(
        <div className='logos'>
        <div className='logos-slide' ref={logosSlideRef}>
            {images.map((src, index) => 
            <img key={index} src={src} alt={`logo-${index + 1}`} />
            )}
        </div>
      </div>
  
    )
}
//banner section components





//services section block1---------------
function Block1(){
    return(
        <div className='service-block1'> {/*coulums1------*/}
        <div className='service-block1-subblock1'>   {/*block1 ----- row1*/}
            <ServiceBlock />
            <ServiceAreaBlock />
            <BeeCarefulBlock />
        </div>
        <div className='service-block1-subblock2'></div>   {/*block1------- row 2*/}
    </div>
    );
}
//----------block 1 row1 col-------
function ServiceBlock(){
    return(
        <div className='service-block1-subblock-A'>
        <div className='service-block1-subblock-content'>
            <div className='service-conntent-main'>
            <div className='service-img1'></div>
            <div className='service-inner-content'>
                <h2 id='service-h2'>Services</h2>
                <p><span id='service-para-color'>Natura Pest Control</span> is a provider of high-quality, eco-friendly, and effective pest control solutions based in Vancouver, Washington.</p>
            </div>
            </div>
        </div>
        <div className='service-btn'>
                <a href='#'><button className='service-btn-content'>
                    <h3>Learn more</h3>
                    <img src={smallant} alt='' />
                    </button></a>
            </div>
        </div> 
    );
}
function ServiceAreaBlock(){
    return(
        <div className='service-block1-subblock-B'>
        <div className='service-block1-subblock-content'>
                <div className='service-conntent-main'>
                <div className='service-img2'></div>
                <div className='service-inner-content'>
                    <h2 id='service-h2'><span id='h2-color1'>Service area</span></h2>
                    <p>Natura Pest Control is the PNWs leading pest control team.</p>
                    <p>We have handled pests of all different shapes and sizes.....</p>
                </div>
                </div>
            </div>
            <div className='service-btn'>
                    <a href='#'><button className='service-btn-content'>
                        <h3>Learn more</h3>
                        <img src={smallant} alt='' />
                        </button></a>
                </div>
        </div>
    );
}

function BeeCarefulBlock(){
    return(
        <div className='service-block1-subblock-C'>
        <div className='service-block1-subblock-content'>
                <div className='service-conntent-main'>
                <div className='service-img3'></div>
                <div className='service-inner-content'>
                    <h2 id='service-h2'><span id='h2-color2'>Bee careful</span></h2>
                    <p>It’s widely known that bee populations are declining worldwide, and especially here in the United States.The decline of the honey bee is a major concern.....</p>
                </div>
                </div>
            </div>
            <div className='service-btn'>
                    <a href='#'><button className='service-btn-content'>
                        <h3>Learn more</h3>
                        <img src={smallant} alt='' />
                        </button></a>
                </div>
        </div>
    );
}


//services section block1---------------


  

export default App;
