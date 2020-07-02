
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
import { Tick, OBJModel,MTLModel } from 'react-3d-viewer';

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import TeamsSection from "views/index-sections/TeamsSection.js";
import HallOfFame from "views/index-sections/HallOfFame.js"
import Sponsors from "views/index-sections/Sponsors.js";
import ContactUs from "views/index-sections/ContactUs.js";
import YoutubeSection from "views/index-sections/YoutubeSection.js";
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
            <div className="main" style={{ backgroundColor: '#0a63b6' }}>
                <div className="Section text-center">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>

                <div className="Section">
                    <Container >
                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                
                                <MTLModel 



        texPath="./src/lib/model/"
        mtl={require("assets/v1.mtl")}
        src={require("assets/v1.obj")}
     />
                            </Col>
                        </Row>
                    </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                </div>
            </div>
            <DemoFooter />
        </>
    );
}

export default LandingPage;
