
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiNetlify,
  SiXampp,
  SiCpanel,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiXampp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNetlify />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCpanel />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
