import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

export default class FirebaseLoader {
  static boot(App) {
    App.firebase = {
      auth: auth(),
      firestore: firestore(),
      crashlytics: crashlytics(),
    };
  }
}
