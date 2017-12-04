import React, { PropTypes, Component } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import {Panel} from 'react-bootstrap';
import './CarouselComponents/styles/carousel.css';
import s from '../../styles/carousel.scss';

// general styles
/**
 * A carousel.
 */
class Carousel extends Component {

    render() {

        return (
            <ResponsiveCarousel 
                selectedItem={this.props.selectedItem || 0}
                infiniteLoop={this.props.infiniteLoop}
                showArrows={this.props.showArrows}
                showStatus={this.props.showStatus}
                showThumbs={this.props.showThumbs}
                showIndicators={this.props.showIndicators}
                onChange={this.props.onChange}>
                {this.props.children.map((slide, index)=><Panel className="slide-panel" key={index}>{slide}</Panel>)}
            </ResponsiveCarousel>
        );
    }
}

Carousel.propTypes = {
};
Carousel.defaultProps = {
    showArrows : true,
    showStatus : false,
    showThumbs : false,
    infiniteLoop : true,
    showIndicators : true,
};

export default Carousel;