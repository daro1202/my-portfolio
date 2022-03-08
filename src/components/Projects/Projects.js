import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import hifi from "../../Assets/Projects/HiFi-1.JPG";
import campsite from "../../Assets/Projects/campsite.jpg";
import altera from "../../Assets/Projects/aletta smith.jfif";
import usfood from "../../Assets/Projects/us food.jfif";
import handa from "../../Assets/Projects/handawatchworld.jpg";
import fashion from "../../Assets/Projects/fashion personality.jpg";
import serviceFreelancer from "../../Assets/Projects/service for freelance.jfif";
import growal from "../../Assets/Projects/growal.png";
import classroom from "../../Assets/Projects/classroom.png";
import tenyoshi from "../../Assets/Projects/tenyoshi.png";
import goodfeet from "../../Assets/Projects/goodfeet.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hifi}
              isBlog={false}
              title="Retro Gaming Platform based on the Binance Smart Chain"
              description="Worked with Senior Full-Stack Developers and Developed gaming website using React."
              link="hifigamingsociety.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campsite}
              isBlog={false}
              title="Campsite"
              description="WCampsite.com is a site where you can search and reserve campsites nationwide."
              link="https://www.custom-bedding.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={altera}
              isBlog={false}
              title="ALETTA SMIT Furniture"
              description="A shopping site that sells high quality bedding to customers. You can shop online using the bedding design tools, or even make and order your own bed at a low price."
              link="https://www.campjo.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handa}
              isBlog={false}
              title="HANDA Watch World official website renewal"
              description="A shopping site that sells HANDA Watch World official website renewal."
              link="https://kigyouka.style/hww//"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usfood}
              isBlog={false}
              title="food and safety"
              description="US Food and Safety Certification Company Site Construction"
              link="http://foodcodeconsultants.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={growal}
              isBlog={false}
              title="Growal"
              description="Accelerate the growth of the world."
              link="Growal.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serviceFreelancer}
              isBlog={false}
              title="A service that allows freelance hairdressers to rent salons"
              description="I was in charge of everything from requirements definition to development. 
              I created two sites, one for the administrator and one for the user."
              link="https://user.app.sharesalon-reco.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenyoshi}
              isBlog={false}
              title="Tempura Tendon Tea Soba Lunch Dinner Family"
              description="It is a tempura, tempura, and tea soba shop in Uwajima Kisaiya Road. We are also open for lunch at a reasonable price, so please enjoy the tempura, tempura, and tea soba that are particular about oil and ingredients."
              link="Tenyoshi.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classroom}
              isBlog={false}
              title="Japan Society for Class Management"
              description='The "Japan Society for Class Management | Classroom" recognizes diversity and considers evidence-based and versatile class management practices and theories, aiming to go back and forth between theory and practice regarding class management.'
              link="classroom.gift"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goodfeet}
              isBlog={false}
              title="The Good Feet Store"
              description="Good Feet Arch Supports are designed to alleviate foot, knee, hip, and back pain. See how they work for you with a free personalized arch support fitting and test walk at The Good Feet Store."
              link="goodfeet.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
