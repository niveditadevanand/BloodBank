import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';

import Signup from './Signup';
import { MDBIcon } from 'mdb-react-ui-kit';
const Landing = () => {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>SaveABeat</title>
  <meta
    name="description"
    content="ROSA is an enchanting Parallax Restaurant WordPress Theme that allows you to tell your story in an enjoyable way, perfect for restaurants or coffee shops."
  />
  <meta
    name="viewport"
    content="width = device-width, initial-scale = 1, shrink-to-fit = no"
  />
  {/* Place favicon.ico in the root directory */}
  <link
    rel="shortcut icon"
    href="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988515/rosa-favicon.png"
  />
  {/*Fonts*/}
  <link
    href="https://fonts.googleapis.com/css?family=Cabin|Herr+Von+Muellerhoff|Source+Sans+Pro"
    rel="stylesheet"
  />
  {/*Fonts*/}
  {/*FontAwesome*/}
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
    integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
    crossOrigin="anonymous"
  />
 
 
  
  
  {/*Start Header*/}
  <div className='landing-header'>
    <nav>
      {/* <div className="logo">
        <a href="index.html">
          <img
             src={{logo}}/>
        </a>
      </div>
      <div className="toggle"> */}
        {/* <span className="first" />
        <span className="middle" />
        <span className="last" />
      </div> */}
      <div className="navigation-bar" style={{display:"flex"}} >
        
        <MDBIcon fas icon="heartbeat fa-3x me-3" style={{ color: '#ff6219' }}/>
        <div style={{ display: 'flex', justifyContent: 'flex-end',marginRight:'10px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ marginRight: '10px', fontSize: '16px',fontWeight:"bold", padding: '10px 20px', backgroundColor: '#ffffff', color: 'black', cursor: 'pointer',borderRadius:'10px' }}>Home</button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <button style={{ marginRight: '10px', fontSize: '16px',fontWeight:"bold", padding: '10px 20px', backgroundColor: '#ffffff', color: 'black', border: 'none', cursor: 'pointer',borderRadius:'10px' }}>Signup</button>
        </Link>
        <Link to="/loginas" style={{ textDecoration: 'none' }}>
          <button style={{ marginRight: '10px', fontSize: '16px',fontWeight:"bold", padding: '10px 20px', backgroundColor: '#ffffff', color: 'black', border: 'none', cursor: 'pointer',borderRadius:'10px' }}>Login</button>
        </Link>
        
</div>

        
      </div>
    </nav>
    <div className="text" >
      <h2 style={{ marginTop:" 300px", textAlign:'center'}}>Your Blood, Their Hope.</h2>
      <h1 style={{ marginBottom: '50px', textAlign:'center'}}>Save A Beat</h1>
      {/* <div className="arrow">
        <span className="left" />
        <i className="fas fa-asterisk" />
        <span className="right" />
      </div> */}
      
    </div>
    {/* <svg
      className="svg-down"
      width={192}
      height={61}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 160.7 61.5"
      enableBackground="new 0 0 160.7 61.5"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
      />
    </svg> */}
    <div className="arrow-down"></div>
  </div>
  {/*End Header*/}
  {/*start About Us*/}
  <div className="about-us">
    <div className="text">
     
      <h3>Why a Blood Shortage?</h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
      The US, Europe and other high-HDI countries benefit from well-developed services for collecting, testing and processing blood and the enthusiastic participation of citizens in blood donation programs.

 

But in many of the poorest countries in the world sufficient, safe blood is often unavailable.
      </p>
      <div>
        <a className="a-CTA" href="#">
          About Us
        </a>
      </div>
    </div>
    <div className="image-container">
      <div className="image image1">
        <img
          src="https://www.sriramakrishnahospital.com/wp-content/uploads/2021/06/Blood-Donation-1.jpg"
          alt="Good"
        />
      </div>
      <div className="image image2">
        <img
          src="https://pbs.twimg.com/media/EPSG-_EWAAAZTYk.jpg"
          alt="Good Photo"
        />
      </div>
    </div>
  </div>
  {/*End About Us*/}
  {/*start Recipes*/}
  <div className="recipes">
    <div className="image" />
    <div className="text">
      <h2>Donate</h2>
      <h3>Today</h3>
    </div>
  </div>
  {/*End Recipes*/}
  {/*start Menu*/}
  <div className="menu">
    <div className="box-model">
      <i className="fas fa-times fa-2x close" />
      <div className="arrow">
        <div className="arrow arrow-right" />
        <div className="arrow arrow-left" />
      </div>
      <div className="box-image-container">
        <div className="box-image">
          <img src="https://media.istockphoto.com/id/1182029924/photo/doctor-during-consultation-held-in-his-hand-and-shows-patient-laboratory-tube-with-blood.jpg?s=612x612&w=0&k=20&c=mf60C62hn9CwGs4s3FrXD6OnSTWB4qDMIv68h6WRScc=" alt="Food Photo" />
        </div>
      </div>
    </div>
    <div className="menu-image-container">
      <div className="image active">
        <img
          src="https://media.istockphoto.com/id/1013763594/photo/blood-donation-picture-with-soft-focus-and-over-light-in-the-background.jpg?s=612x612&w=0&k=20&c=owTGjUjBMBMDSxmJLUor7qUqBWdC1g_Ze50M0IDlkNY="
          alt="Food Photo"
        />
      </div>
      <div className="image">
        <img
          src="https://media.istockphoto.com/id/1220702596/photo/hands-holding-blood-bag-give-blood-donation-blood-transfusion-world-blood-donor-day-world.jpg?s=612x612&w=0&k=20&c=82r9P18fZUxy5vwIkqedV4Ct5nBS1EkrfGS2wzfB7wk="
          alt="Food Photo"
        />
      </div>
      <div className="image">
        <img
          src="https://media.istockphoto.com/id/1403182301/photo/preparation-for-blood-test-by-female-doctor-medical-uniform-on-the-table-in-white-bright-room.jpg?s=612x612&w=0&k=20&c=U5lfNS8V5aIVrQ4jxd6ST-ayXWXDfV4biSYWdBxGZbQ="
          alt="Good Photo"
        />
      </div>
      <div className="image">
        <img
          src="https://media.istockphoto.com/id/1159727839/photo/needle-for-blood-collection-inserted-in-arm-of-patient-by-attendant.jpg?s=612x612&w=0&k=20&c=ZPU54l3R9SshaL8Zv6JDJG2h1rKihecZ5xwm63qUuzY="
          alt="Good Photo"
        />
      </div>
    </div>
    <div className="text">
      
      <h3>Where are the donors?</h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
      A key area of focus for GBF is recruiting and retaining donors. There is opportunity to improve donor retention in many parts of the world, where the demand for blood in hospitals is not met.
      To combat the shortfall, either relatives of patients are coerced to donate or health authorities resort to the unsafe practice of paid donation.
      </p>
      {/* <div>
        <a className="a-CTA" href="#">
          View The Full Menu
        </a>
      </div> */}
    </div>
  </div>
  {/*End Menu*/}
  {/*Start fixed-image*/}
  {/* <div className="fixed-image">
    <div className="text">
      <h2>The Perfect</h2>
      <h3>Blend</h3>
    </div>
  </div> */}
  {/*End fixed-image*/}
  {/*start About Us*/}
  <div className="reservation">
    <div className="text">
     
      <h3>The challenge of sufficiency.</h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
      Out of 168 countries, 66 have less than 1% donor participation – and all are low or middle-income. Sub-There are not enough donors coming forward to meet the most basic needs of patients in low-income countries.
      </p>
      {/* <div>
        <a className="a-CTA" href="#">
          Make a Reservation
        </a>
      </div> */}
    </div>
    <div className="image-container">
      <div className="image image1">
        <img
          src="https://media.istockphoto.com/id/1315395944/photo/experienced-phlebotomist-preparing-a-woman-for-blood-draw.jpg?s=612x612&w=0&k=20&c=MX1sfSztBJIiCW0wOqxDWxLuXWOxrlTvOO6azfF2buY="
          alt="Food Photo"
        />
      </div>
      <div className="image image2">
        <img
          src="https://media.istockphoto.com/id/517118579/photo/happy-nurse-comforting-patient-while-he-donates-blood-to-hospital.jpg?s=612x612&w=0&k=20&c=cL0Z-Vojy-3wY5NkE8ajurmj_Mqa732Fi442ysgzDww="
          alt="Food Photo"
        />
      </div>
    </div>
  </div>
  {/*End About Us*/}
  {/*Start Footer*/}
  <footer>
    <div className="text">
      <h2>ABOUT Save A Beat</h2>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
       Save A Beat, where each contribution plays a crucial role,
Uniting communities through the gift of life's vital toll.
Join us in our commitment to enrich and complete,
Together, let's make a lasting impact and save a beat.
      </p>
    </div>
    <div className="contact-container">
      <div className="social-media">
        <h3>Follow Along</h3>
        <div className="links">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fab fa-pinterest" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="newsletter">
        <h3>NewsLetter</h3>
        <form method="post">
          <input type="email" name="email" placeholder="Type Your Email" />
          <i className="fas fa-envelope" />
        </form>
      </div>
    </div>
  </footer>
  {/*End Footer*/}
  {/*Start Copy-Right*/}
  <div className="copyright">
    <svg
      className="svg-up"
      width={192}
      height={61}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 160.7 61.5"
      enableBackground="new 0 0 160.7 61.5"
      xmlSpace="preserve"
    >
      <path
        fill="#262526"
        d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
      />
    </svg>
    <i className="fas fa-angle-double-up arrow-up" />
    <ul className="info">
      <li>© Save A Beat 2024</li>
      {/* <li>13 Hanway Square, London</li> */}
      <li>Tel: 11111111111</li>
      {/* <li>
        Handcrafted with love by <a href="#">Pixelgrade</a> Team
      </li> */}
    </ul>
    <ul className="CTA">
      <li>
        <a href="#">PERMISSIONS AND COPYRIGHT</a>
      </li>
      <li>
        <a href="#">CONTACT THE TEAM</a>
      </li>
    </ul>
  </div>
  {/*End Copy-Right*/}
  {/* Add your site or application content here */}
</>

    </div>
  )
}

export default Landing