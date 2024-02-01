import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
}
const GoalInput = (props: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});

export default GoalInput;
