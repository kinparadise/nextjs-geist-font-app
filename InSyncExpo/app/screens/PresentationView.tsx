import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  TiledView: undefined;
  HostTools: undefined;
};

export default function PresentationView() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSwitchToTiled = () => {
    navigation.navigate('TiledView');
  };

  const handleOpenHostTools = () => {
    navigation.navigate('HostTools');
  };

  const handleLeave = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presentation View</Text>
      {/* TODO: Add presentation content and controls */}
      <TouchableOpacity style={styles.button} onPress={handleSwitchToTiled}>
        <Text style={styles.buttonText}>Switch to Tiled View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOpenHostTools}>
        <Text style={styles.buttonText}>Host Tools</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.leaveButton} onPress={handleLeave}>
        <Text style={styles.leaveButtonText}>Leave Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  leaveButton: {
    backgroundColor: '#EF4444',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  leaveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
