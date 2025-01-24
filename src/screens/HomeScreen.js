import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#8B5CF6', '#7C3AED']}
      style={styles.container}
    >
      <View style={styles.questionMarksContainer}>
        <Text style={[styles.questionMark, styles.questionMarkLeft]}>?</Text>
        <Text style={[styles.questionMark, styles.questionMarkCenter]}>?</Text>
        <Text style={[styles.questionMark, styles.questionMarkRight]}>?</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.title}>Interesting QUIZ{'\n'}Awaits You</Text>
        <Text style={styles.subtitle}>
          Test your knowledge in nutrition,{'\n'}physical health, mental health,{'\n'}and hygiene
        </Text>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={[styles.dot, styles.dotInactive]} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Categories')}
      >
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionMarksContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  questionMark: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.9,
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  questionMarkLeft: {
    color: '#FFB6C1',
    transform: [{rotate: '-15deg'}],
  },
  questionMarkCenter: {
    color: '#FFA07A',
    fontSize: 70,
    marginHorizontal: 20,
  },
  questionMarkRight: {
    color: '#E6E6FA',
    transform: [{rotate: '15deg'}],
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    width: width * 0.85,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A148C',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#FFA07A',
  },
  dotInactive: {
    backgroundColor: '#E0E0E0',
  },
  startButton: {
    backgroundColor: '#FFA07A',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  arrowIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
