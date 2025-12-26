import React from 'react';
import Layout from './Layout';
import '../Styles/Myaccount.css';
import Watchvideos from '../Components/Watchvideos';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCircleXmark,
  faSignal,
  faStar,
  faUser,
  faVideo,
  faBug,
} from '@fortawesome/free-solid-svg-icons';

const Myaccount = () => {
  const cardData = [
    { id: 1, count: 26, title: 'Channels', color: 'primary' },
    { id: 2, count: 12, title: 'Users', color: 'success' },
    { id: 3, count: 8, title: 'Videos', color: 'warning' },
    { id: 4, count: 5, title: 'Reports', color: 'danger' },
  ];

  const ChannelData = [
    { id: 1, name: 'Tech Guru', image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '1.2M' },
    { id: 2, name: 'Travel Vlogs', image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '800K' },
    { id: 3, name: "Foodie's Paradise", image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '500K' },
    { id: 4, name: 'Fitness Freak', image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '300K' },
    { id: 5, name: 'Science Daily', image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '150K' },
    { id: 6, name: 'Coding Hub', image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '90K' },
    { id: 7, name: 'Art Studio', image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '60K' },
    { id: 8, name: 'Book Reviews', image: '/Images/sidebarimg1.png', subscribe: 'Subscribe 1.4M', subscribers: '30K' },
  ];

  return (
    <Layout>
      {/* ======= Info Cards Section ======= */}
      <div className="container-fluid py-4">
        <div className="row g-4">
          {cardData.map((card) => (
            <div className="col-xl-3 col-sm-6 mb-3" key={card.id}>
              <div className={`card text-white bg-${card.color} h-100 border-none`}>
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <div className="card-icon">
                      <FontAwesomeIcon
                        icon={
                          card.title === 'Channels' || card.title === 'Users'
                            ? faUser
                            : card.title === 'Videos'
                            ? faVideo
                            : faBug
                        }
                        size="2x"
                      />
                    </div>
                    <div className="card-text">
                      <b>{card.count}</b> {card.title}
                    </div>
                  </div>
                </div>
                <a
                  className="card-footer text-white clearfix small z-1 d-flex justify-content-between align-items-center text-decoration-none"
                  href="#"
                >
                  <span>View Details</span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======= Watch Videos Section ======= */}
      <Watchvideos />




      {/* ======= My Channels Section ======= */}
      <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
        <h6 className="mb-0 text-white fs-6 ps-3">My Channels</h6>
        <DropdownButton id="dropdown-basic-button" title="Sort By" className="custom-dropdown-btn">
          <Dropdown.Item href="#/action-1">
            <FontAwesomeIcon icon={faStar} /> Top Rated
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <FontAwesomeIcon icon={faSignal} /> Viewed
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <FontAwesomeIcon icon={faCircleXmark} /> Close
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <Container>
        <Row className="g-4">
          {ChannelData.map((channel) => (
            <Col lg={3} md={6} sm={12} key={channel.id}>
              <div
                className="img-card text-center"
                style={{ backgroundColor: '#1c1c1c', padding: '15px', borderRadius: '8px' }}
              >
                <img src={channel.image} alt={channel.name} className="channel-img" />
                <div className="channel-content mt-2">
                  <button className="sub-button btn-sm">{channel.subscribe}</button>
                  <h5 className="text-light mt-2 mb-1" style={{ fontSize: '14px', fontWeight: 'normal' }}>
                    {channel.name}
                  </h5>
                  <p className="text-secondary" style={{ fontSize: '14px' }}>
                    {channel.subscribers} subscribers
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Myaccount;
