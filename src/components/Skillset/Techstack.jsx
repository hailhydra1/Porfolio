import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiExpress,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h6>Html  </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Nodejs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h6>Nodejs</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h6>Redux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>
        <h6>SQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <h6>MaterialUI</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
