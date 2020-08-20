import React from 'react';
import './RSVP.css';
import ReactFitText from 'react-fittext';
import {
    Form, Col, Tab, Tabs, Button, Modal
} from 'react-bootstrap';
import { uuid } from 'uuidv4';
import { Guest } from './Guest.js';
import { aws } from './services/AWS.js';

export class RSVP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGuestIndex: 0,
            family: null,
            showUnknownGuestMessage: false,
            showRSVPCompleteMessage: false
        };

        this.handleSelectGuest = this.handleSelectGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFamilyIdChange = this.handleFamilyIdChange.bind(this);
        this.handleSubmitFamilyId = this.handleSubmitFamilyId.bind(this);
        this.closeUnknownGuestMessage = this.closeUnknownGuestMessage.bind(this);
        this.closeRSVPCompleteMessage = this.closeRSVPCompleteMessage.bind(this);

        this.endpoint = process.env.REACT_APP_API_ENDPOINT;
        this.tableName = "our-wedding-rsvps";

        this.converter = aws.DynamoDB.Converter;
    }

    handleSelectGuest(index) {
        this.setState({
            activeGuestIndex: index
        });
    }

    async handleSubmit() {
        let familyData = this.converter.marshall(this.state.family);
        
        await fetch(
            `${this.endpoint}/put-rsvp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "TableName": this.tableName,
                    "Item": familyData
                })
            });

        this.setState({
            showRSVPCompleteMessage: true
        });
    }

    handleFamilyIdChange(e) {
        this.setState({
            familyId: e.target.value.toLowerCase()
        });
    }

    async handleSubmitFamilyId() {
        let response = await fetch(
            `${this.endpoint}/get-rsvp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "TableName": this.tableName,
                    "Key": {
                        "family-id": {
                            "S": this.state.familyId
                        }
                    }
                })
            });
        
        let data = (await response.json()).Item;
    
        if (data === undefined) {
            this.setState({
                showUnknownGuestMessage: true
            });

            return;
        }

        this.setState({
            family: this.converter.unmarshall(data)
        });
    }

    closeUnknownGuestMessage() {
        this.setState({
            showUnknownGuestMessage: false
        });
    }

    closeRSVPCompleteMessage() {
        this.setState({
            showRSVPCompleteMessage: false
        });
    }

    render() {
        let body = undefined;
        if (this.state.family === null) {
            body = (
                <Form className="Form">
                    <h3 className="FormHeader">1. Let's start with your invite ID.</h3>
                    <br/>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                className="FamilyId"
                                onChange={this.handleFamilyIdChange}
                                onKeyPress={async (e) => {
                                        if (e.charCode === 13) {
                                            e.preventDefault();

                                            await this.handleSubmitFamilyId();
                                        }
                                    }
                                }
                                name="familyId"
                                placeholder="Find your invite ID in your invitation!"/>
                        </Col>
                    </Form.Row>
                    <Form.Row className="Enter">
                        <Col>
                            <Button onClick={async () => await this.handleSubmitFamilyId()}>
                                Enter
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            );
        } else {
            body = (
                <div className="Form">
                    <Form>
                        <h3 className="FormHeader">2. Okay, time to RSVP!</h3>
                        <br/>
                        <Tabs
                            activeKey={this.state.activeGuestIndex}
                            onSelect={this.handleSelectGuest}>
                            {
                                this.state.family['members'].map(m => 
                                    <Tab
                                        eventKey={m['index']}
                                        key={uuid()}
                                        title={m['form-data']['first-name']}>
                                    { <Guest
                                        index={m['index']}
                                        formData={m['form-data']}/> }
                                    </Tab>
                                )
                            }
                        </Tabs>
                        <Form.Row className="Submit">
                            <Col>
                                <Button onClick={async () => await this.handleSubmit()}>
                                    RSVP!
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
            );
        }

        const unknownGuestModal = (
            <Modal show={this.state.showUnknownGuestMessage} onHide={this.closeUnknownGuestMessage}>
                <Modal.Header closeButton>
                    <Modal.Title>Sorry!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We couldn't find this invite ID in our database.<br/><br/>
                    Please check your invite ID, which is enclosed along with your wedding invitation.<br/><br/>
                    
                    <i>If you've lost your invite ID, please contact Victor or Hee Hyun.</i>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.closeUnknownGuestMessage}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
        
        const rsvpCompleteModal = (
            <Modal show={this.state.showRSVPCompleteMessage} onHide={this.closeRSVPCompleteMessage}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank you!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your RSVP is complete.<br/><br/>
                    We look forward to seeing you at the wedding!<br/><br/>
                    
                    <i>Remember, you can always come back to make changes to your RSVP details.</i>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.closeRSVPCompleteMessage}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );

        return (
            <div className="RSVP">
                <div className="Title">
                    <ReactFitText compressor={1} maxFontSize={100}>
                        <h1 className="animated animatedFadeInUp fadeInUp">
                            RSVP
                        </h1>
                    </ReactFitText>
                </div>
                { body }
                { unknownGuestModal }
                { rsvpCompleteModal }
            </div>
        );
    }
};