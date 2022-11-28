// types
import { DefaultConfigProps } from 'types/config';

export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const FIREBASE_API = {
  apiKey: "AIzaSyBBw6OyR26Yk8ptX4ZRXbliQ0e9U7DuAIY",
  authDomain: "visasg.firebaseapp.com",
  projectId: "visasg",
  storageBucket: "visasg.appspot.com",
  messagingSenderId: "932469220452",
  appId: '1:932469220452:web:5c00dc5032df94c1b96b71',
  measurementId: 'G-3DBCYRZ2QM'
};


// ==============================|| THEME CONFIG  ||============================== //

const config: DefaultConfigProps = {
  defaultPath: '/sample-page',
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr'
};

export default config;
