import React from 'react';
import './Details.css';
import ReactFitText from 'react-fittext';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export class Details extends React.Component {
    render() {
        return (
            <div className="Details">
                <div className="Title">
                    <ReactFitText compressor={1} maxFontSize={100}>
                        <h1 className="animated animatedFadeInUp fadeInUp">
                            Details
                        </h1>
                    </ReactFitText>
                </div>
                <Container>
                    <Row>
                        <Col className="Ceremony">
                            <div className="When">
                                <h3><i>Ceremony</i></h3>
                                <p className="Time">15:30 - 16:30</p>
                            </div>
                        </Col>
                        <Col className="Reception">
                            <div className="When">
                                <h3><i>Reception</i></h3>
                                <p className="Time">17:00 - 20:00</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="Where">
                            <p className="Address">
                                Fairmont Hotel Macdonald
                                <br/>
                                Wedgewood Room
                                <br/>
                                10065 100 St NW, Edmonton, AB T5J 0N6
                            </p>
                        </Col>
                    </Row>
                    <Row className="AdditionalInformation">
                        <Row className="Arrival">
                            <p>Please arrive about 15 minutes in advance.</p>
                        </Row>
                        <Row className="Attire">
                            <p>We'd love to see you in formal or semi-formal attire.</p>
                        </Row>
                    </Row>
                </Container>
            </div>
        );
    }
};