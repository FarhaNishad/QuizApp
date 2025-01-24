import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const ResultScreen = ({ route, navigation }) => {
  const { score, totalQuestions, categoryId, levelId } = route.params;
  const percentage = (score / (totalQuestions * 30)) * 100;
  
  const getResultConfig = () => {
    if (percentage >= 80) {
      return {
        title: 'Excellent!',
        message: 'You are a health expert!',
        icon: 'trophy',
        colors: ['#4CAF50', '#45A049'],
        animation: require('../assets/animations/celebration.json')
      };
    } else if (percentage >= 60) {
      return {
        title: 'Good Job!',
        message: 'Keep learning and improving!',
        icon: 'star',
        colors: ['#FFA000', '#FF8F00'],
        animation: require('../assets/animations/good-job.json')
      };
    } else {
      return {
        title: 'Keep Practicing!',
        message: 'Try again to improve your score!',
        icon: 'heart',
        colors: ['#8B5CF6', '#7C3AED'],
        animation: require('../assets/animations/try-again.json')
      };
    }
  };

  const config = getResultConfig();

  return (
    <LinearGradient
      colors={config.colors}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.navigate('Categories')}
        >
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Animated.View 
          entering={ZoomIn.delay(200)}
          style={styles.iconContainer}
        >
          <LottieView
            source={config.animation}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        </Animated.View>

        <Animated.View 
          entering={FadeInDown.delay(400)}
          style={styles.resultContainer}
        >
          <Text style={styles.title}>{config.title}</Text>
          <Text style={styles.message}>{config.message}</Text>

          <View style={styles.scoreCard}>
            <View style={styles.scoreItem}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              <Text style={styles.scoreLabel}>Score</Text>
              <Text style={styles.scoreValue}>{score}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.scoreItem}>
              <Ionicons name="trophy" size={24} color="#FFA000" />
              <Text style={styles.scoreLabel}>Accuracy</Text>
              <Text style={styles.scoreValue}>{percentage.toFixed(0)}%</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Ionicons name="help-circle-outline" size={20} color="#6B7280" />
              <Text style={styles.statText}>
                Total Questions: {totalQuestions}
              </Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={20} color="#6B7280" />
              <Text style={styles.statText}>
                Time Taken: {Math.floor(totalQuestions * 30 / 60)}:{(totalQuestions * 30 % 60).toString().padStart(2, '0')}
              </Text>
            </View>
          </View>
        </Animated.View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.retryButton]}
            onPress={() => navigation.navigate('Quiz', {
              categoryId,
              levelId,
            })}
          >
            <Ionicons name="reload" size={24} color="#7C3AED" />
            <Text style={[styles.buttonText, styles.retryText]}>Try Again</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.nextButton]}
            onPress={() => navigation.navigate('Categories')}
          >
            <Text style={[styles.buttonText, styles.nextText]}>Next Quiz</Text>
            <Ionicons name="arrow-forward" size={24} color="white" />
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  closeButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  animation: {
    width: 200,
    height: 200,
  },
  resultContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  scoreCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F9FAFB',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  scoreItem: {
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#E5E7EB',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 4,
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  statsContainer: {
    gap: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 30,
    paddingHorizontal: 20,
    width: '100%',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 15,
    gap: 8,
  },
  retryButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#7C3AED',
  },
  nextButton: {
    backgroundColor: '#7C3AED',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  retryText: {
    color: '#7C3AED',
  },
  nextText: {
    color: 'white',
  },
});

export default ResultScreen;
