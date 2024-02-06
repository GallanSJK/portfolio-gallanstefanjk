
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiGit,
  DiHtml5,
  DiCss3,
  DiCodeigniter,
} from "react-icons/di";
import {
  SiPhp,
  SiGitlab,
  SiGithub,
  SiLaravel,
  SiMysql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCodeigniter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGitlab />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </Row>
    </>
    
  );
}

export default Techstack;
