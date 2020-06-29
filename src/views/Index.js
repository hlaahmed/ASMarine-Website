
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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js"



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
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">ABOUT US</h2>
                <h5 className="description">
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

                <h2 className="title">Video Goes here</h2>
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
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
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
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>

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
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>

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
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-dark text-center" style={{ backgroundColor: '#0a63b6' }}>
          <Container>
            <h2 className="title">Hall Of Fame</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Youssef.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Yousef El Mansy</CardTitle>
                        <h6 className="card-category">Former Software Team Leader</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      One of the hardest aspects of the project is the integration of several domains especially the integration of Software and Hardware and getting both to work smoothly, overall i believe it is such interdisciplinary projects that impose a real challenge to us as engineers and i was more than happy to work on this project.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/yousefmansy/"
                      onClick={() => window.open("https://www.linkedin.com/in/yousefmansy/", "_blank")}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Amr.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Amr Abdelghany</CardTitle>
                        <h6 className="card-category">Former Software Member</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      It was the best experience of my life.
                      Meeting the teams, organizers and sponsors was amazing. I will definitely come back.
                    </p>


                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={() => window.open("https://www.linkedin.com/in/yousefmansy/", "_blank")}                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Perihane.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Perihane Youssef</CardTitle>
                        <h6 className="card-category">Former Software Member</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      I was really passionate about machine vision and deep learning, i believe i acquired awesome knowledge in the field and i'm still advising the team on the topic, plus RoboSub's competitive atmosphere is really awesome and it was a pleasure being part of such community                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Pance3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Pancé Ibrahim</CardTitle>
                        <h6 className="card-category">Former Project Manager/Business Team Leader</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Managing a newly founded team is rather a challenging experience, but with hard-work, discipline and team work; success was the outcome.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">

                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>



                <SectionCarousel></SectionCarousel>

        <div className="section section-dark text-center" style={{ backgroundColor: '#0a63b6' }}>
          <Container>


            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h1 className="title">Teams</h1>
                <h5 className="description">

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
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Youssef.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Yousef El Mansy</CardTitle>
                        <h6 className="card-category">Former Software Team Leader</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      One of the hardest aspects of the project is the integration of several domains especially the integration of Software and Hardware and getting both to work smoothly, overall i believe it is such interdisciplinary projects that impose a real challenge to us as engineers and i was more than happy to work on this project.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/yousefmansy/"
                      onClick={() => window.open("https://www.linkedin.com/in/yousefmansy/", "_blank")}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Amr.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Amr Abdelghany</CardTitle>
                        <h6 className="card-category">Former Software Member</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      It was the best experience of my life.
                      Meeting the teams, organizers and sponsors was amazing. I will definitely come back.
                    </p>


                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={() => window.open("https://www.linkedin.com/in/yousefmansy/", "_blank")}                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Perihane.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Perihane Youssef</CardTitle>
                        <h6 className="card-category">Former Software Member</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      I was really passionate about machine vision and deep learning, i believe i acquired awesome knowledge in the field and i'm still advising the team on the topic, plus RoboSub's competitive atmosphere is really awesome and it was a pleasure being part of such community                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Pance3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Pancé Ibrahim</CardTitle>
                        <h6 className="card-category">Former Project Manager/Business Team Leader</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Managing a newly founded team is rather a challenging experience, but with hard-work, discipline and team work; success was the outcome.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">

                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact Us</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
