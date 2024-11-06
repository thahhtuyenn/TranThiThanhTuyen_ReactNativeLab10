import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppNavigation} from './src/navigations/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/reduxToolkit/store';


export default function App() {
  return (
    <Provider store={store}> 
        <AppNavigation />
    </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
