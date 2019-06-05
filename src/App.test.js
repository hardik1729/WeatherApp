import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it renders consistently', () => {
  const app = TestRenderer.create(<App />);
  expect(app.toJSON()).toMatchSnapshot();
});