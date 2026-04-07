import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nakul Sinha</span>{" "}
            from <span className="purple">Bhubaneswar, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Student Software Developer</span> at{" "}
            <span className="purple">Jio</span>.
            <br />I am currently pursuing a Bachelors (IMSc) in{" "}
            <span className="purple">Computer Science Engineering</span> from{" "}
            <span className="purple">VIT Vellore</span>.
            <br />
            <br />
            Outside of coding, I love indulging in research and reading articles and blogs about latest technologies:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nakul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
