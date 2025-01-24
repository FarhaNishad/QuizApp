import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const questions = [
  {
    id: 1,
    question: "What is the recommended daily water intake for adults?",
    icon: "💧",
    options: [
      "2-3 liters",
      "1 liter",
      "5 liters",
      "0.5 liters"
    ],
    correct: 0
  },
  {
    id: 2,
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    icon: "☀️",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ],
    correct: 2
  },
  {
    id: 3,
    question: "How many hours of sleep are recommended for adults per night?",
    icon: "😴",
    options: [
      "4-5 hours",
      "6-7 hours",
      "7-9 hours",
      "10-12 hours"
    ],
    correct: 2
  }
];

const QuizScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(231);
  const [progress, setProgress] = useState(12);

  const handleAnswer = async (selectedIndex) => {
    const isCorrect = selectedIndex === questions[currentQuestion].correct;
    const earnedPoints = isCorrect ? 80 : 0;
    
    if (isCorrect) {
      setPoints(points + earnedPoints);
      await AsyncStorage.setItem('points', String(points + earnedPoints));
    }
    
    navigation.navigate('Result', { 
      points: earnedPoints,
      isCorrect,
      currentQuestion: currentQuestion + 1,
      totalQuestions: questions.length
    });
  };

  return (
    <LinearGradient
      colors={['#8B5CF6', '#7C3AED']}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${(progress/15) * 100}%` }]} />
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Points</Text>
          <Text style={styles.pointsValue}>{points}</Text>
        </View>
      </View>

      {/* Question Card */}
      <View style={styles.questionCard}>
        <Text style={styles.questionNumber}>Question {currentQuestion + 1}</Text>
        <View style={styles.iconContainer}>
          <Text style={styles.questionIcon}>{questions[currentQuestion].icon}</Text>
        </View>
        <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        
        {/* Options */}
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  backButton: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  progressContainer: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    marginHorizontal: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFA07A',
    borderRadius: 4,
  },
  pointsContainer: {
    alignItems: 'flex-end',
  },
  pointsText: {
    color: 'white',
    fontSize: 12,
  },
  pointsValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  questionNumber: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#FFA07A',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  questionIcon: {
    fontSize: 40,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    textAlign: 'center',
    marginBottom: 30,
  },
  optionButton: {
    width: width * 0.7,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#4A148C',
    textAlign: 'center',
  },
});

export default QuizScreen;
