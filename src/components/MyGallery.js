import React from "react";
import ReactDOM from 'react-dom';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: './src/images/asialakay_boston.jpeg',
    },
    {
        original: './src/images/asialakay_boston.jpeg',
    },
    {
        original: './src/images/asialakay_boston.jpeg',
    }
];

class MyGallery extends React.Component {
    render(){
        return <ImageGallery items={images} />
    }
}
export default MyGallery;