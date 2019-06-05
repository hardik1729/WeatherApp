import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

it('it renders place distances correctly', () => {
    const app = TestRenderer.create(<App />);
    let places = [
        {place:"Liverpool",distance:100},
        {place:"Bristol",distance:200},
        {place:"Manchester",distance:300}
    ];
    places.forEach(place => {
        app.root.instance.setState({
            selected: place.place,
            data: {route: {distance: place.distance}}
        });
        app.root.instance.selectionDidChange(place.place);
        expect(app.toJSON()).toMatchSnapshot();
    });
});