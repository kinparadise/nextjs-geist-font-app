import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  PresentationView: undefined;
  TiledView: undefined;
  Home: undefined;
};

export default function PreJoinScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const handleJoinPresentation = () => {
    navigation.navigate('PresentationView');
  };

  const handleJoinTiled = () => {
    navigation.navigate('TiledView');
  };

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pre-Join Meeting</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#9CA3AF"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Video</Text>
        <Switch
          value={videoEnabled}
          onValueChange={setVideoEnabled}
          thumbColor={videoEnabled ? '#10B981' : '#9CA3AF'}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Audio</Text>
        <Switch
          value={audioEnabled}
          onValueChange={setAudioEnabled}
          thumbColor={audioEnabled ? '#10B981' : '#9CA3AF'}
        />
      </View>
      <TouchableOpacity style={styles.joinButton} onPress={handleJoinPresentation}>
        <Text style={styles.joinButtonText}>Join Presentation View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.joinButton} onPress={handleJoinTiled}>
        <Text style={styles.joinButtonText}>Join Tiled View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1F2937',
    color: '#F9FAFB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    color: '#F9FAFB',
    fontSize: 16,
  },
  joinButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#EF4444',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
