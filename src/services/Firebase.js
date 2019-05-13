import firebase from 'firebase';
import Config from 'react-native-config';

const config = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  databaseURL: Config.databaseURL,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId,
};
firebase.initializeApp(config);
export default firebase;
