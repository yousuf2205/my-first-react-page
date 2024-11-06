import React from 'react';
import logo from './media/logo.png';
import naturaimg from './media/natura logo_natura green 2 (1).png';
import heroimg2 from './media/natura ant leaf 3.png';
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
        </section>
        </>
    );
}
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

export default App;
