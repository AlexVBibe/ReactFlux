import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionType from '../actions/actionTypes';

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
    addChangeListener(callBack) {
        this.on(CHANGE_EVENT, callBack);
    }

    removeChangeListener(callBack) {
        this.removeListener(CHANGE_EVENT, callBack);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCourses() {
        return _courses;
    }

    getCourse(id) {
        return _courses.find(c => c.id === parseInt(id, 10));
    }
}


const courseStore = new CourseStore();
dispatcher.register(action => {
    switch (action.actionType) {
        case actionType.CREATE_COURSE:
            debugger;
            _courses.push(action.course);
            courseStore.emitChange();
            break;
        case actionType.UPDATE_COURSE:
            debugger;
            _courses = _courses.map(course => course.id === action.course.id
                ? action.course
                : course);
            courseStore.emitChange();
            break;
        case actionType.LOAD_COURSES:
            _courses = action.courses;
            courseStore.emitChange();
            break;
        case actionType.DELETE_COURSE:
            const id = parseInt(action.courseId, 10);
            _courses = _courses.filter(c => c.id !== id);
            courseStore.emitChange();
            break;
        default:
    }
});

export default courseStore;