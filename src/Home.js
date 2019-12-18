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
                <div className="OurNames">
                    <ReactFitText compressor={1} maxFontSize={21}>
                        <p>Hee Hyun & Victor</p>
                    </ReactFitText>
                </div>
            </div>
        );
    }
};