import React from 'react';
import './Gallery.css';
import ReactFitText from 'react-fittext';


export class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Gallery: [
                'gallery/downtown-1.jpg',
                'gallery/bw-1.jpg',
                'gallery/downtown-2.jpg',
                'gallery/downtown-3.jpg',
                'gallery/downtown-4.jpg',
                'gallery/downtown-5.jpg',
                'gallery/bw-2.jpg',
                'gallery/park-1.jpg',
                'gallery/park-2.jpg',
                'gallery/park-3.jpg',
                'gallery/park-4.jpg',
                'gallery/park-5.jpg'
            ]
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