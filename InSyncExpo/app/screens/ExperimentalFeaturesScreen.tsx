import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function ExperimentalFeaturesScreen() {
  const [featureEnabled, setFeatureEnabled] = React.useState(false);

  const toggleFeature = () => {
    setFeatureEnabled(!featureEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experimental / Labs Features</Text>
      <View style={styles.featureRow}>
        <Text style={styles.featureLabel}>Enable New UI</Text>
        <Switch
          value={featureEnabled}
          onValueChange={toggleFeature}
          thumbColor={featureEnabled ? '#10B981' : '#9CA3AF'}
        />
      </View>
      {/* Add more experimental features here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 24,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureLabel: {
    color: '#F9FAFB',
    fontSize: 16,
  },
});
