import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sohit Vish. </span>
            from <span className="purple"> Lucknow, India.</span>
            <br /> I've done my graduation(B.Tech)and Diploma from INTEGRAL UNIVERSITY LUCKNOW.
            <br />
            Additionally, I am a Fresher Soft. Dev. looking for a better Opportunity.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trust The Process and Believe MAHADEV..!"{" "}
          </p>
          <footer className="blockquote-footer">Sohit Vishwakarma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
