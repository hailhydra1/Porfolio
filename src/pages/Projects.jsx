import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent  <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Hopsky"
              description="This online blog-posting platform boasts a responsive front-end design, complete with an admin panel built using Bootstrap. The platform allows for full CURD functionality on profiles and posts, and users can comment on multiple posts. Additionally, users can easily reset their password. The back-end is powered by PHP and utilizes SQL for the database management."
              ghLink="https://github.com/hailhydra1/HOPSKY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Memories"
              description="This platform features a responsive interface built with Reactjs and MaterialUI, allowing users to easily manage their profiles and posts through CRUD activities. It uses Google auth for easy Login and Signup functionality. The option to comment and interact with the posts (like or dislike) is also available. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/hailhydra1/Memories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="UMotel"
              description="This Hotel Booking Platform utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on Hotel booking and addition from the admin panel. Multiple images and perks and pricing can be added at the time of creation of the hotel. Users can also see actual location of the website on google maps. The website uses MongoDB and AmazonS3 Buckets for the database."
              ghLink="https://github.com/hailhydra1/pranay-booking-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="DrawIt"
              description="Real-time collaborative drawing board, developed with React, Socket.IO, and Graph.js, empowers users to create or join sessions to collaboratively draw, offering seamless synchronization of changes across all participants. Users can customize their brushes with various styles, sizes, and colors, while also engaging in real-time chat with other users. This innovative platform fosters creativity and collaboration, providing an immersive experience for artists and enthusiasts alike.




              "
              ghLink="https://github.com/hailhydra1/DrawIt"
            />
          </Col>  

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects