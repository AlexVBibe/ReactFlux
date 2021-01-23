import dispatcher from '../dispatcher';
import * as repository from '../dataRepository';
import actionTypes from './actionTypes';

export function loadCourses() {
    return repository.getCourses().then(items => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            courses: items
        });
    });
}

export function saveCourse(course) {
    const actionType = course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE;
    return repository.saveCourse(course).then(savedCourse => {
        const newCourse = { ...course, "id": savedCourse.id };
        dispatcher.dispatch({
            actionType: actionType,
            course: newCourse
        });
    })
}

export function deleteCourse(course) {
    return repository.deleteCourse(course).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            courseId: course.id
        });
    })
}