import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';

// Note how with Shallow render you search for a react component tag
it('Contains 3 nav links via shallow', () => {
    const numLinks = shallow(<Header />).find("NavLink").length;
    expect(numLinks).toBe(3);
})


it('Cintains 3 nav anchor tags via mount', () => {
    const numAnchors = mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        ).find("a").length;
    expect(numAnchors).toEqual(3);
});