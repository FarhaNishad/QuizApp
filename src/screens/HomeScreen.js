import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.9);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleStartPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate('Categories');
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.header}>
          <MaterialCommunityIcons name="brain" size={60} color="#FFD700" />
          <Text style={styles.title}>QuizzyCure</Text>
          <Text style={styles.subtitle}>Test Your Knowledge!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartPress}
            activeOpacity={0.7}
          >
            <LinearGradient
              colors={['#FFD700', '#FFA500']}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonText}>Start Quiz</Text>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFD700',
    marginTop: 10,
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  startButton: {
    width: '80%',
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default HomeScreen;
