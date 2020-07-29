import React from "react";

// core components
import {
    Button, UncontrolledCollapse,
    Card, CardGroup, CardText, CardImg, CardSubtitle,
    CardBody,
    CardFooter,
    CardTitle,
    Container, Row, Col

} from "reactstrap";

function TeamsSection() {
    return (
        <>
            <div className="section section-dark text-center" style={{ backgroundColor: '#0a63b6' }}>
                <Container>



                    <Col className="ml-auto mr-auto" >
                        <h2 className="title" >Teams</h2>
                    </Col>


                    <Row style={{ padding: 0, margin: 0 }}>
                        <Col className="ml-auto mr-auto" md="3">
                            <Card className="card-profile card-plain" style={{ padding: 0, margin: 0 }}>
                                <div className="">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            src={require("assets/img/faces/samer.jpg")}
                                        />
                                    </a>
                                </div>
                                <CardBody >
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <div className="author" style={{ padding: 0, margin: 0 }}>
                                            <CardTitle tag="h4">Samer Elda3er</CardTitle>
                                            <h6 className="card-category">Team Leader</h6>
                                        </div>
                                    </a>
                                    <p className="card-description text-center" style={{ padding: 0, margin: 0 }}>
                                        "Keep your enemies close and your sub-teams closer".
                    <br></br>
It’s funny, because the sub teams are right next to me. I live by my own quotes as you can see.
                    </p>
                                </CardBody>
                                <CardFooter className="text-center" >

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
                    <Row>
                        <Col md="3">
                            <Card className="card-profile card-plain" style={{ padding: 0, margin: 0 }}>
                                <div >
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            src={require("assets/img/software.jpg")}
                                        />
                                    </a>
                                </div>
                                <CardBody>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <div className="author">
                                            <CardTitle tag="h4">Software Team</CardTitle>
                                        </div>
                                    </a>
                                    <p className="card-description text-center">
                                        We're responsible for  designing and testing the vehicle software architecture which can be broken down into perception modules, SLAM modules, control modules and vehicle simulations                    </p>
                                </CardBody>
                                <CardFooter className="text-center">

                                </CardFooter>
                            </Card >
                        </Col>
                        <Col md="3">
                            <Card className="card-profile card-plain" style={{ padding: 0, margin: 0 }}>
                                <div >
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            src={require("assets/img/electrical.jpg")}
                                        />
                                    </a>
                                </div>
                                <CardBody>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <div className="author">
                                            <CardTitle tag="h4">Electrical Team</CardTitle>
                                        </div>
                                    </a>
                                    <p className="card-description text-center">
                                        We're responsible for electrical & electronics aspects of the vehicle like power management, safety, PCB design, fabrication, wiring and electric kit design
                    </p>
                                </CardBody>
                                <CardFooter className="text-center">

                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="card-profile card-plain" style={{ padding: 0, margin: 0 }}>
                                <div >
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            src={require("assets/img/mechanical.jpg")}
                                        />
                                    </a>
                                </div>
                                <CardBody>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <div className="author">
                                            <CardTitle tag="h4">Mechanical Team</CardTitle>
                                        </div>
                                    </a>
                                    <p className="card-description text-center">
                                        We're responsible for vehicle frame design, electronics sealing, vehicle manufacturing, assembly and fluid dynamic analysis
                    </p>
                                </CardBody>
                                <CardFooter className="text-center">

                                </CardFooter>
                            </Card>
                        </Col>

                        <Col md="3">
                            <Card className="card-profile card-plain" style={{ padding: 0, margin: 0 }}>
                                <div >
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            src={require("assets/img/business.jpg")}
                                        />
                                    </a>
                                </div>
                                <CardBody>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <div className="author">
                                            <CardTitle tag="h4">Business Team</CardTitle>
                                        </div>
                                    </a>
                                    <p className="card-description text-center">
                                        We're responsible for the managerial aspects of the team like finances, sponsors, media, IT and supply chain activities
                    </p>
                                </CardBody>
                                <CardFooter className="text-center">


                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Button
                                className=" btn-neutral ml-1"
                                color="link"
                                href="#pablo"
                                onClick={() => window.open("https://www.linkedin.com/in/yousefmansy/", "_blank")}                    >
                                Learn More
                                    </Button>
                        </Col>
                        <Col md="3">
                            <Button
                                className=" btn-neutral ml-1"
                                color="link"
                                href="#pablo"
                                id="toggler3">
                                Learn More
                                    </Button>
                        </Col>
                        <Col md="3">
                            <Button
                                className=" btn-neutral ml-1"
                                color="link"
                                href="#pablo"
                                id="toggler2">
                                Learn More
                                    </Button>
                        </Col>
                        <Col md="3">

                            <Button
                                className=" btn-neutral ml-1"
                                color="link"
                                href="#pablo"
                                id="toggler"                   >
                                Learn More
                                    </Button>
                        </Col>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Row>

                    <UncontrolledCollapse toggler="#toggler" >


                        <Col className="ml-auto mr-auto" >
                            <h2 className="title" >Business Team</h2>
                        </Col>
                        <Col className="ml-auto mr-auto" md="3">
                            <Card inverse className="card-avatar">
                                <CardImg src={require("assets/img/team/Business/Amr.webp")} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle style={{ fontSize: "20px" }}>Amr Mohamed</CardTitle>
                                    <CardSubtitle>Business Team Leader</CardSubtitle>
                                    <CardText>4th Year Mechatronics Engineering Student</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="6">

                            <CardGroup >

                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Business/sarah.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Sarah Walid</CardTitle>
                                        <CardSubtitle>IT Member</CardSubtitle>
                                        <CardText>4th Year Mechatronics Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Business/Muhammed.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Muhammed Ghazaly</CardTitle>
                                        <CardSubtitle>Media and Marketing Member</CardSubtitle>
                                        <CardText>2nd Year Mechatronics Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </UncontrolledCollapse>

                    <UncontrolledCollapse toggler="#toggler2" >


                        <Col className="ml-auto mr-auto" >
                            <h2 className="title" >Mechanical Team</h2>
                        </Col>
                        <Col className="ml-auto mr-auto" md="3">
                            <Card inverse className="card-avatar">
                                <CardImg src={require("assets/img/team/Mechanical/Ibrahim.webp")} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle style={{ fontSize: "20px" }}>Ibrahim Hany</CardTitle>
                                    <CardSubtitle>Mechanical Team Leader</CardSubtitle>
                                    <CardText>4th Year Mechatronics Engineering Student</CardText>
                                </CardBody>
                            </Card>
                        </Col>

                            <CardGroup >

                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Mechanical/Mohamed.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Mohamed Raafat</CardTitle>
                                        <CardSubtitle>Mechanical Team Member</CardSubtitle>
                                        <CardText>4th Year Mechatronics Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Mechanical/Reem.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Reem Khaled</CardTitle>
                                        <CardSubtitle>Mechanical Team Member</CardSubtitle>
                                        <CardText>2nd Year Mechanical Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Mechanical/Noura.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Noura Soliman</CardTitle>
                                        <CardSubtitle>Mechanical Team Member</CardSubtitle>
                                        <CardText>2nd Year Mechanical Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Mechanical/Mohamed2.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "16px" }}>Mohamed Mahmoud</CardTitle>
                                        <CardSubtitle>Mechanical Team Member</CardSubtitle>
                                        <CardText>2nd Year Mechanical Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Mechanical/Ahmed.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Ahmed Ashraf</CardTitle>
                                        <CardSubtitle>Mechanical Team Member</CardSubtitle>
                                        <CardText>2nd Year Mechanical Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        
                    </UncontrolledCollapse>

                    
                    <UncontrolledCollapse toggler="#toggler3" >


                        <Col className="ml-auto mr-auto" >
                            <h2 className="title" >Electrical Team</h2>
                        </Col>
                        <Col className="ml-auto mr-auto" md="3">
                            <Card inverse className="card-avatar">
                                <CardImg src={require("assets/img/team/Electrical/Zeyad.webp")} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle style={{ fontSize: "20px" }}>Zeyad Mohamed</CardTitle>
                                    <CardSubtitle>Electrical Team Leader</CardSubtitle>
                                    <CardText>4th Year Mechatronics Engineering Student</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="6">

                            <CardGroup >

                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Electrical/Adel.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Adel Hamed</CardTitle>
                                        <CardSubtitle>Electrical Team Member</CardSubtitle>
                                        <CardText>4th Year Mechatronics Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="card-avatar">
                                    <CardImg src={require("assets/img/team/Electrical/Zeyad2.webp")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle style={{ fontSize: "20px" }}>Zeyad Hossam</CardTitle>
                                        <CardSubtitle>Electrical Team Member</CardSubtitle>
                                        <CardText>3rd Year Communications Engineering Student</CardText>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </UncontrolledCollapse>
                    
                </Container>
            </div>
        </>
    );
}

export default TeamsSection;
