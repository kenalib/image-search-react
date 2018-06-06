import default_response from './default_response.json'

export default {
  get: jest.fn((url) => {
    return Promise.resolve({ data: default_response })
  }),
  post: jest.fn((url) => {
    return Promise.reject(new Error("Network Error"))
  }),
};
