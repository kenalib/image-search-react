import React from 'react';
import { mount, shallow } from 'enzyme';
import ImageSearchDemo from './ImageSearchDemo';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Warning from '@material-ui/icons/Warning';
import Typography from '@material-ui/core/Typography';
import default_response from './__mocks__/default_response.json'
import shoes_response from './__mocks__/shoes_response.json'

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
    resolve({data: default_response});
  });
}

const axiosPostMock = () => {
  return new Promise((resolve, reject) => {
    resolve({data: shoes_response});
  });
}

beforeEach(() => {
  axios.get = jest.fn().mockImplementation(axiosGetMock);
  axios.post = jest.fn().mockImplementation(axiosPostMock);
});

afterEach(() => {
});

it('show default result of bag pictures', async () => {
  const wrapper = mount(<ImageSearchDemo/>);
  const instance = wrapper.instance();

  // wait for the data from API
  await instance.componentDidMount()
  wrapper.update();
  expect(wrapper).toMatchSnapshot();

  expect(axios.get).toHaveBeenCalled();
  expect(wrapper.text()).toMatch(/bag01.jpg/);
  expect(wrapper.find(Typography).first().text()).toMatch(/bag02.jpg/);

  wrapper.unmount();
});

it('renders images from API', async () => {
  const wrapper = mount(<ImageSearchDemo/>);
  const instance = wrapper.instance();

  // wait for the data from API
  await instance.componentDidMount()
  wrapper.update();
  expect(wrapper).toMatchSnapshot();

  // input file change result empty file
  wrapper.find('input[type="file"]').simulate('change');
  await wrapper.update();
  // category change result image not set
  await instance.uploadHandler();

  const fileContents = 'dummy';
  const file = new Blob([fileContents], {type : 'text/plain'});
  wrapper.find('input[type="file"]').simulate('change', {target: {files: [file]}});

  await wrapper.update();
  expect(wrapper).toMatchSnapshot();

  expect(axios.post).toHaveBeenCalled();
  expect(wrapper).not.toContainReact(<div>Loading...</div>);
  expect(wrapper.text()).toMatch(/Category auto detected/);
  expect(wrapper.text()).toMatch(/shoes01.jpg/);
  expect(instance.state.items).toHaveLength(5);
  expect(wrapper.find(Paper)).toHaveLength(5);
});
