import React from 'react';
import PropTypes from 'prop-types';

const PushButton = ({ color, size, value }) => {
    const styles = {
        color,
        fontSize: PushButton.sizes[size]
    };

    return (
        <button className="push-button" style={styles}>
            {value}
        </button>
    );
};

PushButton.propTypes = {
    /**
     * PushButton label.
     */
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large'])
};
PushButton.defaultProps = {
    color: '#333',
    size: 'normal'
};
PushButton.sizes = {
    small: '10px',
    normal: '14px',
    large: '18px'
};

export default PushButton;