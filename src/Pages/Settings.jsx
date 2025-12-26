import React from 'react';
import "../Styles/Settings.css";
import Layout from './Layout';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Settings = () => {
  return (
    <Layout>
      <div className="settings-page text-white p-4">
        <h5 className="mb-4">Settings</h5>

        <Form className="p-4 rounded shadow-sm" style={{ backgroundColor: '#121212' }}>
          {/* Row 1: First & Last Name */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>
                  First Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="DIGIT"
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>
                  Last Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="IT"
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Row 2: Phone & Email */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>
                  Phone <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="123 456 7890"
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>
                  Email Address <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="digit@gmail.com"
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Row 3: Country & City */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formCountry">
                <Form.Label>
                  Country <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                >
                  <option>Select Country</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCity">
                <Form.Label>
                  City <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                >
                  <option>Select City</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Row 4: Zip Code & State */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formZipCode">
                <Form.Label>
                  Zip Code <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="123456"
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formState">
                <Form.Label>
                  State <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  required
                  className="text-white border-secondary"
                  style={{ backgroundColor: "#232323" }}
                >
                  <option>Select State</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Row 5: Address */}
          <Form.Group controlId="formAddress" className="mb-4">
            <Form.Label>
              Address <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              className="text-white border-secondary"
              style={{ backgroundColor: "#232323" }}
            />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-end">
            <Button variant="danger" className="me-2 text-white">
              Cancel
            </Button>
            <Button variant="success" className="text-white">
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default Settings;