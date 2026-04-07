import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Student Software cum Machine Learning Engineer who loves transforming ideas into
              reliable, scalable products. I work primarily in building Agentic AI Systems. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences(For more info refer to my Github profile).
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Python, Langraph, Langchain, C++, Rust, Node.js, and Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications,Machine Learning Solutions, Agentic AI pipelines{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
