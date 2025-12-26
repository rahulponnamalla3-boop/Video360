import React from 'react'
import Layout from '../Pages/Layout'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';

const Subscription = () => {
 
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
    
    },
      {
      id: 5,
      name: "Fitness Freak",
      image: "images/c5.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 6,
      name: "Fitness Freak",
      image: "images/c6.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 7,
      name: "Fitness Freak",
      image: "images/c7.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 8,
      name: "Fitness Freak",
      image: "images/c8.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 9,
      name: "Fitness Freak",
      image: "images/c9.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 10,
      name: "Fitness Freak",
      image: "images/c10.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 11,
      name: "Fitness Freak",
      image: "images/c11.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      {
      id: 12,
      name: "Fitness Freak",
      image: "images/c12.png",
      subscribe:"Subscribe 1.4M",
      title: "channel name",
      subscribers: "300K",
    
    },
      
    
  ];

  return (

    
    <Layout>

       <Container>
      <Row className="my-3">
        {ChannelData.map((channel) => (
          <Col lg={3} md={6} sm={12} key={channel.id} className="mb-4 ">
            <div className="img-card justify-content-center text-center" style={{backgroundColor:"#1c1c1c"}}>
              <img src={channel.image} alt={channel.title} width="50%" className='mt-4 channel-img' />
              <div className=" mt-2 channel-content p-2 channel-text justify-content-center text-center">
                <button className='sub-button btn-sm'>{channel.subscribe}</button>
                <h5 className='text-light mt-1 mb-0' style={{fontSize:"14px ",fontWeight:"normal"}}> {channel.title}</h5>
               
                <p className="text-secondary " style={{fontSize:"14px "}}>{channel.subscribers} subscribers</p>
              
                </div>
              
           
            </div>

            
          </Col>

          
        ))}
      <div>
  <nav>
    <ul className="pagination justify-content-center pagination-sm mb-4 ">
      <li className="page-item ">
        <a className="page-link" href="#" aria-label="Previous">Previous</a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">2</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">3</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">Next</a>
      </li>
    </ul>
  </nav>
</div>


               <div className="py-0">
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <h6 className="mb-2  text-white fs-6">Featured Videos</h6>
        
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

                    
      </Row>
    </Container>


      
    </Layout>
  );
};


export default Subscription