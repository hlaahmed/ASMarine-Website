import React from "react";

// core components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container, Row, Col

} from "reactstrap";
import { Table } from 'reactstrap';

function TeamsSection() {
    return (
        <>
            <div className="section text-center">
                <Container>



                    <Col className="ml-auto mr-auto" >
                        <h2 className="title" >Publications</h2>
                    </Col>
                    <Col>
                        <h6>ASmarine takes pride in its contribution to Academia and the research community through its IEEE and journal publications.</h6>
                        
                    </Col>
                    <Table>
                        <tbody>
                            <tr>
                                <th scope="row">2019</th>
                                <td>Technical Journal Paper</td>

                            </tr>
                            <tr>
                                <th scope="row">2020</th>
                                <td>Dynamic Model and Control of an Autonomous Underwater Vehicle (ITCE'20 Conference,Aswan, Egypt)</td>

                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    );
}

export default TeamsSection;
