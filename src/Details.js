import React from 'react';
import './Details.css';
import ReactFitText from 'react-fittext';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export class Details extends React.Component {
    GoogleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.974743619782!2d-113.49170358397834!3d53.540365180020075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02244379696db%3A0xd6ea79f64a1b5361!2sFairmont%20Hotel%20Macdonald!5e0!3m2!1sen!2sca!4v1578270883703!5m2!1sen!2sca";

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
                                <h3>Ceremony</h3>
                                <p className="Time">15:30 - 16:30</p>
                            </div>
                        </Col>
                        <Col className="Reception">
                            <div className="When">
                                <h3>Reception</h3>
                                <p className="Time">17:00 - 21:00</p>
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
                    <Row>
                        <Col><iframe src={this.GoogleMapLink} frameborder="0" allowfullscreen=""/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
};