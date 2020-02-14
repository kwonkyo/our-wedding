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
import { MOCK_FAMILY_ID, MOCK_FAMILY } from './mock';

export class RSVP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGuestIndex: 0,
            familyId: MOCK_FAMILY_ID,
            guests: MOCK_FAMILY
        };

        this.handleSelectGuest = this.handleSelectGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelectGuest(index) {
        this.setState({
            activeGuestIndex: index
        });
    }

    handleSubmit() {
        console.log(this.state.guests.map(g => g.formData));
    }

    render() {
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
            </div>
        );
    }
};