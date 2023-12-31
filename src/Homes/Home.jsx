import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"


const Home = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark" className='positiontype' >
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="https://atsport.com.au/cdn/shop/collections/Bat2.webp?v=1693543168"
          alt="First slide"
        />
        <Carousel.Caption  >
          <h5 className='labelstyle'>"From Beginners to Pro"</h5>
          {/* <p>With their high-quality craftsmanship and innovative technologies, Adidas cricket bats offer excellent performance and durability on the field.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-83229866/83229866.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{fontSize:"50px",color:"azure", fontWeight:"700", marginRight:"800px", marginBottom:"300px"}}>"Catchy Rackets"</h5>
          {/* <p style={{fontSize:"30px",color:"black", fontWeight:"700", marginRight:"800px", marginBottom:"20px"}}>"Latest Arrivals Till Date"</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F11%2Fadidas-uniforia-euro-2020-ball-reveal-2.jpg?cbr=1&q=90"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{marginLeft:"0px",marginBottom:"10px", color:"Black", fontSize:"50px", fontWeight:"1000"}}>Soccer Gadgets</h5>
          <p style={{marginLeft:"10px",marginBottom:"350px", color:"Black", fontSize:"30px", fontWeight:"800"}}>
            "Explore the best in our Inventory"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Home;