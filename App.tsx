import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";

import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    { id: string; text: string }[]
  >([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals: { id: string; text: string }[]) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
