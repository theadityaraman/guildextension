import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import styles from './styles';

const PaymentItem = ({ payment, onUpdate }) => {
  const [amount, setAmount] = useState(payment.amount.toString());

  const handleUpdate = () => {
    const updatedPayment = { ...payment, amount: parseFloat(amount) };
    onUpdate(updatedPayment);
  };

  return (
    <View style={styles.paymentItem}>
      <Text style={styles.paymentName}>{payment.name}</Text>
      <TextInput
        style={styles.paymentAmount}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const PaymentScreen = () => {
  const [payments, setPayments] = useState([
    { id: 1, name: 'Team Registration', amount: 100 },
    { id: 2, name: 'Uniforms', amount: 50 },
    { id: 3, name: 'Tournament Entry', amount: 200 },
  ]);

  const handleUpdatePayment = (updatedPayment) => {
    const updatedPayments = payments.map((payment) =>
      payment.id === updatedPayment.id ? updatedPayment : payment
    );
    setPayments(updatedPayments);
  };

  const handleAddPayment = () => {
    const newPayment = { id: payments.length + 1, name: '', amount: 0 };
    setPayments([...payments, newPayment]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <FlatList
        data={payments}
        renderItem={({ item }) => (
          <PaymentItem payment={item} onUpdate={handleUpdatePayment} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddPayment}>
        <Text style={styles.addButtonText}>Add Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
