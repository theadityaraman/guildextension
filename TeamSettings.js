import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch } from 'react-native';
import styles from './styles';

const SettingsScreen = () => {
  const [teamName, setTeamName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSave = () => {
    // Save user settings to a database or other persistent storage
    // and apply changes to the app UI
  };

  const handleReset = () => {
    // Reset all settings to their default values
    setTeamName('');
    setLogoUrl('');
    setPrimaryColor('#000000');
    setSecondaryColor('#ffffff');
    setNotificationsEnabled(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Team Name"
        value={teamName}
        onChangeText={setTeamName}
      />
      <TextInput
        style={styles.input}
        placeholder="Logo URL"
        value={logoUrl}
        onChangeText={setLogoUrl}
      />
      <Text style={styles.label}>Primary Color:</Text>
      <TouchableOpacity
        style={[styles.colorPicker, { backgroundColor: primaryColor }]}
        onPress={() => console.log('Open primary color picker')}
      />
      <Text style={styles.label}>Secondary Color:</Text>
      <TouchableOpacity
        style={[styles.colorPicker, { backgroundColor: secondaryColor }]}
        onPress={() => console.log('Open secondary color picker')}
      />
      <Text style={styles.label}>Notifications:</Text>
      <Switch
        value={notificationsEnabled}
        onValueChange={setNotificationsEnabled}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset to Defaults</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
