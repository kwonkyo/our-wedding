import React from 'react';
import './Gallery.css';
import ReactFitText from 'react-fittext';


export class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Gallery: [...Array(50).keys()]
                .map(x => `gallery/image-${String(x + 1).padStart(3, "0")}.jpg`)
        };
    }

    publicUrl(path) {
        return process.env.PUBLIC_URL + path;
    }

    render() {
        const Gallery = this.state.Gallery
            .map(
                x => <img src={this.publicUrl(x)}/>);

        return (
            <div className="Gallery">
                <div className="Title">
                    <ReactFitText compressor={1} maxFontSize={100}>
                        <h1 className="animated animatedFadeInUp fadeInUp">
                            Gallery
                        </h1>
                    </ReactFitText>
                </div>
                <div className='PhotoGallery'>
                    <div className='PhotoRow'>
                        { Gallery }
                    </div>
                </div>
            </div>
        );
    }
};