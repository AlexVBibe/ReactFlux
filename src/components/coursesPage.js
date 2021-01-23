import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListOfCoursesPage from "./listOfCourses";
import courseStore from "../stores/courseStore";
import * as actions from "../actions/actions";

export default function CoursesPage(props) {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        courseStore.addChangeListener(onStoreChange);
        if (courses.length === 0)
            actions.loadCourses();
        return () => courseStore.removeChangeListener(onStoreChange);
    }, [courses, courses.length]);

    function onStoreChange() {
        setCourses(courseStore.getCourses());
    }

    function deleteCourseHandler(course) {
        actions.deleteCourse(course);
    }

    return (
        <>
            <h1>List of courses</h1>
            <div>The page list available courses</div>
            <Link to='/course' className='btn btn-primary'>Add course</Link>
            <ListOfCoursesPage courses={courses}
                onDeleteCourse={deleteCourseHandler} />
        </>
    );
};