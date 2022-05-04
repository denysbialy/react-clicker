import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <div>{props.children}</div>
        </div>
    );
}

export default FlexContainer;
