import React from 'react';
import PropTypes from 'prop-types';

export default function ValidatedTextInput(props) {
    let wrapperClass = "form-group";
    if (props.error.lenth > 0) {
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    type="text"
                    className="form-control"
                    placeholder="input value here"
                />
            </div>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    );
}

ValidatedTextInput.prototype = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

ValidatedTextInput.defaultProps = {
    error: ""
}