import API from '../lib/api.js';

export default class ApiLoader {
  static boot(App) {
    const {apis} = App.config;
    const api = [];
    Object.keys(apis).forEach(key => {
      api[key] = new API(apis[key]);
    });
    App.api = api;
  }
}
