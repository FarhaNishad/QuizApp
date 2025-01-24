import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeOutUp, FadeIn, BounceIn } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

const { width, height } = Dimensions.get('window');

const questions = [
  {
    id: 1,
    question: "What is the recommended daily water intake for adults?",
    icon: "",
    options: [
      "2-3 liters",
      "1 liter",
      "5 liters",
      "0.5 liters"
    ],
    correct: 0,
    points: 10
  },
  {
    id: 2,
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    icon: "",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ],
    correct: 2,
    points: 10
  },
  {
    id: 3,
    question: "How many hours of sleep are recommended for adults per night?",
    icon: "",
    options: [
      "4-5 hours",
      "6-7 hours",
      "7-9 hours",
      "10-12 hours"
    ],
    correct: 2,
    points: 10
  }
];

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleAnswer(-1);
    }
  }, [timeLeft]);

  const handleAnswer = (selectedIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;
    
    setSelectedOption(selectedIndex);
    setShowFeedback(true);
    
    if (isCorrect) {
      setScore(score + currentQuestion.points);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setShowFeedback(false);
        setTimeLeft(30);
      } else {
        navigation.navigate('Result', {
          score,
          totalQuestions: questions.length,
        });
      }
    }, 1500);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const getBackgroundColors = () => {
    return ['#8B5CF6', '#7C3AED'];
  };

  return (
    <LinearGradient
      colors={getBackgroundColors()}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <Animated.View 
              style={[styles.progressFill, { width: `${progress}%` }]}
            />
          </View>
          <Text style={styles.questionCounter}>
            {currentQuestionIndex + 1}/{questions.length}
          </Text>
        </View>

        <View style={styles.timerContainer}>
          <Ionicons name="timer-outline" size={24} color="white" />
          <Text style={styles.timerText}>{timeLeft}s</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View 
          entering={FadeInDown.duration(500)}
          exiting={FadeOutUp.duration(500)}
          style={styles.questionContainer}
        >
          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>

          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <Animated.View
                key={index}
                entering={FadeIn.delay(index * 200)}
              >
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    selectedOption === index && styles.selectedOption,
                    showFeedback && index === currentQuestion.correct && styles.correctOption,
                    showFeedback && selectedOption === index && 
                    index !== currentQuestion.correct && styles.wrongOption,
                  ]}
                  onPress={() => !showFeedback && handleAnswer(index)}
                  disabled={showFeedback}
                >
                  <Text style={[
                    styles.optionText,
                    (showFeedback && (index === currentQuestion.correct || 
                    selectedOption === index)) && styles.selectedOptionText
                  ]}>
                    {option}
                  </Text>
                  {showFeedback && index === currentQuestion.correct && (
                    <Animated.View entering={BounceIn}>
                      <Ionicons name="checkmark-circle" size={24} color="white" />
                    </Animated.View>
                  )}
                  {showFeedback && selectedOption === index && 
                   index !== currentQuestion.correct && (
                    <Animated.View entering={BounceIn}>
                      <Ionicons name="close-circle" size={24} color="white" />
                    </Animated.View>
                  )}
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.scoreContainer}>
          <Ionicons name="trophy-outline" size={24} color="white" />
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  progressContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  questionCounter: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  selectedOption: {
    backgroundColor: '#8B5CF6',
    borderColor: '#7C3AED',
  },
  correctOption: {
    backgroundColor: '#4CAF50',
    borderColor: '#45A049',
  },
  wrongOption: {
    backgroundColor: '#F44336',
    borderColor: '#E53935',
  },
  optionText: {
    fontSize: 16,
    color: '#4B5563',
    flex: 1,
  },
  selectedOptionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    paddingBottom: 40,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 15,
  },
  scoreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default QuizScreen;
