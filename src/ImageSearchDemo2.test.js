import React from 'react';
import { shallow } from 'enzyme';
import ImageSearchDemo from './ImageSearchDemo';
import axios from 'axios';

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('BookList snapshot test', async () => {
  const wrapper = shallow(<ImageSearchDemo />);
  const instance = wrapper.instance();

  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();

  const fileContents = 'dummy';
  const file = new Blob([fileContents], {type : 'text/plain'});
  wrapper.find('input[type="file"]').simulate('change', {target: {files: [file]}});

  await flushPromises();
  await wrapper.update();
  expect(wrapper).toMatchSnapshot();

  expect(axios.post).toHaveBeenCalled();
  expect(wrapper).not.toContainReact(<div>Loading...</div>);
  expect(wrapper.text()).toMatch(/Network Error/);
});
