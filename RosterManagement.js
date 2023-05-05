import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const RosterManagement = () => {
  const [roster, setRoster] = useState([]);
  const [playerName, setPlayerName] = useState('');

  const handleAddPlayer = () => {
    if (playerName.trim()) {
      const newPlayer = { id: Date.now().toString(), name: playerName };
      setRoster([...roster, newPlayer]);
      setPlayerName('');
    }
  };

  const handleDeletePlayer = (id) => {
    setRoster(roster.filter((player) => player.id !== id));
  };
