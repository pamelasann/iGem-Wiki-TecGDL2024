import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  lead?: string; // make this optional if not used
}

export function Header({ title, lead }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {lead && <Text style={styles.leadText}>{lead}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#007bff', // You can customize this color
    padding: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  leadText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
