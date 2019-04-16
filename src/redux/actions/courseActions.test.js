import * as courseActions from './courseActions';
import * as types from './actionTypes';
import { courses } from '../../../tools/mockData';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

// test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async actions", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    describe("Load Courses Thunk", () => {
        it("Should reate BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
            fetchMock.mock("*", {
                body: courses,
                headers: {"content-type": "applicaiton/json"}
            });

            const expectedActions = [
                { type: types.BEGIN_API_CALL },
                { type: types.LOAD_COURSES_SUCCESS, courses}
            ];

            const store = mockStore({ courses: [] });
            return store.dispatch(courseActions.loadCourses()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});


describe('createCourseSuccess', () => {
    it('Should create a CREATE_COURSE_SUCCESS action', () => {
        const course = courses[0];

        // arrange
        const expectedAction = {
            type: types.CREATE_COURSE_SUCCESS,
            course
        };

        // act
        const action = courseActions.createCourseSuccess(course);

        //assert
        expect(action).toEqual(expectedAction);
    });
});