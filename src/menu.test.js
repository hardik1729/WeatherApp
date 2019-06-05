import React from 'react';
import TestRenderer from 'react-test-renderer';
import Dropdown from './Dropdown';
import App from './App';

it('it renders with displaymenu', () => {
    const dropdown = TestRenderer.create(<Dropdown selectionDidChange={jest.fn()}/>);
    dropdown.root.instance.showDropdownMenu();
    expect(dropdown.toJSON()).toMatchSnapshot();
});

it('it renders without displaymenu', () => {
    const dropdown = TestRenderer.create(<Dropdown selectionDidChange={jest.fn()}/>);
    dropdown.root.instance.hideDropdownMenu();
    expect(dropdown.toJSON()).toMatchSnapshot();
});

it('Calls selectionDidChange function', () => {
    const dropdown = TestRenderer.create(<Dropdown selectionDidChange={jest.fn()}/>);
    let places = [
        {place:"Liverpool",distance:100},
        {place:"Bristol",distance:200},
        {place:"Manchester",distance:300}
    ];
    places.forEach(element => {
        let event={
                    currentTarget:{
                        dataset:{
                            id: element.place
                        }
                    }
                };
        dropdown.root.instance.handleClick(event);
        expect(dropdown.toJSON()).toMatchSnapshot();
    });
        
});