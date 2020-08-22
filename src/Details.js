import React from 'react';
import './Details.css';
import ReactFitText from 'react-fittext';
import {
    Container, Row, Col, Button, Modal
} from 'react-bootstrap';

export class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showParkingInformationModal: false
        };

        this.toggleParkingInformationModal = this.toggleParkingInformationModal.bind(this);
    }

    toggleParkingInformationModal() {
        this.setState({
            showParkingInformationModal: !this.state.showParkingInformationModal
        });
    }

    render() {
        const parkingInformationModal = (
            <Modal className="ParkingInformationModal" show={this.state.showParkingInformationModal} onHide={this.toggleParkingInformationModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Parking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We understand that finding parking in downtown Edmonton is tough, and we appreciate you coming to celebrate our wedding despite these challenges!
                    <br/><br/>
                    We suggest a few options for parking:
                    <br/><br/>
                    1. If you don't mind walking a few blocks, you can click <a href="https://parking.manulifeplace.com/">here</a> to reserve a spot in the Manulife Place underground parking, which is 8 minutes walk away from the hotel.<br/>
                    2. If you have mobility issues or need parking in the hotel grounds for any reason, please contact Hee Hyun or Victor directly, and we'll book a parking spot for you in the hotel parking lot.
                    <br/><br/>
                    If you are familiar with the area, you can also try to find street parking or public parking in the vicinity.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.toggleParkingInformationModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )

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
                                <p className="Time">17:30 - 20:00</p>
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
                        <Row className="Parking">
                            <Button variant="secondary" onClick={this.toggleParkingInformationModal}>
                                Click here for parking details.
                            </Button>
                        </Row>
                    </Row>
                </Container>
                { parkingInformationModal }
            </div>
        );
    }
};