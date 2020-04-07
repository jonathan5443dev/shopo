import axios from 'axios';
/* eslint no-param-reassign: 0 */
const getURI = (uri, params) => {
  params = params || {};
  const matches = uri.match(/\{params.([a-zA-Z0-9_]+)}/g);
  if (matches) {
    matches.forEach(match => {
      const name = match.replace('{params.', '').replace('}', '');
      uri = uri.replace(match, params[name]);
    });
  }
  return uri;
};

const visitEndpoints = (endpoints, callback) => {
  Object.keys(endpoints).forEach(name => {
    if (endpoints[name]) {
      const endpoint = endpoints[name];
      callback(name, endpoint.method, endpoint.uri);
    }
  });
};

const createAxios = opts => {
  const axiosInstance = axios.create(opts);
  return {
    axiosInstance
  };
};

export default class API {
  constructor(opts) {
    const endpoints = opts.endpoints || {};
    const {axiosInstance} = createAxios(opts);
    this.axios = axiosInstance;

    visitEndpoints(endpoints, (name, method, uri) => {
      this[name] = (params = {}) => {
        if (['get', 'delete', 'head', 'options'].includes(method)) {
          return axiosInstance[method](getURI(uri, params.url), {
            headers: params.headers
          }).then(r => r.data);
        }
        return axiosInstance[method](getURI(uri, params.url), params.body, {
          headers: params.headers
        }).then(r => r.data);
      };
    });
  }
}