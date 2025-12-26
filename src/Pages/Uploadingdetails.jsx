import Layout from './Layout';
import { Button, Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap';
import { X as CloseIcon, ChevronUp } from 'react-bootstrap-icons';
import '../Styles/Uploadingdetails.css';

const categories = [
  'Abaft', 'Cemetery', 'Scissors', 'Brick', 'Trouble', 'Stitch',
  'Purpose', 'Pin', 'Agonizing', 'Shallow', 'Fall', 'Rescue',
  'Spray', 'Leg', 'Quiet',
];

const renderCheckboxes = (start, end) => (
  <Col sm={2} xs={6}>
    {categories.slice(start, end).map((category) => (
      <Form.Check
        key={category}
        type="checkbox"
        id={`check-${category}-${start}`}
        label={category}
        className="text-white"
      />
    ))}
  </Col>
);

const UploadingDetails = () => {
  return (
    <Layout>
      <Container
        className="uploadvideo-container"
        style={{
          backgroundColor: '#121212',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        {/* ========================================================= */}
        {/* 1. UPLOAD DETAILS SECTION */}
        {/* ========================================================= */}
        <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
          <h4 className="mb-0 text-white">Upload Details</h4>
        </div>

        {/* Upload Progress Card */}
        <Card text="white" className="mb-4" style={{ backgroundColor: '#121212' }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div
                style={{
                  width: '100px',
                  height: '80px',
                  backgroundColor: '#9370DB',
                  marginRight: '15px',
                }}
              />
              <div className="flex-grow-1 position-relative">
                <Card.Title className="h6 mb-1">
                  Contrary to popular belief, Lorem Ipsum (2020) is not.
                </Card.Title>
                <Card.Text className="text-secondary small mb-1">
                  102.6 MB · 2.13 MN Remaining
                </Card.Text>
                <ProgressBar now={70} variant="danger" style={{ height: '8px' }} className="mt-2" />
                <Card.Text className="text-secondary small mt-1">
                  Your video is still uploading, please keep this page open until it's done.
                </Card.Text>

                <Button
                  variant="link"
                  className="text-danger position-absolute mt-2"
                  style={{ right: '10px', top: '0px', padding: 0 }}
                >
                  <CloseIcon size={24} />
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* ========================================================= */}
        {/* 2. VIDEO DETAILS FORM */}
        {/* ========================================================= */}
        <Form>
          <Form.Group className="mb-3" controlId="formVideoTitle">
            <Form.Label className="h6">Video Title</Form.Label>
            <Form.Control
              type="text"
              defaultValue="Contrary to popular belief, Lorem Ipsum (2020) is not."
              className="border-0"
              style={{ backgroundColor: '#232323' }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAbout">
            <Form.Label className="h6">About</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Description"
              className="border-0"
              style={{ backgroundColor: '#232323' }}
            />
          </Form.Group>

          <hr style={{ borderColor: '#232323' }} className="my-4" />

          <Row className="mb-4">
            {['Orientation', 'Privacy Settings', 'Monetize', 'License'].map((label) => (
              <Col md={3} className="mb-3" key={label}>
                <Form.Group controlId={`form${label.replace(/\s/g, '')}`}>
                  <Form.Label>{label}</Form.Label>
                  <Form.Select
                    className="border-0"
                    style={{ backgroundColor: '#232323' }}
                  >
                    <option className="text-secondary">
                      {label.includes('Orientation')
                        ? 'Straight'
                        : label.includes('Privacy')
                        ? 'Public'
                        : label.includes('Monetize')
                        ? 'Yes'
                        : 'Standard'}
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            ))}

            <Col md={4} className="mb-3">
              <Form.Group controlId="formTags">
                <Form.Label>Tags (13 Tags Remaining)</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue="Gaming, PS4"
                  className="border-0"
                  style={{ backgroundColor: '#232323' }}
                />
              </Form.Group>
            </Col>

            <Col md={4} className="mb-3">
              <Form.Group controlId="formCast">
                <Form.Label>Cast (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue="Nathan Drake,"
                  className="border-0"
                  style={{ backgroundColor: '#212529' }}
                />
              </Form.Group>
            </Col>

            <Col md={4} className="mb-3">
              <Form.Group controlId="formLanguage">
                <Form.Label>Language in Video (Optional)</Form.Label>
                <Form.Select
                  className="border-0"
                  style={{ backgroundColor: '#212529' }}
                >
                  <option className="text-secondary">English</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <hr style={{ borderColor: '#232323' }} className="my-4" />

        {/* ========================================================= */}
        {/* 3. CATEGORY SELECTION */}
        {/* ========================================================= */}
        <h6 className="text-white mb-4">
          Category (You can select up to 6 categories)
        </h6>

        <Form className="mb-5">
          <Row>
            {renderCheckboxes(0, 5)}
            {renderCheckboxes(5, 10)}
            {renderCheckboxes(10, 15)}
            {renderCheckboxes(0, 5)}
            {renderCheckboxes(5, 10)}
            {renderCheckboxes(10, 15)}
          </Row>
        </Form>

        {/* Save Changes Button */}
        <div className="d-flex justify-content-center mb-5">
          <Button
            variant="outline-danger"
            style={{
              borderColor: 'red',
              color: 'red',
              padding: '8px 25px',
            }}
          >
            Save Changes
          </Button>
        </div>
      </Container>

      {/* ========================================================= */}
      {/* 4. FOOTER TEXT AND SCROLL BUTTON */}
      {/* ========================================================= */}
      <Container className="mt-5">
        <div className="text-center small text-white">
          There are many variations of passages of Lorem Ipsum available, but the majority
          <span className="text-danger"> Terms of Service</span> and
          <span className="text-danger"> Community Guidelines</span>.
          <br />
          Ipsum is therefore always free from repetition, injected humour, or non
        </div>

        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            backgroundColor: '#495057',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          <ChevronUp color="white" size={20} />
        </div>
      </Container>
    </Layout>
  );
};

export default UploadingDetails;
