import React from 'react';
import './Details.css';
import ReactFitText from 'react-fittext';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

export class Details extends React.Component {
    GoogleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.913464428593!2d-113.52014558398015!3d53.487875980008994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f446b744621%3A0x8673f4be8dab2514!2sMcLaurin%20Memorial%20Baptist%20Church!5e0!3m2!1sen!2sca!4v1576902671004!5m2!1sen!2sca";

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
                            <div className="Where">
                                <h3>Ceremony</h3>
                                <p className="Time">13:00</p>
                                <p className="Address">
                                    McLaurin Memorial Baptist Church
                                    <br/>
                                    11107 51 Ave NW, Edmonton, AB T6H 0L5
                                </p>
                                <iframe src={this.GoogleMapLink} frameborder="0" allowfullscreen=""/>
                            </div>
                        </Col>
                        <Col className="Reception">
                            <div className="Where">
                                <h3>Reception</h3>
                                <p className="Time">17:00</p>
                                <p className="Address">
                                    Pampa Brazilian Steakhouse Ellerslie
                                    <br/>
                                    9626 Ellerslie Rd SW, Edmonton, AB T6X 0N5
                                </p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.3716154881504!2d-113.48463208398216!3d53.42606347999575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01e9bfc0b73ad%3A0x81629cbd5bcdbdac!2sPampa%20Brazilian%20Steakhouse%20Ellerslie!5e0!3m2!1sen!2sca!4v1576917976491!5m2!1sen!2sca" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};