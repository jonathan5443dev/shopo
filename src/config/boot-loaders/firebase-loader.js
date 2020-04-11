import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

export default class FirebaseLoader {
  static boot(App) {
    App.firebase = {
      auth: auth(),
      firestore: firestore(),
      crashlytics: crashlytics(),
      analytics: analytics(),
    };
  }
}
