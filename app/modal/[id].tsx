import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const local = useLocalSearchParams();
  console.log(local);
  return (
    <View style={s.container}>
      <Text>Modal screen</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
