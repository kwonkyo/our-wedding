import React from 'react';
import './Guest.css';
import {
    Form,
    Col
} from 'react-bootstrap';

export class Guest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: props.index,
            formData: props.formData
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        let key = e.target.name.replace("guest-" + this.state.index + "-", "");
        let value = e.target.value;

        this.state.formData[key] = value;

        this.setState({
            formData: this.state.formData
        });

        e.stopPropagation();
    }

    render() {
        let nonAdultAccomodationsComponent = (
            (
                (this.state.formData["age-group"] == "adult") ||
                (this.state.formData["reception"] != "attending")
            )
            ? null
            : (
                <Form.Row className="FormRow BabyAccomodations">
                    <Form.Label>Do you require child/baby accomodations?</Form.Label>
                    <Col>
                        <Form.Check custom inline
                            label="Kid's menu"
                            onChange={this.handleOnChange}
                            id={"guest-" + this.state.index + "-kids-menu"}
                            name={"guest-" + this.state.index + "-kids-menu"}
                            value="required"
                            checked={this.state.formData["kids-menu"] === "required"}/>
                        <Form.Check custom inline
                            label="High chair"
                            onChange={this.handleOnChange}
                            id={"guest-" + this.state.index + "-high-chair"}
                            name={"guest-" + this.state.index + "-high-chair"}
                            value="required"
                            checked={this.state.formData["high-chair"] === "required"}/>
                    </Col>
                </Form.Row>
            )
        );

        let emailComponent = this.state.formData["is-primary-guest"] ? 
        (
            <Form.Row className="FormRow Email">
                <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="(Only required for the primary guest.)"
                        onChange={this.handleOnChange}
                        name={"guest-" + this.state.index + "-email"}
                        value={this.state.formData["email"]}/>
                </Col>
            </Form.Row>
        ) : null;

        return (
            <div className="Guest">
                <Form.Row className="FormRow AgeGroup">
                    <Col>
                        <Form.Check custom inline
                            type="radio"
                            label="Adult"
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-age-group"}
                            id={"guest-" + this.state.index + "-is-adult"}
                            value="adult"
                            checked={this.state.formData["age-group"] === "adult"}/>
                        <Form.Check custom inline
                            type="radio"
                            label="Child"
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-age-group"}
                            id={"guest-" + this.state.index + "-is-child"}
                            value="child"
                            checked={this.state.formData["age-group"] === "child"}
                            disabled={this.state.index == 0}/>
                        <Form.Check custom inline
                            type="radio"
                            label="Baby (<36 months)"
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-age-group"}
                            id={"guest-" + this.state.index + "-is-baby"}
                            value="baby"
                            checked={this.state.formData["age-group"] === "baby"}
                            disabled={this.state.index == 0}/>
                    </Col>
                </Form.Row>
                <Form.Row className="FormRow Reception">
                    <Form.Label>Will this invitee be attending the reception?</Form.Label>
                    <Col>
                        <Form.Check custom inline
                            type="radio"
                            label="Yes"
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-reception"}
                            id={"guest-" + this.state.index + "-reception-attending"}
                            value="attending"
                            checked={this.state.formData["reception"] == "attending"}/>
                        <Form.Check custom inline
                            type="radio"
                            label="No"
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-reception"}
                            id={"guest-" + this.state.index + "-reception-not-attending"}
                            value="not-attending"
                            checked={this.state.formData["reception"] == "not-attending"}/>
                    </Col>
                </Form.Row>
                { nonAdultAccomodationsComponent }
                <Form.Row className="FormRow Name">
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-first-name"}
                            value={this.state.formData["first-name"]}/>
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-last-name"}
                            value={this.state.formData["last-name"]}/>
                    </Col>
                </Form.Row>
                { emailComponent }
                <Form.Row className="FormRow Details">
                    <Col>
                        <Form.Label>Anything else we should know? (Optional)</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Please inform us of any allergies, dietary restrictions, etc."
                            onChange={this.handleOnChange}
                            name={"guest-" + this.state.index + "-details"}
                            value={this.state.formData["details"]}/>
                    </Col>
                </Form.Row>
            </div>
        );
    }
};