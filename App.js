import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>111119027 江秉宸</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9C1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font:{
    fontSize: 40,
  },
  
  title:{
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

