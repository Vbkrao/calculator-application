import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Animated } from "react-native";

export default function CalculatorApp() {
  const [input, setInput] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        const result = eval(input).toString(); // Evaluate the expression
        setInput(result);
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "DEL") {
      setInput(input.slice(0, -1)); // Remove the last character
    } else {
      setInput(input + value); // Append character
    }
  };

  return (
    <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.display}>
        <TextInput
          style={styles.displayTextInput}
          value={input}
          onChangeText={(text) => setInput(text)} // Allow manual editing
          placeholder="0"
          keyboardType="numeric"
          placeholderTextColor="#ddd"
        />
      </View>

      {/* Buttons Section */}
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.specialButton]} onPress={() => handlePress("C")}>
            <Text style={styles.specialText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.specialButton]} onPress={() => handlePress("DEL")}>
            <Text style={styles.specialText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("/")}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("*")}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          {["7", "8", "9", "-"].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {["4", "5", "6", "+"].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {["1", "2", "3", "="].map((value) => (
            <TouchableOpacity key={value} style={[styles.button, value === "=" ? styles.equalsButton : null]} onPress={() => handlePress(value)}>
              <Text style={value === "=" ? [styles.buttonText, styles.equalsText] : styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(".")}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Bala</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    justifyContent: "space-between",
  },
  display: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    backgroundColor: "#0d47a1",
  },
  displayTextInput: {
    fontSize: 36,
    color: "#fff",
    textAlign: "right",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  buttons: {
    flex: 3,
    padding: 10,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: "#2196f3",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 8,
    elevation: 3, // Adds shadow on Android
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  specialButton: {
    backgroundColor: "#ffeb3b",
  },
  specialText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  equalsButton: {
    backgroundColor: "#4caf50",
  },
  equalsText: {
    color: "#fff",
  },
  footer: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#0d47a1",
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
  },
});
