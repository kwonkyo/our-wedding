import React from 'react';
import './Home.css';
import ReactFitText from 'react-fittext';

export class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="Banner">
                    <ReactFitText compressor={.5}>
                        <h1 className="PrimaryText animated animatedFadeInUp fadeInUp">
                            We are getting <span className="HighlightedText">married</span>
                        </h1>
                    </ReactFitText>
                </div>
                <div className="SecondaryText">
                    <ReactFitText compressor={1} maxFontSize={25}>
                        <p>
                            Hee Hyun & Victor
                            <br/>
                            10/10/2020
                        </p>
                    </ReactFitText>
                </div>
            </div>
        );
    }
};