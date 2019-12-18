import React from 'react';
import './Home.css';
import ReactFitText from 'react-fittext';

export class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="Banner">
                    <ReactFitText compressor={.4}>
                        <h1 className="PrimaryText animated animatedFadeInUp fadeInUp">
                            We are getting <span className="HighlightedText">married</span>
                        </h1>
                    </ReactFitText>
                    <h2 className="OurNames animated animatedFadeInUp fadeInUp">
                        hee hyun & victor
                    </h2>
                </div>
            </div>
        );
    }
};