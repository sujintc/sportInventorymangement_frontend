import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (
        <div>
            {/* <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/Inventory'>Inventory</Link>
                <Link to='/Manageitem'>Manageitem</Link>
                <Link to='/Additem'>Additem</Link>
            </nav> */}
            
        

            <Nav defaultActiveKey="/home" as="ul">
            <img  style={{borderRadius:"50%",height:"100px"}} src="https://cdn.vectorstock.com/i/preview-1x/29/97/isolated-cricket-bat-and-ball-vector-25562997.jpg" alt="" />
            <h1 style={{marginTop:"20px"}}> <span style={{fontFamily:"MozAnimation", fontSize:"70px"}}>S</span> Sports </h1>
      <Nav.Item as="li"b  style={{marginLeft:"70px", marginTop:"30px"}} >
        <Nav.Link className='textstyle'  href="/">Home</Nav.Link>
        
      </Nav.Item>
      {/* <Nav.Item as="li">
        <Nav.Link className='textstyle' href= "/Blog"  eventKey="link-1">Blog</Nav.Link>
      </Nav.Item> */}
      {/* <Nav.Item as="li">
        <Nav.Link className='textstyle' href='Inventory' eventKey="link-2">Inventory</Nav.Link>
      </Nav.Item> */}
      <Nav.Item as="li" style={{ marginTop:"30px"}} >
        <Nav.Link className='textstyle' href="/About">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li"  style={{ marginTop:"30px"}}>
        <Nav.Link className='textstyle' href="/Manageitem">Manageitem</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li"  style={{ marginTop:"30px"}}>
        <Nav.Link className='textstyle' href="/Additem">Add New Item</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li"  style={{ marginTop:"30px"}}>
        <Nav.Link className='textstyle' href="/Register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li"  style={{ marginTop:"30px"}}>
        <Nav.Link className='textstyle' href="/Login">Login</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item as="li"  style={{ marginTop:"30px"}}>
        <Nav.Link className='textstyle' href="/chart">Chart</Nav.Link>
      </Nav.Item> */}
    </Nav>
  



        </div>
    );
};

export default NavBar;