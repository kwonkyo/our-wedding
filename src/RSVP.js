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

export class RSVP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGuestIndex: 0,
            guests: [
                {
                    index: 0,
                    formData: {
                        "is-primary-guest": true,
                        "email": "",
                        "age-group": "adult",
                        "first-name": "",
                        "last-name": "",
                        "details": ""
                    }
                }
            ]
        };

        this.handleAddGuest = this.handleAddGuest.bind(this);
        this.handleDeleteActiveGuest = this.handleDeleteActiveGuest.bind(this);
        this.handleSelectGuest = this.handleSelectGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelectGuest(index) {
        this.setState({
            activeGuestIndex: index
        });
    }

    handleAddGuest() {
        this.state.guests.push({
            index: this.state.guests.length,
            formData: {
                "is-primary-guest": false,
                "email": "",
                "age-group": "adult",
                "first-name": "",
                "last-name": "",
                "details": ""
            }
        });

        this.setState({
            guests: this.state.guests,
            activeGuestIndex: this.state.guests.length - 1
        });
    }

    handleDeleteActiveGuest() {
        let filteredGuests = [];
        for (let guest of this.state.guests) {
            if (guest.index == this.state.activeGuestIndex) {
                continue;
            }
            if (guest.index > this.state.activeGuestIndex) {
                guest.index--;
            }

            filteredGuests.push(guest);
        }

        this.setState({
            guests: filteredGuests,
            activeGuestIndex: (
                (this.state.activeGuestIndex == filteredGuests.length)
                ? this.state.activeGuestIndex - 1
                : this.state.activeGuestIndex
            )
        });
    }

    handleSubmit() {
        console.log(this.state.guests);
    }

    render() {
        let deleteActiveGuestButton = this.state.activeGuestIndex == 0 ? null : (
            <Col>
                <Button
                    onClick={this.handleDeleteActiveGuest}
                    variant="danger"
                    style={{opacity: .95}}>Delete Guest</Button>
            </Col>
        );

        let submitButton = this.state.activeGuestIndex > 0 ? null : (
            <Form.Row className="Submit">
                <Col>
                    <Button onClick={this.handleSubmit}>
                        RSVP!
                    </Button>
                </Col>
            </Form.Row>
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
                                    title={"Guest " + (g.index + 1)}>
                                { <Guest
                                      index={g.index}
                                      formData={g.formData}/> }
                                </Tab>
                            )
                        }
                    </Tabs>
                    <Form.Row className="ModifyGuests">
                        { deleteActiveGuestButton }
                        <Col>
                            <Button onClick={this.handleAddGuest} variant="light">
                                Add a Plus One
                            </Button>
                        </Col>
                    </Form.Row>
                    { submitButton }
                </Form>
                </div>
            </div>
        );
    }
};