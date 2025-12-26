import React from 'react';

import Watchvideos from '../Components/Watchvideos';
import Layout from './Layout';
import Subscription from '../Components/Subscription';
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';


const Home = () => {
 
      const ChannelData = [
    {
      id: 1,
      name: "Tech Guru",
      image: "images/c1.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "1.2M",
   
    },
    {
      id: 2,
      name: "Travel Vlogs",
      image: "images/c2.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "800K",
   
    },
    {
      id: 3,
      name: "Foodie's Paradise",
      image: "images/c3.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "500K",
     
    },
    {
      id: 4,
      name: "Fitness Freak",
      image: "images/c4.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    }
  ];
  return (
    <Layout>
      <Watchvideos />
     
     
       <div className="py-0">
        <div className="d-flex justify-content-between align-items-center mb-0">
          <h6 className="mb-0  text-white fs-6 ps-3">Popular Channels</h6>

          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By"
            className="custom-dropdown-btn"
          >
            <Dropdown.Item href="#/action-1">Top Rated</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Viewed</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Close</Dropdown.Item>
          </DropdownButton>
        </div>

        
      </div>

              <Container>
      <Row className="my-3">
        {ChannelData.map((channel) => (
          <Col lg={3} md={6} sm={12} key={channel.id} className="mb-4 ">
            <div className="img-card justify-content-center text-center" style={{backgroundColor:"#1c1c1c"}}>
              <img src={channel.image} alt={channel.title} width="50%" className='mt-4 channel-img' />
              <div className=" mt-2 channel-content p-2 channel-text justify-content-center text-center">
                <button className='sub-button btn-outline-danger btn-sm'>{channel.subscribe}</button>
                <h5 className='text-light mt-1 mb-0' style={{fontSize:"14px ",fontWeight:"normal"}}> {channel.title}</h5>
               
                <p className="text-secondary " style={{fontSize:"14px "}}>{channel.subscribers} subscribers</p>
              
                </div>
              
           
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </Layout>
  );
};

export default Home;