import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import EditCourse from './editCourse';
import courseStore from "../stores/courseStore";
import * as Actions from "../actions/actions";

export default function CoursePage(props) {
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        title: "",
        author: "",
        category: ""
    });

    useEffect(() => {
        courseStore.addChangeListener(onStoreChanged);
        if (courses.length === 0) {
            Actions.loadCourses();
        }
        else {
            const courseId = props.match.params.id;
            if (courseId) {
                const c = courseStore.getCourse(courseId);
                setCourse(c);
            }
        }

        return () => courseStore.removeChangeListener(onStoreChanged);
    }, [courses.length, props.match.params.id]);

    function onStoreChanged() {
        setCourses(courseStore.getCourses());
    }

    const formIsValid = () => {
        const error = {};
        if (!course.title) error.title = 'Title is required';
        if (!course.category) error.category = 'Category is required';
        setErrors(error);
        return Object.keys(error).length === 0;
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!formIsValid()) return;
        
        Actions.saveCourse(course);
        props.history.push('/courses');
        toast.success("Course saved");
    }

    const handleChange = course => {
        setCourse(course);
    }

    return (
        <>
            <h1>The course page</h1>
            <p>{props.match.params.id}</p>
            <EditCourse course={course}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit} />
        </>
    );
};