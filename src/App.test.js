import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders title message', () => {
  const wrapper = shallow(<App />);
  const title = <h1 className="App-title">Image Search Demo</h1>;

  expect(wrapper).toContainReact(title)
});
