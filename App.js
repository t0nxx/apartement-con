import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <View style={styles.container} >

<WebView
    originWhitelist={['*']}
        source={{ uri: 'http://toni.asu-cs-gproj.tk' }}
        style={{ marginTop: 40 }}
      />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19b5fe',
  },
});
