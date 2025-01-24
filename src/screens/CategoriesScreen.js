import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const categories = [
  {
    id: 1,
    title: 'Nutrition',
    icon: 'food-apple',
    description: 'Test your knowledge about healthy eating and dietary guidelines',
    color: ['#FF6B6B', '#FF8E8E'],
  },
  {
    id: 2,
    title: 'Physical Health',
    icon: 'run',
    description: 'Questions about exercise, fitness, and body wellness',
    color: ['#4ECDC4', '#45B7AF'],
  },
  {
    id: 3,
    title: 'Mental Health',
    icon: 'brain',
    description: 'Learn about mental wellness and emotional well-being',
    color: ['#96C93D', '#7DAB2E'],
  },
  {
    id: 4,
    title: 'Hygiene',
    icon: 'hand-wash',
    description: 'Test your knowledge about personal hygiene and cleanliness',
    color: ['#5C6BC0', '#3F51B5'],
  },
];

const CategoryCard = ({ category, index, onPress, animValue }) => {
  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50 * (index + 1), 0],
  });

  return (
    <Animated.View
      style={[
        styles.cardContainer,
        {
          opacity: animValue,
          transform: [{ translateY }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.card}
        onPress={() => onPress(category)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={category.color}
          style={styles.cardGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <MaterialCommunityIcons name={category.icon} size={40} color="#fff" />
          <Text style={styles.cardTitle}>{category.title}</Text>
          <Text style={styles.cardDescription}>{category.description}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const CategoriesScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleCategoryPress = (category) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('Levels', { category: category.title });
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <Text style={styles.headerSubtitle}>Choose your quiz category</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            index={index}
            onPress={handleCategoryPress}
            animValue={fadeAnim}
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
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFD700',
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardGradient: {
    padding: 20,
    borderRadius: 15,
    minHeight: 150,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
});

export default CategoriesScreen;
