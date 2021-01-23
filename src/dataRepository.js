import * as dataApi from './api/dataApi';

export function getCourses() {
    return dataApi.get('/data');
}

export function deleteCourse(course) {
    const path = '/data/' + course.id;
    return dataApi.del(path);
}

export function saveCourse(course) {
    const path = '/data/';
    const body = JSON.stringify(course);
    return course.id
        ? dataApi.update(path + course.id, body)
        : dataApi.add(path, body);
}