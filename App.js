import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Router from "./View/Router/View";
import {Provider} from "react-redux";
import store from "./store";

export default function App() {
  return (
      <Provider store={store}>


              <View style={styles.container}>
                  <Router/>
              </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
