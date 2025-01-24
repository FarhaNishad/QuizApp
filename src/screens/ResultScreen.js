import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const ResultScreen = ({ route, navigation }) => {
  const { points, isCorrect, currentQuestion, totalQuestions } = route.params;

  return (
    <LinearGradient
      colors={['#8B5CF6', '#7C3AED']}
      style={styles.container}
    >
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Nice Work</Text>

      <View style={styles.checkmarkContainer}>
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
      </View>

      <View style={styles.starsContainer}>
        <Text style={[styles.star, styles.starFilled]}>⭐</Text>
        <Text style={[styles.star, styles.starFilled]}>⭐</Text>
        <Text style={[styles.star, styles.starEmpty]}>⭐</Text>
      </View>

      <Text style={styles.pointsText}>
        You Earned {points} pts
      </Text>

      <TouchableOpacity
        style={[styles.button, styles.nextButton]}
        onPress={() => {
          if (currentQuestion < totalQuestions) {
            navigation.navigate('Quiz');
          } else {
            navigation.navigate('Home');
          }
        }}
      >
        <Text style={styles.buttonText}>
          {currentQuestion < totalQuestions ? 'Next Stage' : 'Finish Quiz'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.playAgainButton]}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  closeButtonText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  checkmarkContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#FFA07A',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkmark: {
    width: 70,
    height: 70,
    backgroundColor: '#FFA07A',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkmarkText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  starFilled: {
    opacity: 1,
  },
  starEmpty: {
    opacity: 0.3,
  },
  pointsText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: '#FFA07A',
  },
  playAgainButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
