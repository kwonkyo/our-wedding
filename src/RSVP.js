import React from 'react';
import './RSVP.css';
import ReactFitText from 'react-fittext';

export class RSVP extends React.Component {
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
            </div>
        );
    }
};