import React from 'react';
import { mount, shallow } from 'enzyme';
import ImageSearchDemo from './ImageSearchDemo';
import axios from 'axios';
import constants from './Constants';
import Paper from '@material-ui/core/Paper';

it('renders without crashing', () => {
  shallow(<ImageSearchDemo />);
});

it('renders loading message', () => {
  const wrapper = shallow(<ImageSearchDemo />);
  const loading = <div>Loading...</div>;

  expect(wrapper).toContainReact(loading)
});

const axiosGetMock = () => {
  return new Promise((resolve, reject) => {
    resolve({data: constants.default_result});
  });
}

axios.get = jest.fn().mockImplementation(axiosGetMock);

it('renders images from API', async () => {
  const wrapper = mount(<ImageSearchDemo/>);
  const instance = wrapper.instance();

  // wait for the data from API
  await instance.componentDidMount()
  wrapper.update();

  const loading = <div>Loading...</div>;
  expect(wrapper).not.toContainReact(loading)

  expect(instance.state.items).toHaveLength(5)
  expect(wrapper.find(Paper)).toHaveLength(5);
});
