import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import React from "react";

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, index) => (
        <Pressable key={index} style={({ pressed }) => [styles.task, pressed && styles.pressedTask]}>
          <View style={[styles.container]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // task: {
  //   padding: 10,
  //   borderBottomWidth: 1,
  //   borderColor: "#ccc",
  // },
  // completed: {
  //   backgroundColor: "#e0e0e0",
  // },
  // taskText: {
  //   fontSize: 16,
  // },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  task: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  pressedTask: {
    opacity: 0.7,
  },
  taskContainer: {
    padding: 15,
  },
  taskText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  }
});

export default ToDoList;
