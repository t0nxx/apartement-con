import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Permissions from 'expo-permissions';



export default function App() {

  useEffect(()=> {
    checkAudiVideoPermission();
  },[])
  async function checkAudiVideoPermission() {
    const { status, expires, permissions } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.AUDIO_RECORDING
    );
    if (status !== 'granted') {
      alert('Hey! You have not enabled selected permissions');
      
    }
  }
  return (
    <View style={styles.container} >

<WebView
    originWhitelist={['*']}
        source={{ uri: 'https://asu-cs-gproj.tk' }}
        style={{ marginTop: 40 }}
        allowUniversalAccessFromFileURLs = {true}
        allowFileAccess={true}

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
