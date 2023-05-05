import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AvailabilityTool = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDatePress = (date) => {
    // Check if the date is already selected
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const renderDate = (date) => {
    const isSelected = selectedDates.includes(date);

    return (
      <TouchableOpacity
        key={date}
        style={[styles.dateButton, isSelected && styles.selectedDateButton]}
        onPress={() => handleDatePress(date)}
      >
        <Text style={[styles.dateButtonText, isSelected && styles.selectedDateButtonText]}>{date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your availability</Text>
      <View style={styles.datesContainer}>
        {renderDate('Mon 1')}
        {renderDate('Tue 2')}
        {renderDate('Wed 3')}
        {renderDate('Thu 4')}
        {renderDate('Fri 5')}
        {renderDate('Sat 6')}
        {renderDate('Sun 7')}
        {renderDate('Mon 8')}
        {renderDate('Tue 9')}
        {renderDate('Wed 10')}
        {renderDate('Thu 11')}
        {renderDate('Fri 12')}
        {renderDate('Sat 13')}
        {renderDate('Sun 14')}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => console.log('Availability submitted')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
