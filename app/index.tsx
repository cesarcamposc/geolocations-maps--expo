import MapView, { PROVIDER_GOOGLE }from 'react-native-maps';
import {StyleSheet, Text, View} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -12.046816283073076, 
          longitude: -77.03187568071776,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  map: {
    width: '100%',
    height: '100%',
  }
})
