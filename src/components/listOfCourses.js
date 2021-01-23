import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function ListOfCoursesPage(props) {
    function renderCourseRow(course) {
        return (
            <tr key={course.id}>
                <td>
                    <Link to={'/course/' + course.id} className='btn btn-primary'>
                        Edit
                    </Link>
                </td>
                <td>{course.title}</td>
                <td>{course.author}</td>
                <td>{course.category}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => props.onDeleteCourse(course)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map(c => renderCourseRow(c))}
            </tbody>
        </table>
    );
}

ListOfCoursesPage.prototype = {
    onDeleteCourse: PropTypes.func.isRequired,
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string
    })).isRequired
}

ListOfCoursesPage.defaultProps = {
    onDeleteCourse: noFunctionAssigned,
    courses: []
}

function noFunctionAssigned() {
    console.error("Expected a function to delete course but was null");
}