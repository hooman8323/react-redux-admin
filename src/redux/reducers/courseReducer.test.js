import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

it('Should add a course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
        {
            title: "A"
        },
        {
            title: "B"
        }
    ];

    const newCourse = {
        title: "C"
    }

    const action = actions.createCourseSuccess(newCourse);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toBe("A");
    expect(newState[1].title).toBe("B");
    expect(newState[2].title).toBe("C");
});

it('Should update a course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
        {id: 1, title: "A"},
        {id: 2, title: "B"},
        {id: 3, title: "C"}
    ];

    const course = { id: 2, title: "New title" };
    const action = actions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 1);

    // assert
    expect(updatedCourse.title).toEqual("New title");
    expect(untouchedCourse.title).toEqual("A");
    expect(newState.length).toEqual(3);
});