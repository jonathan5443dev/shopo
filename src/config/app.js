import StoreLoader from './boot-loaders/store-loader';
import ApiLoader from './boot-loaders/api-loader';
import NavigationLoader from './boot-loaders/navigation-loader';
import FirebaseLoader from './boot-loaders/firebase-loader';

import config from './config';

const mainLoaders = [NavigationLoader];
const secondaryLoaders = [ApiLoader, StoreLoader, FirebaseLoader];

export default class App {
  static store = {};
  static boot() {
    this.config = config;
    return Promise.all(mainLoaders.map(s => s.boot(App)))
      .then(() => {
        secondaryLoaders.map(s => s.boot(App));
      })
      .catch(err => console.error('Error while booting the app', err));
  }
}
