import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import umotel from "../assets/projects/umotel.png"
import memories from "../assets/projects/memories.png"
import hopsky from "../assets/projects/hopsky.png"
import drawit from "../assets/projects/drawit.png"
import discord from "../assets/projects/discord.png"

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
              imgPath={hopsky}
              isBlog={false}
              title="Hopsky"
              description="This online blog-posting platform boasts a responsive front-end design, complete with an admin panel built using Bootstrap. The platform allows for full CURD functionality on profiles and posts, and users can comment on multiple posts. Additionally, users can easily reset their password. The back-end is powered by PHP and utilizes SQL for the database management."
              ghLink="https://github.com/hailhydra1/HOPSKY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories"
              description="This platform features a responsive interface built with Reactjs and MaterialUI, allowing users to easily manage their profiles and posts through CRUD activities. It uses Google auth for easy Login and Signup functionality. The option to comment and interact with the posts (like or dislike) is also available. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/hailhydra1/Memories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umotel}
              isBlog={false}
              title="UMotel"
              description="This Hotel Booking Platform utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on Hotel booking and addition from the admin panel. Multiple images and perks and pricing can be added at the time of creation of the hotel. Users can also see actual location of the website on google maps. The website uses MongoDB and AmazonS3 Buckets for the database."
              ghLink="https://github.com/hailhydra1/pranay-booking-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drawit}
              isBlog={false}
              title="DrawIt"
              description="Real-time collaborative drawing board, developed with React, Socket.IO, and Graph.js, empowers users to create or join sessions to collaboratively draw, offering seamless synchronization of changes across all participants. Users can customize their brushes with various styles, sizes, and colors, while also engaging in real-time chat with other users. This innovative platform fosters creativity and collaboration, providing an immersive experience for artists and enthusiasts alike."
              ghLink="https://github.com/hailhydra1/DrawIt"
            />
          </Col>  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord"
              description="Created an end-to-end fullstack and real-time discord clone which has many functionalities like,
              Real-time messaging Sending attachments as messages, Delete and Edit messages in real time for all users, Create Text, Audio and Video
              call Channels and also with full responsivity and mobile UI."
              ghLink="https://github.com/hailhydra1/discord-clone/tree/main"
            />
          </Col>  
        </Row>
      </Container>
    </Container>
  )
}

export default Projects