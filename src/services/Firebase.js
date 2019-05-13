import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDgeJJ-vvFETBXJQRKcg4JH42tdsW2Ga1Y',
  authDomain: 'app-fluxo-caixa.firebaseapp.com',
  databaseURL: 'https://app-fluxo-caixa.firebaseio.com',
  projectId: 'app-fluxo-caixa',
  storageBucket: 'app-fluxo-caixa.appspot.com',
  messagingSenderId: '296444976554',
  appId: '1:296444976554:web:ac1fb89affabf201',
};
firebase.initializeApp(config);
export default firebase;
