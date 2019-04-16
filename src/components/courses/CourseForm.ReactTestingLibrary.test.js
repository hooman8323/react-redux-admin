import React from "react";
import CourseForm from "./CourseForm";
import { cleanup, render } from "react-testing-library";

afterEach(cleanup);

function renderCourseForm(args) {
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    }

    const props = { ...defaultProps, ...args};
    return render(<CourseForm {...props} />)
}

it('Should render Add Course Header', () => {
    const { getByText } = renderCourseForm();
    getByText("Add Course");
});

it("Should label the Save Button as 'Save' when it's not saving", () => {
    const {getByText}  = renderCourseForm();
    getByText("Save");
});

it("Should label the Save Button as 'Saving...' when it's saving", () => {
    const {getByText}  = renderCourseForm({saving: true});
    getByText("Saving...");
});