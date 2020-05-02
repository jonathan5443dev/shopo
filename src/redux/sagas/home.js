import {takeLatest, select, call} from 'redux-saga/effects';
import App from '../../config/app';

function* startHomeFlow() {
  try {
    // call home product list service
    const products = yield call(
      () =>
        new Promise((resolve, reject) =>
          resolve({
            sales: [
              {
                id: '13',
                name: 'Dorothy perkings',
                discountPercentage: '30',
                categoryName: 'Evening dress 1',
                previousPrice: '15',
                price: 12,
                size: 'XL',
                color: 'White',
                brand: 'Ralphlauren',
                hasDiscount: true,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae mi nunc. Donec pretium mauris non sapien pretium, sit amet faucibus elit elit imperdiet. Quisque porta neque eget mauris',
              },
              {
                id: '1223',
                name: 'Dorothy perkings',
                discountPercentage: '30',
                categoryName: 'Evening dress 1',
                previousPrice: '15',
                price: 12,
                size: 'XL',
                color: 'White',
                brand: 'Ralphlauren',
                hasDiscount: true,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae mi nunc. Donec pretium mauris non sapien pretium, sit amet faucibus elit elit imperdiet. Quisque porta neque eget mauris',
              },
            ],
            news: [
              {
                id: '1233',
                name: 'Dorothy perkings',
                discountPercentage: '30',
                categoryName: 'Evening dress 1',
                previousPrice: '15',
                price: 12,
                size: 'XL',
                color: 'White',
                brand: 'Ralphlauren',
                hasDiscount: true,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae mi nunc. Donec pretium mauris non sapien pretium, sit amet faucibus elit elit imperdiet. Quisque porta neque eget mauris',
              },
            ],
            pants: [
              {
                id: '1123',
                name: 'Dorothy perkings',
                discountPercentage: '30',
                categoryName: 'Evening dress 1',
                previousPrice: '15',
                price: 12,
                size: 'XL',
                color: 'White',
                brand: 'Ralphlauren',
                hasDiscount: true,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae mi nunc. Donec pretium mauris non sapien pretium, sit amet faucibus elit elit imperdiet. Quisque porta neque eget mauris',
              },
            ],
          }),
        ),
    );
    App.navigation.reset('TabBar', {products});
  } catch (e) {
    App.firebase.crashlytics.recordError(new Error('Home error'));
    App.navigation.navigate('Login');
  }
}

function* homeFlows() {
  yield takeLatest('START_HOME_FLOW', startHomeFlow);
}

export default homeFlows;
