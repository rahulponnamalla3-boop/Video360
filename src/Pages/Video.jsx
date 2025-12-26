import React from 'react';
import Layout from './Layout';
import { Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import '../Styles/Video.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleXmark, faSignal, faStar } from '@fortawesome/free-solid-svg-icons';

const Videos = () => {
  const VideosData = [
    {
      id: 1,
      description: "Why you need to learn HTML & CSS IN 2025 | HTML & CSS for Beginners! 🚀",
      thumbnail: "images/v1.png",
      views: "46 views",
      uploadTime: "2 Weeks ago",
    },
    {
      id: 2,
      description: "Major Things to Understand in HTML & CSS for Beginners! 🚀 | Web Development Basics",
      thumbnail: "images/v2.png",
      views: "81 views",
      uploadTime: "2 Weeks ago",
    },
    {
      id: 3,
      description: "How to become a UI UX Designer in 2025 in Telugu? | UI UX Designer Career | Digit Institute",
      thumbnail: "images/v3.png",
      views: "221 views",
      uploadTime: "3 Weeks ago",
    },
    {
      id: 4,
      description: "How to become a UI UX Designer in 2025? | UI UX Designer Career | UX Designer Salary | Digit",
      thumbnail: "images/v4.png",
      views: "136 views",
      uploadTime: "1 Month ago",
    },
    {
      id: 5,
      description: "Digit Institute review by Student | Digit Institute | Learn, Grow, Succeed",
      thumbnail: "images/v5.png",
      views: "240 views",
      uploadTime: "10 Months ago",
    },
    {
      id: 6,
      description: "Digit Institute is the Right Place for Full Stack Development | UI Development and SQL",
      thumbnail: "images/v6.png",
      views: "853 views",
      uploadTime: "3 Years ago",
    },
  ];

  return (
    <Layout>
      <div className="videos-page">
        <Row className="justify-content-center">
          {/* LEFT SIDE — MAIN VIDEO */}
          <Col lg={8} md={8} sm={12}>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/qz0aGYrrlhU?si=zQ30Oo5gwKoS3gWe"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="main-video-iframe"
              ></iframe>
            </div>

            <div className="video-info text-white p-3">
              <h5>DIGIT Institute Hyderabad - Learn from Industry Experts | Learn, Grow, Succeed</h5>
              <p className="mb-0 text-secondary">2.3K views • 6 months ago</p>
            </div>

            <div className="channel-info d-flex justify-content-between align-items-center px-4 py-3">
              <div className="d-flex align-items-center">
                <img src="Images/Digit.png" alt="logo" className="digit-img" />
                <div className="ps-2">
                  <strong className="text-danger">Digit Institute</strong>
                  <small className="d-block text-secondary" style={{ fontSize: '12px' }}>
                    6 months ago
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <button className="subscribe-btn">Subscribe</button>
                <FontAwesomeIcon icon={faBell} className="ms-2 text-white" />
              </div>
            </div>

            {/* CATEGORY SECTION */}
            <div className="category-section p-3 mt-2">
              <h6 className="text-white">Category:</h6>
              <p className="text-secondary">
                Full Stack Development | UI/UX Design | Software Testing | Cloud Computing
              </p>
            </div>
          </Col>

          {/* RIGHT SIDE — NEXT VIDEOS */}
          <Col lg={4} md={4} sm={12}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0 text-white fs-6">Up Next</h6>
              <DropdownButton
                id="dropdown-basic-button"
                title="Sort by ▼"
                className="custom-dropdown-btn"
              >
                <Dropdown.Item><FontAwesomeIcon icon={faStar} /> Top Rated</Dropdown.Item>
                <Dropdown.Item><FontAwesomeIcon icon={faSignal} /> Most Viewed</Dropdown.Item>
                <Dropdown.Item><FontAwesomeIcon icon={faCircleXmark} /> Close</Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="next-videos-container">
              {VideosData.map((video) => (
                <div key={video.id} className="next-video-item">
                  <img
                    src={video.thumbnail}
                    alt={video.description}
                    className="next-video-thumb"
                  />
                  <div className="ps-2">
                    <p>{video.description}</p>
                    <small>{video.views} • {video.uploadTime}</small>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Videos;