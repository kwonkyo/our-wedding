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
import { uuid } from 'uuidv4';
import { Guest } from './Guest.js';
import { dynamodb, converter } from './services/aws.js';

export class RSVP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeGuestIndex: 0,
            family: null
        };

        this.handleSelectGuest = this.handleSelectGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFamilyIdChange = this.handleFamilyIdChange.bind(this);
        this.handleSubmitFamilyId = this.handleSubmitFamilyId.bind(this);
    }

    handleSelectGuest(index) {
        this.setState({
            activeGuestIndex: index
        });
    }

    handleSubmit() {
        console.log(this.state.family);
    }

    handleFamilyIdChange(e) {
        this.setState({
            familyId: e.target.value.toLowerCase()
        });
    }

    async handleSubmitFamilyId() {
        let response = await dynamodb
            .getItem({
                TableName: 'wedding-guests',
                Key: {
                    'family-id': {S: this.state.familyId}
                }
            })
            .promise();

        if (response.Item === undefined) {
            // TODO: Handle invalid family ID
            return;
        }

        let familyData = converter.unmarshall(response.Item);
        this.setState({
            family: familyData
        });
    }

    render() {
        let body = undefined;
        if (this.state.family === null) {
            body = (
                <Form className="Form">
                    <h3 style={{color: "white"}}>1. Let's start with your invite ID.</h3>
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
                                            console.log('foo');
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
            )
        } else {
            body = (
                <div className="Form">
                    <Form>
                        <h3 style={{color: "white"}}>2. Okay, time to RSVP!</h3>
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