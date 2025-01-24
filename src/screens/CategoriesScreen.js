import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { quizData } from '../data/quizData';

const CategoriesScreen = ({ navigation }) => {
  const categories = Object.entries(quizData);

  return (
    <LinearGradient
      colors={['#8B5CF6', '#7C3AED']}
      style={styles.container}
    >
      <Text style={styles.title}>Choose a Category</Text>
      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map(([key, category]) => (
          <TouchableOpacity
            key={key}
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Levels', { categoryId: key })}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A148C',
  },
});

export default CategoriesScreen;
