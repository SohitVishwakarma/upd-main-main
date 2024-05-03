import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
     <h1>I'll Upload Soon..Stay Tuned or for More  go to my Gitub Profie</h1>
      
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;
