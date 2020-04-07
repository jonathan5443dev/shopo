import {StackActions, NavigationActions} from 'react-navigation';

export default class NavigationLoader {
  static boot(App) {
    App.navigation = this;
  }

  static setNavigator(nav) {
    if (nav) {
      this.stack = nav;
    }
  }

  static navigate(routeName, params) {
    if (this.stack && routeName) {
      const action = NavigationActions.navigate({routeName, params});
      this.stack.dispatch(action);
    }
  }

  static goBack() {
    if (this.stack) {
      const action = NavigationActions.back({});
      this.stack.dispatch(action);
    }
  }

  static reset(routeName) {
    const action = StackActions.reset({
      index: 0,
      key: undefined,
      actions: [NavigationActions.navigate({routeName})]
    });
    this.stack.dispatch(action);
  }
}