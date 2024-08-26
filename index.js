/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import App from './navigation/App';
//import UserRegisterScreen from '../screens_v2/UserRegisterScreen';
import {name as appName} from './app.json';


export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}


AppRegistry.registerComponent(appName, () => Main);
