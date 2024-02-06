
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

function Learning() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </Row>
    </>
    
  );
}

export default Learning;
