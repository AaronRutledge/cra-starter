import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DynamicScrollContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentHeight: 0,
            componentWidth: 0
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        let topElement = document.getElementById(this.props.topComponentId);
        let bottomElement = document.getElementById(this.props.bottomComponentId);
        let topElementWidth = topElement.offsetWidth;
        let topElementTopCoords = 0;
        let bottomElementTopCoords = 0;

        if (topElement) {
            let topElemCoords = topElement.getBoundingClientRect();
            topElementTopCoords = topElemCoords.top;
        }
        if (bottomElement) {
            let bottomElementCoords = bottomElement.getBoundingClientRect();
            bottomElementTopCoords = bottomElementCoords.top;
        }
        let topElementHeight = bottomElementTopCoords - topElementTopCoords - this.props.pixelOffset;
        if (this.state.componentHeight !== topElementHeight || this.state.componentWidth !== topElementWidth) {
            this.setState({
                componentHeight: topElementHeight,
                componentWidth: topElementWidth
            });
        }
    }

    componentDidUpdate() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("orientationChange", this.updateDimensions);
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("orientationChange", this.updateDimensions);
    }

    render() {
        return (
            <div>
                <div className="clearfix" id="top-component-to-scroll">
                    {React.cloneElement(this.props.children[0], {
                        [this.props.heightPropName]: this.state.componentHeight,
                        [this.props.widthPropName]: this.state.componentWidth
                    })}
                </div>
                {this.props.children[1]}
            </div>
        );
    }
}

DynamicScrollContainer.propTypes = {
	/**
	 * Id of top component that will receive componentHeight prop fro dynamic resizing.
	 */
    topComponentId: PropTypes.string,
	/**
	 * Id of sticky bottom component that will receive componentHeight prop fro dynamic resizing.
	 */
    bottomComponentId: PropTypes.string,
    /**
 * Number of pixels to offset.
 */
    pixelOffset: PropTypes.number,
    /**
 * Name of prop the resizing component expects.
 */
    heightPropName: PropTypes.string,
};

DynamicScrollContainer.defaultProps = {
    heightPropName: 'componentHeight',
    widthPropName: 'componentWidth',
    topComponentId: 'top-component-to-scroll',
    bottomComponentId: 'sticky-footer',
    pixelOffset: 10
};

export default DynamicScrollContainer;