import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { quizData } from '../data/quizData';

const difficultyConfig = {
  easy: {
    icon: 'star-outline',
    colors: ['#4CAF50', '#45A049'],
    subtitle: 'Perfect for beginners',
  },
  moderate: {
    icon: 'star-half',
    colors: ['#FFA000', '#FF8F00'],
    subtitle: 'For intermediate learners',
  },
  hard: {
    icon: 'star',
    colors: ['#F44336', '#E53935'],
    subtitle: 'Challenge yourself',
  },
};

const LevelCard = ({ level, levelKey, onPress, index }) => {
  const config = difficultyConfig[levelKey];
  
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 200).springify()}
      style={styles.levelCardContainer}
    >
      <TouchableOpacity
        style={styles.levelCard}
        onPress={onPress}
      >
        <LinearGradient
          colors={config.colors}
          style={styles.levelGradient}
        >
          <View style={styles.levelHeader}>
            <Ionicons name={config.icon} size={32} color="white" />
            <View style={styles.levelInfo}>
              <Text style={styles.levelName}>{level.name}</Text>
              <Text style={styles.levelSubtitle}>{config.subtitle}</Text>
            </View>
          </View>

          <View style={styles.levelStats}>
            <View style={styles.statItem}>
              <Ionicons name="help-circle-outline" size={16} color="white" />
              <Text style={styles.statText}>
                {level.questions.length} Questions
              </Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="trophy-outline" size={16} color="white" />
              <Text style={styles.statText}>
                {level.questions[0].points} pts each
              </Text>
            </View>
          </View>

          <View style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Quiz</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const LevelsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const category = quizData[categoryId];
  const levels = Object.entries(category.levels);

  return (
    <LinearGradient
      colors={['#8B5CF6', '#7C3AED']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.categoryIcon}>{category.icon}</Text>
          <Text style={styles.title}>{category.name}</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Select Difficulty Level</Text>

      <ScrollView 
        contentContainerStyle={styles.levelsContainer}
        showsVerticalScrollIndicator={false}
      >
        {levels.map(([key, level], index) => (
          <LevelCard
            key={key}
            level={level}
            levelKey={key}
            index={index}
            onPress={() => navigation.navigate('Quiz', {
              categoryId,
              levelId: key,
              questions: level.questions,
            })}
          />
        ))}
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  categoryIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 20,
  },
  levelsContainer: {
    padding: 20,
  },
  levelCardContainer: {
    marginBottom: 20,
  },
  levelCard: {
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  levelGradient: {
    padding: 20,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  levelInfo: {
    marginLeft: 12,
  },
  levelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  levelSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  levelStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 6,
    color: 'white',
    fontSize: 14,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 10,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default LevelsScreen;
