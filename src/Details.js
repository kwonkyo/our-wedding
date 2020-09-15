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
                    <i>Unfortunately, our venue doesn't offer free public parking. With our apologies, we suggest the following options for parking:</i>
                    <br/><br/>
                    1. There are several parking options in the vicinity of the hotel:
                    <ul>
                        <li><a href="https://www.parkme.com/lot/99265/library-parkade-edmonton-ab-canada">Library Parkade</a></li>
                        <li><a href="https://lots.impark.com//imp/en?latlng=53.544389,-113.49092669999999#details=2,308">Scotia Place Parkade</a></li>
                        <li><a href="https://lots.impark.com//imp/en?latlng=53.544389,-113.49092669999999#details=2,373">Commerce Place Parkade</a></li>
                        <li><a href="https://parking.manulifeplace.com/">Manulife Place Parkade</a></li>
                    </ul>
                    2. If you have mobility issues or need parking in the hotel grounds for any reason, please contact Hee Hyun or Victor directly, and we'll book a parking spot for you in the hotel parking lot.
                    <br/><br/>
                    If you are familiar with the area, you can also try to find street parking or other public parking in the vicinity.
                    Click <a href="https://en.parkopedia.ca/parking/locations/10060_100_street_nw_edmonton_alberta_t5j_3z5_canada_a6bbc3x296yck1h388/?country=ca&arriving=202010101430&leaving=202010102100">here</a> for a map of parking options in the area.
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