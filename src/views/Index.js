
import React from "react";


// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import TeamsSection from "views/index-sections/TeamsSection.js";
import HallOfFame from "views/index-sections/HallOfFame.js"
import Sponsors from "views/index-sections/Sponsors.js";
import ContactUs from "views/index-sections/ContactUs.js";
import YoutubeSection from "views/index-sections/YoutubeSection.js";
import RobosubSection from "views/index-sections/RobosubSection.js";
import PublicationsSection from "views/index-sections/PublicationsSection.js";
import Map from "views/index-sections/Map.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <div id="sectionaboutus">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">ABOUT US</h2>
                  <h5 className=" ">
                    ASmarine Team was founded in 2019 by a group of robotics researchers to create a research center and compete in RoboSub. The team focuses on hands-on implementation of academic knowledge presented in educational institutions to present innovative solutions for Marin Industry. ASmarine aspires to shape a Marine Industrial revolution and combine Engineering Robotics along with Marine Science to enhance the world’s economy and face the global crises that threaten the planet’s resources and Marine life.
                </h5>
                  <br />
                  {/*<Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>*/}
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col className="ml-auto mr-auto" md="8">

                  <YoutubeSection></YoutubeSection>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <h3 className="title">2019</h3>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Founded</h4>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <h3 className="title">2</h3>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Project</h4>

                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <h3 className="title">26</h3>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Members</h4>


                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <h3 className="title">2</h3>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Publications</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>


        <div id="sectionhalloffame">
          <HallOfFame></HallOfFame>
        </div>

        <div id="sectioncarousel">
          <SectionCarousel></SectionCarousel>
        </div>
        <div id="sectionteams">
          <TeamsSection></TeamsSection>
        </div>
        <div id="publicationssection">
          <PublicationsSection></PublicationsSection>
        </div>
        <div id="robosubsection">
          <RobosubSection></RobosubSection>
        </div>
        <div id="sectionsponsors">
          <Sponsors></Sponsors>
        </div>
        <div id="sectioncontactus">
        <ContactUs></ContactUs>
        </div>
        <Container>
          <Map></Map>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
