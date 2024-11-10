import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Compass.css';

// Helper function to style specific words globally
function styleText(text) {
  return text.split(' ').map((word, index) => {
    if (word === 'Tech') return <span key={index} className="text-blue">{word}</span>;
    if (word === 'M') return <span key={index} className="text-red">{word}</span>;
    if (word === 'aster') return <span key={index} className="text-white">{word}</span>;
    return word + ' '; // Add space after each word
  });
}

// function Compass() {
//   return (
//     <Container fluid className="compass min-vh-100">
//       <Row className="align-items-center min-vh-100">
//         {/* Left Half: Image */}
//         <Col md={6} className="compass-image-container d-flex justify-content-center align-items-center">
//           <img className="compass-icon" src="/images/compass3.jpg" alt="Compass Icon" />
//         </Col>

//         {/* Right Half: Text Content */}
//         <Col md={6} className="compass-text">
//           <h2>{styleText('TECH M ASTER COMPASS')}</h2>
//           <p>{styleText('Tech M aster Compass is your go-to platform, providing a comprehensive suite of insights from Dashboards, Application Health Checks, and Automation Statistics.')}</p>
//           <p>{styleText('It also offers Tech M aster Compass self-help tools to search historical Production Support incidents, ensuring efficient management and resolution of current incidents.')}</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


 function Compass() {
  return (
    <Container fluid className="compass-container vh-100">
      <Row className="compass-row align-items-center min-s-100">
        {/* Left Half: Image */}
        <Col md={6} className="compass-image-container d-flex justify-content-center align-items-center">
          <img className="compass-icon" src="/images/compass3.jpg" alt="Compass Icon" />
        </Col>

        {/* Right Half: Text Content */}
        <Col md={6} className="compass-text">
          <h2 className="techmaster-heading">TECHMASTER COMPASS</h2>
          <p className="compass-description">
            TechMaster Compass is your go-to platform, providing a comprehensive suite of insights from Dashboards, Application Health Checks, and Automation Statistics.
          </p>
          <p className="compass-description">
            It also offers TechMaster Compass self-help tools to search historical Production Support Incidents.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Compass;
