import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBarComponent = () => {
  return (
    <Row className="mb-3">
      <Col xs={9} lg={11} className="d-none d-md-flex justify-content-evenly align-items-center mt-4 fw-bold ">
        <Link id="main-link" className="text-decoration-none top-link text-white" style={{ fontSize: "12px" }} to="/">
          TRENDING
        </Link>
        <Link id="main-link" className="text-decoration-none top-link text-white" style={{ fontSize: "12px" }} to="/">
          PODCAST
        </Link>
        <Link id="main-link" className="text-decoration-none top-link text-white" style={{ fontSize: "12px" }} to="/">
          MOODS AND GENERES
        </Link>
        <Link id="main-link" className="text-decoration-none top-link text-white" style={{ fontSize: "12px" }} to="/">
          NEW RELEASES
        </Link>
        <Link id="main-link" className="text-decoration-none top-link text-white" style={{ fontSize: "12px" }} to="/">
          DISCOVER
        </Link>
      </Col>
    </Row>
  );
};

export default TopBarComponent;