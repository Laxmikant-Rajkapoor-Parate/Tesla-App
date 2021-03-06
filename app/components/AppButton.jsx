import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppButton = ({ color, bgColor, title, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: bgColor }, style]}
    >
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: "90%",
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
