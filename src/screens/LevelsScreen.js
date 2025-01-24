import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { quizData } from '../data/quizData';

const LevelsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const category = quizData[categoryId];
  const levels = Object.entries(category.levels);

  return (
    <LinearGradient
      colors={['#8B5CF6', '#7C3AED']}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{category.name}</Text>
      <Text style={styles.subtitle}>Select Difficulty</Text>

      <View style={styles.levelsContainer}>
        {levels.map(([key, level]) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.levelCard,
              key === 'easy' && styles.easyCard,
              key === 'moderate' && styles.moderateCard,
              key === 'hard' && styles.hardCard,
            ]}
            onPress={() => navigation.navigate('Quiz', {
              categoryId,
              levelId: key,
              questions: level.questions,
            })}
          >
            <Text style={styles.levelName}>{level.name}</Text>
            <Text style={styles.questionCount}>
              {level.questions.length} Questions
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
    opacity: 0.8,
  },
  levelsContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  levelCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  easyCard: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  moderateCard: {
    borderColor: '#FFA000',
    borderWidth: 2,
  },
  hardCard: {
    borderColor: '#F44336',
    borderWidth: 2,
  },
  levelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 5,
  },
  questionCount: {
    fontSize: 16,
    color: '#666',
  },
});

export default LevelsScreen;
