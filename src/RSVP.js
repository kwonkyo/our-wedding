import React from 'react';
import './RSVP.css';
import ReactFitText from 'react-fittext';
import {
    Form,
    Col,
    Tab,
    Tabs,
    Button
} from 'react-bootstrap';
import { Guest } from './Guest.js';
import { uuid } from 'uuidv4';
import fetch_family from './mock';

export class RSVP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGuestIndex: 0,
            guests: []
        };

        this.handleSelectGuest = this.handleSelectGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setFamilyId = this.setFamilyId.bind(this);
        this.setFamily = this.setFamily.bind(this);
    }

    handleSelectGuest(index) {
        this.setState({
            activeGuestIndex: index
        });
    }

    handleSubmit() {
        console.log(this.state.guests.map(g => g.formData));
    }

    setFamilyId(e) {
        this.setState({
            familyId: e.target.value
        });
    }

    setFamily() {
        let guests = fetch_family(this.state.familyId);

        this.setState({
            guests: guests
        });
    }

    render() {
        let body = undefined;
        if (this.state.guests.length === 0) {
            body = (
                <Form className="Authenticate">
                    <Form.Row>
                        <Col>
                            <Form.Control
                                className="FamilyId"
                                onChange={this.setFamilyId}
                                onKeyPress={(e) => {
                                        if (e.charCode === 13) {
                                            this.setFamily();
                                        }
                                    }
                                }
                                name="familyId"
                                placeholder="Enter your invitee ID here!"/>
                        </Col>
                    </Form.Row>
                    <Form.Row className="Enter">
                        <Col>
                            <Button onClick={this.setFamily}>
                                Enter
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            )
        } else {
            body = (
                <div className="Form">
                    <Form>
                        <Tabs
                            activeKey={this.state.activeGuestIndex}
                            onSelect={this.handleSelectGuest}>
                            {
                                this.state.guests.map(g => 
                                    <Tab
                                        eventKey={g.index}
                                        key={uuid()}
                                        title={g.formData['first-name']}>
                                    { <Guest
                                        index={g.index}
                                        formData={g.formData}/> }
                                    </Tab>
                                )
                            }
                        </Tabs>
                        <Form.Row className="Submit">
                            <Col>
                                <Button onClick={this.handleSubmit}>
                                    RSVP!
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
            )
        }

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
            </div>
        );
    }
};