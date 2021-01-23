import React from 'react';
import PropTypes from 'prop-types';
import ValidatedTextInput from './common/ValidatedTextInput';


export default function EditCourse(props) {
    const handleChange = event => {
        const updated = { ...props.course, [event.target.name]: event.target.value };
        props.onChange(updated);
    };

    return (
        <form onSubmit={props.onSubmit}>
            <ValidatedTextInput
                id="title"
                name="title"
                label="Title"
                value={props.course.title}
                onChange={event => handleChange(event)}
                error={props.errors.title}
            />

            <ValidatedTextInput
                id="category"
                name="category"
                label="Category"
                value={props.course.category}
                onChange={event => handleChange(event)}
                error={props.errors.category}
            />

            <ValidatedTextInput
                id="author"
                name="author"
                label="Author"
                value={props.course.author}
                onChange={event => handleChange(event)}
                error={props.errors.author}
            />
            <button className="btn btn-primary">Add course</button>
        </form >
    );
}

EditCourse.prototype = {
    course: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
}

EditCourse.defaultProps = {
    value: "",
}